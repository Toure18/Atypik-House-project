import React, { useState } from 'react';
import { Box, Typography, Paper, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Nouvelle réservation', message: 'Une nouvelle réservation a été effectuée.', date: '2024-08-18', isRead: false },
    { id: 2, title: 'Message de l\'utilisateur', message: 'Un utilisateur vous a envoyé un message.', date: '2024-08-17', isRead: true },
    { id: 3, title: 'Mise à jour du système', message: 'Une mise à jour du système est prévue.', date: '2024-08-16', isRead: false },
  ]);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, isRead: true } : notification
    ));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  return (
    <main className="main-container">
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Notifications
        </Typography>
        <Paper elevation={3} sx={{ p: 2 }}>
          <List>
            {notifications.map((notification) => (
              <div key={notification.id}>
                <ListItem
                  sx={{ backgroundColor: notification.isRead ? '#E0E0E0' : '#FFF3E0' }}
                >
                  <ListItemText
                    primary={notification.title}
                    secondary={`${notification.message} - ${notification.date}`}
                  />
                  <ListItemSecondaryAction>
                    {!notification.isRead && (
                      <IconButton edge="end" onClick={() => markAsRead(notification.id)} sx={{ color: 'green' }}>
                        <CheckIcon />
                      </IconButton>
                    )}
                    <IconButton edge="end" onClick={() => deleteNotification(notification.id)} sx={{ color: 'red' }}>
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

export default Notifications;
