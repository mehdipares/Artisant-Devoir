import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ArtisanDetailPage() {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);

  // ✅ Récupère les infos de l'artisan à l'ouverture de la page
  useEffect(() => {
    axios.get(`http://localhost:5000/api/artisans/${id}`)
      .then(res => setArtisan(res.data))
      .catch(err => console.error(err));
  }, [id]);

  // ✅ Affiche les étoiles selon la note
  function renderStars(note) {
    const rounded = Math.round(note || 0);
    return '⭐'.repeat(rounded) + '☆'.repeat(5 - rounded);
  }

  if (!artisan) {
    return <div className="container mt-5">Chargement...</div>;
  }

  return (
    // ✅ Ancre principale pour le lien d’évitement
    <div id="main-content" className="container mt-5">

      {/* ✅ Carte de présentation de l’artisan */}
      <div className="card shadow-sm text-center p-4">

        {/* ✅ Affiche la photo ou un avatar par défaut */}
        <img
          src={artisan.photo || '/default-avatar.png'}
          alt="Photo de l'artisan"
          className="img-fluid rounded-circle mb-3"
          style={{ width: '150px', height: '150px', objectFit: 'cover', margin: '0 auto' }}
        />

        <div className="card-body">
          <h1 className="card-title">{artisan.nom}</h1>
          <p><strong>Spécialité :</strong> {artisan.Specialite?.nom}</p>
          <p><strong>Note :</strong> {artisan.note ? renderStars(artisan.note) : 'Non noté'}</p>
          <p><strong>Ville :</strong> {artisan.ville ?? 'Non renseignée'}</p>
          <p><strong>À propos :</strong> {artisan.a_propos ?? 'Non renseigné'}</p>
          <p><strong>Email :</strong> {artisan.email ?? 'Non renseigné'}</p>
          <p>
            <strong>Site web :</strong> {artisan.site_web
              ? <a href={artisan.site_web} target="_blank" rel="noreferrer">{artisan.site_web}</a>
              : 'Non renseigné'}
          </p>
        </div>
      </div>

      {/* ✅ Formulaire de contact accessible */}
      <div className="mt-5 p-4 border rounded bg-light">
        <h2 className="mb-4">Formulaire de contact</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nom</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Votre nom"
              aria-required="true" // ✅ Marque comme requis
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Votre email"
              aria-required="true" // ✅ Marque comme requis
            />
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">Objet</label>
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder="Objet de votre message"
              aria-required="true" // ✅ Marque comme requis
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              className="form-control"
              id="message"
              rows="5"
              placeholder="Votre message"
              aria-required="true" // ✅ Marque comme requis
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">Envoyer</button>
        </form>
      </div>
    </div>
  );
}
