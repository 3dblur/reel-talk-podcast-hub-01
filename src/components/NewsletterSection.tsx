
import { useState } from 'react';
import { Mail, Send } from 'lucide-react';
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
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-card/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1527576539890-dfa815648363')] bg-cover bg-center opacity-10 mix-blend-overlay" />
      <div className="absolute inset-0 bg-grain opacity-20 mix-blend-overlay pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="h-10 w-10 text-primary mx-auto mb-4 animate-pulse-slow" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-cinematic">Join Our Newsletter</h2>
          <p className="text-muted-foreground mb-8">
            Get the latest episodes, exclusive content, and film recommendations delivered straight to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative">
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-grow bg-card/50 border-border/50 focus:border-primary/50 transition-colors backdrop-blur-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="relative overflow-hidden group">
              <span className="relative z-10 flex items-center">
                Subscribe <Send className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-cinema-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
          </form>
          
          <p className="text-xs text-muted-foreground mt-4 font-mono-alt tracking-wide">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
