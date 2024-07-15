// components/Inscription.js
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import AuthService from '../../services/authService';
import { useNavigate } from 'react-router-dom';


function Inscription() {
  const theme = useTheme();
  const [accountType, setAccountType] = React.useState('');

  const handleAccountTypeChange = (event) => {
    setAccountType(event.target.value);
  };
  
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await AuthService.register(firstname, lastname, email, password, accountType);
      navigate('/connexion');
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography component="h1" variant="h5" color="primary" sx={{ mb: 2 }}>
        Créez votre compte
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
        <Box component="form" onSubmit={handleRegister} noValidate sx={{ mt: 1, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="prenom"
            label="Prénom"
            name="prenom"
            autoComplete="prenom"
            autoFocus
            variant="outlined"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Nom"
            name="name"
            autoComplete="name"
            autoFocus
            variant="outlined"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Adresse Email"
            name="email"
            autoComplete="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Mot de passe"
            type="password"
            id="password"
            autoComplete="new-password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel id="account-type-label">Type de compte</InputLabel>
            <Select
              labelId="account-type-label"
              id="accountType"
              value={accountType}
              onChange={handleAccountTypeChange}
              label="Type de compte"
            >
              <MenuItem value="locataire">Locataire</MenuItem>
              <MenuItem value="propriétaire">Propriétaire</MenuItem>
            </Select>
          </FormControl>
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
            Inscription
          </Button>
        </Box>
      </Box>
      <Typography variant="body2" sx={{ mt: 4, color: theme.palette.primary.main }}>
        Déjà un compte ? <Link href="/connexion" underline="none" sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>Connectez-vous</Link>
      </Typography>
    </Container>
  );
}

export default Inscription;
