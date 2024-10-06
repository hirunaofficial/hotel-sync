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
    <Box sx={{ padding: 10 }}>
      <Typography variant="h4" gutterBottomsx={{ fontWeight: 'bold', color: '#3f51b5' }}>
        Stock Report
      </Typography>

      <Card sx={{ marginBottom: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Summary
          </Typography>
          <Typography variant="body2">Total Items: {stocks.length}</Typography>
          <Typography variant="body2">Total Value: ${stocks.reduce((acc, stock) => acc + stock.availableStock * stock.price, 0)}</Typography>
        </CardContent>
      </Card>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Available Stock</TableCell>
              <TableCell>Price (per item)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stocks.map((stock) => (
              <TableRow key={stock.id}>
                <TableCell>{stock.item}</TableCell>
                <TableCell>{stock.category}</TableCell>
                <TableCell>{stock.availableStock}</TableCell>
                <TableCell>${stock.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default StockReport;
