
import { useState } from 'react';
import { Play, Pause, Volume2, SkipBack, SkipForward } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent } from '@/components/ui/card';

interface EpisodePlayerProps {
  title: string;
  date: string;
  duration: string;
  image: string;
  description: string;
}

const EpisodePlayer = ({ title, date, duration, image, description }: EpisodePlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Card className="overflow-hidden bg-card/70 border-border/50 hover:border-primary/50 transition-all duration-500 group retro-vignette">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-0 bg-grain opacity-30 mix-blend-overlay pointer-events-none" />
        
        {/* Film strip perforation effect on the side */}
        <div className="absolute top-0 left-0 w-6 h-full flex flex-col justify-between opacity-70 pointer-events-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="w-4 h-4 bg-black/80 border border-white/20 rounded-sm"></div>
          ))}
        </div>
        
        {/* Vintage timestamp overlay */}
        <div className="absolute bottom-3 right-3 font-mono-alt text-xs text-white/70 bg-black/30 px-2 py-1 rounded">
          REC: {date.replace(/\s/g, '')}
        </div>
      </div>
      <CardContent className="p-6 relative bg-gradient-to-b from-black/50 to-card">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-semibold mb-1 font-cinematic text-white group-hover:text-primary transition-colors">{title}</h3>
            <div className="flex items-center text-sm text-muted-foreground">
              <span className="font-mono-alt">{date}</span>
              <span className="mx-2 opacity-50">•</span>
              <span className="font-mono-alt">{duration}</span>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-foreground/80 mb-4 line-clamp-2">{description}</p>
        
        <div className="space-y-4 relative z-10">
          <div className="relative h-1 bg-secondary/50 rounded-full overflow-hidden">
            <div className="absolute h-full bg-primary w-1/3 rounded-full" />
          </div>
          
          <div className="flex items-center justify-between gap-4">
            <Button size="icon" variant="ghost" className="rounded-full h-9 w-9 text-muted-foreground hover:text-white hover:bg-primary/20 transition-colors">
              <SkipBack className="h-4 w-4" />
            </Button>
            
            <Button 
              onClick={() => setIsPlaying(!isPlaying)} 
              size="icon"
              className="rounded-full h-10 w-10 bg-primary hover:bg-primary/90 relative overflow-hidden group/play"
            >
              <span className="relative z-10">
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-cinema-amber to-primary opacity-0 group-hover/play:opacity-100 transition-opacity duration-500"></span>
            </Button>
            
            <Button size="icon" variant="ghost" className="rounded-full h-9 w-9 text-muted-foreground hover:text-white hover:bg-primary/20 transition-colors">
              <SkipForward className="h-4 w-4" />
            </Button>
            
            <div className="flex items-center gap-2">
              <Volume2 className="h-4 w-4 text-muted-foreground" />
              <Slider
                defaultValue={[70]}
                max={100}
                step={1}
                className="w-20"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EpisodePlayer;
