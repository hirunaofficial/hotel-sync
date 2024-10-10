// src/components/AllBookings.jsx
import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Card,
  CardContent,
  IconButton,
  TableSortLabel,
  Grid,
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon, Add as AddIcon } from '@mui/icons-material';

const AllBookings = () => {
  // Sample booking data (You would normally fetch this from an API)
  const bookings = [
    { id: 1, guestName: 'John Doe', roomType: 'Deluxe', checkIn: '2024-10-01', checkOut: '2024-10-05', status: 'Confirmed' },
    { id: 2, guestName: 'Jane Smith', roomType: 'Standard', checkIn: '2024-10-03', checkOut: '2024-10-10', status: 'Pending' },
    { id: 3, guestName: 'Michael Johnson', roomType: 'Suite', checkIn: '2024-10-04', checkOut: '2024-10-08', status: 'Cancelled' },
    // Add more sample bookings as needed
  ];

  return (
    <Box sx={{ padding: 10 }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
          All Bookings
        </Typography>
        <IconButton color="primary" sx={{ marginLeft: 2 }} onClick={() => alert("Navigate to Add Booking")}>
          <AddIcon />
        </IconButton>
      </Grid>

      <Card>
        <CardContent>
          <Typography variant="h6" component="div" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
            Booking List
          </Typography>
          <TableContainer component={Paper}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <TableSortLabel>Booking ID</TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel>Guest Name</TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel>Room Type</TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel>Check-In Date</TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel>Check-Out Date</TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel>Status</TableSortLabel>
                  </TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell>{booking.id}</TableCell>
                    <TableCell>{booking.guestName}</TableCell>
                    <TableCell>{booking.roomType}</TableCell>
                    <TableCell>{booking.checkIn}</TableCell>
                    <TableCell>{booking.checkOut}</TableCell>
                    <TableCell>{booking.status}</TableCell>
                    <TableCell align="right">
                      <IconButton color="primary">
                        <EditIcon />
                      </IconButton>
                      <IconButton color="secondary">
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AllBookings;
