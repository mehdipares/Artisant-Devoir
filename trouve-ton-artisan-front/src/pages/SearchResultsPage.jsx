import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchResultsPage() {
  const query = useQuery().get('q');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      axios.get(`https://artisant-devoir.onrender.com/api/search?q=${query}`)
        .then(res => setResults(res.data))
        .catch(err => console.error(err));
    }
  }, [query]);

  return (
    <div className="container mt-5">
      <h1>Résultats de recherche pour "{query}"</h1>
      <div className="row">
        {results.map(artisan => (
          <div key={artisan.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{artisan.nom}</h5>
                <p className="card-text">Spécialité : {artisan.Specialite?.nom || 'Non renseignée'}</p>
                <Link to={`/artisans/${artisan.id}`} className="btn btn-primary mt-2">
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