// src/components/Footer.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#181D33', color: 'white', padding: '16px 0', textAlign: 'center', marginTop: 'auto' }}>
      <Typography variant="body1">© 2024 HotelSync. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
