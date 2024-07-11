// components/Connexion.js
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';

function Connexion() {
  const theme = useTheme();

  return (
    <Container component="main" maxWidth="xs" sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography component="h1" variant="h5" color="noire" sx={{ mb: 2 }}>
        Bienvenue !
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: `1px 1px 10px ${theme.palette.primary.main}`,
          padding: 3,
          borderRadius: 2,
          backgroundColor: '#fff',
          width: '100%',
        }}
      >
        <Box component="form" noValidate sx={{ mt: 1, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Adresse Email"
            name="email"
            autoComplete="email"
            autoFocus
            variant="outlined"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Mot de passe"
            type="password"
            id="password"
            autoComplete="current-password"
            variant="outlined"
          />
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            sx={{
              mt: 3,
              mb: 2,
              width: '25%',
              height: '48px',
              borderColor: theme.palette.primary.main,
              color: theme.palette.primary.main,
              borderRadius: '20px',
            }}
          >
            Connexion
          </Button>
        </Box>
      </Box>
      <Typography variant="body2" sx={{ mt: 4, color: theme.palette.primary.main }}>
        Pas de compte ? <Link href="/inscription" underline="none" sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>Inscrivez vous</Link>
      </Typography>
    </Container>
  );
}

export default Connexion;
