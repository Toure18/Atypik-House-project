import React, { useState } from 'react';
import { Box, Typography, Paper, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MailIcon from '@mui/icons-material/Mail';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import { useNavigate } from 'react-router-dom';

const MessageList = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { id: 1, subject: 'Problème avec la réservation', message: 'Bonjour, j\'ai un problème avec ma réservation, pouvez-vous m\'aider ?', date: '2024-08-18', isRead: false },
    { id: 2, subject: 'Demande d\'information', message: 'Pouvez-vous m\'en dire plus sur votre service ?', date: '2024-08-17', isRead: true },
    { id: 3, subject: 'Erreur de facturation', message: 'Il semble y avoir une erreur sur ma facture.', date: '2024-08-16', isRead: false },
  ]);

  const markAsRead = (id) => {
    setMessages(messages.map(message => 
      message.id === id ? { ...message, isRead: true } : message
    ));
  };

  const deleteMessage = (id) => {
    setMessages(messages.filter(message => message.id !== id));
  };

  const handleSelectMessage = (id) => {
    navigate(`/detailmessage`);
  };

  return (
    <main className="main-container">
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Boîte de Réception
        </Typography>
        <Paper elevation={3} sx={{ p: 2 }}>
          <List>
            {messages.map((message) => (
              <div key={message.id}>
                <ListItem
                  button
                  onClick={() => handleSelectMessage(message.id)}
                  sx={{ backgroundColor: message.isRead ? '#E0E0E0' : '#FFF3E0' }}
                >
                  <ListItemText
                    primary={message.subject}
                    secondary={`${message.message.slice(0, 50)}... - ${message.date}`}
                  />
                  <ListItemSecondaryAction>
                    {!message.isRead && (
                      <IconButton edge="end" onClick={() => markAsRead(message.id)} sx={{ color: 'green' }}>
                        <MarkEmailReadIcon />
                      </IconButton>
                    )}
                    <IconButton edge="end" onClick={() => deleteMessage(message.id)} sx={{ color: 'red' }}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
        </Paper>
      </Box>
    </main>
  );
};

export default MessageList;
