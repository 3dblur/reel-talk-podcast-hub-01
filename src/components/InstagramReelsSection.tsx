
import React from 'react';
import { Instagram } from 'lucide-react';

interface ReelProps {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
}

const InstagramReelsSection = () => {
  const reels: ReelProps[] = [
    {
      id: "reel1",
      title: "Behind the scenes with David Fincher",
      thumbnail: "/lovable-uploads/0d6bb033-68cd-47ed-905c-ae2aa7948e1a.png",
      videoUrl: "https://www.instagram.com/reel/example1/"
    },
    {
      id: "reel2",
      title: "Hot takes on the latest superhero film",
      thumbnail: "/placeholder.svg",
      videoUrl: "https://www.instagram.com/reel/example2/"
    },
    {
      id: "reel3",
      title: "George's Top 5 Films of 2024",
      thumbnail: "/placeholder.svg",
      videoUrl: "https://www.instagram.com/reel/example3/"
    },
    {
      id: "reel4",
      title: "James breaks down the Oscars controversy",
      thumbnail: "/placeholder.svg",
      videoUrl: "https://www.instagram.com/reel/example4/"
    }
  ];

  return (
    <section id="reels" className="py-20 bg-[#1A1F2C] relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-5"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="flex items-center mb-4">
            <Instagram className="w-8 h-8 mr-3 text-purple-500" />
            <h2 className="text-4xl md:text-5xl font-alfa-slab text-white">
              <span className="text-purple-500">#</span>Jump Kitchen Reels
            </h2>
          </div>
          <p className="text-gray-300 text-lg md:text-xl text-center max-w-2xl">
            Quick takes, hot debates, and behind-the-scenes moments from your favorite film enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reels.map((reel) => (
            <a 
              key={reel.id}
              href={reel.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg bg-black/30"
            >
              <div className="aspect-[9/16] w-full">
                <img 
                  src={reel.thumbnail} 
                  alt={reel.title} 
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 flex items-end p-4">
                  <div>
                    <p className="text-sm text-purple-400 mb-1">@jumpkitchen</p>
                    <h3 className="text-lg font-medium text-white">{reel.title}</h3>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-purple-500 rounded-full p-2 shadow-lg">
                  <Instagram className="h-5 w-5 text-white" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a 
            href="https://www.instagram.com/jumpkitchen" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full bg-purple-500 text-white font-medium hover:bg-purple-600 transition-colors"
          >
            <Instagram className="mr-2 h-5 w-5" />
            Follow us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramReelsSection;
