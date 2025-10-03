import { PrismaClient, CaseStatus } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Début du seed de la base de données...\n');

  // 1. Créer un utilisateur admin
  const hashedPassword = await bcrypt.hash('admin123', 10);
  
  const admin = await prisma.user.upsert({
    where: { email: 'admin@openbait.org' },
    update: {},
    create: {
      email: 'admin@openbait.org',
      name: 'Admin OpenBait',
      password: hashedPassword,
      role: 'ADMIN',
      organization: 'OpenBait.org'
    }
  });

  console.log('✅ Admin créé:', admin.email);

  // 2. Ajouter les cas existants
  const cases = [
    {
      companyName: 'HashiCorp',
      productName: 'Terraform',
      category: 'Infrastructure & Cloud',
      licenseInitial: 'MPL 2.0',
      licenseFinal: 'BSL 1.1',
      changeDate: 'Août 2023',
      website: 'https://www.hashicorp.com/blog/hashicorp-adopts-business-source-license',
      description: 'HashiCorp a changé la licence de Terraform de Mozilla Public License 2.0 vers Business Source License 1.1, empêchant l\'utilisation commerciale sans accord.',
      legalAnalysis: 'La BSL 1.1 interdit l\'utilisation commerciale concurrente, affectant les fournisseurs de cloud et les services managés.',
      communityReaction: 'La communauté a créé OpenTofu, un fork open-source de Terraform, qui a rejoint la Linux Foundation.',
      sources: JSON.stringify([
        'https://www.hashicorp.com/blog/hashicorp-adopts-business-source-license',
        'https://opentofu.org/',
        'https://www.linuxfoundation.org/press/announcing-opentofu'
      ]),
      status: CaseStatus.APPROVED,
      reporterId: admin.id
    },
    {
      companyName: 'Docker',
      productName: 'Docker Desktop',
      category: 'Conteneurisation',
      licenseInitial: 'Gratuit',
      licenseFinal: 'Payant (>250 employés)',
      changeDate: 'Août 2021',
      website: 'https://www.docker.com/blog/updating-product-subscriptions/',
      description: 'Docker a rendu Docker Desktop payant pour les entreprises de plus de 250 employés ou générant plus de 10M$ de revenus.',
      legalAnalysis: 'Changement des conditions d\'utilisation avec période de transition, affectant de nombreuses grandes entreprises.',
      communityReaction: 'Beaucoup d\'entreprises ont migré vers des alternatives comme Podman ou Rancher Desktop.',
      sources: JSON.stringify([
        'https://www.docker.com/blog/updating-product-subscriptions/',
        'https://podman.io/',
        'https://rancherdesktop.io/'
      ]),
      status: CaseStatus.APPROVED,
      reporterId: admin.id
    },
    {
      companyName: 'Elastic',
      productName: 'Elasticsearch & Kibana',
      category: 'Base de données',
      licenseInitial: 'Apache 2.0',
      licenseFinal: 'SSPL',
      changeDate: 'Janvier 2021',
      website: 'https://www.elastic.co/blog/license-change-clarification',
      description: 'Elastic a changé la licence d\'Elasticsearch et Kibana vers la Server Side Public License (SSPL) pour empêcher AWS de proposer des services managés.',
      legalAnalysis: 'La SSPL impose des restrictions sur l\'offre de services cloud, ce qui a mené à un conflit avec AWS.',
      communityReaction: 'AWS a créé OpenSearch, un fork open-source maintenu par la communauté.',
      sources: JSON.stringify([
        'https://www.elastic.co/blog/license-change-clarification',
        'https://opensearch.org/',
        'https://aws.amazon.com/blogs/opensource/introducing-opensearch/'
      ]),
      status: CaseStatus.APPROVED,
      reporterId: admin.id
    },
    {
      companyName: 'Redis',
      productName: 'Redis',
      category: 'Base de données',
      licenseInitial: 'BSD 3-Clause',
      licenseFinal: 'SSPL & RSALv2',
      changeDate: 'Mars 2024',
      website: 'https://redis.com/blog/redis-adopts-dual-source-available-licensing/',
      description: 'Redis a abandonné la licence BSD pour adopter une double licence SSPL et Redis Source Available License v2.',
      legalAnalysis: 'Ce changement vise à empêcher les fournisseurs cloud de proposer Redis en tant que service sans contribuer au projet.',
      communityReaction: 'La Linux Foundation a lancé Valkey, un fork BSD de Redis, soutenu par AWS, Google Cloud et Oracle.',
      sources: JSON.stringify([
        'https://redis.com/blog/redis-adopts-dual-source-available-licensing/',
        'https://valkey.io/',
        'https://www.linuxfoundation.org/press/linux-foundation-launches-valkey'
      ]),
      status: CaseStatus.APPROVED,
      reporterId: admin.id
    },
    {
      companyName: 'MongoDB',
      productName: 'MongoDB',
      category: 'Base de données',
      licenseInitial: 'AGPL',
      licenseFinal: 'SSPL',
      changeDate: 'Octobre 2018',
      website: 'https://www.mongodb.com/licensing/server-side-public-license',
      description: 'MongoDB est passé de l\'AGPL à la Server Side Public License pour contrôler l\'utilisation commerciale de sa base de données.',
      legalAnalysis: 'La SSPL est considérée comme non-open-source par l\'OSI, limitant son utilisation dans certains contextes.',
      communityReaction: 'Le changement a causé des controverses mais n\'a pas mené à un fork majeur immédiat.',
      sources: JSON.stringify([
        'https://www.mongodb.com/licensing/server-side-public-license',
        'https://opensource.org/node/1099'
      ]),
      status: CaseStatus.APPROVED,
      reporterId: admin.id
    },
    {
      companyName: 'Sentry',
      productName: 'Sentry',
      category: 'Monitoring',
      licenseInitial: 'BSD 3-Clause',
      licenseFinal: 'BSL 1.1',
      changeDate: 'Novembre 2019',
      website: 'https://blog.sentry.io/2019/11/06/relicensing-sentry/',
      description: 'Sentry a changé sa licence de BSD vers Business Source License pour protéger son modèle économique.',
      legalAnalysis: 'La BSL permet l\'utilisation gratuite avec des restrictions sur la création de services concurrents.',
      communityReaction: 'La décision a été généralement acceptée par la communauté, avec une transition en douceur.',
      sources: JSON.stringify([
        'https://blog.sentry.io/2019/11/06/relicensing-sentry/'
      ]),
      status: CaseStatus.APPROVED,
      reporterId: admin.id
    },
    {
      companyName: 'CockroachDB',
      productName: 'CockroachDB',
      category: 'Base de données',
      licenseInitial: 'Apache 2.0',
      licenseFinal: 'BSL',
      changeDate: 'Juin 2019',
      website: 'https://www.cockroachlabs.com/blog/oss-relicensing-cockroachdb/',
      description: 'CockroachDB a changé de licence pour protéger son core business contre les fournisseurs cloud.',
      legalAnalysis: 'La BSL convertit automatiquement en Apache 2.0 après 3 ans, offrant une protection temporaire.',
      communityReaction: 'Réaction mitigée, mais compréhension du modèle économique nécessaire pour la durabilité.',
      sources: JSON.stringify([
        'https://www.cockroachlabs.com/blog/oss-relicensing-cockroachdb/'
      ]),
      status: CaseStatus.APPROVED,
      reporterId: admin.id
    },
    {
      companyName: 'Confluent',
      productName: 'Kafka (composants)',
      category: 'Infrastructure & Cloud',
      licenseInitial: 'Apache 2.0',
      licenseFinal: 'Confluent Community License',
      changeDate: 'Avril 2019',
      website: 'https://www.confluent.io/blog/license-changes-confluent-platform/',
      description: 'Confluent a changé la licence de certains composants de Kafka vers une licence propriétaire.',
      legalAnalysis: 'La Confluent Community License interdit l\'utilisation pour créer des services SaaS concurrents.',
      communityReaction: 'Controverse dans la communauté Apache Kafka, débat sur l\'open source vs modèle économique.',
      sources: JSON.stringify([
        'https://www.confluent.io/blog/license-changes-confluent-platform/'
      ]),
      status: CaseStatus.APPROVED,
      reporterId: admin.id
    },
    {
      companyName: 'Grafana Labs',
      productName: 'Grafana',
      category: 'Monitoring',
      licenseInitial: 'Apache 2.0',
      licenseFinal: 'AGPL 3.0',
      changeDate: 'Avril 2021',
      website: 'https://grafana.com/blog/2021/04/20/grafana-loki-tempo-relicensing-to-agplv3/',
      description: 'Grafana, Loki et Tempo ont changé de licence vers AGPL pour empêcher l\'utilisation sans contribution.',
      legalAnalysis: 'L\'AGPL impose le partage du code même pour les services web, protégeant contre les services cloud propriétaires.',
      communityReaction: 'Acceptation générale car Grafana Labs continue de supporter la communauté open-source.',
      sources: JSON.stringify([
        'https://grafana.com/blog/2021/04/20/grafana-loki-tempo-relicensing-to-agplv3/'
      ]),
      status: CaseStatus.APPROVED,
      reporterId: admin.id
    }
  ];

  for (const caseData of cases) {
    const createdCase = await prisma.case.create({
      data: caseData
    });
    console.log(`✅ Cas ajouté: ${createdCase.companyName} - ${createdCase.productName}`);
  }

  console.log(`\n🎉 Seed terminé! ${cases.length} cas ajoutés.`);
  console.log('\n📝 Identifiants admin:');
  console.log('   Email: admin@openbait.org');
  console.log('   Mot de passe: admin123');
  console.log('\n⚠️  Changez ce mot de passe en production!\n');
}

main()
  .catch((e) => {
    console.error('❌ Erreur lors du seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
