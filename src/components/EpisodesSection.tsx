\
import React, { useState } from 'react';
import EpisodePlayer from './EpisodePlayer';
import { Button } from './ui/button'; // Assuming Button component for interaction
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'; // Assuming Card component for structure

// Define the structure for an episode
interface Episode {
  id: string;
  title: string;
  thumbnailUrl: string;
}

// Hardcoded episode data based on the provided links
const episodes: Episode[] = [
  {
    id: 'nubPIC9Rrb0',
    title: 'Pulp Kitchen Podcast Episode 1',
    thumbnailUrl: 'https://img.youtube.com/vi/nubPIC9Rrb0/hqdefault.jpg',
  },
  {
    id: 'ePeC_fcR-_M',
    title: 'Pulp Kitchen Podcast Episode 2',
    thumbnailUrl: 'https://img.youtube.com/vi/ePeC_fcR-_M/hqdefault.jpg',
  },
  {
    id: 'ZKDxh3wz8qI',
    title: 'Pulp Kitchen Podcast Episode 3',
    thumbnailUrl: 'https://img.youtube.com/vi/ZKDxh3wz8qI/hqdefault.jpg',
  },
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
    <section id="episodes" className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Episodes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {episodes.map((episode) => (
            <Card key={episode.id} className="overflow-hidden flex flex-col">
              <CardHeader className="p-0">
                <img
                  src={episode.thumbnailUrl}
                  alt={`Thumbnail for ${episode.title}`}
                  className="w-full h-auto aspect-video object-cover cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => handlePlayClick(episode.id, episode.title)}
                />
              </CardHeader>
              <CardContent className="p-4 flex-grow">
                <CardTitle className="text-lg font-semibold mb-2">{episode.title}</CardTitle>
                {/* Add description or other details here if needed */}
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => handlePlayClick(episode.id, episode.title)}
                >
                  Play Episode
                </Button>
              </CardFooter>
            </Card>
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
