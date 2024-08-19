import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Paper, Button, Grid } from '@mui/material';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './style/style.css';
import PropertiesService from '../../services/propertieService';
import addDays from 'date-fns/addDays';
import { useParams } from 'react-router-dom';
import reservationService from '../../services/reservationService';
import paymentService from '../../services/paymentService';

function ReservationPage() {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 1),
            key: 'selection'
        }
    ]);

    const today = new Date();
    const [propertie, setPropertie] = useState(null);
    const { propertiesId } = useParams();


    useEffect(() => {
        if (propertiesId) {
            PropertiesService.getPropertyById(propertiesId)
                .then((response) => {
                    setPropertie(response.data[0]);
                })
                .catch((error) => {
                    console.error('Erreur lors de la récupération de la propriété:', error);
                });
        }
    }, [propertiesId]);

    if (!propertie) {
        return <div>Chargement...</div>;
    }

    const getImagePath = (imageName) => {
        try {
            return require(`./images/${imageName}`);
        } catch (error) {
            console.error('Erreur lors du chargement de l\'image:', error);
            return null;
        }
    };

    const handleBooking = () => {
        const bookingData = {
            beginDate: '2024-07-12',
            endDate: '2024-07-12',
        };

        

        reservationService.createBooking(bookingData, propertiesId)
        
            .then((response) => {
                const paymentData = {
                    price: calculateTotalPrice(),
                    status: "pending",
                    booking: response.data.bookingId
                }
                paymentService.createPayment(paymentData)
                .then((response) => {
                    window.location.href = response.sessionUrl;
                })
                .catch((error) => {
                    console.error('Erreur lors du payment:', error);
                });
               
            })
            .catch((error) => {
                console.error('Erreur lors de la création de la réservation:', error);
            });
    };

    const calculateTotalPrice = () => {
        const days = (state[0].endDate - state[0].startDate) / (1000 * 3600 * 24);
        return days * propertie.price;
    };

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Grid container spacing={3}>
                {/* Left Column for Image and Description */}
                <Grid item xs={12} md={6}>
                    <Box
                        component="img"
                        sx={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                            marginBottom: 2
                        }}
                        src={getImagePath(propertie.pictures[0])}
                        alt={propertie.name}
                    />
                    <Typography variant="subtitle1" sx={{ mt: 2 }} style={{ textAlign: 'center' }}>
                        Description
                    </Typography>
                    <Typography variant="body2" style={{ textAlign: 'center' }}>
                        {propertie.description}
                    </Typography>
                </Grid>

                {/* Right Column for Property Details and Calendar */}
                <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="h4" component="h1" sx={{ mb: 2, textAlign: 'center' }}>
                        {propertie.name}
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 1, textAlign: 'center' }}>
                        {propertie.price}€ / nuit
                    </Typography>
                    <Paper elevation={3} sx={{ padding: 2, marginBottom: 2, width: '100%' }}>
                        <Typography variant="body1">Cuisine équipés</Typography>
                        <Typography variant="body1">Wifi</Typography>
                        <Typography variant="body1">5 à 10 personnes max</Typography>
                        <Typography variant="body1">Équipements de base</Typography>
                        <Typography variant="body1">Piscines intérieur</Typography>
                        <Typography variant="body1">Vue sur la forêt</Typography>
                    </Paper>
                    <DateRangePicker
                        ranges={state}
                        onChange={item => setState([item.selection])}
                        minDate={today}
                        showSelectionPreview={true}
                        moveRangeOnFirstSelection={false}
                        months={1}
                        direction="horizontal"
                        showDateDisplay={false}
                        staticRanges={[]}
                        inputRanges={[]}
                        style={{ width: '100%', marginBottom: '20px' }}
                    />
                    <Button variant="contained" sx={{ width: '50%' }} onClick={handleBooking}>Réserver</Button>
                </Grid>
            </Grid>
          
            <Box sx={{ mt: 4, padding: '6rem 0' }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8}>
                        <Box
                            sx={{
                                position: 'relative',
                                overflow: 'hidden',
                                borderRadius: '8px',
                                height: '500px',
                                width: '100%',
                            }}
                        >
                            <Box
                                component="img"
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                                src={getImagePath(propertie.pictures[1])}
                                alt="La piscine"
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontSize: '24px',
                                    fontWeight: 'bold',
                                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                                }}
                            >
                                La piscine
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                position: 'relative',
                                overflow: 'hidden',
                                borderRadius: '8px',
                                height: '500px',
                                width: '100%',
                            }}
                        >
                            <Box
                                component="img"
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                                src={getImagePath(propertie.pictures[2])}
                                alt="La cuisine"
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontSize: '24px',
                                    fontWeight: 'bold',
                                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                                }}
                            >
                                La cuisine
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box
                            sx={{
                                position: 'relative',
                                overflow: 'hidden',
                                borderRadius: '8px',
                                height: '400px',
                                width: '100%',
                                mt: 2,
                            }}
                        >
                            <Box
                                component="img"
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                                src={getImagePath(propertie.pictures[3])}
                                alt="Chambre 1"
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontSize: '24px',
                                    fontWeight: 'bold',
                                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                                }}
                            >
                                Chambre 1
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            
        </Container>
    );
}

export default ReservationPage;
