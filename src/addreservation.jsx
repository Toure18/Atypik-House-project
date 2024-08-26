import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import BookingService from './services/reservationService';
import PropertiesService from './services/propertieService';
import UsersService from './services/usersService';
import { useNavigate} from 'react-router-dom';


const AddReservation = () => {
  const [reservation, setReservation] = useState({
    propertyId: '',
    userId: '', 
    startDate: '',
    endDate: '',
    totalPayment: '',
  });

  const [properties, setProperties] = useState([]);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();


  // Fetch properties and users when the component mounts
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await PropertiesService.getAllProperties();
        setProperties(response.data); 
      } catch (error) {
        console.error('Erreur lors de la récupération des propriétés:', error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await UsersService.getUsers();
        setUsers(response); 
      } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
      }
    };

    fetchProperties();
    fetchUsers();
  }, []);

  const handleSave = async () => {
    try {
      // Préparer les données pour la réservation
      const bookingData = {
        beginDate: reservation.startDate,
        endDate: reservation.endDate,
        userId: reservation.userId, // Change this from user object to userId
      };

      // Appeler le service pour créer la réservation
      await BookingService.createBooking(bookingData, reservation.propertyId);

      alert('Réservation ajoutée avec succès');
      // Réinitialiser le formulaire après l'ajout
      setReservation({
        propertyId: '',
        userId: '', // Reset userId
        startDate: '',
        endDate: '',
        totalPayment: '',
      });
      navigate('/reservations');
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la réservation:', error);
      alert('Une erreur est survenue lors de l\'ajout de la réservation.');
    }
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
            {properties.map((property) => (
              <MenuItem key={property.id} value={property.id}>
                {property.name} {/* Assuming the property has a 'name' field */}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth variant="outlined" margin="normal" sx={{ backgroundColor: 'transparent' }}>
          <InputLabel sx={{ color: '#ffff' }}>Locataire</InputLabel>
          <Select
            label="Locataire"
            name="userId"
            value={reservation.userId}
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
            {users.map((user) => (
              <MenuItem key={user.id} value={user.id}>
                {`${user.firstname} ${user.lastname}`} {/* Assuming the user has 'firstname' and 'lastname' fields */}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
