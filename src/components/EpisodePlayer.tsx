import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player/youtube';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider"; // Assuming you have a Slider component from shadcn/ui
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from 'lucide-react';
import screenfull from 'screenfull'; // Need to install this library

interface EpisodePlayerProps {
  videoId: string | null;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

// Helper function to format seconds into HH:MM:SS or MM:SS
const formatTime = (seconds: number): string => {
  if (isNaN(seconds)) {
    return '00:00';
  }
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString().padStart(2, '0');
  if (hh) {
    return `${hh}:${mm.toString().padStart(2, '0')}:${ss}`;
  } else {
    return `${mm}:${ss}`;
  }
};

const EpisodePlayer: React.FC<EpisodePlayerProps> = ({ videoId, isOpen, onClose, title }) => {
  const [playing, setPlaying] = useState(true);
  const [volume, setVolume] = useState(0.8);
  const [muted, setMuted] = useState(false);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [duration, setDuration] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const playerRef = useRef<ReactPlayer>(null);
  const playerWrapperRef = useRef<HTMLDivElement>(null);

  const handlePlayPause = () => setPlaying(!playing);
  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    setMuted(newVolume === 0);
  };
  const handleMute = () => {
    setMuted(!muted);
    setVolume(muted ? 0.8 : 0); // Restore volume or mute
  };
  const handleProgress = (state: { played: number; playedSeconds: number }) => {
    if (!seeking) {
      setPlayedSeconds(state.playedSeconds);
    }
  };
  const handleDuration = (duration: number) => setDuration(duration);
  const handleSeekMouseDown = () => setSeeking(true);
  const handleSeekChange = (value: number[]) => {
    const newPlayedSeconds = value[0];
    setPlayedSeconds(newPlayedSeconds);
    playerRef.current?.seekTo(newPlayedSeconds);
  };
  const handleSeekMouseUp = () => setSeeking(false);
  const handleEnded = () => setPlaying(false);

  const handleFullScreen = () => {
    if (screenfull.isEnabled && playerWrapperRef.current) {
      screenfull.toggle(playerWrapperRef.current);
    }
  };

  useEffect(() => {
    const handleChange = () => {
      if (screenfull.isEnabled) {
        setIsFullScreen(screenfull.isFullscreen);
      }
    };

    if (screenfull.isEnabled) {
      screenfull.on('change', handleChange);
      return () => {
        screenfull.off('change', handleChange);
      };
    }
  }, []);

  useEffect(() => {
    // Reset state when dialog opens/closes or video changes
    if (isOpen) {
      setPlaying(true);
      setPlayedSeconds(0);
      setDuration(0);
    } else {
      setPlaying(false);
    }
  }, [isOpen, videoId]);


  if (!isOpen || !videoId) {
    return null;
  }

  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const playedRatio = duration > 0 ? playedSeconds / duration : 0;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) { onClose(); setPlaying(false); } }}>
      <DialogContent style={{ backgroundColor: '#CD0744', color: '#FDE300' }} className="max-w-5xl p-4 border-none sm:p-6">
        <DialogHeader className="pb-2 sm:pb-4">
          {title && <DialogTitle className="text-lg sm:text-xl" style={{ color: '#FDE300' }}>{title}</DialogTitle>}
        </DialogHeader>

        {/* Player Wrapper */}
        <div ref={playerWrapperRef} className="relative aspect-video bg-black rounded-md overflow-hidden group">
          <ReactPlayer
            ref={playerRef}
            url={videoUrl}
            width="100%"
            height="100%"
            playing={playing}
            volume={volume}
            muted={muted}
            controls={false}
            onProgress={handleProgress}
            onDuration={handleDuration}
            onEnded={handleEnded}
            style={{ position: 'absolute', top: 0, left: 0 }}
            onError={(e) => console.error('ReactPlayer Error:', e)}
          />

          {/* Custom Controls Bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent p-2 sm:p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-1">
            {/* Timeline Slider */}
            <Slider
              value={[playedSeconds]}
              max={duration}
              step={1}
              onValueChange={handleSeekChange}
              onMouseDown={handleSeekMouseDown} // These might need specific implementation if using shadcn slider
              onMouseUp={handleSeekMouseUp}
              className="w-full h-1 cursor-pointer [&>span:first-child]:h-full [&>span:first-child>span]:bg-pulp-yellow [&>span:first-child]:bg-white/30" // Style the slider
              style={{ "--slider-thumb-color": '#FDE300', "--slider-track-color": 'rgba(255, 255, 255, 0.3)', "--slider-range-color": '#FDE300' } as React.CSSProperties} // Custom properties for potential styling
            />
            <div className="flex items-center justify-between gap-2 text-white">
              {/* Left Controls (Play/Pause, Volume) */}
              <div className="flex items-center gap-2 sm:gap-3">
                <Button variant="ghost" size="icon" onClick={handlePlayPause} className="text-white hover:bg-white/10 hover:text-pulp-yellow">
                  {playing ? <Pause className="w-5 h-5 sm:w-6 sm:h-6" /> : <Play className="w-5 h-5 sm:w-6 sm:h-6" />}
                </Button>
                <Button variant="ghost" size="icon" onClick={handleMute} className="text-white hover:bg-white/10 hover:text-pulp-yellow">
                  {muted || volume === 0 ? <VolumeX className="w-5 h-5 sm:w-6 sm:h-6" /> : <Volume2 className="w-5 h-5 sm:w-6 sm:h-6" />}
                </Button>
                <Slider
                  value={[muted ? 0 : volume]}
                  max={1}
                  step={0.05}
                  onValueChange={handleVolumeChange}
                  className="w-16 sm:w-24 h-1 cursor-pointer [&>span:first-child]:h-full [&>span:first-child>span]:bg-pulp-yellow [&>span:first-child]:bg-white/30" // Style the slider
                   style={{ "--slider-thumb-color": '#FDE300', "--slider-track-color": 'rgba(255, 255, 255, 0.3)', "--slider-range-color": '#FDE300' } as React.CSSProperties}
                />
              </div>

              {/* Right Controls (Time, Fullscreen) */}
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-xs sm:text-sm font-mono">
                  {formatTime(playedSeconds)} / {formatTime(duration)}
                </span>
                {screenfull.isEnabled && (
                  <Button variant="ghost" size="icon" onClick={handleFullScreen} className="text-white hover:bg-white/10 hover:text-pulp-yellow">
                    {isFullScreen ? <Minimize className="w-4 h-4 sm:w-5 sm:h-5" /> : <Maximize className="w-4 h-4 sm:w-5 sm:h-5" />}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EpisodePlayer;