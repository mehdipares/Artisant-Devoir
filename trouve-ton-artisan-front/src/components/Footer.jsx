import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-light text-center py-3 mt-5">
      <div className="container">
        <p className="mb-1">Antenne Lyon - 123 Rue des Artisans, 69000 Lyon - Contact : 04 12 34 56 78</p>
        <div>
          <Link to="/mentions-legales" className="me-3">Mentions légales</Link>
          <Link to="/donnees-personnelles" className="me-3">Données personnelles</Link>
          <Link to="/accessibilite" className="me-3">Accessibilité</Link>
          <Link to="/cookies">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}