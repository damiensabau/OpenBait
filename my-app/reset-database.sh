#!/bin/bash

# Script de réinitialisation complète de la base de données
# Usage: ./reset-database.sh

echo "🗑️  Réinitialisation de la base de données..."
echo ""

# Demander confirmation
read -p "⚠️  Cette action va SUPPRIMER toutes les données. Continuer ? (y/N) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    echo "❌ Annulé"
    exit 1
fi

echo ""
echo "1️⃣  Suppression de la base de données actuelle..."
rm -f prisma/dev.db prisma/dev.db-journal

echo "2️⃣  Réapplication des migrations..."
npx prisma migrate deploy

echo "3️⃣  Génération du client Prisma..."
npx prisma generate

echo "4️⃣  Exécution du seed..."
npx tsx prisma/seed.ts

echo ""
echo "✅ Base de données réinitialisée avec succès !"
echo ""
echo "📝 Identifiants admin:"
echo "   Email: admin@openbait.org"
echo "   Mot de passe: admin123"
echo ""
