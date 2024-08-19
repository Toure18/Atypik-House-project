// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './includes/Navbar';
import Connexion from './components/auth/connexion';
import PageAccueil from './components/accueil/accueil';
import Inscription from './components/auth/inscription';
import Reservation from './components/reservation/reservation';
import MyReservations from './components/reservation/my-reservations';
import ProfilePage from './components/profil/profil';
import PaiementSuccess from './components/paiement/paiementSuccess';
import CollectionPage from './components/collection/collection';
import NotFound from './components/notfound/NotFound';
import Footer from './includes/Footer';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import './App.css';
import BlogPage from './components/blog/blogPage';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100vw', minHeight: '100vh' }}>
          <Navbar />
          <Routes>
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/inscription" element={<Inscription />} />
            <Route path="/" element={<PageAccueil />} />
            <Route path="/profil" element={<ProfilePage />} />
            <Route path="/reservation/:propertiesId" element={<Reservation />} />
            <Route path="/reservations" element={<MyReservations />} />
            <Route path="/PaymentSuccess" element={<PaiementSuccess />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
