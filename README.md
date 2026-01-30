# DentaFlow - Plateforme de Gestion Dentaire
> Application DevOps/Sécurisée pour la gestion des patients et modèles 3D dentaires
## Démarrage Rapide
# 1. Cloner le projet
git clone https://github.com/AntoineValenduc/dentaflow-devops.git
cd dentaflow-devops
# 2. Configuration environnement
cp .env.example .env # Éditer .env avec vos valeurs
# 3. Installation et lancement
docker-compose up -d
# 4. Accéder à l'application
* API : http://localhost:3000
* Documentation : http://localhost:3000/api-docs
* Base de données : localhost:5432
# 5. Structure (arborescence) du projet
```
.
├── .github/
│   └── workflows/
│       └── ci.yml
├── docs/
│   ├── swagger-definition.cjs
│   └── swagger.json
├── src/
│   └── index.js
├── tests/
│   └── unit/
│       └── example.test.js
├── .eslintrc.json
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── jest.config.js
├── package-lock.json
├── package.json
├── sonar-project.properties
└── README.md
```
# 6. Détails du pipeline DevOps
## A. Qualité de Code
* **ESLint** : Analyse statique du code  
* **Jest** : Tests unitaires avec 70%+ de couverture  
* **SonarCloud** : Analyse continue de la dette technique  

## B. Sécurité
* **Scan automatique** : `npm audit` + Dependabot  
* **Secrets managés** : Variables d'environnement sécurisées  
* **Logs d'audit** : Traçabilité complète des actions  

## C. CI/CD
* **Push sur GitHub** → Déclenchement automatique 
* **Tests & Lint** → Validation qualité
* **Multi-stage Build** : Optimisation des images  
* **Déploiement** → Staging/Production
# 7. Métriques de Qualité (KPI)
* https://sonarcloud.io/api/project_badges/measure?project=votre-username_dentaflowdevops&metric=alert_status
* https://sonarcloud.io/api/project_badges/measure?project=votre-username_dentaflowdevops&metric=coverage
* https://sonarcloud.io/api/project_badges/measure?project=votre-username_dentaflowdevops&metric=security_rating
# 8. Guide de contribution
## A. Créer une branche
* : git checkout -b feature/nouvelle-fonctionnalite
## B. Faire vos modifications
## C. Lancer les tests
* npm test
## D. Pousser
* git push origin feature/nouvelle-fonctionnalite
## E. Créer une Pull Request