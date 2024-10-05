import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Menu, MenuItem, Avatar, Badge } from '@mui/material';
import { FaBell } from 'react-icons/fa'; // Notification Icon
import { MdLanguage } from 'react-icons/md'; // Language Selector Icon

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorLangEl, setAnchorLangEl] = useState(null);

  // Example logged-in user details
  const loggedInUser = {
    name: 'John Doe',
    avatarUrl: 'https://i.pravatar.cc/300', // Placeholder for avatar image
  };

  // Handle profile menu opening/closing
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Handle language menu opening/closing
  const handleLanguageMenuOpen = (event) => {
    setAnchorLangEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setAnchorLangEl(null);
  };

  return (
    <AppBar 
      position="fixed" // Keep the header fixed at the top
      sx={{ 
        backgroundColor: '#181D33', 
        width: 'calc(100% - 240px)', // Adjust width based on sidebar
        marginLeft: '240px', // Adjust this based on sidebar width
        zIndex: 1200, // Ensure it stays on top
        borderRadius: '0', // Ensuring no border radius
        boxShadow: 'none', // Optional: Remove box shadow for a flat design
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px' }}>
        
        {/*title on the left */}
        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#fff' }}>
       
        </Typography>

        {/* Right side - Notifications, Language, Profile */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Language Selector */}
          <IconButton color="inherit" onClick={handleLanguageMenuOpen}>
            <MdLanguage />
          </IconButton>
          <Menu
            anchorEl={anchorLangEl}
            open={Boolean(anchorLangEl)}
            onClose={handleLanguageMenuClose}
          >
            <MenuItem onClick={handleLanguageMenuClose}>English</MenuItem>
            <MenuItem onClick={handleLanguageMenuClose}>Spanish</MenuItem>
            <MenuItem onClick={handleLanguageMenuClose}>French</MenuItem>
          </Menu>

          {/* Notification Icon */}
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <FaBell />
            </Badge>
          </IconButton>

          {/* User Profile Section */}
          <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={handleProfileMenuOpen}>
            <Avatar alt={loggedInUser.name} src={loggedInUser.avatarUrl} sx={{ marginRight: '8px' }} />
            <Typography variant="body1" sx={{ color: 'white' }}>
              {loggedInUser.name}
            </Typography>
          </Box>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;