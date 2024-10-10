// src/components/EditBooking.jsx
import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
} from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';

const EditBooking = () => {
  // Sample booking data (You would typically fetch this from an API based on the booking ID)
  const [booking, setBooking] = useState({
    id: 1,
    guestName: 'John Doe',
    roomType: 'Deluxe',
    checkIn: '2024-10-01',
    checkOut: '2024-10-05',
    status: 'Confirmed',
  });

  // Handler to update the booking details
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking((prevBooking) => ({
      ...prevBooking,
      [name]: value,
    }));
  };

  // Handler to save the updated booking
  const handleSave = () => {
    // Logic to save the updated booking (e.g., sending to an API)
    console.log('Updated booking:', booking);
    alert('Booking updated successfully!');
  };

  return (
    <Box sx={{ padding: 10 }}>
      <IconButton color="primary" onClick={() => window.history.back()} sx={{ marginBottom: 2 }}>
        <ArrowBackIcon />
      </IconButton>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
        Edit Booking
      </Typography>

      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Guest Name"
                name="guestName"
                value={booking.guestName}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Room Type"
                name="roomType"
                value={booking.roomType}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Check-In Date"
                type="date"
                name="checkIn"
                value={booking.checkIn}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Check-Out Date"
                type="date"
                name="checkOut"
                value={booking.checkOut}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Status"
                name="status"
                value={booking.status}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                required
              />
            </Grid>
          </Grid>
          <Box sx={{ marginTop: 3, display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save Changes
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EditBooking;
