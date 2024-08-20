// components/Connexion.js
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import AuthService from '../../services/authService';
import { useNavigate } from 'react-router-dom';



function Connexion() {
  
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      navigate('/');
    }
  }, [navigate]);

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'L\'adresse email est requise.';
    if (!password) newErrors.password = 'Le mot de passe est requis.';
    return newErrors;
  };


  const handleLogin = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    
    try {
      await AuthService.login(email, password);
      navigate('/');
      window.location.reload();
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors({ general: "L'e-mail ou le mot de passe fourni est incorrect" });
      } else {
        setErrors({ general: "Une erreur s'est produite lors de la connexion." });
      }
    }
  };

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
        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!errors.password}
            helperText={errors.password}
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
          {errors.general && <Typography variant="body2" color="error" sx={{ mt: 2 }}>{errors.general}</Typography>}
        </Box>
      </Box>
      <Typography variant="body2" sx={{ mt: 4, color: theme.palette.primary.main }}>
        Pas de compte ? <Link href="/inscription" underline="none" sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>Inscrivez vous</Link>
      </Typography>
    </Container>
  );
}

export default Connexion;
