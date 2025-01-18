import React from 'react';
import { Box, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

const AboutUs = () => {
  return (
    <Box id="about" sx={{ py: 5, backgroundColor: '#f5f5f5' }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <img src="01.png" alt="About Us" style={{ width: '100%' }} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h4" gutterBottom>About Us</Typography>
          <Typography>
            At Wood Maker, we specialize in creating beautiful and durable wooden products. Our skilled carpenters and artisans bring years of expertise to every project, ensuring top-notch quality.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
