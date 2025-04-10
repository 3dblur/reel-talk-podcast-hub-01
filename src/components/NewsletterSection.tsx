
import { useState } from 'react';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This would connect to a newsletter service in a real implementation
    toast({
      title: "Thanks for subscribing!",
      description: "You'll receive our next newsletter in your inbox.",
    });
    
    setEmail('');
  };

  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-pulp-red/20 to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-10 z-0" aria-hidden="true" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="h-10 w-10 text-pulp-yellow mx-auto mb-4" />
          <h2 className="section-title">JOIN OUR NEWSLETTER</h2>
          <p className="text-white/80 mb-8 font-pixel">
            Get the latest episodes, exclusive content, and film recommendations delivered straight to your inbox.
          </p>
          
          <div className="pixel-card max-w-md mx-auto bg-black/50 border-pulp-yellow/30">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="hello@pulpkitchenpodcast.com"
                className="flex-grow bg-black/50 border-pulp-yellow/30 text-white font-pixel"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit" 
                className="bg-pulp-yellow text-pulp-black hover:bg-pulp-yellow/90 font-pixel pixel-button"
              >
                SUBSCRIBE
              </Button>
            </form>
          </div>
          
          <p className="text-xs text-white/60 mt-4 font-pixel">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
