import React from 'react';
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Paper, Typography, Button, Chip
} from '@mui/material';

const PaymentMethods = () => {
  // Sample Data
  const paymentMethods = [
    { id: 1, name: "Paypal", email: "info@softnio.com", merchantId: "MNB68", currency: "USD", status: "Active" },
    { id: 2, name: "Paypal hosted", email: "info@softnio.com", merchantId: "99K4", currency: "USD", status: "Inactive" },
    { id: 3, name: "Cash", email: "ashley@softnio.com", merchantId: "--:--", currency: "USD", status: "Active" },
    { id: 4, name: "Visa", email: "larson@example.com", merchantId: "WB04", currency: "USD/Euro", status: "Active" },
    { id: 5, name: "E-Check", email: "frances@example.com", merchantId: "kk1", currency: "USD/Euro", status: "Active" }
  ];

  return (
    <Box sx={{ padding: 10 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
        Payment Methods
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
        Here is the procedure of payment.
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>SL</TableCell>
              <TableCell>Payment Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Merchant ID</TableCell>
              <TableCell>Currency Setting</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paymentMethods.map((method) => (
              <TableRow key={method.id}>
                <TableCell>{method.id}</TableCell>
                <TableCell>{method.name}</TableCell>
                <TableCell>{method.email}</TableCell>
                <TableCell>{method.merchantId}</TableCell>
                <TableCell>{method.currency}</TableCell>
                <TableCell>
                  <Chip 
                    label={method.status} 
                    color={method.status === "Active" ? "success" : "error"} 
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>
                  <Button variant="outlined" size="small" sx={{ marginRight: 1 }}>
                    Edit
                  </Button>
                  <Button variant="outlined" size="small" color="secondary">
                    Delete
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

export default PaymentMethods;
