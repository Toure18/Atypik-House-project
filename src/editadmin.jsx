import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const EditAccount = ({ userData }) => {
  const { id } = useParams(); // Récupère l'ID de l'utilisateur depuis l'URL

  // Initialiser l'état avec les données de l'utilisateur existant
  const [user, setUser] = useState({
    firstName: userData?.firstName || '',
    lastName: userData?.lastName || '',
    email: userData?.email || '',
  });

  useEffect(() => {
    
  }, [id]);

  const handleSave = () => {
    console.log('Compte modifié', user);
    
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

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
          value={user.firstName}
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
          value={user.lastName}
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
          value={user.email}
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
