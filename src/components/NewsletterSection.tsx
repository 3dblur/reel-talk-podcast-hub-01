
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
    <section className="py-16 md:py-24 bg-pulp-pink/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="h-10 w-10 text-pulp-pink mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pulp-pink" style={{ fontFamily: "'Alfa Slab One', serif" }}>Join Our Newsletter</h2>
          <p className="text-muted-foreground mb-8">
            Get the latest episodes, exclusive content, and film recommendations delivered straight to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="hello@pulpkitchenpodcast.com"
              className="flex-grow"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="bg-pulp-yellow text-pulp-black hover:bg-pulp-yellow/90">Subscribe</Button>
          </form>
          
          <p className="text-xs text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
