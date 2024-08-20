import React from 'react';
import { Container, Grid, Typography, Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import ecoImage from '../reservation/images/img4.jpg';

const BlogPage = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h3" component="h1" align="center" gutterBottom>
                Éco-Responsabilité : Voyager Autrement avec Atypic House
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                    <Card sx={{ borderRadius: '8px', overflow: 'hidden' }}>
                        <CardMedia
                            component="img"
                            alt="Éco-Responsabilité dans les Locations"
                            height="400"
                            image={ecoImage}
                        />
                        <CardContent>
                            <Typography variant="h5" component="h2" gutterBottom>
                                Pourquoi Choisir une Location Éco-Responsable ?
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Les logements éco-responsables ne sont pas seulement une tendance, mais une nécessité. En optant pour des biens locatifs respectueux de l'environnement, vous participez à la préservation des ressources naturelles et à la réduction de l'empreinte carbone. Que ce soit en choisissant une maison équipée de panneaux solaires, un gîte utilisant des matériaux écologiques, ou un appartement avec des pratiques de gestion des déchets exemplaires, chaque geste compte.
                            </Typography>
                            <Typography variant="h5" component="h2" gutterBottom>
                                Atypic House et l'Éco-Responsabilité
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Nos propriétés sont sélectionnées non seulement pour leur charme et leur caractère unique, mais aussi pour leur engagement en faveur de l'environnement.
                            </Typography>
                            <Typography variant="h5" component="h2" gutterBottom>
                                Comment Voyager de Manière Éco-Responsable ?
                            </Typography>
                            <Typography variant="body1" paragraph>
                                En tant que locataire, vous avez également un rôle à jouer. Adoptez des gestes simples pour rendre votre séjour plus respectueux de l’environnement.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box sx={{ position: 'sticky', top: '10px' }}>
                        <Typography variant="h6" component="h2" gutterBottom>
                            Articles Connexes
                        </Typography>
                        <Card sx={{ marginBottom: 2 }}>
                            <CardContent>
                                <Typography variant="subtitle1">Les avantages d'une maison autonome en énergie pour vos vacances</Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{ marginBottom: 2 }}>
                            <CardContent>
                                <Typography variant="subtitle1">Réduire votre empreinte carbone lors de vos séjours</Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{ marginBottom: 2 }}>
                            <CardContent>
                                <Typography variant="subtitle1">Pourquoi le tri des déchets est essentiel en voyage</Typography>
                            </CardContent>
                        </Card>
                        <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
                            <Typography variant="body2" color="textSecondary">
                                Plus d'articles à venir...
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default BlogPage;
