
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EpisodePlayer from './EpisodePlayer';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';

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
    <section id="episodes" className="py-16 md:py-24 bg-pulp-red/90 film-grain">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="section-title">LATEST EPISODES</h2>
            <p className="text-white/80 max-w-2xl font-pixel">Tune in to our latest conversations on everything from blockbuster hits to indie gems.</p>
          </div>
          <Button variant="ghost" className="mt-4 md:mt-0 text-pulp-yellow hover:text-pulp-yellow hover:bg-pulp-yellow/10 font-pixel">
            VIEW ALL EPISODES <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {episodes.map((episode) => (
            <CardContainer key={episode.id} containerClassName="py-0">
              <CardBody className="bg-black/40 border-2 border-pulp-yellow/40 w-full h-auto rounded-xl p-4">
                <CardItem
                  translateZ="40"
                  className="aspect-video overflow-hidden mb-4 border-2 border-pulp-yellow/40 w-full"
                >
                  <img 
                    src={episode.image} 
                    alt={episode.title} 
                    className="w-full h-full object-cover"
                  />
                </CardItem>
                
                <div className="p-2 w-full">
                  <div className="flex justify-between mb-2 w-full">
                    <CardItem translateZ="30" className="text-pulp-yellow/90 font-pixel w-auto">
                      {episode.date}
                    </CardItem>
                    <CardItem translateZ="30" className="text-white/70 font-pixel w-auto">
                      {episode.duration}
                    </CardItem>
                  </div>
                  
                  <CardItem translateZ="50" className="text-xl font-bold mb-2 text-pulp-yellow font-pixel w-full">
                    {episode.title}
                  </CardItem>
                  
                  <CardItem translateZ="40" className="text-white/80 text-sm mb-4 font-pixel w-full">
                    {episode.description}
                  </CardItem>
                  
                  <CardItem translateZ="60" className="w-full">
                    <Button variant="default" size="sm" className="w-full bg-pulp-yellow text-pulp-black hover:bg-pulp-yellow/90 font-pixel pixel-button">
                      PLAY EPISODE
                    </Button>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EpisodesSection;
