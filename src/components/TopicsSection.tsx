
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
    <section id="topics" className="py-16 md:py-24 bg-card/30 film-grain">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Topics We Cover</h2>
          <p className="text-muted-foreground">
            From classic cinema to modern streaming hits, we explore all aspects of film and television
            with passion and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((topic) => (
            <Card key={topic.category} className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{topic.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {topic.items.map((item) => (
                    <Badge key={item} variant="secondary" className="py-1">
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
