import React, { useState } from 'react';
import { Instagram, Play, Heart, MessageCircle, X } from 'lucide-react';

interface ReelProps {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  embedUrl: string;
  likes: number;
  comments: number;
}

const InstagramReelsSection = () => {
  const [activeReel, setActiveReel] = useState<string | null>(null);

  const reels: ReelProps[] = [
    {
      id: "reel1",
      title: "Check out this awesome reel",
      thumbnail: "/api/placeholder/400/720",
      videoUrl: "https://www.instagram.com/reel/DEiHWXXsHW6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      embedUrl: "https://www.instagram.com/reel/DEiHWXXsHW6/embed/",
      likes: 1248,
      comments: 87
    },
    {
      id: "reel2",
      title: "Check out this awesome reel",
      thumbnail: "/api/placeholder/400/720",
      videoUrl: "https://www.instagram.com/reel/DEiHWXXsHW6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      embedUrl: "https://www.instagram.com/reel/DEiHWXXsHW6/embed/",
      likes: 952,
      comments: 65
    },
    {
      id: "reel3",
      title: "Check out this awesome reel",
      thumbnail: "/api/placeholder/400/720",
      videoUrl: "https://www.instagram.com/reel/DEiHWXXsHW6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      embedUrl: "https://www.instagram.com/reel/DEiHWXXsHW6/embed/",
      likes: 1563,
      comments: 112
    },
    {
      id: "reel4",
      title: "Check out this awesome reel",
      thumbnail: "/api/placeholder/400/720",
      videoUrl: "https://www.instagram.com/reel/DEiHWXXsHW6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      embedUrl: "https://www.instagram.com/reel/DEiHWXXsHW6/embed/",
      likes: 845,
      comments: 73
    }
  ];

  const handlePlayReel = (id: string) => {
    setActiveReel(id);
  };

  const handleCloseReel = () => {
    setActiveReel(null);
  };

  return (
    <section id="reels" className="py-20 relative overflow-hidden bg-pulp-yellow">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="flex items-center mb-4">
            <Instagram className="w-8 h-8 mr-3 text-purple-500 bg-transparent" />
            <h2 className="text-4xl font-pixel text-pulp-pink md:text-6xl">
              <span className="text-pulp-pink">@</span>pulpkitchen
            </h2>
          </div>
          <p className="text-lg text-center max-w-2xl font-pixel text-pulp-black md:text-2xl">
            Quick takes, hot debates, and behind-the-scenes moments from your favorite film enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reels.map(reel => (
            <div 
              key={reel.id} 
              className="group relative block overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg bg-black/30 border border-purple-500/20"
            >
              <div className="aspect-[9/16] w-full relative">
                <img 
                  src={reel.thumbnail} 
                  alt={reel.title} 
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 flex items-end p-4">
                  <div>
                    <p className="text-sm text-purple-400 mb-1 font-pixel">@pulpkitchen</p>
                    <h3 className="text-lg font-medium text-white font-pixel">{reel.title}</h3>
                  </div>
                </div>
                <button
                  onClick={() => handlePlayReel(reel.id)}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 bg-pulp-pink opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Play className="h-8 w-8 text-white" fill="white" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-2 flex justify-between items-center">
                  <div className="flex items-center">
                    <Heart className="h-4 w-4 text-white mr-1" />
                    <span className="text-white text-xs">{reel.likes}</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="h-4 w-4 text-white mr-1" />
                    <span className="text-white text-xs">{reel.comments}</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 rounded-full p-2 shadow-lg bg-pulp-pink">
                  <Instagram className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a 
            href="https://www.instagram.com/pulpkitchen" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-6 py-3 rounded-full bg-purple-500 text-white font-medium hover:bg-purple-600 transition-colors font-pixel"
          >
            <Instagram className="mr-2 h-5 w-5" />
            Follow @pulpkitchen on Instagram
          </a>
        </div>
      </div>

      {/* Video Modal */}
      {activeReel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-lg md:max-w-2xl lg:max-w-4xl">
            <button 
              onClick={handleCloseReel} 
              className="absolute -top-12 right-0 p-2 text-white bg-pulp-pink rounded-full hover:bg-pulp-pink/80 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="aspect-[9/16] w-full bg-black rounded-xl overflow-hidden">
              <iframe
                src={reels.find(reel => reel.id === activeReel)?.embedUrl}
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default InstagramReelsSection;