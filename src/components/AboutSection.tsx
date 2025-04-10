import { Award, Radio, Star, ThumbsUp } from 'lucide-react';
const hosts = [{
  name: "George",
  role: "Co-Host",
  image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
  bio: "The thoughtful film buff with a knack for spotting pop culture connections. George brings warm, inquisitive, and slightly cheeky commentary to every episode."
}, {
  name: "James",
  role: "Co-Host",
  image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  bio: "The energetic cinephile who brings humor and enthusiasm, often leading games and sparking lively debates. James' style is witty, playful, and engaging."
}];
const AboutSection = () => {
  return <section id="about" className="py-16 md:py-24 relative overflow-hidden bg-pulp-yellow/5">
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-radial from-pulp-yellow/10 to-transparent bg-gray-950" />
      
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 bg-gray-950">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-pulp-yellow px-6 py-2 mb-4 transform -rotate-1">
            <h2 className="text-3xl md:text-4xl font-bold text-black font-pixel">MEET YOUR HOSTS</h2>
          </div>
          <p className="text-white/80 font-pixel">
            The dynamic British duo bringing you weekly episodes packed with film reviews, industry news, 
            trivia games, and celebrity interviews.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {hosts.map(host => <div key={host.name} className="bg-black border-4 border-pulp-yellow transform hover:scale-[1.02] transition-all duration-300">
              <div className="aspect-square overflow-hidden border-b-4 border-pulp-yellow mb-4">
                <img src={host.image} alt={host.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-3xl font-bold text-pulp-yellow font-pixel">{host.name}</h3>
                <p className="text-pulp-yellow/70 font-pixel mb-3">{host.role}</p>
                <p className="text-white/80 font-pixel">{host.bio}</p>
              </div>
            </div>)}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-black border-2 border-pulp-yellow text-center p-6">
            <div className="mx-auto bg-pulp-yellow p-3 rounded-md w-14 h-14 flex items-center justify-center mb-4">
              <Radio className="h-7 w-7 text-black" />
            </div>
            <h3 className="text-lg font-medium mb-2 text-pulp-yellow font-pixel">WEEKLY SHOWS</h3>
            <p className="text-sm text-white/80 font-pixel">New episodes every Wednesday, with special releases for major film events.</p>
          </div>
          
          <div className="bg-black border-2 border-pulp-yellow text-center p-6">
            <div className="mx-auto bg-pulp-yellow p-3 rounded-md w-14 h-14 flex items-center justify-center mb-4">
              <ThumbsUp className="h-7 w-7 text-black" />
            </div>
            <h3 className="text-lg font-medium mb-2 text-pulp-yellow font-pixel">EXPERT REVIEWS</h3>
            <p className="text-sm text-white/80 font-pixel">In-depth, candid reviews of new releases and classics, balancing critical analysis with personal reactions.</p>
          </div>
          
          <div className="bg-black border-2 border-pulp-yellow text-center p-6">
            <div className="mx-auto bg-pulp-yellow p-3 rounded-md w-14 h-14 flex items-center justify-center mb-4">
              <Star className="h-7 w-7 text-black" />
            </div>
            <h3 className="text-lg font-medium mb-2 text-pulp-yellow font-pixel">GUEST INTERVIEWS</h3>
            <p className="text-sm text-white/80 font-pixel">Conversations with actors, directors, and filmmakers about their craft, experiences, and favorite films.</p>
          </div>
          
          <div className="bg-black border-2 border-pulp-yellow text-center p-6">
            <div className="mx-auto bg-pulp-yellow p-3 rounded-md w-14 h-14 flex items-center justify-center mb-4">
              <Award className="h-7 w-7 text-black" />
            </div>
            <h3 className="text-lg font-medium mb-2 text-pulp-yellow font-pixel">INTERACTIVE GAMES</h3>
            <p className="text-sm text-white/80 font-pixel">Fan-favorite games like Cast List Countdown that test film knowledge and quick thinking.</p>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;