import { NavLink, Link } from 'react-router-dom';

const liens = [
  { to: '/', label: 'Accueil' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar__brand">ReactAppTD2</Link>
      <nav aria-label="Navigation principale">
        <ul className="navbar__links">
          {liens.map((lien) => (
            <li key={lien.to}>
              <NavLink
                to={lien.to}
                end={lien.to === '/'}
                className={({ isActive }) =>
                  isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
                }
              >
                {lien.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
