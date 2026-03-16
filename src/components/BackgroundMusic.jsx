import { useEffect, useRef } from "react";
import music from "../assets/farewell.mp3";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const fadeInRef = useRef(null);
  const fadeOutRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0;
    audio.muted = true; // start muted to allow autoplay
    audio.loop = true;

    // Try to autoplay muted
    audio.play().catch((err) => console.log("Autoplay blocked:", err));

    // Fade in on first user interaction
    const handleUserInteraction = () => {
      if (audio.muted) {
        audio.muted = false;
        let vol = 0;
        fadeInRef.current = setInterval(() => {
          if (vol < 0.6) {
            vol += 0.01;
            audio.volume = vol;
          } else {
            clearInterval(fadeInRef.current);
          }
        }, 100);
      }
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
    };

    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("touchstart", handleUserInteraction);

    return () => {
      // Clear fade-in
      clearInterval(fadeInRef.current);

      // Fade out
      fadeOutRef.current = setInterval(() => {
        if (audio.volume > 0) {
          audio.volume -= 0.01;
        } else {
          audio.pause();
          clearInterval(fadeOutRef.current);
        }
      }, 50);

      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
    };
  }, []);

  return <audio ref={audioRef} src={music} />;
}