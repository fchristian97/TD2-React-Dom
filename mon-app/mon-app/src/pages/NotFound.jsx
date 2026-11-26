import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section>
      <p className="kicker">Erreur 404</p>
      <h1>Page introuvable Erreur 404</h1>
      <p className="lead">
        L'adresse demandée n'existe pas ou a été déplacée.
      </p>
      <Link to="/" className="button">Retour à l'accueil</Link>
    </section>
  );
}
