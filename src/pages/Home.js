import React from 'react';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import ContactForm from '../components/ContactForm';
import SliderBanner from '../components/SiderBanner';

const Home = () => {
  return (
    <div>
      <SliderBanner />
      <Services />
      <AboutUs />
      <ContactForm />
    </div>
  );
};

export default Home;
