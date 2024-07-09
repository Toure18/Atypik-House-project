// App.js
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Navbar from './includes/Navbar';  
import Connexion from './connexion/connexion'; 
import Footer from './includes/Footer'; 

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <Connexion />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
