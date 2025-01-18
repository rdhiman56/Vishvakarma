import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';

const cards = [
  {
    title: "Woodworking Excellence",
    description: "High-quality craftsmanship for your furniture needs.",
    image: "https://img.youtube.com/vi/FyrLKLLp2ts/sddefault.jpg",
    link: "/learn-more",
  },
  {
    title: "Sustainable Materials",
    description: "Eco-friendly and sustainable wooden materials.",
    image: "https://img.youtube.com/vi/FyrLKLLp2ts/sddefault.jpg",
    link: "/sustainability",
  },
  {
    title: "Custom Designs",
    description: "Tailored designs to match your vision.",
    image: "https://img.youtube.com/vi/FyrLKLLp2ts/sddefault.jpg",
    link: "/custom-designs",
  },
  {
    title: "Premium Finish",
    description: "Exceptional finishes that last for years.",
    image: "https://img.youtube.com/vi/FyrLKLLp2ts/sddefault.jpg",
    link: "/premium-finish",
  },
];

const Services = () => {
  return (
    <Grid container spacing={4} sx={{ py: 5  }}>
      {cards.map((card, index) => (
        <Grid size={{ xs: 12, md: 3, sm:6 }} key={index}>
          <Card sx={{ maxWidth: 345, margin: "auto" }}>
            <CardMedia
              component="img"
              height="200"
              image={card.image}
              alt={card.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                href={card.link}
                sx={{ mt: 2 }}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Services;
