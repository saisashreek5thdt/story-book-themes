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
    <>
    <hr className="xl:w-full xl:-mt-2 h-[2px] opacity-70 bg-gray-300 sm:mt-8 sm:w-[450px] sm:ml-12 xl:sm:ml-0" />
    <div className="h-14  sm:w-[400px] md:w-[400px] xl:w-[550px] flex flex-col items-center justify-center gap-4">
      {/* Audio Element */}
      <audio
        ref={audioRef}
        src="https://res.cloudinary.com/dydh2rfnk/video/upload/v1735797748/NBT-Chandrayaan3/audios/obaczxdevotey9zxrrxt.mp3"
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
      />

      <div className="flex xl:gap-20 sm:gap-8 sm:ml-8">
        {/* Audio Progress Slider */}
        <div className="flex items-center justify-center gap-2">
          <p>{formatTime(currentTime)}</p>
          <input
            type="range"
            className="xl:w-40 sm:w-32  h-2 bg-gray-300 rounded-lg cursor-pointer accent-blue-500"
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
            className="w-8 h-8 bg-gray-300 flex justify-center items-center rounded-full cursor-pointer"
            onClick={togglePlayPause}
          >
            {isPlaying ? <Pause /> : <Play />}
          </div>
          <Volume2 />
          <input
            type="range"
            className="w-16 h-2 bg-gray-300 rounded-lg cursor-pointer accent-green-500"
            min={0}
            max={100}
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
      </div>
    </div>
    </>
  );
}
