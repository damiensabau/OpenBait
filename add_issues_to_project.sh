#!/bin/bash

# Script pour ajouter automatiquement toutes les issues au GitHub Project
# et les organiser dans les bonnes colonnes

REPO="damiensabau/OpenBait"
PROJECT_NUMBER=2
OWNER="damiensabau"

echo "🚀 Ajout des issues au projet GitHub..."
echo "📦 Repository: $REPO"
echo "📋 Project: #$PROJECT_NUMBER"
echo ""

# Couleurs
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${BLUE}📊 Récupération des informations du projet...${NC}"

# Méthode alternative : Ajouter les issues une par une au projet
# Note: GitHub CLI peut ajouter des issues aux projets avec la commande project

echo -e "${YELLOW}ℹ️  Pour ajouter automatiquement les issues au projet, utilisez ces commandes :${NC}"
echo ""

# Tâches DONE (issues #1-14)
echo -e "${GREEN}✅ Issues DONE à ajouter à la colonne 'Done' :${NC}"
for i in {1..14}; do
  echo "gh project item-add $PROJECT_NUMBER --owner $OWNER --url https://github.com/$REPO/issues/$i"
done
echo ""

# Tâches IN PROGRESS (issues #15-16)
echo -e "${BLUE}🔄 Issues IN PROGRESS à ajouter à la colonne 'In Progress' :${NC}"
for i in {15..16}; do
  echo "gh project item-add $PROJECT_NUMBER --owner $OWNER --url https://github.com/$REPO/issues/$i"
done
echo ""

# Tâches BACKLOG (issues #17-54)
echo -e "${YELLOW}📋 Issues BACKLOG à ajouter à la colonne 'Backlog' ou 'To Do' :${NC}"
for i in {17..54}; do
  echo "gh project item-add $PROJECT_NUMBER --owner $OWNER --url https://github.com/$REPO/issues/$i"
done
echo ""

echo "════════════════════════════════════════════════════════════════"
echo ""
echo -e "${GREEN}🎯 Voulez-vous exécuter ces commandes automatiquement ? (y/n)${NC}"
read -r response

if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
    echo ""
    echo -e "${BLUE}📥 Ajout des issues au projet...${NC}"
    
    # Ajouter toutes les issues au projet
    for i in {1..54}; do
        echo -e "${YELLOW}Ajout de l'issue #$i...${NC}"
        gh project item-add $PROJECT_NUMBER --owner $OWNER --url https://github.com/$REPO/issues/$i 2>/dev/null
        
        if [ $? -eq 0 ]; then
            echo -e "${GREEN}✓ Issue #$i ajoutée${NC}"
        else
            echo -e "${YELLOW}⚠ Issue #$i déjà dans le projet ou erreur${NC}"
        fi
    done
    
    echo ""
    echo -e "${GREEN}✅ Toutes les issues ont été ajoutées au projet !${NC}"
    echo ""
    echo "📝 Prochaines étapes manuelles :"
    echo "   1. Allez sur https://github.com/users/damiensabau/projects/2"
    echo "   2. Glissez les issues [DONE] (#1-14) dans la colonne 'Done'"
    echo "   3. Glissez les issues [IN PROGRESS] (#15-16) dans 'In Progress'"
    echo "   4. Organisez les issues [BACKLOG] (#17-54) selon vos priorités"
    echo ""
    echo "💡 Astuce : Vous pouvez filtrer par labels pour organiser plus facilement !"
else
    echo ""
    echo -e "${YELLOW}❌ Opération annulée${NC}"
    echo "Vous pouvez copier-coller les commandes ci-dessus pour les exécuter manuellement."
fi
