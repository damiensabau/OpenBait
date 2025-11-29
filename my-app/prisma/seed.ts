import 'dotenv/config';
import { PrismaClient, CaseStatus, CaseSeverity, Role, NotificationType } from '@prisma/client';
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
      alternatives: JSON.stringify([
        'OpenTofu (fork open-source)',
        'Pulumi',
        'AWS CloudFormation',
        'Ansible'
      ]),
      status: CaseStatus.APPROVED,
      severity: CaseSeverity.CRITICAL,
      reportCount: 47,
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
      alternatives: JSON.stringify([
        'Podman',
        'Rancher Desktop',
        'Colima',
        'Minikube'
      ]),
      status: CaseStatus.APPROVED,
      severity: CaseSeverity.WARNING,
      reportCount: 35,
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
      alternatives: JSON.stringify([
        'OpenSearch (fork open-source)',
        'Apache Solr',
        'Meilisearch',
        'Typesense'
      ]),
      status: CaseStatus.APPROVED,
      severity: CaseSeverity.CRITICAL,
      reportCount: 28,
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
      alternatives: JSON.stringify([
        'Valkey (fork BSD)',
        'KeyDB',
        'Dragonfly',
        'Memcached'
      ]),
      status: CaseStatus.APPROVED,
      severity: CaseSeverity.CRITICAL,
      reportCount: 52,
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
      alternatives: JSON.stringify([
        'PostgreSQL',
        'CouchDB',
        'FerretDB',
        'RavenDB'
      ]),
      status: CaseStatus.APPROVED,
      severity: CaseSeverity.WARNING,
      reportCount: 22,
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
      alternatives: JSON.stringify([
        'GlitchTip',
        'Rollbar',
        'Bugsnag',
        'Raygun'
      ]),
      status: CaseStatus.APPROVED,
      severity: CaseSeverity.STABLE,
      reportCount: 15,
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
      alternatives: JSON.stringify([
        'PostgreSQL',
        'TiDB',
        'YugabyteDB',
        'Google Spanner'
      ]),
      status: CaseStatus.APPROVED,
      severity: CaseSeverity.STABLE,
      reportCount: 8,
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
      alternatives: JSON.stringify([
        'Apache Kafka (core)',
        'Apache Pulsar',
        'RabbitMQ',
        'NATS'
      ]),
      status: CaseStatus.APPROVED,
      severity: CaseSeverity.WARNING,
      reportCount: 12,
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
      alternatives: JSON.stringify([
        'Prometheus + Alertmanager',
        'Netdata',
        'Zabbix',
        'Datadog'
      ]),
      status: CaseStatus.APPROVED,
      severity: CaseSeverity.STABLE,
      reportCount: 18,
      reporterId: admin.id
    }
  ];

  for (const caseData of cases) {
    const createdCase = await prisma.case.create({
      data: caseData
    });
    console.log(`✅ Cas ajouté: ${createdCase.companyName} - ${createdCase.productName}`);
  }

  // 3. Créer des utilisateurs supplémentaires pour les notifications
  const user1 = await prisma.user.upsert({
    where: { email: 'john.doe@example.com' },
    update: {},
    create: {
      email: 'john.doe@example.com',
      name: 'John Doe',
      password: await bcrypt.hash('password123', 10),
      role: Role.MEMBER,
      reputation: 150,
      badges: JSON.stringify(['Contributeur', 'Nouveau membre'])
    }
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'jane.smith@example.com' },
    update: {},
    create: {
      email: 'jane.smith@example.com',
      name: 'Jane Smith',
      password: await bcrypt.hash('password123', 10),
      role: Role.MODERATOR,
      reputation: 320,
      badges: JSON.stringify(['Modérateur actif', 'Expert', 'Contributeur'])
    }
  });

  console.log('✅ Utilisateurs supplémentaires créés');

  // 4. Créer des notifications d'exemple
  const notifications = [
    {
      userId: admin.id,
      type: NotificationType.BADGE_UNLOCKED,
      title: '🎉 Nouveau badge débloqué !',
      message: 'Vous avez débloqué le badge "Expert" pour votre contribution exceptionnelle',
      link: '/dashboard',
      isRead: false,
      metadata: JSON.stringify({
        badge: 'Expert',
        reason: 'Contribution exceptionnelle'
      })
    },
    {
      userId: admin.id,
      type: NotificationType.CASE_APPROVED,
      title: '✅ Cas approuvé',
      message: 'Votre signalement "HashiCorp - Terraform" a été approuvé et publié',
      link: '/database/hashicorp-terraform',
      isRead: false,
      metadata: JSON.stringify({
        caseName: 'HashiCorp - Terraform',
        approvedBy: 'Jane Smith'
      })
    },
    {
      userId: admin.id,
      type: NotificationType.UPVOTE,
      title: '👍 Votre post a reçu un vote positif',
      message: 'John Doe a aimé votre post sur les licences open-source',
      link: '/forum/post-123',
      isRead: true,
      metadata: JSON.stringify({
        postTitle: 'Discussion sur les licences open-source',
        voterName: 'John Doe'
      })
    },
    {
      userId: admin.id,
      type: NotificationType.REPLY,
      title: '💬 Nouvelle réponse à votre post',
      message: 'Jane Smith a répondu à votre post "Impact des changements de licence"',
      link: '/forum/post-456',
      isRead: false,
      metadata: JSON.stringify({
        postTitle: 'Impact des changements de licence',
        replierName: 'Jane Smith',
        preview: 'Je suis d\'accord avec votre analyse...'
      })
    },
    {
      userId: admin.id,
      type: NotificationType.REPLY,
      title: '💬 Réponse à votre commentaire',
      message: 'John Doe a répondu à votre commentaire',
      link: '/forum/post-789#comment-123',
      isRead: false,
      metadata: JSON.stringify({
        replierName: 'John Doe',
        preview: 'C\'est un excellent point de vue...'
      })
    },
    {
      userId: admin.id,
      type: NotificationType.REACTION,
      title: '❤️ Réaction à votre post',
      message: '5 personnes ont réagi à votre post avec ❤️',
      link: '/forum/post-321',
      isRead: true,
      metadata: JSON.stringify({
        emoji: '❤️',
        count: 5,
        postTitle: 'L\'avenir de l\'open source'
      })
    },
    {
      userId: admin.id,
      type: NotificationType.CASE_REJECTED,
      title: '❌ Cas rejeté',
      message: 'Votre signalement "Example Corp - Product" nécessite plus d\'informations',
      link: '/report',
      isRead: true,
      metadata: JSON.stringify({
        caseName: 'Example Corp - Product',
        reason: 'Informations insuffisantes',
        rejectedBy: 'Jane Smith'
      })
    },
    {
      userId: admin.id,
      type: NotificationType.POST_PINNED,
      title: '📌 Votre post a été épinglé',
      message: 'Un modérateur a épinglé votre post "Guide des licences open-source"',
      link: '/forum/post-999',
      isRead: false,
      metadata: JSON.stringify({
        postTitle: 'Guide des licences open-source',
        pinnedBy: 'Jane Smith',
        reason: 'Contenu de qualité exceptionnelle'
      })
    },
    // Notifications pour l'utilisateur 1
    {
      userId: user1.id,
      type: NotificationType.BADGE_UNLOCKED,
      title: '🆕 Badge "Nouveau membre" débloqué',
      message: 'Bienvenue dans la communauté OpenBait !',
      link: '/dashboard',
      isRead: false,
      metadata: JSON.stringify({
        badge: 'Nouveau membre',
        welcomeMessage: true
      })
    },
    {
      userId: user1.id,
      type: NotificationType.UPVOTE,
      title: '👍 Premier vote positif !',
      message: 'Votre commentaire a reçu son premier vote positif',
      link: '/forum/post-555',
      isRead: false,
      metadata: JSON.stringify({
        milestone: 'first_upvote'
      })
    },
    // Notifications pour l'utilisateur 2
    {
      userId: user2.id,
      type: NotificationType.BADGE_UNLOCKED,
      title: '🛡️ Badge "Modérateur actif" débloqué',
      message: 'Merci pour votre contribution à la modération !',
      link: '/dashboard',
      isRead: true,
      metadata: JSON.stringify({
        badge: 'Modérateur actif',
        actionsCount: 50
      })
    },
    {
      userId: user2.id,
      type: NotificationType.REPLY,
      title: '💬 Nouvelle réponse',
      message: 'Admin OpenBait a répondu à votre commentaire de modération',
      link: '/forum/post-888',
      isRead: false,
      metadata: JSON.stringify({
        replierName: 'Admin OpenBait',
        preview: 'Merci pour votre intervention rapide...'
      })
    }
  ];

  for (const notifData of notifications) {
    await prisma.notification.create({
      data: notifData
    });
  }

  console.log(`✅ ${notifications.length} notifications d'exemple créées`);

  console.log(`\n🎉 Seed terminé! ${cases.length} cas ajoutés.`);
  console.log('\n📝 Identifiants admin:');
  console.log('   Email: admin@openbait.org');
  console.log('   Mot de passe: admin123');
  console.log('\n📝 Autres utilisateurs:');
  console.log('   Email: john.doe@example.com');
  console.log('   Mot de passe: password123');
  console.log('\n   Email: jane.smith@example.com');
  console.log('   Mot de passe: password123');
  console.log('\n⚠️  Changez ces mots de passe en production!\n');
}

main()
  .catch((e) => {
    console.error('❌ Erreur lors du seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
