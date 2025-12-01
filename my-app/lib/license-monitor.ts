/**
 * GitHub License Monitor
 * Détecte automatiquement les changements de licence sur les repositories GitHub
 */

interface LicenseChange {
  repoId: string;
  owner: string;
  repo: string;
  oldLicense: string | null;
  newLicense: string | null;
  commitSha: string;
  commitUrl: string;
  commitDate: Date;
  commitAuthor: string;
  changeType: 'added' | 'modified' | 'removed' | 'restrictive' | 'permissive';
  severity: 'CRITICAL' | 'WARNING' | 'STABLE';
  confidence: number;
}

interface GitHubCommit {
  sha: string;
  commit: {
    author: {
      name: string;
      date: string;
    };
    message: string;
  };
  html_url: string;
}

export class GitHubLicenseMonitor {
  private apiToken: string;
  private baseUrl = 'https://api.github.com';

  constructor(apiToken?: string) {
    this.apiToken = apiToken || process.env.GITHUB_TOKEN || '';
  }

  /**
   * Surveille un repository pour détecter les changements de licence
   */
  async monitorRepository(owner: string, repo: string, repoId: string): Promise<LicenseChange[]> {
    const changes: LicenseChange[] = [];

    try {
      // 1. Vérifier les changements sur le fichier LICENSE
      const licenseChanges = await this.checkLicenseFile(owner, repo, repoId);
      changes.push(...licenseChanges);

      // 2. Vérifier les changements dans package.json
      const packageChanges = await this.checkPackageJson(owner, repo, repoId);
      changes.push(...packageChanges);

      // 3. Vérifier les changements dans Cargo.toml (Rust)
      const cargoChanges = await this.checkCargoToml(owner, repo, repoId);
      changes.push(...cargoChanges);

    } catch (error) {
      console.error(`Error monitoring ${owner}/${repo}:`, error);
    }

    return changes;
  }

  /**
   * Vérifie l'historique du fichier LICENSE
   */
  private async checkLicenseFile(owner: string, repo: string, repoId: string): Promise<LicenseChange[]> {
    const changes: LicenseChange[] = [];
    const licensePaths = ['LICENSE', 'LICENSE.md', 'LICENSE.txt', 'COPYING', 'LICENCE'];

    for (const path of licensePaths) {
      try {
        const commits = await this.getFileCommits(owner, repo, path);
        
        if (commits.length > 1) {
          // Comparer les derniers commits pour détecter des changements
          for (let i = 0; i < Math.min(commits.length - 1, 5); i++) {
            const newerCommit = commits[i];
            const olderCommit = commits[i + 1];

            const newerContent = await this.getFileContentAtCommit(owner, repo, path, newerCommit.sha);
            const olderContent = await this.getFileContentAtCommit(owner, repo, path, olderCommit.sha);

            const newerLicense = this.detectLicense(newerContent);
            const olderLicense = this.detectLicense(olderContent);

            if (newerLicense !== olderLicense) {
              changes.push({
                repoId,
                owner,
                repo,
                oldLicense: olderLicense,
                newLicense: newerLicense,
                commitSha: newerCommit.sha,
                commitUrl: newerCommit.html_url,
                commitDate: new Date(newerCommit.commit.author.date),
                commitAuthor: newerCommit.commit.author.name,
                changeType: this.determineChangeType(olderLicense, newerLicense),
                severity: this.calculateSeverity(olderLicense, newerLicense),
                confidence: 0.95
              });
            }
          }
        }
      } catch (error) {
        // Fichier n'existe pas, continuer
        continue;
      }
    }

    return changes;
  }

