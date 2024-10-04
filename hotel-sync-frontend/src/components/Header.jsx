// src/components/Header.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#181D33' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSidebar}>
          <FaBars />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          HotelSync
        </Typography>
        {/* Add links or buttons here */}
        <NavLink to="/settings" style={{ color: 'white', textDecoration: 'none', marginRight: '16px' }}>
          Settings
        </NavLink>
        <NavLink to="/support" style={{ color: 'white', textDecoration: 'none', marginRight: '16px' }}>
          Support
        </NavLink>
        <NavLink to="/logout" style={{ color: 'white', textDecoration: 'none' }}>
          Logout
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
