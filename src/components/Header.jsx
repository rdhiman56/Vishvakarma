import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { green, orange } from '@mui/material/colors';

const Header = () => {
  return (
    <AppBar position="static"  sx={{ backgroundColor: '#fff', color: '#000', }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Vishvkarma Wooden Industries
        </Typography>
        <Box>
          <Button color="inherit" href="#services">Services</Button>
          <Button color="inherit" href="#about">About Us</Button>
          <Button color="inherit" href="#contact">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
