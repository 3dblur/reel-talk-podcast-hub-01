import { useState } from 'react';
import { Mail, Send } from 'lucide-react'; // Added Send icon
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "SUBMISSION SENT!",
      description: "Thanks for subscribing! Check your inbox.",
      // Keep toast simple or theme it if a 'pixel-toast' style exists
    });
    setEmail('');
  };

  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Background Noise and Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-pulp-red/20 to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-10 z-0" aria-hidden="true" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex justify-center">
        {/* Main Content Card */}
        <div className="pixel-card max-w-2xl w-full bg-[#11151F]/80 border-2 border-pulp-yellow p-8 md:p-10 backdrop-blur-sm text-center">
          
          {/* Card Header */}
          <Mail className="h-12 w-12 text-pulp-yellow mx-auto mb-5 animate-bounce" /> {/* Changed animation */}
          <h2 className="text-3xl md:text-4xl font-title-slab font-black uppercase tracking-wider text-pulp-yellow mb-4 text-shadow shadow-black/50">
            STAY UPDATED
          </h2>
          <p className="text-white/80 mb-8 font-pixel text-base md:text-lg max-w-md mx-auto">
            Subscribe to get the latest episodes, exclusive content, and film news directly in your inbox.
          </p>

          {/* Form Area */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="ENTER EMAIL ADDRESS..." // Changed placeholder
              className="flex-grow bg-black/60 border-pulp-yellow/60 text-white font-pixel placeholder:text-white/40 focus:ring-pulp-yellow focus:border-pulp-yellow text-center sm:text-left h-12 text-base px-4" // Added padding
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email for newsletter"
            />
            <Button
              type="submit"
              className="bg-pulp-yellow text-pulp-black hover:bg-pulp-yellow/90 font-pixel pixel-button w-full sm:w-auto h-12 text-base flex items-center justify-center gap-2 px-6 shrink-0" // Added shrink-0
            >
              <Send className="h-4 w-4" /> {/* Changed icon to Send */}
              SUBMIT
            </Button>
          </form>

          {/* Privacy Note */}
          <p className="text-xs text-white/60 mt-6 font-pixel uppercase">
            No Spam. Unsubscribe Anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;