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
      <hr 
        className="sm:w-[320px] md:w-[350px] lg:w-[450px] xl:w-[520px] xs:w-[100px]  sm:mt-4 md:-mt-5 lg:mt-28  xl:-mt-4 h-[2px] opacity-70 bg-gray-300" 
      />
      
      <div 
        className="sticky xl:h-16 xl:w-[450px] flex flex-col items-center justify-center sm:mt-5 xl:mt-3 md:mt-3 md:ml-5 xl:ml-6 sm:h-40  sm:w-[100px] md:w-[100%]" 
      >
        <audio
          ref={audioRef}
          src="https://res.cloudinary.com/dydh2rfnk/video/upload/v1735797748/NBT-Chandrayaan3/audios/obaczxdevotey9zxrrxt.mp3"
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
        />

        <div className="flex sm:gap-5 lg:gap:7 xs:gap-10">
          <div className="flex items-center justify-center gap-2 sm:-ml-10  sm:text-sm lg:text-lg  xl:text-xl">
            <p>{formatTime(currentTime)}</p>
            <input
              type="range"
              className="xl:w-48 lg:w-28 sm:w-[80px] h-2 bg-gray-300 rounded-lg cursor-pointer accent-blue-500  xs:w-[7vw]"
              min={0}
              max={100}
              value={duration > 0 ? (currentTime / duration) * 100 : 0}
              onChange={handleAudioProgressChange}
            />
            <p>{formatTime(duration)}</p>
            <div>
              <Repeat />
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 sm:text-sm lg:text-lg xl:text-xl">
            <div 
              className="sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8  bg-gray-300 flex justify-center items-center rounded-full cursor-pointer" 
              onClick={togglePlayPause}
            >
              {isPlaying ? <Pause /> : <Play />}
            </div>
            <Volume2 />
            <input
              type="range"
              className="sm:w-12 lg:w-14 xl:w-16 h-2 bg-gray-300 rounded-lg cursor-pointer accent-green-500"
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
