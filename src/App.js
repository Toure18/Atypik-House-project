// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './includes/Navbar';
import Connexion from './connexion/connexion';
import PageAccueil from './accueil/accueil';
import Inscription from './inscription/inscription';
import Reservation from './reservation/reservation';
import Footer from './includes/Footer';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100vw', minHeight: '100vh' }}>
          <Navbar />
          <Routes>
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/inscription" element={<Inscription />} />
            <Route path="/accueil" element={<PageAccueil />} />
            <Route path="/reservation" element={<Reservation />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
