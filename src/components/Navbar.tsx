import { useState, useEffect } from 'react';
import { Menu, X, Play } from 'lucide-react'; // Removed Film icon as it wasn't used
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-tj-secondary/90 backdrop-blur-md border-b border-tj-primary/50 shadow-lg' // Updated background, border, shadow
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20"> {/* Increased height slightly for logo */}
          <div className="flex items-center">
            {/* Use the provided logo */}
            <a href="/" className="flex items-center gap-2">
              <img src="/lovable-uploads/img2.png" alt="Tech Jobber Podcast Logo" className="h-12 w-auto" /> {/* Updated logo path and alt text, adjusted height */}
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {/* Updated Nav Links */}
              <a
                href="#episodes"
                className="text-tj-text-main hover:text-tj-primary px-3 py-2 rounded-md text-sm font-medium font-body-sans uppercase tracking-wider" // Updated styles
              >
                EPISODES
              </a>
              <a
                href="#about"
                className="text-tj-text-main hover:text-tj-primary px-3 py-2 rounded-md text-sm font-medium font-body-sans uppercase tracking-wider" // Updated styles
              >
                ABOUT
              </a>
              <a
                href="#reels"
                className="text-tj-text-main hover:text-tj-primary px-3 py-2 rounded-md text-sm font-medium font-body-sans uppercase tracking-wider" // Updated styles
              >
                SOCIALS {/* Changed text to be more generic */}
              </a>
              <a
                href="#topics"
                className="text-tj-text-main hover:text-tj-primary px-3 py-2 rounded-md text-sm font-medium font-body-sans uppercase tracking-wider" // Updated styles
              >
                TOPICS
              </a>
              <Button
                size="sm"
                className="ml-4 bg-tj-primary text-tj-text-main hover:bg-opacity-90 font-body-sans uppercase font-bold text-sm tracking-wider" // Updated button styles
              >
                <Play className="mr-2 h-4 w-4" /> LISTEN NOW
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-tj-primary hover:bg-tj-primary/10" // Updated mobile menu icon color
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-tj-secondary border-b border-tj-primary/50"> {/* Updated mobile menu background and border */}
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#episodes"
              className="text-tj-text-main hover:text-tj-primary block px-3 py-2 rounded-md text-base font-medium font-body-sans uppercase tracking-wider" // Updated styles
              onClick={() => setIsMenuOpen(false)}
            >
              EPISODES
            </a>
            <a
              href="#about"
              className="text-tj-text-main hover:text-tj-primary block px-3 py-2 rounded-md text-base font-medium font-body-sans uppercase tracking-wider" // Updated styles
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </a>
            <a
              href="#reels"
              className="text-tj-text-main hover:text-tj-primary block px-3 py-2 rounded-md text-base font-medium font-body-sans uppercase tracking-wider" // Updated styles
              onClick={() => setIsMenuOpen(false)}
            >
              SOCIALS {/* Changed text to be more generic */}
            </a>
            <a
              href="#topics"
              className="text-tj-text-main hover:text-tj-primary block px-3 py-2 rounded-md text-base font-medium font-body-sans uppercase tracking-wider" // Updated styles
              onClick={() => setIsMenuOpen(false)}
            >
              TOPICS
            </a>
            <div className="pt-2 px-1"> {/* Added padding for button */}
              <Button className="w-full bg-tj-primary text-tj-text-main hover:bg-opacity-90 font-body-sans uppercase font-bold text-sm tracking-wider"> {/* Updated button styles */}
                <Play className="mr-2 h-4 w-4" /> LISTEN NOW
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
