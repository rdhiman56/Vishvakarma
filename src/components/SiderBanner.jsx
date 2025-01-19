import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const banners = [
  {
    title: "Crafting Excellence",
    description: "We create beautiful and durable wooden products.",
    image: "https://t3.ftcdn.net/jpg/08/06/78/46/360_F_806784605_7aw6rF8LCn7qbhZXYNcLzjgh27ii646Q.jpg",
  },
  {
    title: "Custom Furniture",
    description: "Bespoke designs tailored to your needs.",
    image: "https://t3.ftcdn.net/jpg/11/72/21/42/360_F_1172214245_DCDizYJTS3TgJkVrh5vs1Z0ttG2EF4Wx.jpg",
  },
  {
    title: "Sustainable Woodworking",
    description: "Eco-friendly and high-quality materials.",
    image: "https://t3.ftcdn.net/jpg/08/06/78/46/360_F_806784605_7aw6rF8LCn7qbhZXYNcLzjgh27ii646Q.jpg",
  },
];

// Custom arrow components
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <ArrowBackIosIcon
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '50%',
        left: '15px',
        zIndex: 10,
        cursor: 'pointer',
        color: 'white',
        fontSize: '2rem',
      }}
    />
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <ArrowForwardIosIcon
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '50%',
        right: '15px',
        zIndex: 10,
        cursor: 'pointer',
        color: 'white',
        fontSize: '2rem',
      }}
    />
  );
};

const SliderBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <Box
            key={index}
            sx={{
              position: 'relative',
              width: '100%',
              height: '600px',
              background: `url(${banner.image}) no-repeat center center`,
              backgroundSize: 'cover',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '10%',
                transform: 'translateY(-50%)',
                color: 'white',
                zIndex: 10,
                textAlign: 'left',
              }}
            >
              <Typography variant="h3" gutterBottom>
                {banner.title}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {banner.description}
              </Typography>
              <Button
                variant=""
                color="secondary"
                sx={{ mt: 2, color: '#ab7442', backgroundColor:"#fff"}}
              >
                Read More
              </Button>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default SliderBanner;
