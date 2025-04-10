
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
    <div className="relative min-h-screen overflow-hidden bg-red-600">
      {/* Pixel art background */}
      <div 
        className="absolute inset-0 bg-[url('/lovable-uploads/48d82f99-1af0-45a9-a170-0d508b80a4ff.png')] bg-cover bg-center lg:bg-contain bg-no-repeat z-0 opacity-30"
        aria-hidden="true"
      />
      
      {/* Container for content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 md:pt-32 flex min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
          {/* Left column - Text content */}
          <div className="flex flex-col items-start text-left space-y-6">
            <div 
              className="inline-flex items-center justify-center py-1 px-3 rounded-full text-sm bg-pulp-yellow/20 text-pulp-yellow font-medium animate-pulse-slow"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Calendar className={`h-4 w-4 mr-2 ${isHovered ? 'animate-spin' : ''}`} />
              <span className="relative">
                New Episodes Every Wednesday
                {isHovered && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-pulp-yellow"></span>
                )}
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter mb-2 text-pulp-yellow pixel-text" style={{ fontFamily: "'Alfa Slab One', serif" }}>
              PULP
              <br />
              KITCHEN
            </h1>
            
            <p className="text-2xl sm:text-3xl font-light text-white/90 mb-4 tracking-wide pixel-text-subtitle">
              A FILM PODCAST
            </p>
            
            <p className="text-lg text-white/80 max-w-lg">
              Join hosts George and James for weekly cinema adventures, from blockbuster breakdowns to indie explorations. Witty banter and film expertise in every episode.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 gap-2 bg-pulp-yellow text-black hover:bg-pulp-yellow/90 pixel-button transform hover:scale-105 transition-all"
                onClick={handleLatestEpisodeClick}
              >
                <Play className="h-5 w-5" />
                Latest Episode
              </Button>
              <Button 
                size="lg" 
                variant="outline"  
                className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white/10 pixel-button transform hover:scale-105 transition-all"
                onClick={handleSubscribeClick}
              >
                <Headphones className="h-5 w-5" />
                Subscribe
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-10 w-full max-w-md">
              <div className="pixel-stat">
                <p className="text-4xl font-bold text-pulp-yellow">150+</p>
                <p className="text-sm text-white/60">EPISODES</p>
              </div>
              <div className="pixel-stat">
                <p className="text-4xl font-bold text-pulp-yellow">320K</p>
                <p className="text-sm text-white/60">MONTHLY LISTENERS</p>
              </div>
            </div>
          </div>
          
          {/* Right column - Pixel art hosts */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full h-full flex justify-center">
              <div className="animate-float-slow">
                {/* The main image is already in the background */}
              </div>
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
