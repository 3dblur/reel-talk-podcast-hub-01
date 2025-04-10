
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
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2">
              <Film className="h-8 w-8 text-pulp-pink" />
              <span className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Alfa Slab One', serif" }}>Pulp Kitchen</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#episodes" className="text-foreground/80 hover:text-pulp-pink px-3 py-2 rounded-md text-sm font-medium">Episodes</a>
              <a href="#about" className="text-foreground/80 hover:text-pulp-pink px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#topics" className="text-foreground/80 hover:text-pulp-pink px-3 py-2 rounded-md text-sm font-medium">Topics</a>
              <Button size="sm" className="ml-4 bg-pulp-yellow text-pulp-black hover:bg-pulp-yellow/90">
                <Play className="mr-2 h-4 w-4" /> Listen Now
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-pulp-pink">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#episodes" 
              className="text-foreground/80 hover:text-pulp-pink block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Episodes
            </a>
            <a 
              href="#about" 
              className="text-foreground/80 hover:text-pulp-pink block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#topics" 
              className="text-foreground/80 hover:text-pulp-pink block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Topics
            </a>
            <div className="pt-2">
              <Button className="w-full bg-pulp-yellow text-pulp-black hover:bg-pulp-yellow/90">
                <Play className="mr-2 h-4 w-4" /> Listen Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
