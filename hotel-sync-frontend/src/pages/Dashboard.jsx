// src/pages/Dashboard.jsx
import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';

const Dashboard = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard Overview
      </Typography>

      <Grid container spacing={3}>
        {/* Cards for Summary Stats */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2, backgroundColor: '#2a2f45', color: 'white' }}>
            <Typography variant="h6">Total Bookings</Typography>
            <Typography variant="h4">120</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2, backgroundColor: '#2a2f45', color: 'white' }}>
            <Typography variant="h6">Revenue</Typography>
            <Typography variant="h4">$10,000</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2, backgroundColor: '#2a2f45', color: 'white' }}>
            <Typography variant="h6">New Customers</Typography>
            <Typography variant="h4">32</Typography>
          </Paper>
        </Grid>

        {/* Charts or Table Section */}
        <Grid item xs={12}>
          <Paper sx={{ padding: 2 }}>
            {/* Add a chart or table here */}
            <Typography variant="h6">Recent Bookings</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
