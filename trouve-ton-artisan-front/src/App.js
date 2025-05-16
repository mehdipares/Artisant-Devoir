import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArtisanListPage from './pages/ArtisanListPage';
import ArtisanDetailPage from './pages/ArtisanDetailPage';
import LegalPage from './pages/LegalPage';
import NotFoundPage from './pages/NotFoundPage';
import SearchResultsPage from './pages/SearchResultsPage';
import Header from './components/Header';
import AccessibilityPage from './pages/AccessibilityPage';
import PrivacyPage from './pages/PrivacyPage';
import CookiesPage from './pages/CookiesPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/artisans" element={<ArtisanListPage />} />
            <Route path="/artisans/by-category/:categorieId" element={<ArtisanListPage />} />
            <Route path="/artisans/:id" element={<ArtisanDetailPage />} />
            <Route path="/search" element={<SearchResultsPage />} />
            <Route path="/mentions-legales" element={<LegalPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/artisans/by-specialite/:specialiteId" element={<ArtisanListPage />} />
            <Route path="/accessibilite" element={<AccessibilityPage />} />
            <Route path="/donnees-personnelles" element={<PrivacyPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
