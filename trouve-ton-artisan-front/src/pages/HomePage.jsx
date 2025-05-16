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

  // ✅ Fonction pour afficher les étoiles en fonction de la note
  function renderStars(note) {
    const rounded = Math.round(note || 0);
    return '⭐'.repeat(rounded) + '☆'.repeat(5 - rounded);
  }

  return (
    // ✅ Ancre pour le lien d’évitement
    <div id="main-content" className="container mt-5">

      {/* ✅ Bloc explicatif pour guider l’utilisateur */}
      <div className="alert alert-info">
        <h2>Comment trouver un artisan ?</h2>

        <h5>Étape 1 - Choisissez la catégorie d'artisan dans le menu</h5>
        <p>
          Dans le menu en haut de la page, choisissez la catégorie d’artisanat (Bâtiment, Services, etc.) 
          pour filtrer les artisans spécialisés.
        </p>

        <h5>Étape 2 - Choisissez un artisan</h5>
        <p>
          Sélectionnez l’artisan qui vous plaît le plus en consultant sa fiche (avis, spécialité, localisation).
        </p>

        <h5>Étape 3 - Contactez-le avec le formulaire</h5>
        <p>
          Cliquez sur le profil de l’artisan et utilisez le formulaire de contact pour lui envoyer votre demande.
        </p>

        <h5>Étape 4 - Recevez une réponse sous 48h</h5>
        <p>
          Une fois votre message envoyé, l’artisan s’engage à vous répondre dans les 48 heures.
        </p>
      </div>

      {/* ✅ Titre du Top 3 */}
      <h1 className="text-center mb-4">Top 3 Artisans du Mois</h1>

      {/* ✅ Affichage des artisans en cartes responsives */}
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

                {/* ✅ Lien vers la fiche de l’artisan */}
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
