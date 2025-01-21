import { Repeat, Play, Pause, Volume2, ArrowRight,ArrowLeft } from "lucide-react";
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
   
      <div 
        className="sticky  xl:h-16 xl:w-[450px] flex flex-col items-center justify-center sm:mt-5 xl:mt-3 md:mt-3 md:ml-5 xl:ml-6 sm:h-40  sm:w-[100px] md:w-[100%]" 
      >
        <audio
          ref={audioRef}
          src="https://res.cloudinary.com/dydh2rfnk/video/upload/v1735797748/NBT-Chandrayaan3/audios/obaczxdevotey9zxrrxt.mp3"
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
        />

        <div className="flex gap-4  ">
          <div className="flex items-center justify-center gap-3 sm:-ml-10  sm:text-sm lg:text-lg  xl:text-xl bg-white p-2 rounded-2xl">
          
          <div 
              className="w-6 h-6   bg-cyan-500 p-[3px] flex justify-center items-center rounded-full cursor-pointer" 
              onClick={togglePlayPause}
            >
              {isPlaying ? <Pause /> : <Play />}
            </div>
            <p className="text-black">{formatTime(currentTime)}</p>
            <input
              type="range"
              className="w-32  h-1 bg-gray-100 rounded-lg cursor-pointer accent-cyan-500  xs:w-[1vw]"
              min={0}
              max={100}
              value={duration > 0 ? (currentTime / duration) * 100 : 0}
              onChange={handleAudioProgressChange}
            />
            <p className="text-black">{formatTime(duration)}</p>
            
          </div>

        </div>
      </div>
  );
}