  /**
   * Vérifie les changements de licence dans package.json
   */
  private async checkPackageJson(owner: string, repo: string, repoId: string): Promise<LicenseChange[]> {
    const changes: LicenseChange[] = [];

    try {
      const commits = await this.getFileCommits(owner, repo, 'package.json');
      
      if (commits.length > 1) {
        const newerCommit = commits[0];
        const olderCommit = commits[1];

        const newerContent = await this.getFileContentAtCommit(owner, repo, 'package.json', newerCommit.sha);
        const olderContent = await this.getFileContentAtCommit(owner, repo, 'package.json', olderCommit.sha);

        const newerPackage = JSON.parse(newerContent);
        const olderPackage = JSON.parse(olderContent);

        if (newerPackage.license !== olderPackage.license) {
          changes.push({
            repoId,
            owner,
            repo,
            oldLicense: olderPackage.license || null,
            newLicense: newerPackage.license || null,
            commitSha: newerCommit.sha,
            commitUrl: newerCommit.html_url,
            commitDate: new Date(newerCommit.commit.author.date),
            commitAuthor: newerCommit.commit.author.name,
            changeType: this.determineChangeType(olderPackage.license, newerPackage.license),
            severity: this.calculateSeverity(olderPackage.license, newerPackage.license),
            confidence: 0.9
          });
        }
      }
    } catch (error) {
      // Pas de package.json ou erreur de parsing
    }

    return changes;
  }

  /**
   * Vérifie les changements dans Cargo.toml
   */
  private async checkCargoToml(owner: string, repo: string, repoId: string): Promise<LicenseChange[]> {
    const changes: LicenseChange[] = [];

    try {
      const commits = await this.getFileCommits(owner, repo, 'Cargo.toml');
      
      if (commits.length > 1) {
        const newerCommit = commits[0];
        const olderCommit = commits[1];

        const newerContent = await this.getFileContentAtCommit(owner, repo, 'Cargo.toml', newerCommit.sha);
        const olderContent = await this.getFileContentAtCommit(owner, repo, 'Cargo.toml', olderCommit.sha);

        const newerLicense = this.extractLicenseFromToml(newerContent);
        const olderLicense = this.extractLicenseFromToml(olderContent);

        if (newerLicense !== olderLicense) {
          changes.push({
            repoId,
            owner,
            repo,
            oldLicense: olderLicense,
            newLicense: newerLicense,
            commitSha: newerCommit.sha,
            commitUrl: newerCommit.html_url,
            commitDate: new Date(newerCommit.commit.author.date),
            commitAuthor: newerCommit.commit.author.name,
            changeType: this.determineChangeType(olderLicense, newerLicense),
            severity: this.calculateSeverity(olderLicense, newerLicense),
            confidence: 0.9
          });
        }
      }
    } catch (error) {
      // Pas de Cargo.toml
    }

    return changes;
  }

