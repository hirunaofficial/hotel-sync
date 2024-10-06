// src/components/AddBooking.jsx
import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';

const AddBooking = () => {
  const [bookingDetails, setBookingDetails] = useState({
    customerName: '',
    roomType: '',
    checkInDate: '',
    checkOutDate: '',
    paymentStatus: '',
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your booking submission logic here (e.g., API call)
    console.log('Booking Details Submitted:', bookingDetails);
  };

  return (
    <Box sx={{  maxWidth: 1000,
      mx: 'auto',
      mt: 5,
      padding: 2,
      
}}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
          Add Bookings
        </Typography>
        
       
        <Paper elevation={3} sx={{ padding: 5 }}>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Customer Name"
            name="customerName"
            value={bookingDetails.customerName}
            onChange={handleChange}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Room Type"
            name="roomType"
            value={bookingDetails.roomType}
            onChange={handleChange}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Check-in Date"
            type="date"
            name="checkInDate"
            value={bookingDetails.checkInDate}
            onChange={handleChange}
            required
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            fullWidth
            label="Check-out Date"
            type="date"
            name="checkOutDate"
            value={bookingDetails.checkOutDate}
            onChange={handleChange}
            required
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            fullWidth
            label="Payment Status"
            name="paymentStatus"
            value={bookingDetails.paymentStatus}
            onChange={handleChange}
            required
            margin="normal"
          />
          <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
            Add Booking
          </Button>
        </form>
        </Paper>
    </Box>
  );
};

export default AddBooking;
