import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Button,
  Paper,
  Grid
} from '@mui/material';
import { useAuth } from '../contexts/AuthContext';

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography component="h1" variant="h4">
                  This Dashboard Is Build By Youngyz From Pod 9
                </Typography>
                <Button variant="contained" color="secondary" onClick={handleLogout}>
                  Logout
                </Button>
              </Box>
              <Typography variant="h6" gutterBottom>
                Welcome, {user?.username}!
              </Typography>
              <Typography variant="body1" paragraph>
                This is your dashboard. Here you can add your visualizations and data displays.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Sample Visualization
              </Typography>
              <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="body1" color="text.secondary">
                  Add your visualization component here
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                User Information
              </Typography>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="body1" paragraph>
                  Username: {user?.username}
                </Typography>
                <Typography variant="body1" paragraph>
                  Email: {user?.email}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Dashboard; 