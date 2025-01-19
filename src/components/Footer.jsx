import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';

const Footer = () => {
  return (
    <>
   <Box sx={{ color: '#ab7442', py: 3,  borderTop:'1px solid #ab7442' }}>  
    <Grid container spacing={2} textAlign={'center'}>
        <Grid size={{ xs: 12, md: 6 }}>
        <Typography variant="h6" gutterBottom>Our Expert</Typography>
        Name: Raman Dhiman <br/>
        Specialization: in 3D Door Designs <br/>
        </Grid>
      <Grid size={{ xs: 12, md: 6 }}>  
     
      <Typography variant="h6" gutterBottom>Address</Typography>
        <Typography>
            Keer Chamba, Hatwas <br/>
            Himachal Pradesh <br/>
        </Typography>
      </Grid>
    </Grid>
    
    </Box>
    <Box sx={{ color: '#ab7442', py: 3, textAlign: 'center'}}>  
     <Typography variant="body1">
       © 2025 Vishvakarma Wooden Industries. All Rights Reserved.
     </Typography>
   </Box>
    </>
  );
};

export default Footer;