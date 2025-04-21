import React, { useState } from 'react';
import { Instagram, PlayCircle } from 'lucide-react';
import { Button } from './ui/button'; // Import Button for the follow link

// Reel Data - *** ADD ACTUAL THUMBNAIL URLS and URLs ***
const reels = [
  {
    id: 'reel1', // Use unique IDs
    title: 'Tech Hiring Insights', // Example Title based on theme
    embedUrl: 'https://www.instagram.com/reel/YOUR_REEL_ID_1/embed', // REPLACE
    reelUrl: 'https://www.instagram.com/reel/YOUR_REEL_ID_1/', // REPLACE
    thumbnailUrl: '/lovable-uploads/reel1.jpg' // Placeholder
  },
  {
    id: 'reel2',
    title: 'Interview Tips',
    embedUrl: 'https://www.instagram.com/reel/YOUR_REEL_ID_2/embed', // REPLACE
    reelUrl: 'https://www.instagram.com/reel/YOUR_REEL_ID_2/', // REPLACE
    thumbnailUrl: '/lovable-uploads/reel2.jpg' // Placeholder
  },
  {
    id: 'reel3',
    title: 'Podcast Sneak Peek',
    embedUrl: 'https://www.instagram.com/reel/YOUR_REEL_ID_3/embed', // REPLACE
    reelUrl: 'https://www.instagram.com/reel/YOUR_REEL_ID_3/', // REPLACE
    thumbnailUrl: '/lovable-uploads/reel3.jpg' // Placeholder
  },
  {
    id: 'reel4',
    title: 'Tech Industry Trends',
    embedUrl: 'https://www.instagram.com/reel/YOUR_REEL_ID_4/embed', // REPLACE
    reelUrl: 'https://www.instagram.com/reel/YOUR_REEL_ID_4/', // REPLACE
    thumbnailUrl: '/lovable-uploads/reel4.jpg' // Placeholder
  },
];

const InstagramReelsSection = () => {
  const [visibleReelId, setVisibleReelId] = useState<string | null>(null);

  const handlePlayClick = (reelId: string) => {
    setVisibleReelId(reelId);
  };

  // Optional: Add a close button logic if needed
  const handleCloseReel = () => {
     setVisibleReelId(null);
  }

  return (
    // Section style: tj-background, tj-text-subtext (default)
    <section id="reels" className="py-16 md:py-24 bg-tj-background text-tj-text-subtext relative overflow-hidden">
      {/* CSS to attempt hiding default Instagram embed UI (keep if using embeds) */}
       <style>
        {`
          .instagram-reel-iframe {
            border-radius: inherit !important;
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
          /* More aggressive hiding */
          .instagram-reel-iframe body > div:first-child > div:first-child > div:first-child > div:first-child > div:first-child, /* Header approximation */
          .instagram-reel-iframe footer /* Footer */ {
             display: none !important;
             visibility: hidden !important;
          }
        `}
      </style>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
         {/* Section Title: Use section-heading style (font-title-slab, tj-primary) */}
        <h2 className="section-heading text-center text-tj-primary mb-12 md:mb-16">
          Latest Clips & Insights
        </h2>

        {/* Reels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reels.map(reel => (
            <div
              key={reel.id}
              // Card container: aspect ratio, tj-secondary bg, tj-primary border, shadow
              className="relative group aspect-[9/16] overflow-hidden rounded-lg transition-all duration-300 shadow-md bg-tj-secondary border border-tj-primary/30 hover:shadow-lg hover:shadow-tj-accent/10"
            >
              {visibleReelId === reel.id ? (
                // -- IFRAME VISIBLE --
                <>
                  <iframe
                    src={`${reel.embedUrl}?autoplay=1&t=${Date.now()}`} // Added timestamp
                    className="instagram-reel-iframe"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency
                    allow="autoplay; encrypted-media;"
                    title={reel.title}
                    sandbox="allow-scripts allow-same-origin allow-popups"
                  />
                  {/* Optional: Add a Close button overlay */}
                  {/* <button
                      onClick={handleCloseReel}
                      className="absolute top-2 right-2 z-20 bg-black/50 text-white rounded-full p-1 hover:bg-black/70"
                      aria-label="Close Reel">
                      <X className="h-4 w-4" />
                  </button> */}
                </>
              ) : (
                // -- THUMBNAIL VISIBLE --
                <button
                  onClick={() => handlePlayClick(reel.id)}
                  className="absolute inset-0 w-full h-full p-0 border-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-tj-accent focus:ring-offset-2 focus:ring-offset-tj-secondary rounded-lg" // Focus ring uses tj-accent
                  aria-label={`Play Reel: ${reel.title}`}
                >
                  {/* Background Image */}
                  <img
                    src={reel.thumbnailUrl}
                    alt={`Thumbnail for ${reel.title}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
                    loading="lazy"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-lg"></div>
                  {/* Play Icon: Use tj-accent */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle className="h-16 w-16 text-tj-accent drop-shadow-lg transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  {/* Title at Bottom: Use font-body-sans, tj-text-main */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-tj-text-main text-sm font-body-sans font-semibold truncate">
                      {reel.title}
                    </p>
                  </div>
                  {/* Instagram Icon Link: Use tj-accent bg, tj-text-subtext */}
                  <a
                    href={reel.reelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View on Instagram"
                    onClick={(e) => e.stopPropagation()} // Prevent triggering play click
                    className="absolute top-2 right-2 z-10 p-1.5 bg-tj-accent text-tj-text-subtext rounded-full hover:bg-opacity-80 transition-colors shadow-sm"
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
           {/* Button styling: Uses tj-primary for border/text (outline), font-body-sans, bold, uppercase */}
          <Button
            variant="outline"
            size="lg"
            className="border-tj-primary text-tj-primary hover:bg-tj-primary/10 hover:text-tj-primary font-body-sans font-bold uppercase tracking-wider"
            asChild // Render anchor tag within button styles
          >
            <a
              href="https://www.instagram.com/YOUR_INSTAGRAM_HANDLE" // *** REPLACE with actual Instagram profile URL ***
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Follow on Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramReelsSection;
