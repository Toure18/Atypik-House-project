import React, { useEffect, useState } from 'react';
import { Container, Grid, Paper, Typography, Button, Card, CardMedia, CardContent, CardActions, Box } from '@mui/material';
import { CalendarToday, CheckCircle, HourglassEmpty } from '@mui/icons-material';
import PropertiesService from '../../services/propertieService'; // Importe le service pour récupérer les réservations
import backgroundImage from './images/img4.jpg'; // Assurez-vous d'avoir une image de fond ici

function ReservationsPage() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await PropertiesService.getUserProperties(); // Remplacez ceci par un appel réel à votre API de réservations
        const reservationsData = [
          {
            id: 1,
            propertyName: 'Yourte relaxante',
            dates: '2024-07-15 au 2024-07-18',
            status: 'Confirmée',
            image: 'yourte.jpg'
          },
          {
            id: 2,
            propertyName: 'Chalet en bois',
            dates: '2024-08-02 au 2024-08-05',
            status: 'En attente',
            image: 'chalet.jpg'
          },
          {
            id: 3,
            propertyName: 'Appartement en ville',
            dates: '2024-09-10 au 2024-09-12',
            status: 'Confirmée',
            image: 'appartement.jpg'
          }
        ];
        setReservations(reservationsData);
      } catch (error) {
        console.error('Erreur lors de la récupération des réservations:', error);
      }
    };
    fetchReservations();
  }, []);

  const getImagePath = (imageName) => {
    try {
      return require(`./images/${imageName}`);
    } catch (error) {
      console.error('Erreur lors du chargement de l\'image:', error);
      return null;
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', py: 4, px: 2 }}>
      <Box
        sx={{
          position: 'relative',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          py: 10,
          mb: 4,
          color: 'white',
          textAlign: 'center',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(149, 85, 50, 0.25)', // Overlay avec la couleur #955532 à 25%
            zIndex: 1,
          },
          '& > *': {
            position: 'relative',
            zIndex: 2, // Pour que le texte soit au-dessus de l'overlay
          },
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ 
            fontWeight: 700, 
            letterSpacing: 1.5, 
            mb: 2 
          }}>
            Mes Réservations
          </Typography>
          <Typography variant="h6">
            Retrouvez ici toutes vos réservations passées et à venir.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {reservations.map((reservation) => (
            <Grid item xs={12} md={6} lg={4} key={reservation.id}>
              <Card sx={{
                maxWidth: 345, 
                mx: 'auto', 
                boxShadow: 6, 
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 12,
                }
              }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={getImagePath(reservation.image)}
                  alt={reservation.propertyName}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {reservation.propertyName}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ display: 'flex', alignItems: 'center' }}>
                    <CalendarToday fontSize="small" sx={{ mr: 1 }} />
                    {reservation.dates}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ mt: 1, display: 'flex', alignItems: 'center' }}>
                    {reservation.status === 'Confirmée' ? (
                      <CheckCircle fontSize="small" color="success" sx={{ mr: 1 }} />
                    ) : (
                      <HourglassEmpty fontSize="small" color="warning" sx={{ mr: 1 }} />
                    )}
                    {reservation.status}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="contained" sx={{ mx: 'auto', bgcolor: '#955532', '&:hover': { bgcolor: '#B08C5B' } }}>
                    Voir les détails
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ReservationsPage;
