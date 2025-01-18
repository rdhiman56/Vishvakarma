import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const ContactForm = () => {
  return (
    <Box id="contact" sx={{ py: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>Contact Us</Typography>
      <Box component="form" sx={{ maxWidth: 600, mx: 'auto', textAlign: 'center' }}>
        <TextField label="Name" fullWidth margin="normal" />
        <TextField label="Email" type="email" fullWidth margin="normal" />
        <TextField label="Message" multiline rows={4} fullWidth margin="normal" />
        <Button variant="contained" color="primary" type="submit">Submit</Button>
      </Box>
    </Box>
  );
};

export default ContactForm;
