import React from 'react';
import { Instagram, Play, Heart, MessageCircle } from 'lucide-react';
interface ReelProps {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  likes: number;
  comments: number;
}
const InstagramReelsSection = () => {
  const reels: ReelProps[] = [{
    id: "reel1",
    title: "Behind the scenes with David Fincher",
    thumbnail: "/lovable-uploads/0d6bb033-68cd-47ed-905c-ae2aa7948e1a.png",
    videoUrl: "https://www.instagram.com/reel/example1/",
    likes: 1248,
    comments: 87
  }, {
    id: "reel2",
    title: "Hot takes on the latest superhero film",
    thumbnail: "/placeholder.svg",
    videoUrl: "https://www.instagram.com/reel/example2/",
    likes: 952,
    comments: 65
  }, {
    id: "reel3",
    title: "George's Top 5 Films of 2024",
    thumbnail: "/placeholder.svg",
    videoUrl: "https://www.instagram.com/reel/example3/",
    likes: 1563,
    comments: 112
  }, {
    id: "reel4",
    title: "James breaks down the Oscars controversy",
    thumbnail: "/placeholder.svg",
    videoUrl: "https://www.instagram.com/reel/example4/",
    likes: 845,
    comments: 73
  }];
  return <section id="reels" className="py-20 relative overflow-hidden bg-pulp-yellow">
      
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
          {reels.map(reel => <div key={reel.id} className="group relative block overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg bg-black/30 border border-purple-500/20">
              <a href={reel.videoUrl} target="_blank" rel="noopener noreferrer" className="block">
                <div className="aspect-[9/16] w-full relative">
                  <img src={reel.thumbnail} alt={reel.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 flex items-end p-4">
                    <div>
                      <p className="text-sm text-purple-400 mb-1 font-pixel">@pulpkitchen</p>
                      <h3 className="text-lg font-medium text-white font-pixel">{reel.title}</h3>
                    </div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 opacity-0 group-hover:opacity-100 transition-opacity bg-pulp-pink px-[15px] mx-0 my-0">
                    <Play className="h-8 w-8 text-white" fill="white" />
                  </div>
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
              </a>
            </div>)}
        </div>

        <div className="mt-10 text-center">
          <a href="https://www.instagram.com/pulpkitchen" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 rounded-full bg-purple-500 text-white font-medium hover:bg-purple-600 transition-colors font-pixel">
            <Instagram className="mr-2 h-5 w-5" />
            Follow @pulpkitchen on Instagram
          </a>
        </div>
      </div>
    </section>;
};
export default InstagramReelsSection;