import { Link } from 'react-router-dom'

export default function Accueil() {
  return (
    <section className="page">
      <h1>Bonjour, je suis Christian Francois</h1>
      <p>Bienvenue sur mon portfolio. Voici mes projets, apprentissages et idées en cours.</p>

      <div className="projects">
        <article className="project">
          <h2>Mémoire sur l’IoT</h2>
          <p>Travail de recherche sur l’Internet des objets.</p>
        </article>
        <article className="project">
          <h2>Design web responsive</h2>
          <p>J’apprends le responsive design avec freeCodeCamp.</p>
        </article>
        <article className="project">
          <h2>Cybersécurité</h2>
          <p>Je me forme sur la plateforme pwn.college.</p>
        </article>
        <article className="project">
          <h2>Application mobile coopérative</h2>
          <p>Je développe une application en ligne pour encourager l’entraide communautaire.</p>
        </article>
      </div>
      <Link className="button" to="/contact">Me contacter</Link>
    </section>
  )
}