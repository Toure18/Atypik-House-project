import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useTheme } from '@mui/material/styles';

function ContactForm() {
  const theme = useTheme();
  const [subject, setSubject] = React.useState('');

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', mb : 2 }}>
      <Typography component="h1" variant="h5" color="primary" sx={{ mb: 2 }}>
        Contactez-nous
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
            id="name"
            label="Nom & Prénom"
            name="name"
            autoComplete="name"
            autoFocus
            variant="outlined"
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
          />
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel id="subject-label">Sujet</InputLabel>
            <Select
              labelId="subject-label"
              id="subject"
              value={subject}
              onChange={handleSubjectChange}
              label="Sujet"
            >
              <MenuItem value="support">Problème avec la réservation</MenuItem>
              <MenuItem value="inquiry">Demande d'information</MenuItem>
              <MenuItem value="feedback">Erreur de facturation</MenuItem>
              <MenuItem value="other">Autre</MenuItem>
            </Select>
          </FormControl>
          <TextField
            margin="normal"
            required
            fullWidth
            id="message"
            label="Votre message"
            name="message"
            multiline
            rows={4}
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
            Envoyer
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default ContactForm;
