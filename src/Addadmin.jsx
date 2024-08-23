import React, { useState } from 'react';
import { Box, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const AddAdminAccount = () => {
  const [admin, setAdmin] = useState({
    firstName: '',
    lastName: '',
    email: '',
    accountType: 'Administrateur',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAdmin({
      ...admin,
      [name]: value,
    });
  };

  const handleSave = () => {
    console.log('Nouveau compte administrateur', admin);
    
  };

  return (
    <main className="main-container">
      <Box sx={{ p: 3, backgroundColor: '#D87C49' }}>
        <Typography variant="h4" gutterBottom>
          Ajouter un Compte Administrateur
        </Typography>
        <TextField
          label="Prénom"
          variant="outlined"
          fullWidth
          margin="normal"
          name="firstName"
          value={admin.firstName}
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
          value={admin.lastName}
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
          value={admin.email}
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
          label="Mot de passe"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          name="password"
          value={admin.password}
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
        <FormControl fullWidth variant="outlined" margin="normal" disabled>
          <InputLabel sx={{ color: '#fff' }}>Type de Compte</InputLabel>
          <Select
            label="Type de Compte"
            name="accountType"
            value={admin.accountType}
            sx={{
              color: '#fff',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#fff',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#fff',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#fff',
              },
              '& .MuiSelect-icon': {
                color: '#fff',
              },
            }}
          >
            <MenuItem value="Administrateur">Administrateur</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleSave}
        >
          Ajouter le Compte
        </Button>
      </Box>
    </main>
  );
};

export default AddAdminAccount;
