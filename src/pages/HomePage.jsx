import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, AppBar, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <Box
      sx={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1506784983877-45594efa4cbe)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        color: '#fff',
      }}
    >
      {/* Overlay */}
      <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', minHeight: '100vh' }}>
        {/* Header */}
        <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none', py: 1 }}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <MenuIcon sx={{ color: '#fff', mr: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#e53935' }}>
                MyTodoApp
              </Typography>
            </Box>
            <Button variant="contained" color="error" onClick={handleLogin}>
              Login
            </Button>
          </Toolbar>
        </AppBar>

        {/* Hero Section */}
        <Box sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
            Clarity isn’t just a goal
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.85)', maxWidth: 600, margin: 'auto' }}>
            It’s a way of life. Join millions of people who are taking control of their time,
            energy, and focus with a to-do app designed to simplify tasks, boost productivity,
            and bring peace of mind every day.
          </Typography>

          {/* Optional image */}
       
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
