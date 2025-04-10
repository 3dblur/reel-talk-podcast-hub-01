
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import EpisodesSection from '@/components/EpisodesSection';
import AboutSection from '@/components/AboutSection';
import TopicsSection from '@/components/TopicsSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground film-grain experimental-blend">
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="absolute inset-0 bg-grain opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 animate-film-flicker opacity-30"></div>
      </div>
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
