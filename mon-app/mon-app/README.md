# Mon application React

Application React avec barre de navigation et routage (react-router-dom).

## Fonctionnalités

- Barre de navigation : Accueil, À propos, Contact
- Trois pages : `/`, `/a-propos`, `/contact`
- Navigation sans rechargement grâce à `react-router-dom`
- Lien actif mis en évidence avec `NavLink`
- Page 404 pour toute adresse inconnue

## Installation

```bash
npm install
npm run dev
```

Puis ouvrez http://localhost:5173

## Structure

```
src/
├── App.jsx                # Définition des routes
├── main.jsx               # Point d'entrée (BrowserRouter)
├── index.css              # Styles
├── components/
│   └── Navbar.jsx         # Barre de navigation
└── pages/
    ├── Accueil.jsx
    ├── APropos.jsx
    ├── Contact.jsx
    └── NotFound.jsx       # Page 404
```
