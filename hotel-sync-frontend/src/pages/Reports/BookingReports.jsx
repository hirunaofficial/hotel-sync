import React from 'react';
import { Box, Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const StockReport = () => {
  const stocks = [
    { id: 1, item: 'Item A', category: 'Category 1', availableStock: 200, price: 150 },
    { id: 2, item: 'Item B', category: 'Category 2', availableStock: 50, price: 100 },
    { id: 3, item: 'Item C', category: 'Category 1', availableStock: 300, price: 200 },
    // Add more data as needed
  ];

  return (
    <Box sx={{ padding: 5 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#3f51b5', marginBottom: 4 }}>
        Stock Report
      </Typography>

      <Card sx={{ marginBottom: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Summary
          </Typography>
          <Typography variant="body2">Total Items: {stocks.length}</Typography>
          <Typography variant="body2">Total Value: ${stocks.reduce((acc, stock) => acc + stock.availableStock * stock.price, 0)}</Typography>
        </CardContent>
      </Card>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '16px' }}>Item</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '16px' }}>Category</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '16px' }}>Available Stock</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '16px' }}>Price (per item)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stocks.map((stock) => (
              <TableRow key={stock.id}>
                <TableCell sx={{ padding: 2 }}>{stock.item}</TableCell>
                <TableCell sx={{ padding: 2 }}>{stock.category}</TableCell>
                <TableCell sx={{ padding: 2 }}>{stock.availableStock}</TableCell>
                <TableCell sx={{ padding: 2 }}>${stock.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default StockReport;
