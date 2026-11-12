import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
} from "react";

type Box = { x: number; y: number; w: number; h: number; maxX: number };
type Slot = { x: number; y: number; s: number };
type Point = { x: number; y: number };
type Phase = "idle" | "enter" | "approach" | "drag" | "done" | "leave";
type StarPhase = "off" | "in" | "carry" | "placed";

const STAR_PATH =
  "M22 2c1.6 9.4 5.6 15.2 20 20-14.4 4.8-18.4 10.6-20 20-1.6-9.4-5.6-15.2-20-20 14.4-4.8 18.4-10.6 20-20Z";

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
  const slotRef = useRef<HTMLSpanElement>(null);
  const grabRef = useRef<Point | null>(null);
  const [box, setBox] = useState<Box | null>(null);
  const [slot, setSlot] = useState<Slot | null>(null);
  const [phase, setPhase] = useState<Phase>("idle");
  const [starPhase, setStarPhase] = useState<StarPhase>("off");
  const [devGone, setDevGone] = useState(false);
  const [starPos, setStarPos] = useState<Point | null>(null);
  const [grabbing, setGrabbing] = useState(false);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const target = targetRef.current;
    const slotEl = slotRef.current;
    if (!wrap || !target || !slotEl) return;

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
      const sl = slotEl.getBoundingClientRect();
      setSlot({ x: sl.left - w.left, y: sl.top - w.top, s: sl.width });
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
      setStarPhase("placed");
      setDevGone(true);
      return;
    }

    const steps: [() => void, number][] = [
      [() => setPhase("enter"), 900],
      [() => setPhase("approach"), 1100],
      [() => setPhase("drag"), 2200],
      [() => setPhase("done"), 3000],
      [() => setStarPhase("in"), 3200],
      [() => setStarPhase("carry"), 3700],
      [() => setStarPhase("placed"), 4900],
      [() => setPhase("leave"), 5200],
      [() => setDevGone(true), 5500],
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

  // Estrela: começa no alto à direita, vai até o espaço reservado no fim do texto
  // ou fica onde a pessoa soltou.
  let star: Point = { x: 0, y: 0 };
  if (box && slot) {
    const start = { x: box.maxX - slot.s, y: -96 };
    if (starPhase === "off" || starPhase === "in") star = start;
    else star = starPos ?? { x: slot.x, y: slot.y };
  }

  const starMoving = starPhase === "carry" && !starPos;
  const starStyle: CSSProperties | undefined = slot
    ? {
        width: slot.s,
        height: slot.s,
        transform: `translate(${star.x}px, ${star.y}px)`,
        transitionDuration: grabbing ? "0ms, 300ms" : starMoving ? "1200ms, 300ms" : "300ms, 300ms",
        opacity: starPhase === "off" ? 0 : 1,
      }
    : undefined;

  const devStyle: CSSProperties | undefined = slot
    ? {
        transform: `translate(${star.x + slot.s * 0.6 + (devGone ? 18 : 0)}px, ${
          star.y + slot.s * 0.6 + (devGone ? 22 : 0)
        }px)`,
        transitionDuration: starMoving ? "1200ms, 300ms" : "500ms, 300ms",
        opacity: starPhase === "off" || devGone ? 0 : 1,
      }
    : undefined;

  const onStarDown = (e: PointerEvent<HTMLDivElement>) => {
    const wrap = wrapRef.current;
    if (!wrap || starPhase !== "placed") return;
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    const w = wrap.getBoundingClientRect();
    grabRef.current = { x: e.clientX - w.left - star.x, y: e.clientY - w.top - star.y };
    setGrabbing(true);
  };

  const onStarMove = (e: PointerEvent<HTMLDivElement>) => {
    const wrap = wrapRef.current;
    const grab = grabRef.current;
    if (!wrap || !grab) return;
    const w = wrap.getBoundingClientRect();
    setStarPos({ x: e.clientX - w.left - grab.x, y: e.clientY - w.top - grab.y });
  };

  const onStarUp = () => {
    if (!grabRef.current) return;
    grabRef.current = null;
    setGrabbing(false);
    // Solta perto do lugar original: encaixa de volta no fim do texto.
    if (slot && starPos && Math.hypot(starPos.x - slot.x, starPos.y - slot.y) < slot.s * 1.6) {
      setStarPos(null);
    }
  };

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
          <Words text="e interfaces" />{" "}
          <span className="whitespace-nowrap">
            <span className="figma-word">intuitivas.</span>
            <span ref={slotRef} aria-hidden="true" className="hero-star-slot" />
          </span>
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

          {slot ? (
            <>
              <div
                className={`hero-star ${starPhase === "placed" ? "is-placed" : ""} ${
                  grabbing || starMoving ? "is-selected" : ""
                } ${grabbing ? "is-grabbing" : ""}`}
                style={starStyle}
                onPointerDown={onStarDown}
                onPointerMove={onStarMove}
                onPointerUp={onStarUp}
                onPointerCancel={onStarUp}
              >
                <svg viewBox="0 0 44 44" width="100%" height="100%">
                  <path d={STAR_PATH} fill="currentColor" />
                </svg>
                {/* As alças acompanham o contorno, que fica 3px para fora da estrela. */}
                <i className="figma-handle" style={{ left: -3, top: -3 }} />
                <i className="figma-handle" style={{ left: "calc(100% + 3px)", top: -3 }} />
                <i className="figma-handle" style={{ left: -3, top: "calc(100% + 3px)" }} />
                <i
                  className="figma-handle"
                  style={{ left: "calc(100% + 3px)", top: "calc(100% + 3px)" }}
                />
              </div>

              <div className="figma-cursor" style={devStyle}>
                <CursorArrow color="#14AE5C" />
                <span className="figma-cursor-label" style={{ background: "#14AE5C" }}>
                  Dev
                </span>
              </div>
            </>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
