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
import { FaPlus, FaSearch, FaEdit, FaTrash } from 'react-icons/fa';

// Sample customer data
const customersData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '+1234567890', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '+0987654321', status: 'Inactive' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com', phone: '+1122334455', status: 'Active' },
  // Add more customer data as needed
];

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter customers based on the search term
  const filteredCustomers = customersData.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Customer Management
      </Typography>

      {/* Search Field */}
      <TextField
        label="Search Customer"
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

      <Divider sx={{ margin: '20px 0' }} />

      {/* Add Customer Button */}
      <Button
        variant="contained"
        color="primary"
        startIcon={<FaPlus />}
        sx={{ marginBottom: 2 }}
      >
        Add Customer
      </Button>

      {/* Customer Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCustomers.map(customer => (
              <TableRow key={customer.id}>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.phone}</TableCell>
                <TableCell>
                  <Chip
                    label={customer.status}
                    color={customer.status === 'Active' ? 'success' : 'error'}
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>
                  <IconButton color="primary" title="Edit">
                    <FaEdit />
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

export default Customers;
