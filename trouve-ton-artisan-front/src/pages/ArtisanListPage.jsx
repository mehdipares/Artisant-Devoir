import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ArtisanListPage() {
  const { categorieId, specialiteId } = useParams();
  const [artisans, setArtisans] = useState([]);
  const [specialites, setSpecialites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = 'https://artisant-devoir.onrender.com/api/artisans';
        if (specialiteId) {
          url = `https://artisant-devoir.onrender.com/api/artisans/by-specialite/${specialiteId}`;
        } else if (categorieId) {
          url = `https://artisant-devoir.onrender.com/api/artisans/by-category/${categorieId}`;
        }
        const res = await axios.get(url);
        setArtisans(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [categorieId, specialiteId]);

  useEffect(() => {
    const targetCategorieId = categorieId || (specialiteId && artisans[0]?.Specialite?.categorieId);

    if (targetCategorieId) {
      axios.get('https://artisant-devoir.onrender.com/api/specialites')
        .then(res => {
          const filtered = res.data.filter(s => s.categorieId == targetCategorieId);
          setSpecialites(filtered);
        })
        .catch(err => console.error(err));
    } else {
      setSpecialites([]);
    }
  }, [categorieId, specialiteId, artisans]);

  // ✅ Fonction pour afficher les étoiles
  function renderStars(note) {
    const rounded = Math.round(note || 0);
    return '⭐'.repeat(rounded) + '☆'.repeat(5 - rounded);
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Liste des Artisans</h1>

      {specialites.length > 0 && artisans.length > 0 && (
        <>
          <h2>Spécialités</h2>
          <div className="mb-4">
            <Link
              to={`/artisans/by-category/${artisans[0].Specialite?.categorieId || categorieId}`}
              className="btn btn-outline-secondary btn-sm me-2 mb-2"
            >
              Tous
            </Link>
            {specialites.map(s => (
              <Link
                key={s.id}
                to={`/artisans/by-specialite/${s.id}`}
                className="btn btn-outline-primary btn-sm me-2 mb-2"
              >
                {s.nom}
              </Link>
            ))}
          </div>
        </>
      )}

      <div className="row">
        {artisans.map(artisan => (
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
