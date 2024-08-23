import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const UserProfile = () => {
  const { id } = useParams(); // Récupère l'ID de l'utilisateur depuis l'URL

  const [user, setUser] = useState({
    id,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    accountType: 'Propriétaire',
  });

  const handleSave = () => {
    console.log('Profil mis à jour', user);
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
          Profil de {user.firstName} {user.lastName}
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
            input: { color: '#ffff' },
            label: { color: '#ffff' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#ffff',
              },
              '&:hover fieldset': {
                borderColor: '#ffff',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#ffff',
              },
            },
            '& .MuiInputLabel-root': {
              color: '#ffff',
            },
            '& .MuiOutlinedInput-input': {
              color: '#ffff',
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
            input: { color: '#ffff' },
            label: { color: '#ffff' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#ffff',
              },
              '&:hover fieldset': {
                borderColor: '#ffff',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#ffff',
              },
            },
            '& .MuiInputLabel-root': {
              color: '#ffff',
            },
            '& .MuiOutlinedInput-input': {
              color: '#ffff',
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
            input: { color: '#ffff' },
            label: { color: '#ffff' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#ffff',
              },
              '&:hover fieldset': {
                borderColor: '#ffff',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#ffff',
              },
            },
            '& .MuiInputLabel-root': {
              color: '#ffff',
            },
            '& .MuiOutlinedInput-input': {
              color: '#ffff',
            },
          }}
        />
        <FormControl fullWidth variant="outlined" margin="normal" sx={{ backgroundColor: 'transparent' }}>
          <InputLabel sx={{ color: '#ffff' }}>Type de compte</InputLabel>
          <Select
            label="Type de compte"
            name="accountType"
            value={user.accountType}
            onChange={handleChange}
            sx={{
              color: '#ffff',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ffff',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ffff',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ffff',
              },
              '& .MuiSelect-icon': {
                color: '#ffff',
              },
            }}
          >
            <MenuItem value="Propriétaire">Propriétaire</MenuItem>
            <MenuItem value="Locataire">Locataire</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleSave}
        >
          Enregistrer les modifications
        </Button>
      </Box>
    </main>
  );
};

export default UserProfile;
