import React, { useEffect, useState } from 'react';
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
import DeleteIcon from '@mui/icons-material/Delete';
import PropertiesService from './services/propertieService';
import { useNavigate } from 'react-router-dom';

const PropertyList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');
  const [properties, setProperties] = useState([]);
  const [uniqueTypes, setUniqueTypes] = useState([]);
  const navigate = useNavigate();

  const handleEditClick = (property) => {
    navigate(`/editproperty/${property.id}`, { state: { property } });
  };

  const handleDeleteClick = (propertyId) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette propriété ?')) {
      PropertiesService.deleteProperty(propertyId)
        .then(() => {
          setProperties(properties.filter((property) => property.id !== propertyId));
        })
        .catch((error) => {
          console.error('Erreur lors de la suppression de la propriété :', error);
        });
    }
  };

  useEffect(() => {
    PropertiesService.getAllProperties()
      .then((response) => {
        setProperties(response.data);
        const types = response.data.map((property) => property.type);
        const uniqueTypes = [...new Set(types)];
        setUniqueTypes(uniqueTypes);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des propriétés :', error);
      });
  }, []);

  const filteredProperties = properties.filter((property) => {
    return (
      property.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
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
                {uniqueTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Button
            variant="outlined"
            color="error"
            size="small"
            startIcon={<AddIcon />}
            sx={{ color: '#fff', borderColor: '#fff' }}
            href="./addproperty"
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
                <TableCell sx={{ color: '#fff', borderBottom: '1px solid #000', fontWeight: 'bold' }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredProperties.map((property) => (
                <TableRow
                  key={property.id}
                  sx={{ backgroundColor: '#D87C49', '&:hover': { backgroundColor: '#D5926D' } }}
                >
                  <TableCell sx={{ color: '#fff', borderBottom: '1px solid #000' }}>{property.name}</TableCell>
                  <TableCell sx={{ color: '#fff', borderBottom: '1px solid #000' }}>{property.type}</TableCell>
                  <TableCell
                    sx={{
                      color: '#fff',
                      borderBottom: '1px solid #000',
                      textAlign: 'center',
                    }}
                  >
                    {property.piecesNb}
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
                    {property.price} €
                  </TableCell>
                  <TableCell sx={{ color: '#fff', borderBottom: '1px solid #000' }}>
                    {property.user.firstname} {property.user.lastname}
                  </TableCell>
                  <TableCell sx={{ color: '#fff', borderBottom: '1px solid #000', display: 'flex', justifyContent: 'center' }}>
                    <IconButton sx={{ color: '#fff' }} onClick={() => handleEditClick(property)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton sx={{ color: '#fff' }} onClick={() => handleDeleteClick(property.id)}>
                      <DeleteIcon />
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
