import React, { useState } from 'react';
import { Grid, Box, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem, IconButton } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const AddProperty = () => {
  const [property, setProperty] = useState({
    title: '',
    type: '',
    rooms: '',
    capacity: '',
    pricePerNight: '',
    ownerFirstName: '',
    ownerLastName: '',
    photos: [],
  });

  const handleSave = () => {
    console.log('Propriété ajoutée', property);
    // pour sauvegarder la propriété
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProperty({
      ...property,
      [name]: value,
    });
  };

  const handleFileChange = (event, index) => {
    const newPhotos = [...property.photos];
    newPhotos[index] = event.target.files[0]; // Remplacer ou ajouter la photo
    setProperty({
      ...property,
      photos: newPhotos,
    });
  };

  const addPhotoInput = () => {
    setProperty({
      ...property,
      photos: [...property.photos, null], // Ajouter une entrée vide pour une nouvelle photo
    });
  };

  const inputStyle = {
    input: { color: '#955532' },
    label: { color: '#955532' },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#955532',
      },
      '&:hover fieldset': {
        borderColor: '#955532',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#955532',
      },
    },
    '& .MuiInputLabel-root': {
      color: '#955532',
    },
    '& .MuiOutlinedInput-input': {
      color: '#955532',
    },
  };

  return (
    <main className="main-container">
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom color={'#955532'}>
          Ajouter une Propriété
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Titre de la Propriété"
              variant="outlined"
              fullWidth
              name="title"
              value={property.title}
              onChange={handleChange}
              sx={inputStyle}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel sx={{ color: '#955532' }}>Type de Propriété</InputLabel>
              <Select
                label="Type de Propriété"
                name="type"
                value={property.type}
                onChange={handleChange}
                sx={{
                  color: '#955532',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#955532',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#955532',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#955532',
                  },
                  '& .MuiSelect-icon': {
                    color: '#955532',
                  },
                }}
              >
                <MenuItem value="Appartement">Appartement</MenuItem>
                <MenuItem value="Chambre">Chambre</MenuItem>
                <MenuItem value="Studio">Studio</MenuItem>
                <MenuItem value="Maison">Maison</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Nombre de Pièces"
              variant="outlined"
              fullWidth
              name="rooms"
              value={property.rooms}
              onChange={handleChange}
              sx={inputStyle}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Capacité (nombre de personnes)"
              variant="outlined"
              fullWidth
              name="capacity"
              value={property.capacity}
              onChange={handleChange}
              sx={inputStyle}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Prix par Nuit (€)"
              variant="outlined"
              fullWidth
              name="pricePerNight"
              value={property.pricePerNight}
              onChange={handleChange}
              sx={inputStyle}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Prénom du Propriétaire"
              variant="outlined"
              fullWidth
              name="ownerFirstName"
              value={property.ownerFirstName}
              onChange={handleChange}
              sx={inputStyle}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Nom du Propriétaire"
              variant="outlined"
              fullWidth
              name="ownerLastName"
              value={property.ownerLastName}
              onChange={handleChange}
              sx={inputStyle}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom sx={{ mt: 3, color: '#955532' }}>
              Photos de la Propriété
            </Typography>
            {property.photos.map((photo, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <TextField
                  type="file"
                  variant="outlined"
                  fullWidth
                  onChange={(event) => handleFileChange(event, index)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={inputStyle}
                />
              </Box>
            ))}
            <Button
              variant="outlined"
              color="primary"
              startIcon={<AddPhotoAlternateIcon />}
              onClick={addPhotoInput}
              sx={{ color: '#955532', borderColor: '#955532', mb: 3 }}
            >
              Ajouter une autre photo
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2, backgroundColor: '#955532' }}
              onClick={handleSave}
            >
              Ajouter la Propriété
            </Button>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
};

export default AddProperty;
