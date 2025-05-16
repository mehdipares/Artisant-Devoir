import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Header() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://artisant-devoir.onrender.com/api/categories')
      .then(res => setCategories(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      {/* ✅ Lien d’évitement pour les utilisateurs clavier ou lecteur d'écran */}
      <a href="#main-content" className="visually-hidden-focusable">
        Aller au contenu principal
      </a>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          
          {/* ✅ Logo + Titre cliquable */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src="/Logo.png" alt="Logo" className="logo-img" />
            Trouve Ton Artisan
          </Link>

          {/* ✅ Bouton hamburger pour le menu responsive */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            
            {/* ✅ Liste des catégories dynamiques */}
            <ul className="navbar-nav me-auto">
              {categories.map((cat) => (
                <li key={cat.id} className="nav-item">
                  <Link className="nav-link" to={`/artisans/by-category/${cat.id}`}>
                    {cat.nom}
                  </Link>
                </li>
              ))}
            </ul>

            {/* ✅ Barre de recherche avec accessibilité */}
            <form className="d-flex" onSubmit={(e) => {
              e.preventDefault();
              const query = e.target.search.value.trim();
              if (query) {
                window.location.href = `/search?q=${encodeURIComponent(query)}`;
              }
            }}>
              <input
                className="form-control me-2"
                type="search"
                name="search"
                placeholder="Rechercher un artisan"
                aria-label="Search"  // ✅ Label ARIA pour accessibilité
              />
              <button className="btn btn-outline-success" type="submit">Rechercher</button>
            </form>

          </div>
        </div>
      </nav>
    </>
  );
}
