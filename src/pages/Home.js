import React from 'react';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import ContactForm from '../components/ContactForm';
import SliderBanner from '../components/SiderBanner';

const Home = () => {
  return (
    <>
      <SliderBanner />
      <Services />
      <AboutUs />
      <ContactForm />
    </>
  );
};

export default Home;
