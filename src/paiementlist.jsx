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
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PaymentService from './services/paymentService'

const PaymentList = () => {
  const [payments, setPayments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const data = await PaymentService.findAll(); // Récupère les paiements depuis l'API
        setPayments(data);
      } catch (error) {
        console.error('Erreur lors de la réception de la liste de paiements:', error);
      }
    };

    fetchPayments();
  }, []);

  // Extraction des statuts uniques pour le filtrage
  const uniqueStatuses = [...new Set(payments.map(payment => payment.status))];

  // Filtrage des paiements par recherche et statut
  const filteredPayments = payments.filter(payment => {
    return (
      (filter === '' || payment.status === filter) &&
      payment.booking?.id.toString().includes(searchTerm)
    );
  });

  return (
    <main className="main-container">
      <Box sx={{ flexGrow: 1, px: { xs: 2, sm: 3, md: 4 }, py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Liste des Paiements
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} flexWrap="wrap">
          <Box display="flex" gap={2} sx={{ backgroundColor: '#D87C49', p: 1, borderRadius: '4px', flexWrap: 'wrap' }}>
            <TextField
              variant="outlined"
              placeholder="Rechercher par ID de réservation..."
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
            <FormControl
              variant="outlined"
              sx={{
                minWidth: 150,
                backgroundColor: '#D87C49',
                borderRadius: '4px',
                height: '40px',
                flex: 1,
              }}
            >
              <InputLabel sx={{ color: '#fff', top: '-6px' }}>Filtrer par statut</InputLabel>
              <Select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                label="Filtrer par statut"
                sx={{
                  color: '#fff',
                  '.MuiOutlinedInput-notchedOutline': { borderColor: 'transparent' },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#fff',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#fff',
                  },
                  height: '40px',
                  paddingTop: '12px',
                }}
              >
                <MenuItem value="">Tous les statuts</MenuItem>
                {uniqueStatuses.map((status) => (
                  <MenuItem key={status} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
        <TableContainer component={Paper} sx={{ boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', width: '100%' }}>
          <Table sx={{ width: '100%' }}>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#D87C49' }}>
                <TableCell sx={{ color: '#fff', borderBottom: '1px solid #000', fontWeight: 'bold' }}>
                  ID Réservation
                </TableCell>
                <TableCell
                  sx={{
                    color: '#fff',
                    borderBottom: '1px solid #000',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  Montant
                </TableCell>
                <TableCell
                  sx={{
                    color: '#fff',
                    borderBottom: '1px solid #000',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  Statut
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredPayments.map((payment) => (
                <TableRow
                  key={payment.id}
                  sx={{ backgroundColor: '#D87C49', '&:hover': { backgroundColor: '#D5926D' } }}
                >
                  <TableCell sx={{ color: '#fff', borderBottom: '1px solid #000' }}>
                    {payment.booking ? payment.booking.id : 'Non attribué'}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: '#fff',
                      borderBottom: '1px solid #000',
                      textAlign: 'center',
                    }}
                  >
                    {payment.price} €
                  </TableCell>
                  <TableCell
                    sx={{
                      color: '#fff',
                      borderBottom: '1px solid #000',
                      textAlign: 'center',
                    }}
                  >
                    {payment.status}
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

export default PaymentList;
