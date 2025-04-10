
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import EpisodesSection from '@/components/EpisodesSection';
import AboutSection from '@/components/AboutSection';
import TopicsSection from '@/components/TopicsSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <EpisodesSection />
      <AboutSection />
      <TopicsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
