import { Headphones, ArrowRight, Play, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react'; // Removed useEffect as it wasn't used after removing Pointer
import { toast } from '@/components/ui/use-toast'; // Keep toast for button clicks

// Removed Pointer and FontAwesome imports

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  // Removed useNavigate as it wasn't used

  const handleLatestEpisodeClick = () => {
    document.getElementById('episodes')?.scrollIntoView({
      behavior: 'smooth',
    });
    toast({
      title: "Heading to Latest Episode",
      description: "Check out the newest Tech Jobber discussion!",
      duration: 3000,
    });
  };

  const handleSubscribeClick = () => {
    // Ideally, this would link to podcast platforms or a subscribe modal
    toast({
      title: "Subscribe to Tech Jobber",
      description: "Find us on Spotify, Apple Podcasts, YouTube and more!",
      duration: 5000,
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-tj-primary flex items-center" // Updated background, use flex to center content vertically
    >
      {/* Noise overlay */}
      <div
        className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-10 z-0"
        aria-hidden="true"
      />

      {/* Container for content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-24"> {/* Added padding */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full"> {/* Increased gap */} 

          {/* Left column - Text content */}
          <div className="flex flex-col items-start text-left space-y-6"> {/* Adjusted spacing */} 
            <div
              className="inline-flex items-center justify-center py-2 px-4 rounded-md text-sm bg-tj-accent text-tj-text-subtext font-medium font-body-sans uppercase tracking-wider" // Updated styles for the banner
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Calendar className={`h-4 w-4 mr-2 transition-transform ${isHovered ? 'rotate-[360deg] duration-500' : ''}`} /> {/* Simple rotate on hover */} 
              <span className="relative">
                NEW EPISODES WEEKLY {/* Simplified text */} 
              </span>
            </div>

            {/* Podcast Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-title-slab font-black uppercase text-tj-text-main text-shadow shadow-tj-secondary tracking-wide leading-tight"> {/* Applied title font, color, outline, tracking */} 
              Tech Jobber Podcast
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl font-body-sans font-medium uppercase text-tj-text-main tracking-wider"> {/* Applied body font, uppercase, tracking */} 
              Interviewing the champions of the tech industry
            </p>

            {/* Description */}
            <p className="text-lg text-tj-text-main/90 max-w-xl font-body-sans"> {/* Applied body font */} 
              Join host Chris Schwenk for insightful conversations with leaders shaping the future of technology. Powered by Delos Staffing.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4"> {/* Adjusted margin */} 
              <Button
                size="lg"
                className="text-base px-8 py-4 gap-2 bg-tj-accent text-tj-text-subtext hover:bg-opacity-90 font-body-sans font-bold uppercase tracking-wider rounded transition-transform hover:scale-105" // Updated styles for primary button
                onClick={handleLatestEpisodeClick}
              >
                <Play className="h-5 w-5" />
                LATEST EPISODE
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-4 gap-2 border-2 border-tj-secondary text-tj-text-main hover:bg-tj-secondary/20 font-body-sans font-bold uppercase tracking-wider rounded transition-transform hover:scale-105" // Updated styles for secondary button
                onClick={handleSubscribeClick}
              >
                <Headphones className="h-5 w-5" />
                SUBSCRIBE
              </Button>
            </div>

            {/* Stats Section Removed - Not explicitly in the new design focus for hero, can be added elsewhere if needed */} 

          </div>

          {/* Right column - Host Image / Logo */}
          <div className="flex items-center justify-center lg:justify-end"> {/* Adjusted alignment */} 
            <div className="relative w-full max-w-md lg:max-w-lg aspect-square flex items-center justify-center">
              {/* Placeholder for Host Image - Replace with actual image */} 
              {/* <img
                src="/path/to/chris-schwenk-cutout.png" // <-- Replace with actual host image path
                alt="Chris Schwenk, Host of Tech Jobber Podcast"
                className="w-full h-auto object-contain rounded-lg shadow-xl" // Example styling for host image
              /> */} 
               <img
                  src="/lovable-uploads/img2.png" // Using the Lucha mask logo as placeholder/visual element
                  alt="Tech Jobber Podcast Logo"
                  className="w-3/4 h-auto object-contain animate-float-slow" // Adjusted size and added float animation
              />
            </div>
          </div>
        </div>
      </div>
       {/* Removed pixelated border */} 
    </section>
  );
};

export default HeroSection;
