import React, { useState } from 'react';
import { Box, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const AddReservation = () => {
  const [reservation, setReservation] = useState({
    propertyId: '',
    tenantFirstName: '',
    tenantLastName: '',
    startDate: '',
    endDate: '',
    totalPayment: '',
  });

  const handleSave = () => {
    console.log('Réservation ajoutée', reservation);
    
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReservation({
      ...reservation,
      [name]: value,
    });
  };

  return (
    <main className="main-container">
      <Box sx={{ p: 3, backgroundColor: '#D87C49' }}>
        <Typography variant="h4" gutterBottom>
          Ajouter une Réservation
        </Typography>
        <FormControl fullWidth variant="outlined" margin="normal" sx={{ backgroundColor: 'transparent' }}>
          <InputLabel sx={{ color: '#ffff' }}>Propriété</InputLabel>
          <Select
            label="Propriété"
            name="propertyId"
            value={reservation.propertyId}
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
            <MenuItem value="1">Appartement Luxueux</MenuItem>
            <MenuItem value="2">Chambre Confort</MenuItem>
            <MenuItem value="3">Studio Moderne</MenuItem>
            <MenuItem value="4">Maison Spacieuse</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Prénom du Locataire"
          variant="outlined"
          fullWidth
          margin="normal"
          name="tenantFirstName"
          value={reservation.tenantFirstName}
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
          label="Nom du Locataire"
          variant="outlined"
          fullWidth
          margin="normal"
          name="tenantLastName"
          value={reservation.tenantLastName}
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
          label="Date de Début"
          type="date"
          variant="outlined"
          fullWidth
          margin="normal"
          name="startDate"
          value={reservation.startDate}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
          sx={{
            input: { color: '#ffff' },
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
          label="Date de Fin"
          type="date"
          variant="outlined"
          fullWidth
          margin="normal"
          name="endDate"
          value={reservation.endDate}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
          sx={{
            input: { color: '#ffff' },
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
          label="Montant Total (€)"
          variant="outlined"
          fullWidth
          margin="normal"
          name="totalPayment"
          value={reservation.totalPayment}
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
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleSave}
        >
          Ajouter la Réservation
        </Button>
      </Box>
    </main>
  );
};

export default AddReservation;
