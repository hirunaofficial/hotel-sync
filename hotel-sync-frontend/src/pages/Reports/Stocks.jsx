import React, { useState } from 'react';
import {
  Box,
  Button,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Paper,
  Divider,
  IconButton,
} from '@mui/material';
import { FaPlus, FaSearch } from 'react-icons/fa';

const bookingData = [
  {
    id: 1,
    bookingNumber: 'BKG001',
    guestName: 'John Doe',
    roomType: 'Deluxe Room',
    checkIn: '2024-10-10',
    checkOut: '2024-10-15',
    status: 'Confirmed',
  },
  {
    id: 2,
    bookingNumber: 'BKG002',
    guestName: 'Jane Smith',
    roomType: 'Standard Room',
    checkIn: '2024-10-12',
    checkOut: '2024-10-18',
    status: 'Pending',
  },
  {
    id: 3,
    bookingNumber: 'BKG003',
    guestName: 'Alice Johnson',
    roomType: 'Suite',
    checkIn: '2024-10-05',
    checkOut: '2024-10-10',
    status: 'Cancelled',
  },
  // Add more booking data as needed
];

const BookingReport = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter bookings based on search term
  const filteredBookings = bookingData.filter((booking) =>
    booking.guestName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ padding: 10 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
        Booking Report
      </Typography>

      <TextField
        label="Search Guest Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          endAdornment: (
            <IconButton>
              <FaSearch />
            </IconButton>
          ),
        }}
      />

      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Booking Number</TableCell>
              <TableCell>Guest Name</TableCell>
              <TableCell>Room Type</TableCell>
              <TableCell>Check In</TableCell>
              <TableCell>Check Out</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredBookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>{booking.bookingNumber}</TableCell>
                <TableCell>{booking.guestName}</TableCell>
                <TableCell>{booking.roomType}</TableCell>
                <TableCell>{booking.checkIn}</TableCell>
                <TableCell>{booking.checkOut}</TableCell>
                <TableCell>
                  <Chip
                    label={booking.status}
                    color={
                      booking.status === 'Confirmed'
                        ? 'success'
                        : booking.status === 'Pending'
                        ? 'warning'
                        : 'error'
                    }
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>
                  <Button variant="contained" color="primary">
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Divider sx={{ margin: '20px 0' }} />

      <Button
        variant="contained"
        color="primary"
        startIcon={<FaPlus />}
        sx={{ marginTop: 2 }}
      >
        Add Booking
      </Button>
    </Box>
  );
};

export default BookingReport;
