// src/pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

const NotFound = () => {
  return (
    <Box sx={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h1" sx={{ fontSize: '6rem', color: '#ff0000' }}>
        404
      </Typography>
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>
        Oops! The page you are looking for doesn’t exist.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        You might want to check the URL or return to the homepage.
      </Typography>
      <Button variant="contained" component={Link} to="/" sx={{ marginRight: '10px' }}>
        Go to Homepage
      </Button>
      <Button variant="contained" component={Link} to="/dashboard">
        Go to Dashboard
      </Button>
    </Box>
  );
};

export default NotFound;
