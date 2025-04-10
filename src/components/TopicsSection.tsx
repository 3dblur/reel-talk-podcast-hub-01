
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const topics = [
  {
    category: "Genres",
    items: ["Sci-Fi", "Drama", "Comedy", "Horror", "Documentary", "Animation", "Thriller", "Action"]
  },
  {
    category: "Eras",
    items: ["Classic Hollywood", "New Hollywood", "80s Cinema", "90s Cult Films", "2000s Blockbusters", "Modern Indies"]
  },
  {
    category: "Formats",
    items: ["Feature Films", "TV Series", "Limited Series", "Streaming Originals", "Documentaries", "Short Films"]
  },
  {
    category: "Industry",
    items: ["Award Shows", "Film Festivals", "Production", "Streaming Platforms", "Film Studios", "Independent Cinema"]
  }
];

const TopicsSection = () => {
  return (
    <section id="topics" className="py-16 md:py-24 bg-card/30 film-grain relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500673922987-e212871fec22')] bg-cover bg-center opacity-5 mix-blend-overlay" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-cinematic">Topics We Cover</h2>
          <p className="text-muted-foreground">
            From classic cinema to modern streaming hits, we explore all aspects of film and television
            with passion and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((topic, index) => (
            <Card 
              key={topic.category} 
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 vintage-blur group"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 font-cinematic relative inline-block">
                  {topic.category}
                  <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-primary group-hover:w-full transition-all duration-500"></span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {topic.items.map((item) => (
                    <Badge 
                      key={item} 
                      variant="secondary" 
                      className="py-1 bg-secondary/50 hover:bg-primary/20 transition-colors cursor-pointer"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;
