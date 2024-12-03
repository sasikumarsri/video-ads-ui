import React, { useState } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import './VideoPlayer.css'; // Assuming you save the CSS file as VideoPlayer.css

interface ContinuousYouTubePlayerProps {
  videoIds: string[]; // Array of YouTube video IDs
}

const ContinuousYouTubePlayer: React.FC<ContinuousYouTubePlayerProps> = ({ videoIds }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current video index

  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,        // Auto-play video
      controls: 0,        // Hide controls
      modestbranding: 1,  // Minimal YouTube branding
      rel: 0,             // No related videos
      iv_load_policy: 3,  // Disable annotations
      fs: 1,              // Allow fullscreen
      showinfo: 0,        // Hide video info
      disablekb: 1,       // Disable keyboard controls
      mute: 1,            // Mute video by default
      loop: 1,            // Enable looping
      playlist: videoIds.join(','), // Playlist for looping
    },
  };

  const onEnd = () => {
    // Automatically play the next video in the array, looping back to the start
    const nextIndex = (currentIndex + 1) % videoIds.length;
    setCurrentIndex(nextIndex);
  };

  const onError = () => {
    // Handle error by playing the next video in case of any issues
    const nextIndex = (currentIndex + 1) % videoIds.length;
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="video-player-container">
      <YouTube
        videoId={videoIds[currentIndex]}  // Pass current video ID
        opts={opts}
        onEnd={onEnd}   // Handle video end
        onError={onError} // Handle video errors
      />
    </div>
  );
};

export default ContinuousYouTubePlayer;
