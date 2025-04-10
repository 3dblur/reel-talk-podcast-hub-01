
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
    <Card className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-semibold mb-1">{title}</h3>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>{date}</span>
              <span className="mx-2">•</span>
              <span>{duration}</span>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-foreground/80 mb-4 line-clamp-2">{description}</p>
        
        <div className="space-y-4">
          <div className="relative h-1 bg-secondary rounded-full overflow-hidden">
            <div className="absolute h-full bg-primary w-1/3 rounded-full" />
          </div>
          
          <div className="flex items-center justify-between gap-4">
            <Button size="icon" variant="ghost" className="rounded-full h-9 w-9">
              <SkipBack className="h-4 w-4" />
            </Button>
            
            <Button 
              onClick={() => setIsPlaying(!isPlaying)} 
              size="icon"
              className="rounded-full h-10 w-10 bg-primary hover:bg-primary/90"
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
            </Button>
            
            <Button size="icon" variant="ghost" className="rounded-full h-9 w-9">
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
