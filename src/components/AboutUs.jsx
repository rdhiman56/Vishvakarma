import React from 'react';
import { Box, Stack, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

const AboutUs = () => {
  return (
    <Box id="about" sx={{ py: 5, backgroundColor: '#f5f5f5' }}>
      <Grid container spacing={2} >
        <Grid size={{ xs: 12, md: 6 }}>
          <img src="01.png" alt="About Us" style={{ width: '100%' }} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ padding: { xs: '15px', md: '0' } }}>
          <Typography variant="h4" gutterBottom>About Us</Typography>
          <Typography>
            At Wood Maker, we specialize in creating beautiful and durable wooden products. Our skilled carpenters and artisans bring years of expertise to every project, ensuring top-notch quality.
          </Typography>
          <br/>
          <Typography>
          At <b>Vishvakarma Wooden Industries</b>, we pride ourselves on delivering top-quality 3D design and wooden work services at prices that are both competitive and affordable. Our goal is to make your vision a reality without exceeding your budget.
          </Typography>
          <br/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
