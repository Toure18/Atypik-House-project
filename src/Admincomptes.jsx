import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
  Button,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import AddIcon from '@mui/icons-material/Add';

const AdminList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [adminStatus, setAdminStatus] = useState({});

  const admins = [
    { id: 1, firstName: 'Alice', lastName: 'Johnson', email: 'alice@example.com', isActive: true },
    { id: 2, firstName: 'Bob', lastName: 'Smith', email: 'bob@example.com', isActive: false },
    { id: 3, firstName: 'Charlie', lastName: 'Brown', email: 'charlie@example.com', isActive: true },
  ];

  const handleViewProfile = (id) => {
    navigate(`/EditAccount`);
  };

  const handleToggleStatus = (id) => {
    setAdminStatus((prevStatus) => ({
      ...prevStatus,
      [id]: !prevStatus[id],
    }));
  };

  const filteredAdmins = admins.filter(admin => {
    return (
      admin.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admin.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admin.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <main className='main-container'>
      <Box sx={{ flexGrow: 1, px: { xs: 2, sm: 3, md: 4 }, py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Liste des Administrateurs
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} flexWrap="wrap">
          <Box display="flex" gap={2} sx={{ backgroundColor: '#D87C49', p: 1, borderRadius: '4px', flexWrap: 'wrap' }}>
          <TextField
            variant="outlined"
            placeholder="Rechercher..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon sx={{ color: '#fff' }} />,
            }}
            sx={{
              input: { color: '#fff', padding: '10px 12px' },
              fieldset: { borderColor: 'transparent' },
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: '#fff',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#fff',
                },
              },
              backgroundColor: '#D87C49',
              borderRadius: '4px',
              height: '40px',
              flex: 1,
            }}
          />
        </Box>
        <Button
            variant="outlined"
            color="error"
            size="small"
            startIcon={<AddIcon />}
            sx={{ color: '#fff', borderColor: '#fff' }}
            >   
                Ajouter un nouveau compte admin
            </Button>
        </Box>
        <TableContainer component={Paper} sx={{ boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', width: '100%' }}>
          <Table sx={{ width: '100%' }}>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#D87C49' }}>
                <TableCell
                  sx={{
                    color: '#fff',
                    borderBottom: '1px solid #000',
                    borderLeft: 'none',
                    borderRight: 'none',
                    fontWeight: 'bold',
                  }}
                >
                  Prénom
                </TableCell>
                <TableCell
                  sx={{
                    color: '#fff',
                    borderBottom: '1px solid #000',
                    borderLeft: 'none',
                    borderRight: 'none',
                    fontWeight: 'bold',
                  }}
                >
                  Nom
                </TableCell>
                <TableCell
                  sx={{
                    color: '#fff',
                    borderBottom: '1px solid #000',
                    borderLeft: 'none',
                    borderRight: 'none',
                    fontWeight: 'bold',
                  }}
                >
                  Email
                </TableCell>
                <TableCell
                  sx={{
                    color: '#fff',
                    borderBottom: '1px solid #000',
                    borderLeft: 'none',
                    borderRight: 'none',
                    fontWeight: 'bold',
                  }}
                >
                  Voir le profil
                </TableCell>
                <TableCell
                  sx={{
                    color: '#fff',
                    borderBottom: '1px solid #000',
                    borderLeft: 'none',
                    borderRight: 'none',
                    fontWeight: 'bold',
                  }}
                >
                  Activer/Désactiver
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredAdmins.map((admin) => (
                <TableRow
                  key={admin.id}
                  sx={{ backgroundColor: '#D87C49', '&:hover': { backgroundColor: '#D5926D' } }}
                >
                  <TableCell
                    sx={{
                      color: '#fff',
                      borderBottom: '1px solid #000',
                      borderLeft: 'none',
                      borderRight: 'none',
                    }}
                  >
                    {admin.firstName}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: '#fff',
                      borderBottom: '1px solid #000',
                      borderLeft: 'none',
                      borderRight: 'none',
                    }}
                  >
                    {admin.lastName}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: '#fff',
                      borderBottom: '1px solid #000',
                      borderLeft: 'none',
                      borderRight: 'none',
                    }}
                  >
                    {admin.email}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: '#fff',
                      borderBottom: '1px solid #000',
                      borderLeft: 'none',
                      borderRight: 'none',
                    }}
                  >
                    <IconButton sx={{ color: '#fff' }} onClick={() => handleViewProfile(admin.id)}>
                      <VisibilityIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell
                    sx={{
                      color: '#fff',
                      borderBottom: '1px solid #000',
                      borderLeft: 'none',
                      borderRight: 'none',
                    }}
                  >
                    <IconButton sx={{ color: '#fff' }} onClick={() => handleToggleStatus(admin.id)}>
                      {adminStatus[admin.id] !== undefined ? (adminStatus[admin.id] ? <ToggleOnIcon /> : <ToggleOffIcon />) : (admin.isActive ? <ToggleOnIcon /> : <ToggleOffIcon />)}
                    </IconButton>
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

export default AdminList;
