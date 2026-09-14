import { MusicNote, Pause, Play, SpeakerSlash } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";

// Adicione aqui apenas um arquivo de áudio autorizado quando ele estiver disponível.
const AUDIO_SRC: string | null = null;

export function SoundtrackPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !AUDIO_SRC) return;
    audio.volume = 0.16;
    audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, []);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio || !AUDIO_SRC) return;
    if (audio.paused) {
      await audio.play();
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <aside className="soundtrack-player" aria-label="Trilha sonora do portfólio">
      {AUDIO_SRC ? <audio ref={audioRef} src={AUDIO_SRC} loop preload="metadata" /> : null}
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={togglePlayback}
        disabled={!AUDIO_SRC}
        aria-label={AUDIO_SRC ? (playing ? "Pausar trilha sonora" : "Tocar trilha sonora") : "Trilha sonora ainda não disponível"}
        title={AUDIO_SRC ? (playing ? "Pausar" : "Tocar") : "Áudio será adicionado em breve"}
      >
        {AUDIO_SRC ? playing ? <Pause weight="fill" /> : <Play weight="fill" /> : <SpeakerSlash />}
      </Button>
      <div>
        <span className={playing ? "is-playing" : ""} aria-hidden="true"><i /><i /><i /></span>
        <p>Minecraft soundtrack</p>
        <small>{AUDIO_SRC ? (playing ? "tocando" : "pausado") : "áudio em breve"}</small>
      </div>
      <MusicNote aria-hidden="true" />
    </aside>
  );
}