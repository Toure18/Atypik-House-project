import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Snackbar } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import PropertiesService from './services/propertieService';
import { useNavigate } from 'react-router-dom';
import MuiAlert from '@mui/material/Alert';

// Snackbar component for notifications
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AddProperty = () => {
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
    userId: '',
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // or 'error'
  
  const navigate = useNavigate();

  const handleSave = async () => {
    const propertyData = {
      ...property,
      piecesNb: parseInt(property.piecesNb),
      capacity: parseInt(property.capacity),
      price: parseFloat(property.price),
      availability_begin: property.availability_begin,
      availability_end: property.availability_end,
    };

    try {
      const response = await PropertiesService.createProperty(propertyData);
      console.log('Propriété ajoutée', response);
      
      // Show success message
      setSnackbarMessage('Propriété créée avec succès !');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);

      // Redirect to property list after a short delay to let the user read the message
      setTimeout(() => {
        navigate('/proprietes');
      }, 1500);
      
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la propriété', error);
      
      // Show error message
      setSnackbarMessage('Erreur lors de la création de la propriété. Veuillez réessayer.');
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
    newPictures[index] = event.target.files[0].name; // Save just the file name
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
          Ajouter une Propriété
        </Typography>
        <TextField
          label="Nom de la Propriété"
          variant="outlined"
          fullWidth
          margin="normal"
          name="name"
          value={property.name}
          onChange={handleChange}
          sx={{ input: { color: '#ffff' }, label: { color: '#ffff' } }}
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          margin="normal"
          name="description"
          value={property.description}
          onChange={handleChange}
          sx={{ input: { color: '#ffff' }, label: { color: '#ffff' } }}
        />
        <TextField
          label="Type de Propriété"
          variant="outlined"
          fullWidth
          margin="normal"
          name="type"
          value={property.type}
          onChange={handleChange}
          sx={{ input: { color: '#ffff' }, label: { color: '#ffff' } }}
        />
        <TextField
          label="Nombre de Pièces"
          variant="outlined"
          fullWidth
          margin="normal"
          name="piecesNb"
          value={property.piecesNb}
          onChange={handleChange}
          sx={{ input: { color: '#ffff' }, label: { color: '#ffff' } }}
        />
        <TextField
          label="Capacité (nombre de personnes)"
          variant="outlined"
          fullWidth
          margin="normal"
          name="capacity"
          value={property.capacity}
          onChange={handleChange}
          sx={{ input: { color: '#ffff' }, label: { color: '#ffff' } }}
        />
        <TextField
          label="Prix par Nuit (€)"
          variant="outlined"
          fullWidth
          margin="normal"
          name="price"
          value={property.price}
          onChange={handleChange}
          sx={{ input: { color: '#ffff' }, label: { color: '#ffff' } }}
        />
        <TextField
          label="Début de Disponibilité"
          type="date"
          fullWidth
          margin="normal"
          name="availability_begin"
          value={property.availability_begin}
          onChange={handleChange}
          sx={{ input: { color: '#ffff' }, label: { color: '#ffff' } }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Fin de Disponibilité"
          type="date"
          fullWidth
          margin="normal"
          name="availability_end"
          value={property.availability_end}
          onChange={handleChange}
          sx={{ input: { color: '#ffff' }, label: { color: '#ffff' } }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Typography variant="h6" gutterBottom sx={{ mt: 3, color: '#ffff' }}>
          Photos de la Propriété
        </Typography>
        {property.pictures.map((photo, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <TextField
              type="file"
              variant="outlined"
              fullWidth
              onChange={(event) => handleFileChange(event, index)}
              InputLabelProps={{
                shrink: true,
              }}
              sx={{ input: { color: '#ffff' }, label: { color: '#ffff' } }}
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
          Ajouter la Propriété
        </Button>
      </Box>

      {/* Snackbar for notifications */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </main>
  );
};

export default AddProperty;
