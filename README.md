# Blog_app
 une application de bloc note avec express et node 

## Vous avez besoin:
- Base de données (MongoDB)
- Compte Google Console pour créer les clés d'authentification API

## Créer un fichier .env
Créez un fichier .env pour stocker vos informations d'identification. Exemple ci-dessous :

```
MONGODB_URI = l'url por accéder à votre base de donnée
GOOGLE_CLIENT_ID= VOTRE_GOOGLE_ID_HERE
GOOGLE_CLIENT_SECRET= VOTRE_GOOGLE_CLIENT_SECRET_HERE
GOOGLE_CALLBACK_URL=http://localhost:5000/google/callback
```

##Installation
Pour installer et exécuter ce projet, installez les dépendances à l'aide de npm, puis démarrez votre serveur :

```
$ npm install
$ npm start
```