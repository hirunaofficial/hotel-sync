import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Box,
  Chip,
  Button,
  Modal,
  MenuItem,
} from '@mui/material';
import { FaPlus } from 'react-icons/fa';

const roomsData = [
  {
    id: 1,
    name: 'Deluxe Room',
    description: 'A luxurious room with a king-size bed and a beautiful view.',
    price: '$150',
    ac: true,
    meals: 'Breakfast included',
    status: 'Available',
  },
  {
    id: 2,
    name: 'Standard Room',
    description: 'Comfortable room with all the basic amenities.',
    price: '$100',
    ac: false,
    meals: 'No meals included',
    status: 'Unavailable',
  },
  {
    id: 3,
    name: 'Suite',
    description: 'Spacious suite with living area and additional comforts.',
    price: '$250',
    ac: true,
    meals: 'Full board included',
    status: 'Available',
  },
  // Add more room data as needed
];

const AllRooms = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [roomDetails, setRoomDetails] = useState({
    roomNumber: '',
    roomType: '',
    price: '',
    description: '',
  });

  // Function to handle opening the modal
  const handleOpen = () => setOpen(true);

  // Function to handle closing the modal
  const handleClose = () => {
    setOpen(false);
    setRoomDetails({ roomNumber: '', roomType: '', price: '', description: '' }); // Reset form
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Room Details:', roomDetails);
    // Add functionality to send this data to your backend or database
    handleClose();
  };

  // Filter rooms based on search term
  const filteredRooms = roomsData.filter((room) =>
    room.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        All Rooms
      </Typography>

      {/* Add Room Button */}
      <Button
        variant="contained"
        color="primary"
        startIcon={<FaPlus />}
        onClick={handleOpen}
      >
        Add Room
      </Button>

      {/* Modal for Adding Room */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="add-room-modal-title"
        aria-describedby="add-room-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="add-room-modal-title" variant="h6" component="h2">
            Add Room
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Room Number"
              fullWidth
              margin="normal"
              value={roomDetails.roomNumber}
              onChange={(e) => setRoomDetails({ ...roomDetails, roomNumber: e.target.value })}
              required
            />
            <TextField
              label="Room Type"
              select
              fullWidth
              margin="normal"
              value={roomDetails.roomType}
              onChange={(e) => setRoomDetails({ ...roomDetails, roomType: e.target.value })}
              required
            >
              <MenuItem value="Single">Single</MenuItem>
              <MenuItem value="Double">Double</MenuItem>
              <MenuItem value="Suite">Suite</MenuItem>
            </TextField>
            <TextField
              label="Price"
              type="number"
              fullWidth
              margin="normal"
              value={roomDetails.price}
              onChange={(e) => setRoomDetails({ ...roomDetails, price: e.target.value })}
              required
            />
            <TextField
              label="Description"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              value={roomDetails.description}
              onChange={(e) => setRoomDetails({ ...roomDetails, description: e.target.value })}
              required
            />
            <Button type="submit" variant="contained" color="primary">
              Save Room
            </Button>
          </form>
        </Box>
      </Modal>

      {/* Search Room Input */}
      <TextField
        label="Search Rooms"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Table for Room List */}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Room Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>AC Status</TableCell>
              <TableCell>Meals</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRooms.map((room) => (
              <TableRow key={room.id}>
                <TableCell>{room.name}</TableCell>
                <TableCell>{room.description}</TableCell>
                <TableCell>{room.price}</TableCell>
                <TableCell>
                  <Chip label={room.ac ? 'AC' : 'Non-AC'} color={room.ac ? 'success' : 'warning'} variant="outlined" />
                </TableCell>
                <TableCell>{room.meals}</TableCell>
                <TableCell>
                  <Chip
                    label={room.status}
                    color={room.status === 'Available' ? 'success' : 'error'}
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" disabled={room.status === 'Unavailable'}>
                    Book Now
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AllRooms;
