# Projet de Portfolio

## 1. Description du projet
Ce portfolio est un site professionnel, conçu pour présenter vos créations, projets, ou compétences. Il est entièrement personnalisable et optimisé pour tous les appareils (mobile, tablette, et ordinateur).

**Fonctionnalités principales :**
- Portfolio personnalisé : Remplacez les textes et images pour refléter vos propres projets.
- Responsivité : Le site s'adapte automatiquement à tous les appareils.
- Optimisé : Chargement rapide pour une meilleure expérience utilisateur.
- Facilité de partage : Partageable via un domaine par défaut ou personnalisé.

**Technologies utilisées :**

Le projet a été construit avec les technologies suivantes :

- **React.js** : Bibliothèque JavaScript pour la création d’interfaces utilisateur.
- **Tailwind CSS** : Framework CSS utilitaire pour un design moderne et rapide.
- **JavaScript (ES6+)** : Langage de programmation utilisé pour la logique de l'application.
- **HTML5 & CSS3** : Pour la structure et le style de base.
- **Bibliothèques supplémentaires :**
  - React Router : Gestion des routes pour une navigation fluide.

## 2. Prérequis
Avant de commencer, vous aurez besoin des outils suivants :
- Un éditeur de code : Visual Studio Code (VSCode)
- Node.js installé sur votre machine (inclut npm). Téléchargez-le [ici](https://nodejs.org).
- Un compte sur une plateforme cloud gratuite (ex : Cloudinary) pour héberger vos images.

# Installation (avec le fichier ZIP fourni)

## Étapes pour installer le projet sur votre PC :

1. **Téléchargez le fichier ZIP :**
   - Vous recevrez un fichier ZIP contenant le code source du projet.

2. **Décompressez l'archive :**
   - Extrayez les fichiers ZIP dans un dossier de votre choix.
   - Sur Windows : Faites un clic droit sur le fichier ZIP et choisissez *"Extraire tout"*.
   - Sur macOS : Double-cliquez sur le fichier ZIP.
   - Sur Linux : Utilisez une commande comme :
     ```bash
     unzip nom_du_fichier.zip
     ```

3. **Accédez au dossier du projet :**
   - Ouvrez le dossier extrait avec votre éditeur de code (comme Visual Studio Code).

4. **Installez les dépendances :**
   - Ouvrez un terminal dans le dossier du projet (clic droit dans le dossier > *"Ouvrir dans le terminal"*).
   - Exécutez la commande suivante pour installer les dépendances :
     ```bash
     npm install
     ```

5. **Lancez le projet en mode développement :**
   - Une fois les dépendances installées, lancez cette commande pour démarrer le site :
     ```bash
     npm run dev
     ```
   - Ouvrez votre navigateur et visitez http://localhost:3000.

6. **Pour le mode production :**
   - Si vous voulez préparer le site pour un hébergement, générez les fichiers de production avec :
     ```bash
     npm run build
     ```
   - Ensuite, utilisez cette commande pour lancer le site :
     ```bash
     npm start
     ```

Très bien, voici une version mise à jour du point 4 en tenant compte de ces remarques :

# Mise à jour des images

Dans ce projet, les images sont stockées localement dans le dossier `public/assets`. Cette méthode de stockage est simple et pratique pour ce type de projet, car elle ne nécessite pas de solution complexe pour la gestion des images.

## Option 1 : Mise à jour des images en local

Si vous souhaitez continuer à stocker vos images localement, voici les étapes à suivre :

### Étapes :

1. **Ajoutez vos nouvelles images :**
   - Placez vos images dans le dossier `public/assets` de votre projet.
   - Assurez-vous de renommer vos fichiers de manière claire et cohérente (par exemple : `projet1-image1.webp`, `projet1-image2.webp`, etc.).

2. **Mettez à jour les chemins des images dans le fichier :** Ouvrez le fichier `src/data/projectsData.json` et remplacez les anciens chemins par les nouveaux, correspondant à vos images.

   **Exemple :**
   ```javascript
   { 
     "id": "1", 
     "title": "Projet 1",
     "images": [
       "/assets/projet1-image1.webp",
       "/assets/projet1-image2.webp",
       "/assets/projet1-image3.webp",
       "/assets/projet1-image4.webp"
     ]
   }
   ```

3. **Enregistrez les modifications.**

4. **Relancez le projet :** Si le projet est déjà lancé, redémarrez le serveur local pour voir vos changements :

   ```bash
   npm run dev
   ```

## Option 2 : Utilisation de Cloudinary (ou autre solution cloud)

Si vous avez besoin de fonctionnalités avancées (comme la gestion centralisée, le responsive, ou le recadrage), vous pouvez utiliser une solution cloud telle que Cloudinary.

### Étapes :

1. **Créez un compte Cloudinary :**
   - Rendez-vous sur Cloudinary et inscrivez-vous pour un compte gratuit.

2. **Téléchargez vos images :**
   - Connectez-vous à votre tableau de bord Cloudinary.
   - Téléchargez vos images et copiez les URLs générées par Cloudinary.

3. **Mettez à jour les chemins des images dans le fichier :** Remplacez les chemins locaux dans `src/data/projectsData.json` par les URLs générées par Cloudinary.

   **Exemple :**
   ```javascript
   {
     "id": "1",
     "title": "Projet 1",
     "images": [
       "https://res.cloudinary.com/votre-compte/image/upload/v123456789/projet1-image1.webp",
       "https://res.cloudinary.com/votre-compte/image/upload/v123456789/projet1-image2.webp",
       "https://res.cloudinary.com/votre-compte/image/upload/v123456789/projet1-image3.webp",
       "https://res.cloudinary.com/votre-compte/image/upload/v123456789/projet1-image4.webp"
     ]
   }
   ```

**Avantages de Cloudinary :**
- Gestion centralisée des images depuis le tableau de bord.
- Transformations automatiques (responsive, recadrage, effets).
- Amélioration des performances grâce au réseau de diffusion de contenu (CDN).

**Quelle option choisir ?**
- **Option 1 : Stockage local (`public/assets`)**
  - Simple et suffisant pour des projets de petite à moyenne envergure.
  - Aucune configuration externe nécessaire.
- **Option 2 : Cloudinary**
  - Idéal si vous avez besoin de flexibilité, d'automatisation des images ou d'amélioration des performances.

## 5. Mise à jour du contenu (textes et données)

Dans ce projet, les textes et les données affichés sur le site (comme les titres, descriptions, ou informations de projets) sont stockés dans un fichier de configuration appelé `src/data/projectsData.js`. Voici comment les personnaliser selon vos besoins :

---

### Étapes pour personnaliser les textes :

1. **Ouvrez le fichier de configuration :**
   - Accédez au fichier `src/data/projectsData.js` dans votre éditeur de code préféré (ex : [VSCode](https://code.visualstudio.com/)).

2. **Modifiez les informations nécessaires :**
   - Remplacez les valeurs existantes par vos propres informations. Chaque projet est défini sous forme d'objet avec un `id`, un `title`, une `description`, et une liste d'`images`.

   #### Exemple :
   ```javascript
   {
     "id": "1",
     "title": "Projet 1",
     "description": "Ce projet met en avant mes compétences en développement front-end.",
     "images": [
       "/assets/projet1-image1.webp",
       "/assets/projet1-image2.webp",
       "/assets/projet1-image3.webp"
     ]
   },
   {
     "id": "2",
     "title": "Projet 2",
     "description": "Un projet de design graphique utilisant des outils modernes.",
     "images": [
       "/assets/projet2-image1.webp",
       "/assets/projet2-image2.webp"
     ]
   }

### Sauvegardez vos modifications

3. **Enregistrez le fichier :**  
   Une fois les textes mis à jour, enregistrez le fichier.  
   - Sur Windows : Utilisez `Ctrl + S`.  
   - Sur macOS : Utilisez `Cmd + S`.

4. **Relancez le projet (si nécessaire) :**  
   Si le projet est déjà en cours d’exécution, redémarrez le serveur local pour voir vos modifications.

   ```bash
   npm run dev


## 6. Hébergement du site
Vous pouvez héberger votre site gratuitement sur des plateformes comme :
- Vercel : https://vercel.com/
- Netlify : https://www.netlify.com/

**Hébergement sur Vercel :**
1. Créez un compte sur Vercel.
2. Importez votre projet depuis votre machine locale ou GitHub.
3. Déployez votre site en un clic.

## 7. Personnalisation avancée
Pour des modifications plus poussées (ajout de nouvelles pages, fonctionnalités, etc.) :
1. Familiarisez-vous avec les fichiers du projet (structure dans `src/`).
2. Modifiez les composants React ou fichiers HTML/CSS selon vos besoins.

## 8. Dépannage
**Problèmes courants :**

**Les images ne s'affichent pas :**
- Vérifiez que les URLs d'image dans vos fichiers `src/data/xxx.json` sont correctes.

**Le site ne se lance pas localement :**
- Assurez-vous que Node.js et npm sont correctement installés.
- Essayez de supprimer `node_modules` et réinstallez les dépendances :
  ```bash
  rm -rf node_modules
  npm install
  ```

## 9. Support
Pour toute question ou problème, n'hésitez pas à me contacter :

Email : contact@vgomcreation.fr
Téléphone : +33 7 67 60 34 49