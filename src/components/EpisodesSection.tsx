import React, { useState } from 'react';
import EpisodePlayer from './EpisodePlayer';
import { Button } from './ui/button';
import { CardContainer, CardBody, CardItem } from './ui/3d-card'; // Keep 3D card for modern effect
import { Play } from 'lucide-react'; // Import Play icon for button

// Define the structure for an episode
interface Episode {
  id: string;
  title: string;
  thumbnailUrl: string;
  // Add optional description or episode number if available/desired
  // description?: string;
  // episodeNumber?: number;
}

// Hardcoded episode data - Replace with dynamic data source if available
const episodes: Episode[] = [
  {
    id: 'nubPIC9Rrb0', // Replace with actual Tech Jobber episode IDs
    title: 'Episode 1: The Future of AI in Recruitment', // Example Title
    thumbnailUrl: 'https://img.youtube.com/vi/nubPIC9Rrb0/hqdefault.jpg', // Use actual thumbnails
  },
  {
    id: 'ePeC_fcR-_M',
    title: 'Episode 2: Building High-Performing Tech Teams', // Example Title
    thumbnailUrl: 'https://img.youtube.com/vi/ePeC_fcR-_M/hqdefault.jpg',
  },
  {
    id: 'ZKDxh3wz8qI',
    title: 'Episode 3: Navigating the Tech Job Market', // Example Title
    thumbnailUrl: 'https://img.youtube.com/vi/ZKDxh3wz8qI/hqdefault.jpg',
  },
  // Add more episodes here
];

const EpisodesSection: React.FC = () => {
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [selectedVideoTitle, setSelectedVideoTitle] = useState<string | undefined>(undefined);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  const handlePlayClick = (videoId: string, title: string) => {
    setSelectedVideoId(videoId);
    setSelectedVideoTitle(title);
    setIsPlayerOpen(true);
  };

  const handleClosePlayer = () => {
    setIsPlayerOpen(false);
    setSelectedVideoId(null);
    setSelectedVideoTitle(undefined);
  };

  return (
    // Section background remains tj-secondary (black)
    <section id="episodes" className="py-16 md:py-24 bg-tj-secondary text-tj-text-main">
      <div className="container mx-auto px-4">
         {/* Section heading remains tj-primary, centered */}
        <h2 className="section-heading text-center mb-12 md:mb-16 text-tj-primary">
          Latest Episodes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {episodes.map((episode) => (
            <CardContainer key={episode.id} className="inter-var" containerClassName="p-0 h-full">
              {/* CardBody: Changed bg to tj-secondary, text to tj-text-main, added border-tj-accent/50 */}
              <CardBody className="bg-tj-secondary text-tj-text-main border border-tj-accent/50 relative group/card hover:shadow-xl hover:shadow-tj-accent/10 w-auto h-full rounded-xl p-6 flex flex-col transition-shadow duration-300">
                <CardItem
                  translateZ="50"
                  className="w-full cursor-pointer mb-4"
                  onClick={() => handlePlayClick(episode.id, episode.title)}
                >
                  <img
                    src={episode.thumbnailUrl}
                    alt={`Thumbnail for ${episode.title}`}
                    className="w-full h-auto aspect-video object-cover rounded-lg group-hover/card:opacity-90 transition-opacity duration-300"
                  />
                </CardItem>
                <CardItem
                  translateZ="60"
                   // Font remains body-sans, color changed to tj-text-main (white)
                  className="text-lg font-semibold my-2 flex-grow font-body-sans text-tj-text-main"
                >
                  {episode.title}
                </CardItem>
                <CardItem
                  translateZ="70"
                  as="div"
                  className="w-full mt-auto pt-4"
                >
                  {/* Button remains tj-primary background and tj-text-main */}
                  <Button
                    variant="default" // Changed variant to default solid button
                    className="w-full bg-tj-primary text-tj-text-main hover:bg-opacity-90 border-0 font-body-sans font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2"
                    onClick={() => handlePlayClick(episode.id, episode.title)}
                  >
                    <Play className="h-4 w-4" />
                    Play Episode
                  </Button>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>

      <EpisodePlayer
        videoId={selectedVideoId}
        isOpen={isPlayerOpen}
        onClose={handleClosePlayer}
        title={selectedVideoTitle}
      />
    </section>
  );
};

export default EpisodesSection;
