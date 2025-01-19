import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const menuItems = [
    { text: 'Home', link: '#' },
    { text: 'About', link: '#about' },
    { text: 'Services', link: '#services' },
    { text: 'Contact', link: '#contact' },
  ];

   // Function to handle smooth scroll
   const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <>
    <AppBar position="sticky" sx={{  backgroundColor: '#fff', color: '#ab7442', }}>
    <Toolbar>
      {/* Brand Logo */}
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
      Vishwakarma Wooden Industry
      </Typography>

      {/* Desktop Menu */}
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        {menuItems.map((item) => (
          <Button key={item.text} color="inherit" href={item.link} onClick={() => handleScroll(item.text)}>
            {item.text}
          </Button>
        ))}
      </Box>

      {/* Mobile Menu Icon */}
      <IconButton
        edge="end"
        aria-label="menu"
        sx={{ display: { xs: 'block', md: 'none' } }}
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
   {/* Drawer for Mobile Menu */}
   <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setIsDrawerOpen(false)}
          onKeyDown={() => setIsDrawerOpen(false)}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.text} component="a" href={item.link}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
  </>
  );
};

export default Header;
