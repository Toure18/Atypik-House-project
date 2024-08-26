// src/components/EditAccount.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UsersService from './services/usersService';
import { Box, Typography, TextField, Button } from '@mui/material';

const EditAccount = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    accountType: '' // Ajout du champ accountType pour les admins
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await UsersService.getUser(id);
        setUser(userData);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des données utilisateur:', error);
        setError('Erreur lors de la récupération des données utilisateur.');
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  const handleSave = async () => {
    try {
      console.log('Compte modifié', user);
      navigate('/AdminList');
    } catch (error) {
      console.error('Erreur lors de la sauvegarde des modifications:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  if (loading) {
    return <Typography variant="h6">Chargement...</Typography>;
  }

  if (error) {
    return <Typography variant="h6">{error}</Typography>;
  }

  return (
    <main className="main-container">
      <Box sx={{ p: 3, backgroundColor: '#D87C49' }}>
        <Typography variant="h4" gutterBottom>
          Modifier le Compte
        </Typography>
        <TextField
          label="Prénom"
          variant="outlined"
          fullWidth
          margin="normal"
          name="firstName"
          value={user[0].firstname || ''}
          onChange={handleChange}
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
          label="Nom"
          variant="outlined"
          fullWidth
          margin="normal"
          name="lastName"
          value={user[0].lastname || ''}
          onChange={handleChange}
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
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          name="email"
          value={user[0].email || ''}
          onChange={handleChange}
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
          label="Type de compte"
          variant="outlined"
          fullWidth
          margin="normal"
          name="accountType"
          value={user[0].accountType || ''}
          onChange={handleChange}
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
          sx={{ mt: 2 }}
          onClick={handleSave}
        >
          Enregistrer les Modifications
        </Button>
      </Box>
    </main>
  );
};

export default EditAccount;
