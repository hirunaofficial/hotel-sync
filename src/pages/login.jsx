import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import backgroundImage from '../assets/hotel.jpg'; // Adjust the path to your image

const Login = ({ setRole }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRoleState] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Basic validation: Ensure all fields are filled
    if (!username || !password || !role) {
      setError('All fields are required.');
      return;
    }

    // Simulate login process with simple role-based logic
    if (username === 'admin' && password === 'admin' && role === 'admin') {
      setRole('admin');
      navigate('/dashboard'); // Navigate to dashboard on successful login
    } else if (username === 'staff' && password === 'staff' && role === 'staff') {
      setRole('staff');
      navigate('/dashboard'); // Navigate to dashboard on successful login
    } else {
      setError('Invalid credentials or role.');
    }
  };

  return (
    <Container maxWidth="lg" sx={{ height: '100vh', display: 'flex', flexDirection: 'row' }}>
      {/* Left Side - Purple Background */}
      <Box 
        sx={{ 
          flex: 1, 
          backgroundColor: '#7E60BF', // Purple background
          backgroundImage: `url(${backgroundImage})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          padding: 2,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, fontFamily: 'Arial' }}>
          Welcome Back
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, fontFamily: 'Arial' }}>
          Log in to your account
        </Typography>
        <Box component="img" src={backgroundImage} alt="Background" sx={{ width: '80%', maxWidth: 400 }} />
      </Box>

      {/* Right Side - White Background with Form */}
      <Box 
        sx={{ 
          flex: 1, 
          backgroundColor: '#FFFFFF', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          padding: 4
        }}
      >
        <Box 
          component="form" 
          onSubmit={handleLogin} 
          sx={{ width: '100%', maxWidth: 400, boxShadow: 3, borderRadius: 2, padding: 4 }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#000000' }}>
            Login
          </Typography>

          {error && (
            <Typography variant="body2" sx={{ color: 'red', mb: 2 }}>
              {error}
            </Typography>
          )}

          <FormControl fullWidth margin="normal">
            <InputLabel id="role-select-label" sx={{ color: '#2a2a2a' }}>Role</InputLabel>
            <Select
              labelId="role-select-label"
              value={role}
              onChange={(e) => setRoleState(e.target.value)}
              required
              sx={{ backgroundColor: '#fff', color: '#000000' }}
            >
              <MenuItem value="">
                <em>Select Role</em>
              </MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="staff">Staff</MenuItem>
            </Select>
          </FormControl>
          
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            sx={{ backgroundColor: '#fff', color: '#000000' }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={{ backgroundColor: '#fff', color: '#000000' }}
          />
          
          <Button 
            type="submit" 
            variant="contained" 
            sx={{ 
              backgroundColor: '#6A4D99', 
              color: '#FFFFFF', 
              mt: 2, 
              '&:hover': {
                backgroundColor: '#5E35B1', 
              }
            }}
          >
            Login
          </Button>

          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: '#000000' }}>
              Or login with
            </Typography>
            <Box display="flex" justifyContent="center" mt={1}>
              <Button variant="outlined" sx={{ color: '#000000', borderColor: '#000000', mr: 1, display: 'flex', alignItems: 'center' }}>
                <GoogleIcon sx={{ mr: 1 }} /> Google
              </Button>
              <Button variant="outlined" sx={{ color: '#000000', borderColor: '#000000', display: 'flex', alignItems: 'center' }}>
                <FacebookIcon sx={{ mr: 1 }} /> Facebook
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
