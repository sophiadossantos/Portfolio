import { Pause, Play } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";

const AUDIO_SRC = "/minecraft.mp3";

export function SoundtrackPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.16;

    const handlePlay = () => {
      setPlaying(true);
      setExpanded(true);
    };

    const handlePause = () => {
      setPlaying(false);
    };

    const handleEnded = () => {
      setPlaying(false);
    };

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
        setExpanded(true);
      } catch (error) {
        console.error("Não foi possível reproduzir a música:", error);
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  const handlePlayerClick = () => {
    if (!expanded) {
      setExpanded(true);
    }
  };

  return (
    <aside
      className={`soundtrack-player ${
        expanded ? "is-expanded" : ""
      }`}
      aria-label="Trilha sonora do portfólio"
      onClick={handlePlayerClick}
    >
      <audio
        ref={audioRef}
        src={AUDIO_SRC}
        loop
        preload="auto"
      />

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          togglePlayback();
        }}
        className="soundtrack-toggle"
        aria-label={playing ? "Pausar música" : "Tocar música"}
      >
        {playing ? <Pause weight="fill" /> : <Play weight="fill" />}
      </button>

      <span
        className={`soundtrack-waves ${
          playing ? "is-playing" : ""
        }`}
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