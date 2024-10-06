// src/pages/Settings.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Settings = () => {
  return (
    <Box sx={{ padding: 10 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
        Settings
      </Typography>
      {/* Additional Settings Content Here */}
      <Typography variant="h6">General Settings</Typography>
      {/* Add more settings options and inputs here */}
    </Box>
  );
};

export default Settings;
