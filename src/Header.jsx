import React from 'react';
import { IconButton } from '@mui/material';
import { BsFillBellFill, BsPersonCircle, BsFillEnvelopeFill, BsJustify } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Header({ OpenSidebar }) {
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
            <BsPersonCircle className='icon' />
        
      </div>
    </header>
  );
}

export default Header;
