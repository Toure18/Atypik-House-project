// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './includes/Navbar';
import Connexion from './components/auth/connexion';
import Inscription from './components/auth/inscription';
import Footer from './includes/Footer';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import PrivateRoute from './components/auth/PrivateRoute';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <Routes>
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
