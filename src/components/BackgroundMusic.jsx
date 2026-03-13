import { useEffect, useRef } from "react";
import music from "../assets/farewell.mp3";

export default function BackgroundMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0;
    audio.play();

    let vol = 0;
    const fadeIn = setInterval(() => {
      if (vol < 0.6) {
        vol += 0.01;
        audio.volume = vol;
      } else {
        clearInterval(fadeIn);
      }
    }, 100);

    return () => {
      const fadeOut = setInterval(() => {
        if (audio.volume > 0) {
          audio.volume -= 0.01;
        } else {
          audio.pause();
          clearInterval(fadeOut);
        }
      }, 50);
    };
  }, []);

  return <audio ref={audioRef} src={music} loop />;
}