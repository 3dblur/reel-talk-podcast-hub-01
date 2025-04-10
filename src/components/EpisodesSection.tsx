
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EpisodePlayer from './EpisodePlayer';

const episodes = [
  {
    id: 1,
    title: "The Rise of Streaming Wars",
    date: "Apr 10, 2025",
    duration: "58 min",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    description: "George and James discuss how streaming platforms are changing the landscape of film distribution and what it means for theaters."
  },
  {
    id: 2,
    title: "Phil Dunster: Ted Lasso & Beyond",
    date: "Apr 3, 2025",
    duration: "62 min",
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0",
    description: "Special guest Phil Dunster talks about his role as Jamie Tartt, the actor's life, and plays Cast List Countdown."
  },
  {
    id: 3,
    title: "Director Spotlight: Nolan",
    date: "Mar 27, 2025",
    duration: "65 min",
    image: "https://images.unsplash.com/photo-1535016120720-40c646be5580",
    description: "Analyzing Christopher Nolan's unique visual style, narrative techniques, and impact on contemporary cinema."
  }
];

const EpisodesSection = () => {
  return (
    <section id="episodes" className="py-16 md:py-24 bg-card/50 film-grain">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-pulp-pink" style={{ fontFamily: "'Alfa Slab One', serif" }}>Latest Episodes</h2>
            <p className="text-muted-foreground max-w-2xl">Tune in to our latest conversations on everything from blockbuster hits to indie gems.</p>
          </div>
          <Button variant="ghost" className="mt-4 md:mt-0 text-pulp-yellow hover:text-pulp-yellow hover:bg-pulp-yellow/10">
            View All Episodes <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {episodes.map((episode) => (
            <EpisodePlayer
              key={episode.id}
              title={episode.title}
              date={episode.date}
              duration={episode.duration}
              image={episode.image}
              description={episode.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EpisodesSection;
