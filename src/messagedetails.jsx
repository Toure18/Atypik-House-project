import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';

const MessageDetails = () => {
  const { id } = useParams();
  const [response, setResponse] = useState('');

  
  const message = {
    id: 1,
    subject: 'Problème avec la réservation',
    date: '2024-08-18',
    time: '14:35',
    content: 'Bonjour, j\'ai un problème avec ma réservation, pouvez-vous m\'aider ?',
  };

  const handleSendResponse = () => {
    console.log('Réponse envoyée:', response);
    setResponse('');
  };

  return (
    <main className="main-container">
      <Box sx={{ p: 3, backgroundColor:'#D87C49' }}>
        <Typography variant="h4" gutterBottom>
          {message.subject}
        </Typography>
        <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
          <Typography variant="body1" gutterBottom>
            Reçu le {message.date} à {message.time}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {message.content}
          </Typography>
        </Paper>
        <TextField
          label="Répondre au message"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          value={response}
          onChange={(e) => setResponse(e.target.value)}
          sx={{ mb: 2, backgroundColor: '#ffff' }}
          
        />
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleSendResponse}
        >
          Envoyer la réponse
        </Button>
      </Box>
    </main>
  );
};

export default MessageDetails;
