import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function HomePage() {
  const [topArtisans, setTopArtisans] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/artisans/top')
      .then(res => setTopArtisans(res.data))
      .catch(err => console.error(err));
  }, []);

  // ✅ Fonction pour afficher les étoiles
  function renderStars(note) {
    const rounded = Math.round(note || 0);
    return '⭐'.repeat(rounded) + '☆'.repeat(5 - rounded);
  }

  return (
    
    <div className="container mt-5">
      <div className="alert alert-info">
        <h2>Comment trouver un artisan ?</h2>
        <p>
          Utilisez le menu en haut de la page pour naviguer par catégorie, 
          comme le <strong>Bâtiment</strong> ou les <strong>Services</strong>. 
          Vous pouvez aussi rechercher un artisan par son nom grâce à la barre de recherche.
        </p>
        <p>
          Une fois dans une catégorie, vous pouvez affiner votre recherche par spécialité 
          (Plombier, Électricien, etc.) et consulter les fiches détaillées des artisans.
        </p>
      </div>
      <h1 className="text-center mb-4">Top 3 Artisans du Mois</h1>

      <div className="row">
        {topArtisans.map(artisan => (
          <div key={artisan.id} className="col-12 col-md-4 mb-4 d-flex">
            <div className="card shadow-sm h-100 w-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{artisan.nom}</h5>
                <p className="card-text">Spécialité : {artisan.Specialite?.nom || 'Non renseignée'}</p>
                <p className="card-text">Note : {artisan.note ? renderStars(artisan.note) : 'Non noté'}</p>

                {/* ✅ Avatar par défaut */}
                <img
                  src="/default-avatar.png"
                  alt="Photo de l'artisan"
                  className="img-fluid rounded mb-2"
                  style={{ maxHeight: '150px', objectFit: 'cover' }}
                />

                <Link to={`/artisans/${artisan.id}`} className="btn btn-primary mt-auto">
                  Voir le profil
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
