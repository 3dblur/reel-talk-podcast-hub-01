
import { Film, Instagram, Youtube, Headphones } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6 relative">
      {/* Pixelated border top */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-repeat-x bg-pixelated-border z-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <a href="/" className="flex items-center gap-2 mb-4">
              <Film className="h-6 w-6 text-pulp-yellow" />
              <span className="text-xl font-bold text-pulp-yellow font-pixel">JUMP KITCHEN</span>
            </a>
            <p className="text-white/70 mb-6 font-pixel">
              A weekly film podcast bringing you reviews, interviews, games, and deep dives into cinema classics and new releases.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-pulp-yellow hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-pulp-yellow hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-pulp-yellow hover:text-white transition-colors">
                <Headphones className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-pulp-yellow font-pixel">QUICK LINKS</h3>
            <ul className="space-y-2 font-pixel">
              <li><a href="#" className="text-white/70 hover:text-pulp-yellow">LATEST EPISODE</a></li>
              <li><a href="#" className="text-white/70 hover:text-pulp-yellow">ABOUT US</a></li>
              <li><a href="#" className="text-white/70 hover:text-pulp-yellow">SUBSCRIBE</a></li>
              <li><a href="#" className="text-white/70 hover:text-pulp-yellow">CONTACT</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-pulp-yellow font-pixel">LISTEN ON</h3>
            <ul className="space-y-2 font-pixel">
              <li><a href="#" className="text-white/70 hover:text-pulp-yellow">SPOTIFY</a></li>
              <li><a href="#" className="text-white/70 hover:text-pulp-yellow">APPLE PODCASTS</a></li>
              <li><a href="#" className="text-white/70 hover:text-pulp-yellow">YOUTUBE</a></li>
              <li><a href="#" className="text-white/70 hover:text-pulp-yellow">GOOGLE PODCASTS</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-white/50 font-pixel">© 2025 JUMP KITCHEN. ALL RIGHTS RESERVED.</p>
          <div className="mt-4 sm:mt-0">
            <a href="mailto:hello@pulpkitchenpodcast.com" className="text-sm text-pulp-yellow hover:underline font-pixel">HELLO@PULPKITCHENPODCAST.COM</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
