import React from 'react';
// Import relevant icons based on JSON
import { Linkedin, Instagram, Facebook, Twitter, Youtube, Rss } from 'lucide-react'; // Added common podcast/social icons
import { Card } from '@/components/ui/card'; // Using standard Card for simplicity
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // For host image

// Host details based on JSON
const host = {
  name: "Chris Schwenk",
  title: "Tech Recruitment Expert, Host",
  image: "/lovable-uploads/chris-schwenk-placeholder.png", // *** REPLACE with actual path to Chris Schwenk's photo ***
  bio: "Chris brings years of tech recruitment expertise to the mic, interviewing the leading figures and uncovering the stories behind the tech industry's biggest successes. Passionate about connecting talent with opportunity.",
  associatedCompany: {
    name: "Delos Staffing",
    slogan: "Connecting businesses with the best IT professionals",
    logo: "/lovable-uploads/delos-logo-placeholder.png" // *** REPLACE with actual path to Delos Staffing logo ***
  },
  socials: [
    // Map social icons from JSON - using Lucide icons here
    { platform: 'LinkedIn', url: '#', Icon: Linkedin }, // Replace '#' with actual URLs
    { platform: 'Instagram', url: '#', Icon: Instagram },
    { platform: 'Facebook', url: '#', Icon: Facebook },
    // { platform: 'TikTok', url: '#', Icon: TikTok }, // No direct Lucide icon for TikTok
    { platform: 'Spotify', url: '#', Icon: Rss }, // Using RSS icon as placeholder for Spotify/Podcast feed
    { platform: 'X (Twitter)', url: '#', Icon: Twitter },
    { platform: 'YouTube', url: '#', Icon: Youtube }, // Added YouTube if applicable
  ],
};

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-tj-background text-tj-text-subtext">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="section-heading text-tj-primary mb-4">
            Meet Your Host
          </h2>
          <p className="text-lg font-body-sans text-tj-text-subtext/80">
            The driving force behind the Tech Jobber Podcast, bringing you insights from the tech industry champions.
          </p>
        </div>

        {/* Centered card for single host */} 
        <div className="max-w-4xl mx-auto">
          {/* Card reverted to: tj-secondary background, tj-text-main, tj-primary border */} 
          <Card className="bg-tj-secondary text-tj-text-main border border-tj-primary/30 shadow-xl overflow-hidden rounded-lg">
            <div className="md:flex">
              {/* Host Image Area: Gradient background with primary/accent */}
              <div className="md:w-1/3 bg-gradient-to-br from-tj-primary/80 to-tj-accent/60 flex items-center justify-center p-6 md:p-8">
                <Avatar className="w-40 h-40 md:w-48 md:h-48 border-4 border-tj-text-main shadow-lg">
                  <AvatarImage src={host.image} alt={host.name} />
                  <AvatarFallback className="text-tj-secondary font-bold text-4xl">
                    {host.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
              </div>

              {/* Host Details Area */} 
              <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="font-title-slab font-black text-3xl md:text-4xl text-tj-primary mb-1 uppercase tracking-wider">
                    {host.name}
                  </h3>
                  <p className="font-body-sans text-tj-text-main/80 text-base md:text-lg mb-4">
                    {host.title}
                  </p>
                  <p className="font-body-sans text-tj-text-main/90 mb-6 text-base leading-relaxed">
                    {host.bio}
                  </p>

                  {/* Associated Company */}
                  <div className="mb-6 border-t border-tj-primary/20 pt-4 flex items-center gap-4">
                     <img src={host.associatedCompany.logo} alt={`${host.associatedCompany.name} Logo`} className="h-10 w-auto bg-white p-1 rounded" />
                     <div>
                        <p className="font-body-sans text-sm text-tj-text-main/70">Powered by</p>
                        <p className="font-body-sans font-semibold text-tj-text-main">{host.associatedCompany.name}</p>
                     </div>
                  </div>

                  {/* Social Links */}
                  <div>
                    <h4 className="font-body-sans font-semibold mb-3 text-tj-text-main/80 text-sm uppercase tracking-wider">Connect with Chris</h4>
                    <div className="flex flex-wrap gap-4 items-center">
                      {host.socials.map(({ platform, url, Icon }) => (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${host.name} on ${platform}`}
                          className="text-tj-accent hover:text-tj-text-main transition-colors duration-200"
                          title={platform}
                        >
                          <Icon className="w-6 h-6" />
                        </a>
                      ))}
                    </div>
                  </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
