# 🛠️ Trouve Ton Artisan

Trouve Ton Artisan est une plateforme web permettant de trouver 
facilement un artisan qualifié dans votre région en fonction de la catégorie et de la
spécialité recherchée.
Le projet a été réalisé dans le cadre de la formation Développeur Web et Mobile.

---

## 🚀 Fonctionnalités principales

- Recherche d'artisans par catégorie et spécialité
- Affichage du Top 3 des artisans du mois
- Fiches détaillées des artisans avec formulaire de contact
- Barre de recherche par nom d'artisan
- Navigation accessible (clavier, responsive, WCAG 2.1 niveau AA)
- Pages légales (mentions légales, accessibilité, cookies)
- Erreur 404 personnalisée

---

## 🧑‍💻 Technologies utilisées

### Backend
- Node.js
- Express.js
- Sequelize ORM
- MySQL

### Frontend
- React.js
- Axios
- Bootstrap 5

---

## ♿ Accessibilité & Responsiveness

- Structure HTML sémantique
- Lien d'évitement vers le contenu principal
- Focus clavier visible sur tous les éléments interactifs
- Texte lisible avec contrastes améliorés
- Responsive Mobile First avec menu burger
- Conformité WCAG 2.1 niveau AA

---

## 🔒 Sécurité mise en place

- ORM Sequelize pour prévenir les injections SQL
- Validation des données via les modèles Sequelize
- Désactivation des logs SQL en production (`logging: false`)
- API REST sécurisée avec CORS activé
- Veille sécurité effectuée avec Snyk Advisor, npm audit, OWASP Top Ten

---

## 🎨 Charte graphique

- Logo personnalisé
- Palette de couleurs respectueuse du contraste (bleu foncé / blanc)
- Police par défaut de Bootstrap (sans Graphik pour des raisons de licence)

---

## 🛠️ Installation et utilisation

### 1. Clonez le dépôt

```bash
git clone <lien-du-repo>
cd trouve-ton-artisan-api
