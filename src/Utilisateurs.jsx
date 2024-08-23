import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddIcon from '@mui/icons-material/Add';
    

const UserList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');
  const users = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com', accountType: 'Propriétaire' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', accountType: 'Locataire' },
    { id: 3, firstName: 'Michael', lastName: 'Johnson', email: 'michael@example.com', accountType: 'Propriétaire' },
    
  ];

  const handleViewProfile = (id) => {
    navigate(`/profile/${id}`);
  };

  const filteredUsers = users.filter(user => {
    return (
      (user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filter === '' || user.accountType === filter)
    );
  });

  return (
    <main className='main-container'>
        <Box sx={{ flexGrow: 1, px: { xs: 2, sm: 3, md: 4 }, py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
            Liste des Utilisateurs
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
            <FormControl
                variant="outlined"
                sx={{
                minWidth: 150,
                backgroundColor: '#D87C49',
                borderRadius: '4px',
                height: '40px',
                flex: 1,
                }}
            >
                <InputLabel sx={{ color: '#fff', top: '-6px' }}>Filtrer par type</InputLabel>
                <Select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                startAdornment={<FilterListIcon sx={{ color: '#fff' }} />}
                label="Filtrer par type"
                sx={{
                    color: '#fff',
                    '.MuiOutlinedInput-notchedOutline': { borderColor: 'transparent' },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#fff',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#fff',
                    },
                    height: '40px',
                    paddingTop: '12px',
                }}
                >
                <MenuItem value="">Tous les comptes</MenuItem>
                <MenuItem value="Propriétaire">Propriétaire</MenuItem>
                <MenuItem value="Locataire">Locataire</MenuItem>
                </Select>
            </FormControl>
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
                    Type de compte
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
                </TableRow>
            </TableHead>
            <TableBody>
                {filteredUsers.map((user) => (
                <TableRow
                    key={user.id}
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
                    {user.lastName}
                    </TableCell>
                    <TableCell
                    sx={{
                        color: '#fff',
                        borderBottom: '1px solid #000',
                        borderLeft: 'none',
                        borderRight: 'none',
                    }}
                    >
                    {user.firstName}
                    </TableCell>
                    <TableCell
                    sx={{
                        color: '#fff',
                        borderBottom: '1px solid #000',
                        borderLeft: 'none',
                        borderRight: 'none',
                    }}
                    >
                    {user.email}
                    </TableCell>
                    <TableCell
                    sx={{
                        color: '#fff',
                        borderBottom: '1px solid #000',
                        borderLeft: 'none',
                        borderRight: 'none',
                    }}
                    >
                    {user.accountType}
                    </TableCell>
                    <TableCell
                    sx={{
                        color: '#fff',
                        borderBottom: '1px solid #000',
                        borderLeft: 'none',
                        borderRight: 'none',
                    }}
                    >
                    <IconButton sx={{ color: '#fff' }} onClick={() => handleViewProfile(user.id)}>
                      <VisibilityIcon />
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

export default UserList;
