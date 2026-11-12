import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";

type Box = { x: number; y: number; w: number; h: number; maxX: number };
type Phase = "idle" | "enter" | "approach" | "drag" | "done" | "leave";

function CursorArrow({ color }: { color: string }) {
  return (
    <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
      <path
        d="M1.5 1.5v15.2l4.2-3.9 2.8 6.1 2.6-1.2-2.8-6 5.9-.3L1.5 1.5Z"
        fill={color}
        stroke="#fff"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const PAD = 4;

/** Cada palavra vira um alvo de hover, como as camadas de texto no Figma. */
function Words({ text }: { text: string }) {
  const parts = text.split(" ");
  return (
    <>
      {parts.map((word, i) => (
        <span key={i}>
          <span className="figma-word">{word}</span>
          {i < parts.length - 1 ? " " : null}
        </span>
      ))}
    </>
  );
}

/**
 * Título do hero com uma cena curta no estilo Figma: um cursor com o nome da Sophia
 * entra, arrasta um frame em volta de "Design de Produto" e solta, mostrando as alças
 * e o tamanho do frame. Com movimento reduzido, o frame já aparece pronto.
 */
export function HeroTitle() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLSpanElement>(null);
  const [box, setBox] = useState<Box | null>(null);
  const [phase, setPhase] = useState<Phase>("idle");

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const target = targetRef.current;
    if (!wrap || !target) return;

    const measure = () => {
      const w = wrap.getBoundingClientRect();
      const t = target.getBoundingClientRect();
      setBox({
        x: t.left - w.left - PAD,
        y: t.top - w.top - PAD,
        w: t.width + PAD * 2,
        h: t.height + PAD * 2,
        maxX: w.width - 72,
      });
    };

    measure();
    document.fonts?.ready.then(measure);
    const observer = new ResizeObserver(measure);
    observer.observe(wrap);
    return () => observer.disconnect();
  }, []);

  const ready = box !== null;

  useEffect(() => {
    if (!ready) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("done");
      return;
    }

    const steps: [() => void, number][] = [
      [() => setPhase("enter"), 900],
      [() => setPhase("approach"), 1100],
      [() => setPhase("drag"), 2200],
      [() => setPhase("done"), 3000],
      [() => setPhase("leave"), 5200],
    ];
    const timers = steps.map(([run, at]) => window.setTimeout(run, at));
    return () => timers.forEach(window.clearTimeout);
  }, [ready]);

  const dragging = phase === "drag" || phase === "done" || phase === "leave";
  const settled = phase === "done" || phase === "leave";

  let cursor = { x: 0, y: 0, duration: 0 };
  if (box) {
    if (phase === "idle" || phase === "enter") {
      cursor = { x: Math.min(box.x + box.w + 140, box.maxX), y: box.y + box.h + 96, duration: 0 };
    } else if (phase === "approach") {
      cursor = { x: box.x, y: box.y, duration: 900 };
    } else if (phase === "drag") {
      cursor = { x: box.x + box.w, y: box.y + box.h, duration: 700 };
    } else {
      cursor = {
        x: Math.min(box.x + box.w + 14, box.maxX),
        y: box.y + box.h + 22,
        duration: 500,
      };
    }
  }

  const cursorStyle: CSSProperties = {
    transform: `translate(${cursor.x}px, ${cursor.y}px)`,
    transitionDuration: `${cursor.duration}ms, 300ms`,
    opacity: phase === "idle" || phase === "leave" ? 0 : 1,
  };

  const frameStyle: CSSProperties | undefined = box
    ? {
        left: box.x,
        top: box.y,
        width: dragging ? box.w : 0,
        height: dragging ? box.h : 0,
        opacity: dragging ? 1 : 0,
      }
    : undefined;

  return (
    <div ref={wrapRef} className="hero-figma relative">
      <h1 className="max-w-[900px] font-sans text-[28px] leading-[1.35] tracking-tight md:text-[34px]">
        <span className="font-bold">
          <Words text="Olá, eu sou a Sophia." />
        </span>{" "}
        <span className="font-normal">
          <Words text="Engenheira de Software focada em" />{" "}
          <span ref={targetRef} className="whitespace-nowrap">
            <Words text="Design de Produto" />
          </span>{" "}
          <Words text="e interfaces intuitivas." />
        </span>
      </h1>

      {box ? (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div
            className={`figma-frame ${phase === "drag" ? "is-dragging" : ""} ${settled ? "is-settled" : ""}`}
            style={frameStyle}
          >
            <i className="figma-handle" style={{ left: 0, top: 0 }} />
            <i className="figma-handle" style={{ left: "100%", top: 0 }} />
            <i className="figma-handle" style={{ left: 0, top: "100%" }} />
            <i className="figma-handle" style={{ left: "100%", top: "100%" }} />
            <span className="figma-size">
              {Math.round(box.w)} × {Math.round(box.h)}
            </span>
          </div>

          <div className="figma-cursor" style={cursorStyle}>
            <CursorArrow color="#7B61FF" />
            <span className="figma-cursor-label">Sophia</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
