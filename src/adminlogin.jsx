import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AuthService from './services/authService';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const userData = await AuthService.login(email, password);

      if (userData && userData.access_token) {
        console.log('Connexion réussie');
        navigate('/proprietes');
      } else {
        console.log('Échec de la connexion');
        alert('Email ou mot de passe incorrect');
      }
    } catch (error) {
      console.log('Erreur lors de la connexion:', error);
      alert('Échec de la connexion: Email ou mot de passe incorrect');
    }
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh',
        width: '100vw',
      }}
    >
      <Box 
        sx={{ 
          width: '100%', 
          maxWidth: 400, 
          backgroundColor: '#D87C49', 
          padding: 4, 
          borderRadius: 2, 
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)'
        }}
      >
        <Typography variant="h4" gutterBottom align="center" sx={{ color: '#fff' }}>
          Connexion Admin
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            input: { color: '#fff' },
            label: { color: '#fff' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#fff',
              },
              '&:hover fieldset': {
                borderColor: '#fff',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#fff',
              },
            },
            '& .MuiInputLabel-root': {
              color: '#fff',
            },
            '& .MuiOutlinedInput-input': {
              color: '#fff',
            },
          }}
        />
        <TextField
          label="Mot de passe"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            input: { color: '#fff' },
            label: { color: '#fff' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#fff',
              },
              '&:hover fieldset': {
                borderColor: '#fff',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#fff',
              },
            },
            '& .MuiInputLabel-root': {
              color: '#fff',
            },
            '& .MuiOutlinedInput-input': {
              color: '#fff',
            },
          }}
        />
        <Button 
          variant="contained" 
          color="primary" 
          fullWidth 
          sx={{ mt: 2, backgroundColor: '#fff', color: '#D87C49' }} 
          onClick={handleLogin}
        >
          Connexion
        </Button>
      </Box>
    </Box>
  );
};

export default AdminLogin;
