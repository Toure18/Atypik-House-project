import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem, IconButton } from '@mui/material';
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
    newPhotos[index] = event.target.files[0]; //  POUR Remplacer ou ajouter la photo
    setProperty({
      ...property,
      photos: newPhotos,
    });
  };

  const addPhotoInput = () => {
    setProperty({
      ...property,
      photos: [...property.photos, null], // POUR Ajouter une entrée vide pour une nouvelle photo
    });
  };

  return (
    <main className="main-container">
      <Box sx={{ p: 3, backgroundColor: '#D87C49' }}>
        <Typography variant="h4" gutterBottom>
          Ajouter une Propriété
        </Typography>
        <TextField
          label="Titre de la Propriété"
          variant="outlined"
          fullWidth
          margin="normal"
          name="title"
          value={property.title}
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
          <InputLabel sx={{ color: '#ffff' }}>Type de Propriété</InputLabel>
          <Select
            label="Type de Propriété"
            name="type"
            value={property.type}
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
            <MenuItem value="Appartement">Appartement</MenuItem>
            <MenuItem value="Chambre">Chambre</MenuItem>
            <MenuItem value="Studio">Studio</MenuItem>
            <MenuItem value="Maison">Maison</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Nombre de Pièces"
          variant="outlined"
          fullWidth
          margin="normal"
          name="rooms"
          value={property.rooms}
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
          label="Capacité (nombre de personnes)"
          variant="outlined"
          fullWidth
          margin="normal"
          name="capacity"
          value={property.capacity}
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
        <Typography variant="h6" gutterBottom sx={{ mt: 3, color: '#ffff' }}>
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
              }}
            />
          </Box>
        ))}
        <Button
          variant="outlined"
          color="primary"
          startIcon={<AddPhotoAlternateIcon />}
          onClick={addPhotoInput}
          sx={{ color: '#ffff', borderColor: '#ffff', mb: 3 }}
        >
          Ajouter une autre photo
        </Button>
        <TextField
          label="Prix par Nuit (€)"
          variant="outlined"
          fullWidth
          margin="normal"
          name="pricePerNight"
          value={property.pricePerNight}
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
          label="Prénom du Propriétaire"
          variant="outlined"
          fullWidth
          margin="normal"
          name="ownerFirstName"
          value={property.ownerFirstName}
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
          label="Nom du Propriétaire"
          variant="outlined"
          fullWidth
          margin="normal"
          name="ownerLastName"
          value={property.ownerLastName}
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
          Ajouter la Propriété
        </Button>
      </Box>
    </main>
  );
};

export default AddProperty;
