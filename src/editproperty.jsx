import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem, IconButton } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const EditProperty = ({ propertyData }) => {
  const { id } = useParams(); 
  const [property, setProperty] = useState({
    title: propertyData?.title || '',
    type: propertyData?.type || '',
    rooms: propertyData?.rooms || '',
    capacity: propertyData?.capacity || '',
    pricePerNight: propertyData?.pricePerNight || '',
    ownerFirstName: propertyData?.ownerFirstName || '',
    ownerLastName: propertyData?.ownerLastName || '',
    photos: propertyData?.photos || [],
  });

  useEffect(() => {

  }, [id]);

  const handleSave = () => {
    console.log('Propriété modifiée', property);
    
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
          Modifier la Propriété
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
          Enregistrer les Modifications
        </Button>
      </Box>
    </main>
  );
};

export default EditProperty;
