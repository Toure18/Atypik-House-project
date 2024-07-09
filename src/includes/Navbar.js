// components/Navbar.js
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import logo from './images/logo.jpg';
import { useTheme } from '@mui/material/styles';

function Navbar() {
  const theme = useTheme();

  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',paddingLeft: 0 }}>
      <Toolbar sx={{ maxHeight: '100px', paddingLeft: 0 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <img src={logo} alt="Logo" style={{ height: '100px', marginLeft: 0 }} />
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Button color="inherit" sx={{ color: theme.palette.primary.main }}>Menu 1</Button>
        <Button color="inherit" sx={{ color: theme.palette.primary.main }}>Menu 2</Button>
        <Button color="inherit" sx={{ color: theme.palette.primary.main }}>Menu 3</Button>
        <Button color="inherit" sx={{ color: theme.palette.primary.main }}>Menu 4</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
