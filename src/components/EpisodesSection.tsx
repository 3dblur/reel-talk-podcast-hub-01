"use client";
import React, { useState } from 'react';
import EpisodePlayer from './EpisodePlayer';
import { Button } from './ui/button'; // Assuming Button component for interaction
import { CardContainer, CardBody, CardItem } from './ui/3d-card'; // Import the 3D card components
import { Pointer } from "@/components/magicui/pointer"; // Import the Pointer component

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
    <section id="episodes" className="py-12 md:py-20 bg-secondary relative">
      {/* Pointer component placed inside the section */}
      <Pointer>
        {/* Custom pointer: Popcorn emoji */}
        <span className="text-2xl">🍿</span>
      </Pointer>

      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-8 md:mb-12">Episodes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {episodes.map((episode) => (
            // Wrap each card with CardContainer
            <CardContainer key={episode.id} className="inter-var" containerClassName="p-0"> {/* Removed default py-20 */}
              <CardBody className="bg-card text-card-foreground relative group/card hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border flex flex-col">
                <CardItem
                  translateZ="50"
                  className="w-full cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => handlePlayClick(episode.id, episode.title)}
                >
                  <img
                    src={episode.thumbnailUrl}
                    alt={`Thumbnail for ${episode.title}`}
                    className="w-full h-auto aspect-video object-cover rounded-t-xl group-hover/card:shadow-xl" // Added rounded-t-xl
                  />
                </CardItem>
                <CardItem
                  translateZ="60"
                  className="text-xl font-semibold my-4 flex-grow" // Added flex-grow
                >
                  {episode.title}
                </CardItem>
                {/* Add description or other details here if needed */}
                <CardItem
                  translateZ="70"
                  as="div" // Use div for CardItem containing the button
                  className="w-full mt-auto" // Added mt-auto to push button down
                >
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => handlePlayClick(episode.id, episode.title)}
                  >
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