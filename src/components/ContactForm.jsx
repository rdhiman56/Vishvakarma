import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const ContactForm = () => {
  return (
    <Box id="contact" sx={{ py: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>Contact Us</Typography>
      <Box component="form" sx={{ maxWidth: 600, mx: 'auto', textAlign: 'center', padding: { xs: '15px', md: '0' } }}>
        <TextField label="Name" fullWidth margin="normal" />
        <TextField label="Email" type="email" fullWidth margin="normal" />
        <TextField label="Message" multiline rows={4} fullWidth margin="normal" />
        <Button variant="" color="" type="submit" sx={{ mt: 2, color: '#fff', border:"1px solid #ab7442", backgroundColor:"#ab7442"}}>Submit</Button>
      </Box>
    </Box>
  );
};

export default ContactForm;
