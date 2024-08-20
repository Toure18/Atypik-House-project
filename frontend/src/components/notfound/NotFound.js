// src/components/notfound/NotFound.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h3" gutterBottom>
        Page Non Trouvée
      </Typography>
      <Typography variant="body1" paragraph>
        La page que vous recherchez n'existe pas.
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate('/')}>
        Aller à la Page d'Accueil
      </Button>
    </div>
  );
};

export default NotFound;
