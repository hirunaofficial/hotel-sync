import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, Divider } from '@mui/material';

const StockReport = () => {
  const stocks = [
    { id: 1, item: 'Item A', category: 'Category 1', availableStock: 200, price: 150 },
    { id: 2, item: 'Item B', category: 'Category 2', availableStock: 50, price: 100 },
    { id: 3, item: 'Item C', category: 'Category 1', availableStock: 300, price: 200 },
  ];

  return (
    <Box sx={{ padding: 10 }}>
      {/* Page Title */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#3f51b5', marginBottom: 3 }}>
        Stock Report
      </Typography>

      {/* Overview Cards */}
      <Grid container spacing={2} sx={{ marginBottom: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary">Total Items</Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold', marginTop: 1 }}>3</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary">Total Stock Value</Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold', marginTop: 1 }}>
                ${stocks.reduce((acc, stock) => acc + stock.availableStock * stock.price, 0)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary">Highest Stock</Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold', marginTop: 1 }}>300</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary">Categories</Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold', marginTop: 1 }}>2</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Filter Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
        <TextField
          label="Date Range"
          type="date"
          defaultValue="2024-01-01"
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ width: '30%' }}
        />
        <TextField
          label="Category"
          select
          SelectProps={{
            native: true,
          }}
          sx={{ width: '30%' }}
        >
          <option value="Category 1">Category 1</option>
          <option value="Category 2">Category 2</option>
        </TextField>
        <Button variant="contained" color="primary" sx={{ height: '56px' }}>
          Apply Filters
        </Button>
      </Box>

      <Divider sx={{ marginBottom: 4 }} />

      {/* Stock Table */}
      <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
        <Table sx={{ minWidth: 750 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '16px' }}>Item</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '16px' }}>Category</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '16px' }}>Available Stock</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '16px' }}>Price (per item)</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '16px' }}>Total Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stocks.map((stock) => (
              <TableRow key={stock.id}>
                <TableCell>{stock.item}</TableCell>
                <TableCell>{stock.category}</TableCell>
                <TableCell>{stock.availableStock}</TableCell>
                <TableCell>${stock.price}</TableCell>
                <TableCell>${stock.availableStock * stock.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default StockReport;
