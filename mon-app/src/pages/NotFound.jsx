import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="page not-found">
      <h1>404</h1>
      <p>Cette page n’existe pas.</p>
      <Link className="button" to="/">Retour à l’accueil</Link>
    </section>
  )
}