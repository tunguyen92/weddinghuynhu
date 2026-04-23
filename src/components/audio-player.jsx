import { useRef, useState } from "react";
import { PauseCircleOutlined, PlayCircleOutlined } from "@ant-design/icons";

import iDo from "~/assets/audios/i-do.m4a";

function AudioPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pauseAudio = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <div className="fixed bottom-5 md:bottom-7 left-5 md:left-7">
      <audio ref={audioRef} src={iDo} onEnded={() => setIsPlaying(false)} />

      {!isPlaying ? (
        <button
          className="flex items-center justify-center relative text-icon"
          onClick={playAudio}
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
          <PlayCircleOutlined className="inline-flex text-3xl md:text-5xl z-10 cursor-pointer" />
        </button>
      ) : (
        <button
          className="flex items-center justify-center relative text-icon"
          onClick={pauseAudio}
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
          <PauseCircleOutlined className="inline-flex text-3xl md:text-5xl z-10 cursor-pointer" />
        </button>
      )}
    </div>
  );
}

export default AudioPlayer;
