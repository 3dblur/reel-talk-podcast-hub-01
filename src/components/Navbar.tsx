
import { useState, useEffect } from 'react';
import { Menu, X, Film, Play } from 'lucide-react';
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-pulp-red/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2">
              <Film className="h-7 w-7 text-pulp-yellow" />
              <span className="text-xl font-bold tracking-tight text-pulp-yellow pixel-text-subtitle" style={{
              fontFamily: "'VT323', monospace"
            }}>PULP KITCHEN</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#episodes" className="text-white hover:text-pulp-yellow px-3 py-2 rounded-md text-base font-medium font-pixel">EPISODES</a>
              <a href="#about" className="text-white hover:text-pulp-yellow px-3 py-2 rounded-md text-base font-medium font-pixel">ABOUT</a>
              <a href="#reels" className="text-white hover:text-pulp-yellow px-3 py-2 rounded-md text-base font-medium font-pixel">@PULPKITCHEN</a>
              <a href="#topics" className="text-white hover:text-pulp-yellow px-3 py-2 rounded-md text-base font-medium font-pixel">TOPICS</a>
              <Button size="sm" className="ml-4 bg-pulp-yellow text-pulp-black hover:bg-pulp-yellow/90 font-pixel pixel-button">
                <Play className="mr-2 h-4 w-4" /> LISTEN NOW
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-pulp-yellow">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-pulp-red border-b border-pulp-yellow/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#episodes" className="text-white hover:text-pulp-yellow block px-3 py-2 rounded-md text-base font-medium font-pixel" onClick={() => setIsMenuOpen(false)}>
              EPISODES
            </a>
            <a href="#about" className="text-white hover:text-pulp-yellow block px-3 py-2 rounded-md text-base font-medium font-pixel" onClick={() => setIsMenuOpen(false)}>
              ABOUT
            </a>
            <a href="#reels" className="text-white hover:text-pulp-yellow block px-3 py-2 rounded-md text-base font-medium font-pixel" onClick={() => setIsMenuOpen(false)}>
              @PULPKITCHEN
            </a>
            <a href="#topics" className="text-white hover:text-pulp-yellow block px-3 py-2 rounded-md text-base font-medium font-pixel" onClick={() => setIsMenuOpen(false)}>
              TOPICS
            </a>
            <div className="pt-2">
              <Button className="w-full bg-pulp-yellow text-pulp-black hover:bg-pulp-yellow/90 font-pixel pixel-button">
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
