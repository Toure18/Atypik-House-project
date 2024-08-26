import React, { useState } from 'react';
import { IconButton, Typography } from '@mui/material';
import { BsFillBellFill, BsPersonCircle, BsFillEnvelopeFill, BsJustify } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import authService from './services/authService';


function Header({ OpenSidebar }) {
  const handleLogout = () => {
    authService.logout();
    window.location.href = '/login';
  };

  const isConnect = authService.isAuthenticated();
  

  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='header-left'>
      </div>
      <div className='header-right'>
        <IconButton href='./notifications'>
            <BsFillBellFill className='icon' />
        </IconButton>
        <IconButton href='./messagelist'>
            <BsFillEnvelopeFill className='icon'/>
        </IconButton>
        {isConnect ? (
          <IconButton onClick={handleLogout}>
            <Typography>Déconnexion</Typography>
          </IconButton>
        ) : null}
        
      </div>
    </header>
  );
}

export default Header;
