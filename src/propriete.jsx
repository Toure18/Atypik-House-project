import React, { useState } from 'react';
import {
    Box,
    TextField,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Button,
    IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

const PropertyList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');
  const properties = [
    {
      id: 1,
      title: 'Appartement Luxueux',
      type: 'Appartement',
      rooms: 3,
      capacity: 5,
      pricePerNight: 120,
      ownerFirstName: 'John',
      ownerLastName: 'Doe',
    },
    {
      id: 2,
      title: 'Chambre Confort',
      type: 'Chambre',
      rooms: 1,
      capacity: 2,
      pricePerNight: 60,
      ownerFirstName: 'Jane',
      ownerLastName: 'Smith',
    },
    {
      id: 3,
      title: 'Studio Moderne',
      type: 'Studio',
      rooms: 1,
      capacity: 2,
      pricePerNight: 80,
      ownerFirstName: 'Michael',
      ownerLastName: 'Johnson',
    },
    
  ];

  const filteredProperties = properties.filter(property => {
    return (
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === '' || property.type === filter)
    );
  });

  return (
    <main className="main-container">
      <Box sx={{ flexGrow: 1, px: { xs: 2, sm: 3, md: 4 }, py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Liste des Propriétés
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
              <InputLabel sx={{ color: '#fff', top: '-6px' }}>Filtrer par type</InputLabel>
              <Select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                startAdornment={<FilterListIcon sx={{ color: '#fff' }} />}
                label="Filtrer par type"
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
                <MenuItem value="">Tous les types</MenuItem>
                <MenuItem value="Appartement">Appartement</MenuItem>
                <MenuItem value="Chambre">Chambre</MenuItem>
                <MenuItem value="Studio">Studio</MenuItem>
                <MenuItem value="Maison">Maison</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button
            variant="outlined"
            color="error"
            size="small"
            startIcon={<AddIcon />}
            sx={{ color: '#fff', borderColor: '#fff' }}
            href='./addproperty'
            >  
                Ajouter une propriété
            </Button>
        </Box>
        <TableContainer component={Paper} sx={{ boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', width: '100%' }}>
          <Table sx={{ width: '100%' }}>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#D87C49' }}>
                <TableCell sx={{ color: '#fff', borderBottom: '1px solid #000', fontWeight: 'bold' }}>
                  Titre de la Propriété
                </TableCell>
                <TableCell sx={{ color: '#fff', borderBottom: '1px solid #000', fontWeight: 'bold' }}>
                  Type
                </TableCell>
                <TableCell
                  sx={{
                    color: '#fff',
                    borderBottom: '1px solid #000',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  Nombre de Pièces
                </TableCell>
                <TableCell
                  sx={{
                    color: '#fff',
                    borderBottom: '1px solid #000',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  Capacité
                </TableCell>
                <TableCell
                  sx={{
                    color: '#fff',
                    borderBottom: '1px solid #000',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  Prix par Nuit
                </TableCell>
                <TableCell sx={{ color: '#fff', borderBottom: '1px solid #000', fontWeight: 'bold' }}>
                  Propriétaire
                </TableCell>
                <TableCell sx={{ color: '#fff', borderBottom: '1px solid #000', fontWeight: 'bold' }}>
                  
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredProperties.map((property) => (
                <TableRow
                  key={property.id}
                  sx={{ backgroundColor: '#D87C49', '&:hover': { backgroundColor: '#D5926D' } }}
                >
                  <TableCell sx={{ color: '#fff', borderBottom: '1px solid #000' }}>{property.title}</TableCell>
                  <TableCell sx={{ color: '#fff', borderBottom: '1px solid #000' }}>{property.type}</TableCell>
                  <TableCell
                    sx={{
                      color: '#fff',
                      borderBottom: '1px solid #000',
                      textAlign: 'center',
                    }}
                  >
                    {property.rooms}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: '#fff',
                      borderBottom: '1px solid #000',
                      textAlign: 'center',
                    }}
                  >
                    {property.capacity}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: '#fff',
                      borderBottom: '1px solid #000',
                      textAlign: 'center',
                    }}
                  >
                    {property.pricePerNight} €
                  </TableCell>
                  <TableCell sx={{ color: '#fff', borderBottom: '1px solid #000' }}>
                    {property.ownerFirstName} {property.ownerLastName}
                  </TableCell>
                  <TableCell sx={{ color: '#fff', borderBottom: '1px solid #000' }}>
                    <IconButton sx={{ color: '#fff' }} href='/editproperty'>
                    <EditIcon />
                    </IconButton>
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

export default PropertyList;
