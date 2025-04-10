
import { Award, Radio, Star, ThumbsUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const hosts = [
  {
    name: "George",
    role: "Co-Host",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    bio: "The thoughtful film buff with a knack for spotting pop culture connections. George brings warm, inquisitive, and slightly cheeky commentary to every episode.",
  },
  {
    name: "James",
    role: "Co-Host",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    bio: "The energetic cinephile who brings humor and enthusiasm, often leading games and sparking lively debates. James' style is witty, playful, and engaging.",
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent" aria-hidden="true" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pulp-pink" style={{ fontFamily: "'Alfa Slab One', serif" }}>Meet Your Hosts</h2>
          <p className="text-muted-foreground">
            The dynamic British duo bringing you weekly episodes packed with film reviews, industry news, 
            trivia games, and celebrity interviews.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {hosts.map((host) => (
            <Card key={host.name} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={host.image} 
                  alt={host.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">{host.name}</h3>
                <p className="text-primary text-sm mb-3">{host.role}</p>
                <p className="text-sm text-foreground/80">{host.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
          <Card className="bg-card/50 backdrop-blur-sm border-border p-6 text-center">
            <div className="mx-auto bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Radio className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Weekly Shows</h3>
            <p className="text-sm text-foreground/70">New episodes every Wednesday, with special releases for major film events.</p>
          </Card>
          
          <Card className="bg-card/50 backdrop-blur-sm border-border p-6 text-center">
            <div className="mx-auto bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <ThumbsUp className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Expert Reviews</h3>
            <p className="text-sm text-foreground/70">In-depth, candid reviews of new releases and classics, balancing critical analysis with personal reactions.</p>
          </Card>
          
          <Card className="bg-card/50 backdrop-blur-sm border-border p-6 text-center">
            <div className="mx-auto bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Star className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Guest Interviews</h3>
            <p className="text-sm text-foreground/70">Conversations with actors, directors, and filmmakers about their craft, experiences, and favorite films.</p>
          </Card>
          
          <Card className="bg-card/50 backdrop-blur-sm border-border p-6 text-center">
            <div className="mx-auto bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Award className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Interactive Games</h3>
            <p className="text-sm text-foreground/70">Fan-favorite games like Cast List Countdown that test film knowledge and quick thinking.</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
