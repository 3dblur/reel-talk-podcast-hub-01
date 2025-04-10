
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EpisodePlayer from './EpisodePlayer';

const episodes = [
  {
    id: 1,
    title: "The Rise of Streaming Wars",
    date: "Apr 5, 2025",
    duration: "58 min",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    description: "We discuss how streaming platforms are changing the landscape of film distribution and what it means for theaters."
  },
  {
    id: 2,
    title: "Classic Cinema Retrospective",
    date: "Mar 29, 2025",
    duration: "62 min",
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0",
    description: "A deep dive into the golden age of Hollywood and its influence on modern filmmaking."
  },
  {
    id: 3,
    title: "Director Spotlight: Nolan",
    date: "Mar 22, 2025",
    duration: "65 min",
    image: "https://images.unsplash.com/photo-1535016120720-40c646be5580",
    description: "Analyzing Christopher Nolan's unique visual style, narrative techniques, and impact on contemporary cinema."
  }
];

const EpisodesSection = () => {
  return (
    <section id="episodes" className="py-16 md:py-24 bg-card/30 film-grain analog-glow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 font-cinematic relative inline-block">
              Latest Episodes
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary"></span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mt-4">
              Tune in to our latest conversations on everything from blockbuster hits to indie gems.
            </p>
          </div>
          <Button variant="ghost" className="mt-4 md:mt-0 group">
            View All Episodes <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {episodes.map((episode, index) => (
            <div className="transform transition-transform duration-500 hover:-translate-y-2" key={episode.id} style={{ transitionDelay: `${index * 150}ms` }}>
              <EpisodePlayer
                title={episode.title}
                date={episode.date}
                duration={episode.duration}
                image={episode.image}
                description={episode.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EpisodesSection;
