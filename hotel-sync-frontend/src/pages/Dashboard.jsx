// src/pages/Dashboard.jsx
import React from 'react';
import { Grid, Paper, Typography, Box, MenuItem, Select } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  Tooltip,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from 'recharts';

const packagesData = [
  { name: 'Strater Package', percentage: 58, color: '#7b61ff' },
  { name: 'Honeymoon Package', percentage: 43, color: '#f4c542' },
  { name: 'Vacation Package', percentage: 33, color: '#3b82f6' },
  { name: 'Continental Package', percentage: 29, color: '#f472b6' },
  { name: 'Spring Package', percentage: 18.49, color: '#f59e0b' },
  { name: 'All suite Package', percentage: 16, color: '#34d399' },
];

const packageChartData = packagesData.map(pkg => ({
  name: pkg.name,
  value: pkg.percentage,
}));

const TopSelectedPackages = () => {
  return (
    <Paper sx={{ p: 3, mt: 2 }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Typography variant="h6" gutterBottom>
          Top Selected Package
        </Typography>
        <Select defaultValue="30 Days" size="small">
          <MenuItem value="30 Days">30 Days</MenuItem>
          <MenuItem value="60 Days">60 Days</MenuItem>
          <MenuItem value="90 Days">90 Days</MenuItem>
        </Select>
      </Grid>

      <Typography variant="body2" color="textSecondary" gutterBottom>
        In last 30 days top selected package.
      </Typography>

      <Box mt={2}>
        {packagesData.map((pkg, index) => (
          <Box key={index} mb={3}>
            <Grid container justifyContent="space-between">
              <Typography variant="body1">{pkg.name}</Typography>
              <Typography variant="body1">{pkg.percentage}%</Typography>
            </Grid>
            <Box sx={{ width: '100%' }}>
              <LinearProgress
                variant="determinate"
                value={pkg.percentage}
                sx={{
                  height: 10,
                  backgroundColor: '#f0f0f0',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: pkg.color,
                  },
                }}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

const Dashboard = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard Overview
      </Typography>

      <Grid container spacing={3}>
        {/* Cards for Summary Stats */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 2, backgroundColor: '#2a2f45', color: 'white' }}>
            <Typography variant="h6">Total Bookings</Typography>
            <Typography variant="h4">120</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 2, backgroundColor: '#2a2f45', color: 'white' }}>
            <Typography variant="h6">Revenue</Typography>
            <Typography variant="h4">$10,000</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 2, backgroundColor: '#2a2f45', color: 'white' }}>
            <Typography variant="h6">New Customers</Typography>
            <Typography variant="h4">32</Typography>
          </Paper>
        </Grid>

        {/* Charts Section */}
        <Grid item xs={12} sm={5}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Package Distribution (Pie Chart)</Typography>
            <PieChart width={300} height={300}>
              <Pie
                data={packageChartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {packagesData.map((pkg, index) => (
                  <Cell key={index} fill={pkg.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Bookings per Package (Bar Chart)</Typography>
            <BarChart
              width={300}
              height={300}
              data={packageChartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#3b82f6" />
            </BarChart>
          </Paper>
        </Grid>

        {/* Top Selected Packages Section */}
        <Grid item xs={12}>
          <TopSelectedPackages />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
