import React, { useEffect, useState } from 'react';
import { Avatar, Box, Button, Container, Grid, Paper, Typography, Tabs, Tab } from '@mui/material';
import { Edit, LocationOn, CalendarToday } from '@mui/icons-material';
import PropertiesService from '../../services/propertieService'; 


function ProfilePage() {
  const [user, setUser] = useState({
    name: 'John Doe',
    location: 'Paris, France',
    memberSince: 'Janvier 2020',
    bio: 'Passionné par les voyages et les nouvelles expériences.',
    avatar: '/path/to/avatar.jpg'
  });
  const [properties, setProperties] = useState([]);
  const [reservations, setReservations] = useState([]); // Section de réservations récentes
  const [reviews, setReviews] = useState([]); // Section d'avis clients
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    PropertiesService.getUserProperties()
      .then((response) => setProperties(response.data))
      .catch((error) => console.error('Erreur lors de la récupération des propriétés:', error));
    
    // Simulations de données pour les réservations et les avis
    setReservations([
      { id: 1, propertyName: 'Yourte relaxante', date: '2024-07-15', status: 'Confirmée' },
      { id: 2, propertyName: 'Chalet en bois', date: '2024-08-02', status: 'En attente' },
    ]);
    setReviews([
      { id: 1, reviewerName: 'Alice Dupont', rating: 4, comment: 'Expérience agréable, très propre et bien situé.' },
      { id: 2, reviewerName: 'Jean Martin', rating: 5, comment: 'Un séjour inoubliable, je recommande vivement.' },
    ]);
  }, []);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 2, mb: 4 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Avatar et informations de l'utilisateur */}
          <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
            <Avatar
              alt={user.name}
              src={user.avatar}
              sx={{ width: 150, height: 150, margin: '0 auto' }}
            />
            <Typography variant="h5" sx={{ mt: 2 }}>{user.name}</Typography>
            <Typography variant="body2" color="textSecondary">
              <LocationOn fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
              {user.location}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <CalendarToday fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
              Membre depuis {user.memberSince}
            </Typography>
            <Button variant="outlined" startIcon={<Edit />} sx={{ mt: 2 }}>
              Modifier le profil
            </Button>
          </Grid>

          {/* Informations supplémentaires */}
          <Grid item xs={12} md={8}>
            <Typography variant="h6">À propos de moi</Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>{user.bio}</Typography>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              sx={{ mt: 4 }}
            >
              <Tab label="Mes Propriétés" />
              <Tab label="Activité Récente" />
              <Tab label="Avis" />
            </Tabs>

            {/* Section des propriétés */}
            {activeTab === 0 && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6">Mes Propriétés</Typography>
                <Grid container spacing={2} sx={{ mt: 1 }}>
                  {properties.map((property) => (
                    <Grid item xs={12} md={6} key={property.id}>
                      <Paper elevation={2} sx={{ padding: 2 }}>
                        <Typography variant="h6">{property.name}</Typography>
                        <Typography variant="body2" color="textSecondary">{property.location}</Typography>
                        <Typography variant="body1" sx={{ mt: 1 }}>{property.description}</Typography>
                        <Button variant="outlined" fullWidth sx={{ mt: 2 }}>
                          Voir plus
                        </Button>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}

            {/* Section des réservations récentes */}
            {activeTab === 1 && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6">Réservations Récentes</Typography>
                <Grid container spacing={2} sx={{ mt: 1 }}>
                  {reservations.map((reservation) => (
                    <Grid item xs={12} md={6} key={reservation.id}>
                      <Paper elevation={2} sx={{ padding: 2 }}>
                        <Typography variant="h6">{reservation.propertyName}</Typography>
                        <Typography variant="body2" color="textSecondary">Date : {reservation.date}</Typography>
                        <Typography variant="body2" color="textSecondary">Statut : {reservation.status}</Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}

            {/* Section des avis clients */}
            {activeTab === 2 && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6">Avis des Clients</Typography>
                <Grid container spacing={2} sx={{ mt: 1 }}>
                  {reviews.map((review) => (
                    <Grid item xs={12} md={6} key={review.id}>
                      <Paper elevation={2} sx={{ padding: 2 }}>
                        <Typography variant="h6">{review.reviewerName}</Typography>
                        <Typography variant="body2" color="textSecondary">Note : {review.rating} / 5</Typography>
                        <Typography variant="body1" sx={{ mt: 1 }}>{review.comment}</Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}
          </Grid>
        </Grid>
      </Paper>

      {/* Section supplémentaire : Informations personnelles ou autres détails */}
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
        <Typography variant="h6">Informations supplémentaires</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Ici, vous pouvez ajouter des détails supplémentaires, des informations sur les projets futurs,
          ou même des articles de blog si vous souhaitez que la page de profil soit encore plus riche en contenu.
        </Typography>
      </Paper>
    </Container>
  );
}

export default ProfilePage;
