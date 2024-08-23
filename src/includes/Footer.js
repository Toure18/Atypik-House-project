import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import TikTokIcon from '@mui/icons-material/Instagram'; // Material-UI n'a pas de TikTokIcon, InstagramIcon est utilisé comme substitut

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
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton aria-label="Google" sx={{ color: '#fff' }}>
            <GoogleIcon />
          </IconButton>
          <IconButton aria-label="Facebook" sx={{ color: '#fff' }}>
            <FacebookIcon />
          </IconButton>
          <IconButton aria-label="Instagram" sx={{ color: '#fff' }}>
            <InstagramIcon />
          </IconButton>
          
        </Box>
        <Typography variant="body1" sx={{ textAlign: 'center' }}>
          &copy; 2024 Atypik House
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
