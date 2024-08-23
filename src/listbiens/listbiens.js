import React, { useState } from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Box, TextField, MenuItem, Button } from '@mui/material';

import galerie1 from './Rectangle 9.jpg';

const rentalProperties = [
  {
    id: 1,
    title: 'Chalet Montagne',
    pricePerNight: 120,
    description: 'Un chalet chaleureux au cœur des montagnes.',
    imageUrl: galerie1
  },
  {
    id: 2,
    title: 'Villa Bord de Mer',
    pricePerNight: 250,
    description: 'Villa luxueuse avec vue imprenable sur la mer.',
    imageUrl: galerie1
  },
  {
    id: 3,
    title: 'Appartement Centre-Ville',
    pricePerNight: 80,
    description: 'Appartement moderne en plein cœur de la ville.',
    imageUrl: galerie1
  },
  {
    id: 4,
    title: 'Cottage Campagne',
    pricePerNight: 90,
    description: 'Charmant cottage dans un cadre bucolique.',
    imageUrl: galerie1
  },
  {
    id: 5,
    title: 'Studio Urbain',
    pricePerNight: 60,
    description: 'Studio confortable pour un séjour en ville.',
    imageUrl: galerie1
  },
  {
    id: 6,
    title: 'Maison Familiale',
    pricePerNight: 150,
    description: 'Grande maison pour un séjour en famille.',
    imageUrl: galerie1
  },
  {
    id: 7,
    title: 'Cabane en Forêt',
    pricePerNight: 70,
    description: 'Retraite paisible dans une cabane en pleine forêt.',
    imageUrl: galerie1
  },
  {
    id: 8,
    title: 'Loft Moderne',
    pricePerNight: 200,
    description: 'Loft spacieux avec des équipements modernes.',
    imageUrl: galerie1
  },
  {
    id: 9,
    title: 'Bungalow Tropical',
    pricePerNight: 180,
    description: 'Bungalow exotique entouré de nature tropicale.',
    imageUrl: galerie1
  },
];

const locations = ['Paris', 'Lyon', 'Marseille', 'Nice', 'Bordeaux']; // Exemples de localisations
const roomCounts = [1, 2, 3, 4, 5]; // Exemples de nombre de pièces

const RentalListPage = () => {
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

        {/* Filtre par prix minimum */}
        <Grid item xs={12} sm={6} md={2}>
          <TextField
            label="Prix minimum"
            variant="outlined"
            type="number"
            fullWidth
          />
        </Grid>

        {/* Filtre par prix maximum */}
        <Grid item xs={12} sm={6} md={2}>
          <TextField
            label="Prix maximum"
            variant="outlined"
            type="number"
            fullWidth
          />
        </Grid>

        {/* Filtre par localisation */}
        <Grid item xs={12} sm={6} md={2}>
          <TextField
            label="Localisation"
            variant="outlined"
            select
            fullWidth
          >
            {locations.map((location) => (
              <MenuItem key={location} value={location}>
                {location}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* Filtre par nombre de pièces */}
        <Grid item xs={12} sm={6} md={2}>
          <TextField
            label="Nombre de pièces"
            variant="outlined"
            select
            fullWidth
          >
            {roomCounts.map((count) => (
              <MenuItem key={count} value={count}>
                {count} {count > 1 ? 'pièces' : 'pièce'}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* Bouton pour appliquer les filtres */}
        <Grid item xs={12} sm={6} md={1}>
          <Button variant="contained" color="primary" fullWidth>
            Filtrer
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
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

export default RentalListPage;