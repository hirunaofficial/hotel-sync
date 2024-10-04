// src/pages/AdminSupport.jsx
import React, { useState } from 'react';
import {
  Box,
  Button,
  Chip,
  Divider,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Paper,
} from '@mui/material';
import { FaPlus, FaSearch, FaEye, FaTrash } from 'react-icons/fa';

const supportRequestsData = [
  { id: 1, user: 'John Doe', requestType: 'Technical Issue', status: 'Open' },
  { id: 2, user: 'Jane Smith', requestType: 'Billing Query', status: 'Resolved' },
  { id: 3, user: 'Alice Johnson', requestType: 'General Inquiry', status: 'Open' },
  // Add more requests as needed
];

const AdminSupport = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRequests, setFilteredRequests] = useState(supportRequestsData);

  // Handle search
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = supportRequestsData.filter(request =>
      request.user.toLowerCase().includes(term) || request.requestType.toLowerCase().includes(term)
    );
    setFilteredRequests(filtered);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Admin Support System
      </Typography>

      <TextField
        label="Search Support Requests"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={handleSearch}
        InputProps={{
          endAdornment: (
            <IconButton>
              <FaSearch />
            </IconButton>
          ),
        }}
      />

      <Divider sx={{ margin: '20px 0' }} />

      <Button
        variant="contained"
        color="primary"
        startIcon={<FaPlus />}
        sx={{ marginBottom: 2 }}
      >
        Add Support Request
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell>Request Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRequests.map(request => (
              <TableRow key={request.id}>
                <TableCell>{request.user}</TableCell>
                <TableCell>{request.requestType}</TableCell>
                <TableCell>
                  <Chip
                    label={request.status}
                    color={request.status === 'Open' ? 'warning' : 'success'}
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>
                  <IconButton color="primary" title="View">
                    <FaEye />
                  </IconButton>
                  <IconButton color="error" title="Delete">
                    <FaTrash />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AdminSupport;
