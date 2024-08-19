// components/Navbar.js
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import logo from './images/logo.jpg';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import AuthService from '../services/authService'
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(AuthService.isAuthenticated());
  const navigate = useNavigate();
  const currentUser = AuthService.getCurrentUser();


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    AuthService.logout();
    setIsAuthenticated(false);
    navigate('/connexion');
  };

  const handleProfile = () => {
    handleClose();
    navigate('/profil');
  };

  const handleReservations = () => {
    handleClose();
    navigate('/reservations');
  };

  const handleAccueil = () => {
    handleClose();
    navigate('/');
  };
  const handleProperties = () => {
    handleClose();
    navigate('/collection');
  };
  const handleBlog = () => {
    handleClose();
    navigate('/blog');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', paddingLeft: 0 }}>
      <Toolbar sx={{ maxHeight: '100px', paddingLeft: 0 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <img src={logo} alt="Logo" style={{ height: '100px', marginLeft: 0 }} />
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Button color="inherit" sx={{ color: theme.palette.primary.main }} onClick={handleAccueil}>Accueil</Button>
        <Button color="inherit" sx={{ color: theme.palette.primary.main }} onClick={handleProperties}>Propriétés</Button>
        <Button color="inherit" sx={{ color: theme.palette.primary.main }} onClick={handleBlog}>Blog</Button>

        {isAuthenticated ? (
          <Box>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle sx={{ color: theme.palette.primary.main }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleProfile}>Mon profil</MenuItem>
              <MenuItem onClick={handleReservations}>Mes réservations</MenuItem>
              <MenuItem onClick={handleLogout}>Déconnexion</MenuItem>    
            </Menu>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleProfile}>Mon profil</MenuItem>
              <MenuItem onClick={handleReservations}>Mes réservations</MenuItem>
              <MenuItem onClick={handleLogout}>Déconnexion</MenuItem>    
            </Menu>
          </Box>
        ) : (
          <Button
            color="inherit"
            sx={{ color: theme.palette.primary.main }}
            onClick={() => navigate('/connexion')}
          >
            Connexion
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
