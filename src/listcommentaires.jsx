import React, { useState } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
} from '@mui/material';

const CommentList = () => {
  const comments = [
    {
      id: 1,
      propertyTitle: 'Appartement Luxueux',
      firstName: 'Alice',
      lastName: 'Martin',
      comment: 'Super séjour, l’appartement était magnifique et très bien situé.',
    },
    {
      id: 2,
      propertyTitle: 'Chambre Confort',
      firstName: 'Bob',
      lastName: 'Brown',
      comment: 'Petit mais confortable, idéal pour une nuit.',
    },
    {
      id: 3,
      propertyTitle: 'Studio Moderne',
      firstName: 'Charlie',
      lastName: 'Davis',
      comment: 'Le studio était propre et bien équipé, je reviendrai certainement.',
    },
    
  ];

  const handleDelete = (id) => {
    // pour supprimer un commentaire
    console.log(`Commentaire ${id} supprimé.`);
  };

  return (
    <main className="main-container">
      <Box sx={{ flexGrow: 1, px: { xs: 2, sm: 3, md: 4 }, py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Liste des Commentaires
        </Typography>
        <TableContainer component={Paper} sx={{ boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', width: '100%' }}>
          <Table sx={{ width: '100%' }}>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#D87C49' }}>
                <TableCell sx={{ color: '#fff', borderBottom: '1px solid #000', fontWeight: 'bold' }}>
                  Titre de la Propriété
                </TableCell>
                <TableCell sx={{ color: '#fff', borderBottom: '1px solid #000', fontWeight: 'bold' }}>
                  Prénom
                </TableCell>
                <TableCell sx={{ color: '#fff', borderBottom: '1px solid #000', fontWeight: 'bold' }}>
                  Nom
                </TableCell>
                <TableCell sx={{ color: '#fff', borderBottom: '1px solid #000', fontWeight: 'bold' }}>
                  Commentaire
                </TableCell>
                <TableCell sx={{ color: '#fff', borderBottom: '1px solid #000', fontWeight: 'bold' }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {comments.map((comment) => (
                <TableRow
                  key={comment.id}
                  sx={{ backgroundColor: '#D87C49', '&:hover': { backgroundColor: '#D5926D' } }}
                >
                  <TableCell sx={{ color: '#fff', borderBottom: '1px solid #000' }}>
                    {comment.propertyTitle}
                  </TableCell>
                  <TableCell sx={{ color: '#fff', borderBottom: '1px solid #000' }}>
                    {comment.firstName}
                  </TableCell>
                  <TableCell sx={{ color: '#fff', borderBottom: '1px solid #000' }}>
                    {comment.lastName}
                  </TableCell>
                  <TableCell sx={{ color: '#fff', borderBottom: '1px solid #000' }}>
                    {comment.comment}
                  </TableCell>
                  <TableCell sx={{ color: '#fff', borderBottom: '1px solid #000', gap: 1 }}>
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={() => handleDelete(comment.id)}
                      sx={{ color: '#fff', borderColor: '#fff' }}
                    >
                      Supprimer
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </main>
  );
};

export default CommentList;
