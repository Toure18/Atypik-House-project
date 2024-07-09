// components/Footer.js
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

function Footer() {
  const theme = useTheme();

  return (
    <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: theme.palette.primary.main, color: '#fff' }}>
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button color="inherit" sx={{ color: '#B08C5B' }}>Menu 1</Button>
          <Button color="inherit" sx={{ color: '#B08C5B' }}>Menu 2</Button>
          <Button color="inherit" sx={{ color: '#B08C5B' }}>Menu 3</Button>
          <Button color="inherit" sx={{ color: '#B08C5B' }}>Menu 4</Button>
        </Box>
        <Typography variant="body1" sx={{ textAlign: 'center' }}>
          &copy; 2024 Atypik House
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
