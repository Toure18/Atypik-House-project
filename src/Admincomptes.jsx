// src/components/AdminList.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UsersService from './services/usersService';
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
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';

const AdminList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [adminStatus, setAdminStatus] = useState({});

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const users = await UsersService.getUsers();
        const adminUsers = users.filter(user => user.accountType === 'admin');
        setAdmins(adminUsers);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
        setError('Erreur lors de la récupération des utilisateurs.');
        setLoading(false);
      }
    };

    fetchAdmins();
  }, []);

  const handleViewProfile = (id) => {
    navigate(`/EditAccount/${id}`);
  };

  const handleToggleStatus = (id) => {
    setAdminStatus((prevStatus) => ({
      ...prevStatus,
      [id]: !prevStatus[id],
    }));
  };

  const filteredAdmins = admins.filter(admin => {
    return (
      admin.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admin.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admin.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  if (loading) {
    return <Typography variant="h6">Chargement...</Typography>;
  }

  if (error) {
    return <Typography variant="h6">{error}</Typography>;
  }

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
                    {admin.firstname}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: '#fff',
                      borderBottom: '1px solid #000',
                      borderLeft: 'none',
                      borderRight: 'none',
                    }}
                  >
                    {admin.lastname}
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
