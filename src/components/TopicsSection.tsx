
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
    <section id="topics" className="py-16 md:py-24 bg-pulp-red/80 film-grain">
      <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-10 z-0" aria-hidden="true" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">SIGNATURE SEGMENTS</h2>
          <p className="text-white/80 font-pixel">
            From interactive games to in-depth reviews, our signature segments offer something for every film and TV fan.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((topic) => (
            <div key={topic.category} className="pixel-card">
              <h3 className="text-xl font-bold mb-4 text-pulp-yellow font-pixel">{topic.category}</h3>
              <div className="flex flex-wrap gap-2">
                {topic.items.map((item) => (
                  <Badge key={item} variant="secondary" className="py-1 bg-pulp-yellow/20 text-pulp-yellow border border-pulp-yellow/30 font-pixel">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;
