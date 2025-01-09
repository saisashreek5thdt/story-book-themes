import { Repeat, Play, Pause, Volume2 } from "lucide-react";
import { useRef, useState } from "react";

export default function AudioPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(100);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleAudioProgressChange = (e) => {
    const seekTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume / 100;
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    
    <div className="xl:h-20 xl:w-[550px] flex flex-col items-center justify-center sm:gap-0 sm:h-40 xl:gap-4 sm:w-[100px] md:w-[100%]">
      {/* Audio Element */}
      <audio
        ref={audioRef}
        src="https://res.cloudinary.com/dydh2rfnk/video/upload/v1735797748/NBT-Chandrayaan3/audios/obaczxdevotey9zxrrxt.mp3"
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
      />

      <div className="flex gap-20 sm:gap-10 xs:gap-10">
        {/* Audio Progress Slider */}
        <div className="flex items-center justify-center gap-2">
          <p>{formatTime(currentTime)}</p>
          <input
            type="range"
            className="w-40 h-2 bg-gray-300 rounded-lg cursor-pointer accent-blue-500 sm:w-[7vw] xs:w-[7vw]"
            min={0}
            max={100}
            value={duration > 0 ? (currentTime / duration) * 100 : 0} // Ensure value is valid
            onChange={handleAudioProgressChange}
          />
          <p>{formatTime(duration)}</p>
          <div>
            <Repeat />
          </div>
        </div>

        {/* Play and Volume Control */}
        <div className="flex items-center justify-center gap-2">
          <div
            className="w-8 h-8 bg-gray-400 flex justify-center items-center rounded-full cursor-pointer"
            onClick={togglePlayPause}
          >
            {isPlaying ? <Pause /> : <Play />}
          </div>
          <Volume2 />
          <input
            type="range"
            className="w-16 h-2 bg-gray-300 rounded-lg cursor-pointer accent-green-500 ]"
            min={0}
            max={100}
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
      </div>
    </div>
  );
}
