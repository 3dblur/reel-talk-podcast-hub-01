
import { Headphones, ArrowRight, Play, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleLatestEpisodeClick = () => {
    // Scroll to episodes section
    document.getElementById('episodes')?.scrollIntoView({
      behavior: 'smooth'
    });
    
    // Show toast notification
    toast({
      title: "Latest Episode Ready",
      description: "Starting our latest film discussion now!",
      duration: 3000,
    });
  };

  const handleSubscribeClick = () => {
    // Show platforms toast
    toast({
      title: "Choose Your Platform",
      description: "Available on Spotify, Apple Podcasts, YouTube and more!",
      duration: 5000,
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-pulp-red">
      {/* Pixel grid background */}
      <div 
        className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-10 z-0"
        aria-hidden="true"
      />
      
      {/* Container for content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 md:pt-32 flex min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
          {/* Left column - Text content */}
          <div className="flex flex-col items-start text-left space-y-8">
            <div 
              className="inline-flex items-center justify-center py-2 px-4 rounded-md text-base bg-pulp-yellow/20 text-pulp-yellow font-medium animate-pulse-slow"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Calendar className={`h-5 w-5 mr-2 ${isHovered ? 'animate-spin' : ''}`} />
              <span className="relative font-pixel tracking-wide">
                NEW EPISODES EVERY WEDNESDAY
                {isHovered && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-pulp-yellow"></span>
                )}
              </span>
            </div>
            
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-pulp-yellow pixel-text" style={{ fontFamily: "'VT323', monospace" }}>
              JUMP
              <br />
              KITCHEN
            </h1>
            
            <p className="text-3xl sm:text-4xl font-light text-white mb-4 tracking-wide pixel-text-subtitle" style={{ fontFamily: "'VT323', monospace" }}>
              A FILM PODCAST
            </p>
            
            <p className="text-xl text-white/90 max-w-lg font-pixel">
              Join hosts George and James for weekly cinema adventures, from blockbuster breakdowns to indie explorations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 gap-2 bg-pulp-yellow text-black hover:bg-pulp-yellow/90 pixel-button transform hover:scale-105 transition-all font-pixel"
                onClick={handleLatestEpisodeClick}
              >
                <Play className="h-5 w-5" />
                LATEST EPISODE
              </Button>
              <Button 
                size="lg" 
                variant="outline"  
                className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white/10 pixel-button transform hover:scale-105 transition-all font-pixel"
                onClick={handleSubscribeClick}
              >
                <Headphones className="h-5 w-5" />
                SUBSCRIBE
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-6 w-full max-w-md">
              <div className="pixel-stat">
                <p className="text-4xl font-bold text-pulp-yellow font-pixel">150+</p>
                <p className="text-sm text-white/70 font-pixel">EPISODES</p>
              </div>
              <div className="pixel-stat">
                <p className="text-4xl font-bold text-pulp-yellow font-pixel">320K</p>
                <p className="text-sm text-white/70 font-pixel">MONTHLY LISTENERS</p>
              </div>
            </div>
          </div>
          
          {/* Right column - Pixel art hosts */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full h-[600px] flex justify-center">
              <img 
                src="/lovable-uploads/8cddaef1-6f2c-4b7b-b861-978b5ef9a222.png" 
                alt="Pulp Kitchen Hosts in 8-bit style" 
                className="object-contain h-full animate-float-slow"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Pixelated border bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-repeat-x bg-pixelated-border z-20"></div>
    </div>
  );
};

export default HeroSection;