  /**
   * Récupère les commits qui ont modifié un fichier
   */
  private async getFileCommits(owner: string, repo: string, path: string): Promise<GitHubCommit[]> {
    const url = `${this.baseUrl}/repos/${owner}/${repo}/commits?path=${path}&per_page=10`;
    
    const response = await fetch(url, {
      headers: {
        'Authorization': `token ${this.apiToken}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'OpenBait-License-Monitor'
      }
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    return response.json();
  }

  /**
   * Récupère le contenu d'un fichier à un commit spécifique
   */
  private async getFileContentAtCommit(owner: string, repo: string, path: string, sha: string): Promise<string> {
    const url = `${this.baseUrl}/repos/${owner}/${repo}/contents/${path}?ref=${sha}`;
    
    const response = await fetch(url, {
      headers: {
        'Authorization': `token ${this.apiToken}`,
        'Accept': 'application/vnd.github.v3.raw',
        'User-Agent': 'OpenBait-License-Monitor'
      }
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    return response.text();
  }

  /**
   * Détecte le type de licence à partir du contenu
   */
  private detectLicense(content: string): string | null {
    const patterns = {
      'MIT': /MIT License|Permission is hereby granted, free of charge/i,
      'Apache-2.0': /Apache License|Version 2\.0|licensed under the Apache License/i,
      'GPL-3.0': /GNU GENERAL PUBLIC LICENSE|Version 3/i,
      'GPL-2.0': /GNU GENERAL PUBLIC LICENSE|Version 2/i,
      'BSD-3-Clause': /BSD 3-Clause|Redistribution and use in source and binary forms/i,
      'BSD-2-Clause': /BSD 2-Clause/i,
      'AGPL-3.0': /GNU AFFERO GENERAL PUBLIC LICENSE/i,
      'SSPL': /Server Side Public License|SSPL/i,
      'BSL': /Business Source License|BSL/i,
      'MPL-2.0': /Mozilla Public License|Version 2\.0/i,
      'ISC': /ISC License/i,
      'Unlicense': /This is free and unencumbered software released into the public domain/i,
      'Proprietary': /All Rights Reserved|Proprietary|Commercial License/i,
    };

    for (const [license, pattern] of Object.entries(patterns)) {
      if (pattern.test(content)) {
        return license;
      }
    }

    return null;
  }

  /**
   * Extrait la licence d'un fichier Cargo.toml
   */
  private extractLicenseFromToml(content: string): string | null {
    const match = content.match(/license\s*=\s*["']([^"']+)["']/i);
    return match ? match[1] : null;
  }

  /**
   * Détermine le type de changement
   */
  private determineChangeType(oldLicense: string | null, newLicense: string | null): LicenseChange['changeType'] {
    if (!oldLicense && newLicense) return 'added';
    if (oldLicense && !newLicense) return 'removed';
    
    const restrictiveLicenses = ['SSPL', 'BSL', 'AGPL-3.0', 'GPL-3.0', 'Proprietary'];
    const permissiveLicenses = ['MIT', 'Apache-2.0', 'BSD-3-Clause', 'BSD-2-Clause', 'ISC', 'Unlicense'];

    const oldIsPermissive = oldLicense ? permissiveLicenses.includes(oldLicense) : false;
    const newIsRestrictive = newLicense ? restrictiveLicenses.includes(newLicense) : false;

    if (oldIsPermissive && newIsRestrictive) return 'restrictive';
    if (!oldIsPermissive && !newIsRestrictive) return 'permissive';
    
    return 'modified';
  }

  /**
   * Calcule la sévérité du changement
   */
  private calculateSeverity(oldLicense: string | null, newLicense: string | null): 'CRITICAL' | 'WARNING' | 'STABLE' {
    const criticalChanges = [
      'MIT -> SSPL',
      'MIT -> BSL',
      'MIT -> Proprietary',
      'Apache-2.0 -> SSPL',
      'Apache-2.0 -> BSL',
      'Apache-2.0 -> Proprietary',
      'BSD-3-Clause -> SSPL',
      'BSD-3-Clause -> BSL',
      'GPL-2.0 -> Proprietary',
      'GPL-3.0 -> Proprietary',
    ];

    const change = `${oldLicense || 'null'} -> ${newLicense || 'null'}`;
    
    if (criticalChanges.includes(change)) {
      return 'CRITICAL';
    }

    const oldPermissive = ['MIT', 'Apache-2.0', 'BSD-3-Clause', 'BSD-2-Clause', 'ISC'];
    const newRestrictive = ['SSPL', 'BSL', 'AGPL-3.0', 'Proprietary'];

    if (oldLicense && oldPermissive.includes(oldLicense) && 
        newLicense && newRestrictive.includes(newLicense)) {
      return 'CRITICAL';
    }

    if (oldLicense && newLicense && oldLicense !== newLicense) {
      return 'WARNING';
    }

    return 'STABLE';
  }

  /**
   * Récupère les infos d'un repository
   */
  async getRepositoryInfo(owner: string, repo: string) {
    const url = `${this.baseUrl}/repos/${owner}/${repo}`;
    
    const response = await fetch(url, {
      headers: {
        'Authorization': `token ${this.apiToken}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'OpenBait-License-Monitor'
      }
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();
    
    return {
      stars: data.stargazers_count,
      description: data.description,
      license: data.license?.spdx_id || null,
      url: data.html_url,
    };
  }
}
