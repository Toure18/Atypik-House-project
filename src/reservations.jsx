import React, { useState } from 'react';
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
  IconButton,
  Button
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

const ReservationList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const reservations = [
    {
      id: 1,
      tenantFirstName: 'Alice',
      tenantLastName: 'Martin',
      ownerFirstName: 'John',
      ownerLastName: 'Doe',
      startDate: '2024-08-01',
      endDate: '2024-08-10',
      totalPayment: 1200,
    },
    {
      id: 2,
      tenantFirstName: 'Bob',
      tenantLastName: 'Brown',
      ownerFirstName: 'Jane',
      ownerLastName: 'Smith',
      startDate: '2024-08-05',
      endDate: '2024-08-15',
      totalPayment: 1500,
    },
    {
      id: 3,
      tenantFirstName: 'Charlie',
      tenantLastName: 'Davis',
      ownerFirstName: 'Michael',
      ownerLastName: 'Johnson',
      startDate: '2024-08-10',
      endDate: '2024-08-20',
      totalPayment: 1800,
    },
    
  ];

  const filteredReservations = reservations.filter(reservation => {
    return (
      reservation.tenantFirstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reservation.tenantLastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reservation.ownerFirstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reservation.ownerLastName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

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
                <TableCell sx={{ color: '#fff', borderBottom: '1px solid #000', fontWeight: 'bold' }}>
                  Prénom du Propriétaire
                </TableCell>
                <TableCell sx={{ color: '#fff', borderBottom: '1px solid #000', fontWeight: 'bold' }}>
                  Nom du Propriétaire
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
                    {reservation.tenantFirstName}
                  </TableCell>
                  <TableCell sx={{ color: '#fff', borderBottom: '1px solid #000' }}>
                    {reservation.tenantLastName}
                  </TableCell>
                  <TableCell sx={{ color: '#fff', borderBottom: '1px solid #000' }}>
                    {reservation.ownerFirstName}
                  </TableCell>
                  <TableCell sx={{ color: '#fff', borderBottom: '1px solid #000' }}>
                    {reservation.ownerLastName}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: '#fff',
                      borderBottom: '1px solid #000',
                      textAlign: 'center',
                    }}
                  >
                    {reservation.startDate}
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
                    {reservation.totalPayment} €
                  </TableCell>
                  <TableCell sx={{ color: '#fff', borderBottom: '1px solid #000' }}>
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      sx={{ color: '#fff', borderColor: '#fff' }}
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
