import React, { useEffect, useState } from 'react';
import { Container, Grid, Card, CardMedia, CardContent, CardActions, Typography, Button, Box } from '@mui/material';
import PropertiesService from '../../services/propertieService'; 
import { Link } from 'react-router-dom';

function CollectionPage() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        PropertiesService.getAllProperties()
            .then((response) => {
                setProperties(response.data);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des propriétés:', error);
            });
    }, []);

    const getImagePath = (imageName) => {
        try {
            return require(`../reservation/images/${imageName}`);
        } catch (error) {
            console.error('Erreur lors du chargement de l\'image:', error);
            return null;
        }
    };

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h4" component="h1" sx={{ mb: 4, textAlign: 'center' }}>
                Collection des Propriétés Disponibles
            </Typography>
            <Grid container spacing={4}>
                {properties.map((property) => (
                    <Grid item key={property.id} xs={12} sm={6} md={4}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                component="img"
                                image={getImagePath(property.pictures[0])}
                                alt={property.name}
                                sx={{ height: 200 }}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {property.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {property.description.substring(0, 100)}...
                                </Typography>
                                <Typography variant="h6" sx={{ mt: 2 }}>
                                    {property.price}€ / nuit
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="small"
                                    color="primary"
                                    component={Link}
                                    to={`/reservation/${property.id}`} 
                                >
                                    Voir plus
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default CollectionPage;
