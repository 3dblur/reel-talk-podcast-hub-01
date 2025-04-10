
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
            <a href="/" className="flex items-center gap-2 group">
              <Film className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
              <span className="text-xl font-bold tracking-tight font-cinematic uppercase">Reel Talk</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#episodes" className="text-foreground/80 hover:text-primary px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wide transition-colors duration-300">Episodes</a>
              <a href="#about" className="text-foreground/80 hover:text-primary px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wide transition-colors duration-300">About</a>
              <a href="#topics" className="text-foreground/80 hover:text-primary px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wide transition-colors duration-300">Topics</a>
              <Button size="sm" variant="outline" className="ml-4 border-primary/50 hover:bg-primary/10 text-primary hover:text-white uppercase tracking-wide transition-colors duration-300">
                <Play className="mr-2 h-4 w-4" /> Listen
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-primary hover:text-white">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-b border-primary/20 film-grain">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#episodes" 
              className="text-foreground/80 hover:text-primary block px-3 py-2 rounded-md text-base font-medium uppercase tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              Episodes
            </a>
            <a 
              href="#about" 
              className="text-foreground/80 hover:text-primary block px-3 py-2 rounded-md text-base font-medium uppercase tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#topics" 
              className="text-foreground/80 hover:text-primary block px-3 py-2 rounded-md text-base font-medium uppercase tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              Topics
            </a>
            <div className="pt-2">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white uppercase tracking-wide">
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
