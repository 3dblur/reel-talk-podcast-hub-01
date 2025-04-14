import React, { useState } from 'react';
import { Instagram, PlayCircle } from 'lucide-react';
import { Pointer } from "@/components/magicui/pointer"; // Import the Pointer component

// Updated Reel Data - *** ADD ACTUAL THUMBNAIL URLS ***
const reels = [
  {
    id: 'DEiHWXXsHW6',
    title: 'Stressful Travel?', // Example Title
    embedUrl: 'https://www.instagram.com/reel/DEiHWXXsHW6/embed',
    reelUrl: 'https://www.instagram.com/reel/DEiHWXXsHW6/',
    thumbnailUrl: '/lovable-uploads/reel1.jpg' // REPLACE with actual thumbnail URL
  },
  {
    id: 'DHllnoNsoWg',
    title: 'Reel Title 2',
    embedUrl: 'https://www.instagram.com/reel/DHllnoNsoWg/embed',
    reelUrl: 'https://www.instagram.com/reel/DHllnoNsoWg/',
    thumbnailUrl: '/lovable-uploads/reel2.jpg' // REPLACE
  },
  {
    id: 'CvxnzscAkLZ',
    title: 'Reel Title 3',
    embedUrl: 'https://www.instagram.com/reel/CvxnzscAkLZ/embed',
    reelUrl: 'https://www.instagram.com/reel/CvxnzscAkLZ/',
    thumbnailUrl: '/lovable-uploads/reel3.jpg' // REPLACE
  },
  {
    id: 'C-krkbls3FW',
    title: 'Reel Title 4',
    embedUrl: 'https://www.instagram.com/reel/C-krkbls3FW/embed',
    reelUrl: 'https://www.instagram.com/reel/C-krkbls3FW/',
    thumbnailUrl: '/lovable-uploads/reel4.jpg' // REPLACE
  },
];

const InstagramReelsSection = () => {
  const [visibleReelId, setVisibleReelId] = useState<string | null>(null);

  const handlePlayClick = (reelId: string) => {
    setVisibleReelId(reelId);
  };

  return (
    <section id="reels" className="py-20 relative overflow-hidden bg-[#FDE300] font-pixel">
      {/* Pointer component placed inside the section */}
      <Pointer>
         {/* Custom pointer: Clapper board emoji */}
        <span className="text-2xl">🎬</span>
      </Pointer>

      {/* Inject CSS to attempt hiding default Instagram embed UI */}
      <style>
        {`
          .instagram-reel-iframe {
            border-radius: inherit !important; /* Inherit parent rounding */
            width: 100% !important;
            height: 100% !important;
            max-width: none !important;
            min-height: 0 !important;
            border: none !important;
            overflow: hidden !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
          }
          /* Add more specific CSS rules here if needed */
          .instagram-reel-iframe .EmbedHeader, 
          .instagram-reel-iframe .Footer,
          .instagram-reel-iframe [class*="EmbedHeader"], 
          .instagram-reel-iframe [class*="Footer"], 
          .instagram-reel-iframe [class*="ProfilePhoto"], 
          .instagram-reel-iframe [class*="Username"], 
          .instagram-reel-iframe [class*="FollowButton"], 
          .instagram-reel-iframe [class*="ViewProfileButton"] {
            display: none !important;
          }
        `}
      </style>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-pulp-red mb-12">
          OUR LATEST REELS
        </h2>

        {/* Reels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reels.map(reel => (
            <div
              key={reel.id}
              // Card container: aspect ratio, themed border, background (for fallback)
              className="relative group aspect-[9/16] overflow-hidden rounded-xl transition-all duration-300 shadow-lg bg-black/10 border-4 border-pulp-red"
              style={{ borderColor: '#000000' }}
            >
              {visibleReelId === reel.id ? (
                // -- IFRAME VISIBLE --
                <iframe
                  src={`${reel.embedUrl}?autoplay=1`} // Attempt autoplay
                  className="instagram-reel-iframe"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency
                  allow="autoplay"
                  title={reel.title}
                />
              ) : (
                // -- THUMBNAIL VISIBLE --
                <button
                  onClick={() => handlePlayClick(reel.id)}
                  className="absolute inset-0 w-full h-full p-0 border-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-pulp-yellow focus:ring-offset-2 focus:ring-offset-pulp-red rounded-lg"
                  aria-label={`Play Reel: ${reel.title}`}
                >
                  {/* Background Image */}
                  <img
                    src={reel.thumbnailUrl} // Use the thumbnail URL
                    alt={`Thumbnail for ${reel.title}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                  {/* Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle className="h-16 w-16 text-pulp-yellow drop-shadow-lg transition-transform duration-300 group-hover:scale-110" style={{ color: '#FDE300' }} />
                  </div>
                  {/* Title at Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-white text-sm font-semibold truncate text-shadow">
                      {reel.title}
                    </p>
                  </div>
                  {/* Instagram Icon (optional link) */}
                  <a
                    href={reel.reelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View on Instagram"
                    onClick={(e) => e.stopPropagation()} // Prevent triggering play click
                    className="absolute top-2 right-2 z-10 p-1.5 bg-pulp-red text-pulp-yellow rounded-full hover:bg-pulp-red/80 transition-colors shadow-md"
                    style={{ backgroundColor: '#CD0744', color: '#FDE300' }}
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://www.instagram.com/pulpkitchenpodcast"
            target="_blank"
            rel="noopener noreferrer"
            // Style like HeroSection Subscribe button
            className="inline-flex items-center px-8 py-4 rounded-full border-2 border-pulp-red text-pulp-red font-medium hover:bg-pulp-red/10 transition-all duration-300 transform hover:scale-105"
          >
            <Instagram className="mr-2 h-5 w-5" />
            Follow @pulpkitchenpodcast
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramReelsSection;
