import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import BookingService from './services/reservationService';

const ReservationList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await BookingService.getAllBookings();
        setReservations(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des réservations:', error);
      }
    };

    fetchReservations();
  }, []);
  
  const filteredReservations = reservations.filter((reservation) => {
    const tenantFirstname = reservation.user?.firstname || '';
    const tenantLastname = reservation.user?.lastname || '';
    
    const tenantName = (tenantFirstname + ' ' + tenantLastname).toLowerCase();
    
    return tenantName.includes(searchTerm.toLowerCase());
  });


  const calculateTotalPayment = (reservation) => {
    const { beginDate, endDate, property } = reservation;
    const pricePerNight = property?.price || 0;

    if (!beginDate || !endDate) return 0;

    const startDate = new Date(beginDate);
    const endDateObj = new Date(endDate);
  

    // Calcul du nombre de nuits
    const nights = Math.ceil((endDateObj - startDate) / (1000 * 60 * 60 * 24));


    // Calcul du montant total
    const totalPayment = nights * pricePerNight;
   

    return totalPayment;
  };

  const handleCancelReservation = async (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir annuler cette réservation ?')) {
      try {
        await BookingService.deleteBooking(id);
        setReservations((prevReservations) =>
          prevReservations.filter((reservation) => reservation.id !== id)
        );
        alert('Réservation annulée avec succès.');
      } catch (error) {
        console.error('Erreur lors de l\'annulation de la réservation:', error);
        alert('Une erreur est survenue lors de l\'annulation de la réservation.');
      }
    }
  };

  return (
    <main className="main-container">
      <Box sx={{ flexGrow: 1, px: { xs: 2, sm: 3, md: 4 }, py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Liste des Réservations
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} flexWrap="wrap">
          <Box display="flex" gap={2} sx={{ backgroundColor: '#D87C49', p: 1, borderRadius: '4px', flexWrap: 'wrap' }}>
            <TextField
              variant="outlined"
              placeholder="Rechercher..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: <SearchIcon sx={{ color: '#fff' }} />,
              }}
              sx={{
                input: { color: '#fff', padding: '10px 12px' },
                fieldset: { borderColor: 'transparent' },
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: '#fff',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#fff',
                  },
                },
                backgroundColor: '#D87C49',
                borderRadius: '4px',
                height: '40px',
                flex: 1,
              }}
            />
          </Box>
          <Button
            variant="outlined"
            color="error"
            size="small"
            startIcon={<AddIcon />}
            sx={{ color: '#fff', borderColor: '#fff' }}
            href='/addreservation'
          >
            Ajouter une réservation
          </Button>
        </Box>
        <TableContainer component={Paper} sx={{ boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', width: '100%' }}>
          <Table sx={{ width: '100%' }}>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#D87C49' }}>
                <TableCell sx={{ color: '#fff', borderBottom: '1px solid #000', fontWeight: 'bold' }}>
                  Prénom du Locataire
                </TableCell>
                <TableCell sx={{ color: '#fff', borderBottom: '1px solid #000', fontWeight: 'bold' }}>
                  Nom du Locataire
                </TableCell>
                <TableCell
                  sx={{
                    color: '#fff',
                    borderBottom: '1px solid #000',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  Date de Début
                </TableCell>
                <TableCell
                  sx={{
                    color: '#fff',
                    borderBottom: '1px solid #000',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  Date de Fin
                </TableCell>
                <TableCell
                  sx={{
                    color: '#fff',
                    borderBottom: '1px solid #000',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  Total Paiement
                </TableCell>
                <TableCell
                  sx={{
                    color: '#fff',
                    borderBottom: '1px solid #000',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredReservations.map((reservation) => (
                <TableRow
                  key={reservation.id}
                  sx={{ backgroundColor: '#D87C49', '&:hover': { backgroundColor: '#D5926D' } }}
                >
                  <TableCell sx={{ color: '#fff', borderBottom: '1px solid #000' }}>
                    {reservation.user?.firstname || 'N/A'}
                  </TableCell>
                  <TableCell sx={{ color: '#fff', borderBottom: '1px solid #000' }}>
                    {reservation.user?.lastname || 'N/A'}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: '#fff',
                      borderBottom: '1px solid #000',
                      textAlign: 'center',
                    }}
                  >
                    {reservation.beginDate}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: '#fff',
                      borderBottom: '1px solid #000',
                      textAlign: 'center',
                    }}
                  >
                    {reservation.endDate}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: '#fff',
                      borderBottom: '1px solid #000',
                      textAlign: 'center',
                    }}
                  >
                    {calculateTotalPayment(reservation).toFixed(2)} €
                  </TableCell>
                  <TableCell sx={{ color: '#fff', borderBottom: '1px solid #000' }}>
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      sx={{ color: '#fff', borderColor: '#fff' }}
                      onClick={() => handleCancelReservation(reservation.id)}
                    >
                      Annuler
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </main>
  );
};

export default ReservationList;
