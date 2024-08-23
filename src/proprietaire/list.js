import React, { useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Box, Button, IconButton, Container, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom'; // Utilisation de react-router-dom pour la navigation
import galerie1 from './Rectangle 9.jpg';

const rentalProperties = [
  {
    id: 1,
    title: 'Chalet Montagne',
    pricePerNight: 120,
    description: 'Un chalet chaleureux au cœur des montagnes.',
    imageUrl: galerie1,
    status: 'libre'
  },
  {
    id: 2,
    title: 'Villa Bord de Mer',
    pricePerNight: 250,
    description: 'Villa luxueuse avec vue imprenable sur la mer.',
    imageUrl: galerie1
  },
];

const RentalListProp = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredProperties = rentalProperties.filter((property) =>
    property.title.toLowerCase().includes(searchTerm) ||
    property.description.toLowerCase().includes(searchTerm)
  );

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Propriétés
      </Typography>

      <Grid container spacing={2} alignItems="center" sx={{ marginBottom: 2 }}>
        {/* Barre de recherche */}
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Rechercher"
            variant="outlined"
            fullWidth
            onChange={handleSearchChange}
          />
        </Grid>

        {/* Bouton pour appliquer les filtres */}
        <Grid item xs={12} sm={6} md={1}>
          <Button variant="contained" color="primary" fullWidth>
            Chercher
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        {/* Ajout du bouton "Ajouter un nouveau bien" */}
        <Grid item xs={12} sm={6} md={4} mb={2}>
          <Link to="/addbien" style={{ textDecoration: 'none' }}>
            <Card sx={{
              border: '2px dashed #cccccc',
              backgroundColor: '#f5f5f5',
              color: '#cccccc',
              textAlign: 'center',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <AddIcon style={{ fontSize: 50 }} />
              <Typography variant="h6" sx={{ marginTop: 2 }}>
                Ajouter un nouveau bien
              </Typography>
            </Card>
          </Link>
        </Grid>

        {/* Liste des biens */}
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <Grid item key={property.id} xs={12} sm={6} md={4} mb={2}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={property.imageUrl}
                  alt={property.title}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {property.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {property.description}
                  </Typography>
                  <Box mt={2}>
                    <Typography variant="subtitle1" color="primary">
                      {property.pricePerNight} € / nuit
                    </Typography>
                  </Box>
                  <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
                    <IconButton color="primary">
                      <EditIcon />
                    </IconButton>
                    <Typography variant="body2" color={property.status === 'libre' ? 'blue' : 'green'}>
                      {property.status === 'libre' ? (
                        <>
                          <CheckCircleIcon fontSize="small" style={{ marginRight: '5px' }} />
                          Libre
                        </>
                      ) : (
                        <>
                          <CancelIcon fontSize="small" style={{ marginRight: '5px' }} />
                          Réservé
                        </>
                      )}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" color="text.secondary">
            Aucun bien ne correspond à votre recherche.
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default RentalListProp;
