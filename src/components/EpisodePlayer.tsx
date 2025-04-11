\
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog"; // Assuming you have a Dialog component

interface EpisodePlayerProps {
  videoId: string | null;
  isOpen: boolean;
  onClose: () => void;
  title?: string; // Optional title for the dialog
}

const EpisodePlayer: React.FC<EpisodePlayerProps> = ({ videoId, isOpen, onClose, title }) => {
  if (!isOpen || !videoId) {
    return null;
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`; // Added autoplay

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl p-0">
        {/* Optional Header */}
        {/* <DialogHeader className="p-4 pb-0">
          {title && <DialogTitle>{title}</DialogTitle>}
           <DialogDescription>
            Playing episode...
          </DialogDescription>
        </DialogHeader> */}
        <div className="aspect-video relative">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={embedUrl}
            title={title || "YouTube video player"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EpisodePlayer;
