import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#000', color: 'white', py: 3, textAlign: 'center', borderTop:'1px solid #000000' }}>
      <Typography variant="body1">
        © 2025 Vishvkarma Wooden Industries. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;