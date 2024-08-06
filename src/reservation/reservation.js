import React, { useState } from 'react';
import { Box, Container, Typography, Paper, Button, Grid } from '@mui/material';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './style/style.css';

import rese from './images/Rectangle 26.png';
import addDays from 'date-fns/addDays'; // If needed for other functionality

function ReservationPage() {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 1), // Default to tomorrow as end date
            key: 'selection'
        }
    ]);

    const today = new Date();

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
                        src={rese}
                        alt="Accommodation View"
                    />
                    <Typography variant="subtitle1" sx={{ mt: 2 }} style={{ textAlign: 'center'}}>
                        Description
                    </Typography>
                    <Typography variant="body2" style={{ textAlign: 'center'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                </Grid>

                {/* Right Column for Property Details and Calendar */}
                <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="h4" component="h1" sx={{ mb: 2, textAlign: 'center' }}>
                        Une nuit sous toile verte
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 1, textAlign: 'center' }}>
                        63€ / nuit
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
                        showDateDisplay={false} // Hides the date input boxes
                        staticRanges={[]} // Removes predefined ranges
                        inputRanges={[]} // Removes input range options
                        style={{ width: '100%', marginBottom: '20px' }} // Ensure the picker takes the full container width
                    />
                    <Button variant="contained" sx={{ width: '50%' }}>Réserver</Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ReservationPage;
