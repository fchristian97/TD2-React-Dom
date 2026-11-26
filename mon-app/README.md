# TD2 — Programmation Web 2

Portfolio de Christian Francois, réalisé avec React et React Router.

## Travail demandé

- Créer une barre de navigation avec les liens Accueil, À propos et Contact.
- Créer les trois pages correspondantes.
- Utiliser `react-router-dom` pour naviguer sans recharger la page.
- Mettre en évidence la page active dans la navigation.
- Afficher une page 404 pour les adresses inconnues.
- Publier le code source sur GitHub et fournir des captures d’écran des pages.

## Ce qui a été réalisé

- La barre de navigation permet d’accéder aux pages Accueil, À propos et Contact.
- `NavLink` indique la page active. `Link` et `NavLink` naviguent sans rechargement.
- Une route de secours affiche la page 404 et permet de retourner à l’accueil.
- Le portfolio présente le mémoire sur l’Internet des objets (IoT), l’apprentissage
  du design responsive avec freeCodeCamp, l’apprentissage de la cybersécurité sur
  pwn.college, un projet d’application mobile coopérative et l’objectif de travailler
  un jour chez Google.
- La page Contact contient une adresse courriel et un numéro de téléphone.
- Le dépôt public et les captures des quatre pages sont disponibles sur GitHub.

## Captures d’écran

Les images se trouvent dans `public/screenshots/`.

### Accueil

![Capture de la page Accueil](./public/screenshots/accueil.png)

### À propos

![Capture de la page À propos](./public/screenshots/a-propos.png)

### Contact

![Capture de la page Contact](./public/screenshots/contact.png)

### Page 404

![Capture de la page 404](./public/screenshots/404.png)

## Lancer le projet

Dans un terminal ouvert dans le dossier du projet :

```bash
npm install
npm run dev
```

Ouvre ensuite l’adresse affichée par Vite.

Pour vérifier la compilation :

```bash
npm run build
```

## Comprendre les fichiers principaux

- `src/main.jsx` démarre React et place l’application dans `BrowserRouter`.
- `src/App.jsx` associe chaque adresse à une page avec `Routes` et `Route`.
- `src/components/Navbar.jsx` contient les liens de navigation.
- `src/pages/` contient les composants des pages.
- `src/index.css` contient les styles de l’application.

## Adresses des pages

| Adresse | Page |
| --- | --- |
| `/` | Accueil |
| `/a-propos` | À propos |
| `/contact` | Contact |
| Toute autre adresse | Page 404 |

## Dépôt GitHub

[td2-programmation-web2](https://github.com/fchristian97/td2-programmation-web2)
