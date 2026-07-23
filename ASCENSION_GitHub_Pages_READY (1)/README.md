# ASCENSION: The Last Miracle — Wiki Officiel

Dépôt prêt pour **GitHub Pages**, avec publication automatique du site statique situé dans `site/`.

## Nom recommandé du dépôt

Crée le dépôt avec exactement ce nom :

`ascension-wiki`

L’adresse finale sera normalement :

`https://TON-PSEUDO.github.io/ascension-wiki/`

## Mise en ligne sans terminal

1. Sur GitHub, crée un nouveau dépôt public nommé `ascension-wiki`.
2. Ne coche pas l’ajout automatique d’un README, car celui-ci est déjà fourni.
3. Décompresse l’archive puis envoie **tout son contenu** à la racine du dépôt, notamment `.github`, `site`, `scripts` et `README.md`.
4. Ouvre **Settings → Pages**.
5. Dans **Build and deployment → Source**, sélectionne **GitHub Actions**.
6. Ouvre l’onglet **Actions** : le workflow « Déployer ASCENSION Wiki sur GitHub Pages » se lancera automatiquement.
7. Quand le workflow devient vert, le lien du site apparaît dans **Settings → Pages** et dans le résumé du déploiement.

## Mise à jour du wiki

Modifie uniquement les fichiers dans `site/`, puis envoie les changements sur la branche `main`. Le site sera vérifié et redéployé automatiquement.

## Contenu important

- `site/index.html` : page d’accueil
- `site/assets/ascension_logo_final.png` : logo final
- `site/assets/ascension_banner_final.png` : bannière finale
- `.github/workflows/deploy-pages.yml` : déploiement automatique
- `scripts/check_site.py` : vérification des fichiers et liens internes
- `DEPLOIEMENT.md` : guide détaillé

## Domaine personnalisé

Aucun domaine personnalisé n’est configuré. Tu peux en ajouter un plus tard dans **Settings → Pages → Custom domain**.
