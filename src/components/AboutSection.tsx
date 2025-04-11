import React from 'react';
// Added Zap icon
import { Twitter, Instagram, Youtube, Globe, Zap, Mic } from 'lucide-react';
import { CardContainer, CardBody, CardItem } from './ui/3d-card';

const brandRed = '#C72C4F';
const brandYellow = '#FFEA4F';

const hosts = [
  {
    name: "George",
    role: "Co-Host",
    image: "/lovable-uploads/img1.png", // Replace with actual path
    bio: "The thoughtful film buff. George brings warm, inquisitive, and slightly cheeky commentary.", // Shortened for space if needed
    socials: [
      { platform: 'Twitter', url: '#', icon: Twitter },
      { platform: 'Instagram', url: '#', icon: Instagram },
      { platform: 'Website', url: '#', icon: Globe },
    ],
    // NEW Quirky Fact
    quirkyFact: "Has successfully negotiated peace treaties between warring factions of garden gnomes in three separate dimensions.",
    bgColor: brandRed,
    textColor: 'text-white',
    accentColor: brandYellow,
    accentTextColor: 'text-gray-900'
  },
  {
    name: "James",
    role: "Co-Host",
    image: "/lovable-uploads/img2.png", // Replace with actual path
    bio: "The energetic cinephile. James' style is witty, playful, and engaging, often leading games.", // Shortened
    socials: [
      { platform: 'Twitter', url: '#', icon: Twitter },
      { platform: 'Youtube', url: '#', icon: Youtube },
    ],
    // NEW Quirky Fact
    quirkyFact: "Claims his cat provides all his best movie review insights via elaborately coded meows.",
    bgColor: brandYellow,
    textColor: 'text-gray-900',
    accentColor: brandRed,
    accentTextColor: 'text-white'
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 style={{ color: brandRed }} className="text-3xl md:text-4xl font-bold mb-4">
            MEET YOUR HOSTS
          </h2>
          <p className="text-lg text-gray-600">
            The dynamic British duo bringing you weekly episodes packed with film reviews, industry news,
            trivia games, and celebrity interviews.
          </p>
        </div>

        {/* Changed max-width to allow cards to be slightly wider */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {hosts.map((host) => {
            const iconColorClass = host.textColor === 'text-white' ? 'text-white hover:text-opacity-80' : 'text-gray-700 hover:text-black';
            const factBgColor = host.accentColor;
            const factTextColor = host.accentTextColor;

            return (
              <CardContainer key={host.name} className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                  <CardItem translateZ="20">
                    <div
                      key={host.name}
                      style={{ backgroundColor: host.bgColor }}
                      className={`rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row transform hover:scale-[1.03] transition-transform duration-300 ${host.textColor}`}
                    >
                      {/* Image Container - Takes significant width on MD+ screens */}
                      {/* Ensure image path is correct and image file exists */}
                      <div className="md:w-2/5 flex-shrink-0">
                        {/* Image fills container width, height adjusts (or use aspect-ratio) */}
                        {/* Removed border, check if image styling is correct */}
                        <img
                          src={host.image}
                          alt={`${host.name} caricature`}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Text Content Container */}
                      <div className="md:w-3/5 p-6 flex flex-col">
                        {/* Name */}
                        <h3 className="text-3xl font-bold mb-3">{host.name}</h3>

                        {/* Bio */}
                        <p className="text-base opacity-90 mb-5">{host.bio}</p>

                        {/* Social Links */}
                        <div className="mb-5">
                          <h4 className="font-semibold mb-2 opacity-80 text-sm uppercase tracking-wider">Connect</h4>
                          <div className="flex space-x-4 items-center">
                            {host.socials.map((social) => (
                              <a
                                key={social.platform}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${host.name} on ${social.platform}`}
                                className={`transition-opacity ${iconColorClass}`}
                              >
                                <social.icon className="w-6 h-6" />
                              </a>
                            ))}
                          </div>
                        </div>

                        {/* Quirky Fact / Easter Egg - Using Zap icon */}
                        <div
                          style={{ backgroundColor: factBgColor }}
                          className={`mt-auto p-4 rounded-lg ${factTextColor} text-sm`}
                        >
                          <div className="flex items-start gap-2">
                            <Zap className="w-5 h-5 flex-shrink-0 mt-0.5" />
                            <p><strong className="font-semibold">Host Secret:</strong> {host.quirkyFact}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;