import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Box, Typography, TextField, Button, Snackbar, Alert } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import PropertiesService from './services/propertieService';

function EditProperty() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const prop = location.state || {};
  const [property, setProperty] = useState({
    name: '',
    description: '',
    type: '',
    piecesNb: '',
    capacity: '',
    price: '',
    pictures: [],
    availability_begin: '',
    availability_end: '',
  });
  
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  
  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await PropertiesService.getPropertyById(id);
        const data = response.data;
        console.log(data)
        setProperty({
          ...data,
          pictures: Array.isArray(data.pictures) ? data.pictures : [],
        });
      } catch (error) {
        console.error('Erreur lors du chargement de la propriété', error);
      }
    };

    fetchProperty();
  }, [id]);

  const handleSave = async () => {
    try {
      await PropertiesService.updateProperty(id, property);
      setSnackbarMessage('Propriété modifiée avec succès !');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
      setTimeout(() => {
        navigate('/proprietes');
      }, 1500);
    } catch (error) {
      console.error('Erreur lors de la modification de la propriété', error);
      setSnackbarMessage('Erreur lors de la modification de la propriété. Veuillez réessayer.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProperty({
      ...property,
      [name]: value,
    });
  };

  const handleFileChange = (event, index) => {
    const newPictures = [...property.pictures];
    newPictures[index] = event.target.files[0];
    setProperty({
      ...property,
      pictures: newPictures,
    });
  };

  const addPhotoInput = () => {
    setProperty({
      ...property,
      pictures: [...property.pictures, null],
    });
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <main className="main-container">
      <Box sx={{ p: 3, backgroundColor: '#D87C49' }}>
        <Typography variant="h4" gutterBottom>
          Modifier la Propriété
        </Typography>
        <TextField
          label="Nom de la Propriété"
          variant="outlined"
          fullWidth
          margin="normal"
          name="name"
          value={property.name}
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
          label="Description"
          variant="outlined"
          fullWidth
          margin="normal"
          name="description"
          value={property.description}
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
          label="Type de Propriété"
          variant="outlined"
          fullWidth
          margin="normal"
          name="type"
          value={property.type}
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
          label="Nombre de Pièces"
          variant="outlined"
          fullWidth
          margin="normal"
          name="piecesNb"
          value={property.piecesNb}
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
          label="Capacité"
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
        <TextField
          label="Prix"
          variant="outlined"
          fullWidth
          margin="normal"
          name="price"
          value={property.price}
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
          name="availability_begin"
          value={property.availability_begin}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
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
          label="Date de Fin"
          type="date"
          variant="outlined"
          fullWidth
          margin="normal"
          name="availability_end"
          value={property.availability_end}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
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
        {Array.isArray(property.pictures) && property.pictures.map((photo, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            {photo && <img src={URL.createObjectURL(photo)} alt={`photo-${index}`} style={{ width: '100px', height: '100px' }} />}
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
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleSave}
        >
          Enregistrer les Modifications
        </Button>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
        >
          <Alert onClose={handleSnackbarClose} severity={snackbarSeverity}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>
    </main>
  );
};

export default EditProperty;
