
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const topics = [
  {
    category: "Cast List Countdown",
    items: ["Film Trivia", "Actor Recognition", "Quick Thinking", "Film Lineups", "Supporting to Lead", "Interactive Game"]
  },
  {
    category: "Film Reviews",
    items: ["New Releases", "Cinema Classics", "Critical Analysis", "Personal Takes", "Rating System", "Hidden Gems"]
  },
  {
    category: "Rewatches & Rankings",
    items: ["Franchise Deep Dives", "Film Series", "Nostalgia Trips", "Director Rankings", "Legacy Discussions", "Fan Favorites"]
  },
  {
    category: "Guest Chats",
    items: ["Actor Interviews", "Directors", "Industry Insights", "Behind the Scenes", "Film Recommendations", "Career Journeys"]
  }
];

const TopicsSection = () => {
  return (
    <section id="topics" className="py-16 md:py-24 bg-card/30 film-grain">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pulp-pink" style={{ fontFamily: "'Alfa Slab One', serif" }}>Signature Segments</h2>
          <p className="text-muted-foreground">
            From interactive games to in-depth reviews, our signature segments offer something for every film and TV fan.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((topic) => (
            <Card key={topic.category} className="bg-card/50 backdrop-blur-sm border-pulp-pink/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-pulp-yellow" style={{ fontFamily: "'Alfa Slab One', serif" }}>{topic.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {topic.items.map((item) => (
                    <Badge key={item} variant="secondary" className="py-1 bg-pulp-pink/10 text-pulp-pink border border-pulp-pink/20">
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
