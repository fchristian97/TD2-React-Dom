import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">Portfolio de Christian</div>
      <ul className="nav-links">
        <li><NavLink to="/" end>Accueil</NavLink></li>
        <li><NavLink to="/a-propos">À propos</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  )
}