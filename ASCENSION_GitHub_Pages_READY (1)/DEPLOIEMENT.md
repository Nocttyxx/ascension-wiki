# Déploiement GitHub Pages — Guide détaillé

## 1. Créer le dépôt

Crée un dépôt **public** nommé `ascension-wiki`. Ce nom est recommandé parce que la page 404 est déjà configurée pour l’adresse `/ascension-wiki/`.

## 2. Envoyer les fichiers

Envoie à la racine du dépôt :

- `.github/`
- `scripts/`
- `site/`
- `.gitignore`
- `README.md`
- `DEPLOIEMENT.md`

Le fichier d’entrée `site/index.html` est déjà présent.

## 3. Activer Pages

Dans le dépôt GitHub :

1. `Settings`
2. `Pages`
3. `Build and deployment`
4. `Source: GitHub Actions`

Le workflow fourni se charge ensuite de vérifier et publier le site.

## 4. Vérifier le résultat

Le workflow contrôle automatiquement que les fichiers locaux référencés par les pages HTML et CSS existent. En cas de problème, ouvre l’onglet `Actions`, puis le déploiement rouge pour voir le fichier manquant.

## 5. Adresse du site

Avec le dépôt `ascension-wiki`, l’adresse prend cette forme :

`https://TON-PSEUDO.github.io/ascension-wiki/`

## 6. Domaine personnalisé facultatif

Ajoute le domaine dans `Settings → Pages → Custom domain`. GitHub indique ensuite les enregistrements DNS nécessaires. Ne crée pas manuellement un fichier `CNAME` avant d’avoir choisi le domaine.

## 7. Mettre le contenu à jour

Toute modification envoyée sur la branche `main` relance automatiquement le déploiement.
