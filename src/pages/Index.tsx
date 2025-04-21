
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import EpisodesSection from '../components/EpisodesSection';
import AboutSection from '../components/AboutSection';
import InstagramReelsSection from '../components/InstagramReelsSection';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C]">
      <Navbar />
      <HeroSection />
      <EpisodesSection />
      <AboutSection />
      <InstagramReelsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
