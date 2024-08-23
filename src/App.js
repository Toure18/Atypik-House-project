// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './includes/Navbar';
import Connexion from './connexion/connexion';
import PageAccueil from './accueil/accueil';
import Inscription from './inscription/inscription';
import Reservation from './reservation/reservation';
import Paiement from './paiement/paiement';
import Footer from './includes/Footer';
import RentalListProp from './proprietaire/list';
import RentalListPage from './listbiens/listbiens';
import AddProperty from './proprietaire/addbien'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import ContactForm from './contact/contact';
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
            <Route path="/Paymentstatus" element={<Paiement />} />
            <Route path="/biens" element={<RentalListPage />} />
            <Route path="/mesbiens" element={<RentalListProp />} />
            <Route path="/addbien" element={<AddProperty />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
