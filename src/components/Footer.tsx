
import { Film, Instagram, Twitter, Youtube, Facebook, Headphones } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card py-12 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <Film className="h-8 w-8 text-primary mr-2" />
            <span className="text-xl font-bold">Reel Talk</span>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="p-2 text-foreground/70 hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="p-2 text-foreground/70 hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="p-2 text-foreground/70 hover:text-primary transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="#" className="p-2 text-foreground/70 hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="p-2 text-foreground/70 hover:text-primary transition-colors">
              <Headphones className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8 border-t border-border">
          <div>
            <h3 className="font-medium mb-3">About</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Our Story</a></li>
              <li><a href="#" className="hover:text-primary">The Team</a></li>
              <li><a href="#" className="hover:text-primary">Careers</a></li>
              <li><a href="#" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Podcast</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">All Episodes</a></li>
              <li><a href="#" className="hover:text-primary">Latest Release</a></li>
              <li><a href="#" className="hover:text-primary">Popular Episodes</a></li>
              <li><a href="#" className="hover:text-primary">Schedule</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Film Reviews</a></li>
              <li><a href="#" className="hover:text-primary">TV Show Guides</a></li>
              <li><a href="#" className="hover:text-primary">Movie Lists</a></li>
              <li><a href="#" className="hover:text-primary">Film Festivals</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Listen On</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Spotify</a></li>
              <li><a href="#" className="hover:text-primary">Apple Podcasts</a></li>
              <li><a href="#" className="hover:text-primary">Google Podcasts</a></li>
              <li><a href="#" className="hover:text-primary">Amazon Music</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Reel Talk Podcast. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
            <a href="#" className="hover:text-primary">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
