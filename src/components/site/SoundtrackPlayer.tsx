import { Pause, Play } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";

const AUDIO_SRC = "/minecraft.mp3";

export function SoundtrackPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.16;

    const handlePlay = () => setPlaying(true);
    const handlePause = () => setPlaying(false);
    const handleEnded = () => setPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlayback = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <aside
      className="soundtrack-player"
      aria-label="Trilha sonora do portfólio"
    >
      <audio
        ref={audioRef}
        src={AUDIO_SRC}
        loop
        preload="metadata"
      />

      <button
        type="button"
        onClick={togglePlayback}
        className="soundtrack-toggle"
        aria-label={playing ? "Pausar música" : "Tocar música"}
      >
        {playing ? (
          <Pause weight="fill" />
        ) : (
          <Play weight="fill" />
        )}
      </button>

      <span
        className={`soundtrack-waves ${playing ? "is-playing" : ""}`}
        aria-hidden="true"
      >
        <i />
        <i />
        <i />
        <i />
        <i />
      </span>
    </aside>
  );
}