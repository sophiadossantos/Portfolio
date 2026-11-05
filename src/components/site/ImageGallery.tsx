
import { useEffect, useMemo, useRef, useState, type CSSProperties, type KeyboardEvent as ReactKeyboardEvent } from "react";
import {
  ArrowsOut,
  CaretLeft,
  CaretRight,
  Lightbulb,
  Question,
  SquaresFour,
  X,
} from "@phosphor-icons/react";

import { createPortal } from "react-dom";

import { imageMeta } from "@/assets/optimized/manifest";

import type { DesignReference } from "./references";
import { ResponsiveImage } from "./ResponsiveImage";

export type GalleryItem = {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  /**
   * Enquadra a tela numa proporção fixa, mostrando o topo. Mantém telas de alturas
   * diferentes no mesmo tamanho; a tela inteira aparece ao ampliar.
   */
  frame?: keyof typeof FRAME_RATIO | undefined;
  /** Marcadores numerados sobre a tela, em % (exigem `frame`). */
  markers?: GalleryMarker[] | undefined;
  /** Por que a tela foi feita assim. Aparece no tour "Ver o que foi pensado". */
  reasons?: GalleryReason[] | undefined;
};

/** Motivo de uma decisão e a área da tela que ele destaca, em % da imagem inteira. */
export type GalleryReason = {
  text: string;
  x: number;
  y: number;
  w: number;
  h: number;
  ref?: DesignReference | undefined;
};

export type GalleryMarker = { x: number; y: number };
export type ComparisonNote = GalleryMarker & {
  text: string;
  /** Área destacada no tour, em % da tela enquadrada: x, y, largura e altura. */
  area: [x: number, y: number, w: number, h: number];
  ref?: DesignReference | undefined;
};

const BUBBLE_WIDTH = 288;
const BUBBLE_MARGIN = 12;

/** Interrogação que abre um balão com o resumo da fonte externa e o link para ela. */
export function ReferenceLink({
  reference,
  showLabel = false,
}: {
  reference: DesignReference;
  showLabel?: boolean;
}) {
  const [position, setPosition] = useState<{
    top: number;
    left: number;
    tail: number;
    above: boolean;
  } | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const sourceLinkRef = useRef<HTMLAnchorElement>(null);
  const isOpen = position !== null;

  // Leva o foco para o balão, que fica fora da ordem normal do teclado.
  useEffect(() => {
    if (isOpen) sourceLinkRef.current?.focus({ preventScroll: true });
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    function handlePointer(event: PointerEvent) {
      const target = event.target as Node;
      if (bubbleRef.current?.contains(target) || triggerRef.current?.contains(target)) return;
      setPosition(null);
    }

    function handleKey(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      event.stopImmediatePropagation();
      setPosition(null);
      triggerRef.current?.focus();
    }

    function handleScroll(event: Event) {
      if (bubbleRef.current?.contains(event.target as Node)) return;
      setPosition(null);
    }

    document.addEventListener("pointerdown", handlePointer);
    window.addEventListener("keydown", handleKey, true);
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      document.removeEventListener("pointerdown", handlePointer);
      window.removeEventListener("keydown", handleKey, true);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [isOpen]);

  function toggle() {
    if (isOpen) {
      setPosition(null);
      return;
    }

    const rect = triggerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const width = Math.min(BUBBLE_WIDTH, window.innerWidth - BUBBLE_MARGIN * 2);
    const center = rect.left + Math.min(rect.width, 16) / 2;
    const left = Math.max(
      BUBBLE_MARGIN,
      Math.min(center - 34, window.innerWidth - width - BUBBLE_MARGIN),
    );
    const above = rect.bottom + 220 > window.innerHeight;

    setPosition({
      left,
      above,
      tail: center - left - 6,
      top: above ? rect.top - 12 : rect.bottom + 12,
    });
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-label={`Ver referência: ${reference.label}`}
        onClick={(event) => {
          event.stopPropagation();
          toggle();
        }}
        className={`-my-1 inline-flex min-h-6 min-w-6 max-w-full items-center gap-1 text-left align-middle text-[12px] opacity-70 transition-opacity hover:opacity-100 ${
          showLabel ? "" : "justify-center"
        }`}
      >
        <Question size={15} aria-hidden="true" className="shrink-0" />
        {showLabel ? (
          <span className="underline underline-offset-2">{reference.label}</span>
        ) : null}
      </button>

      {position
        ? createPortal(
            <div
              ref={bubbleRef}
              role="dialog"
              aria-label={reference.label}
              onClick={(event) => event.stopPropagation()}
              onKeyDown={(event) => {
                if (event.key !== "Tab") return;
                event.preventDefault();
                setPosition(null);
                triggerRef.current?.focus();
              }}
              className={`ref-bubble ${position.above ? "is-above" : ""}`}
              style={
                {
                  top: position.top,
                  left: position.left,
                  "--bubble-tail": `${position.tail}px`,
                } as CSSProperties
              }
            >
              <p className="text-[13px] font-semibold leading-snug">{reference.label}</p>
              <p className="mt-1.5 text-[13px] leading-[1.55] text-muted-foreground">
                {reference.summary}
              </p>
              <a
                ref={sourceLinkRef}
                href={reference.href}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-[13px] underline underline-offset-2"
              >
                Ler na fonte oficial ↗
              </a>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}

function ReasonsButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-[13px] transition-colors hover:bg-foreground hover:text-background"
    >
      <Lightbulb size={16} aria-hidden="true" />
      Ver o que foi pensado
    </button>
  );
}

export function ComparisonNotes({ notes }: { notes: ComparisonNote[] }) {
  return (
    <ol className="space-y-4">
      {notes.map((note, index) => (
        <li
          key={note.text}
          className="flex gap-3 text-[14px] leading-[1.6] text-muted-foreground"
        >
          <span aria-hidden="true" className="comparison-marker shrink-0">
            {index + 1}
          </span>
          <span>
            {note.text}{" "}
            {note.ref ? <ReferenceLink reference={note.ref} /> : null}
          </span>
        </li>
      ))}
    </ol>
  );
}

/** Índice do slide visível em um `.snap-carousel`. */
function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function scrollBehavior(): ScrollBehavior {
  return prefersReducedMotion() ? "auto" : "smooth";
}

function activeSlide(track: HTMLElement) {
  const [first, second] = track.children;
  if (!(first instanceof HTMLElement) || !(second instanceof HTMLElement)) return 0;

  const step = second.offsetLeft - first.offsetLeft;
  return Math.min(Math.round(track.scrollLeft / step), track.children.length - 1);
}

/** Proporções das telas da Cursiva (web) e do iPhone (mobile). */
const FRAME_RATIO = { web: 1600 / 1138, mobile: 1179 / 2556 } as const;

/** Tempo para os motivos saírem em cascata antes de sumirem da tela. */
const CASCADE_CLOSE_MS = 420;

/** Abre e fecha um bloco deixando a animação de saída terminar. */
function useCascadeToggle(startOpen: boolean) {
  const [phase, setPhase] = useState<"closed" | "open" | "closing">(
    startOpen ? "open" : "closed",
  );
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  function close() {
    clearTimeout(timer.current);
    if (prefersReducedMotion()) {
      setPhase("closed");
      return;
    }
    setPhase("closing");
    timer.current = setTimeout(() => setPhase("closed"), CASCADE_CLOSE_MS);
  }

  function toggle() {
    if (phase === "open") {
      close();
      return;
    }
    clearTimeout(timer.current);
    setPhase("open");
  }

  return { phase, isOpen: phase === "open", isMounted: phase !== "closed", toggle, close };
}

function GalleryImage({
  item,
  sizes,
  className = "",
  loading,
}: {
  item: GalleryItem;
  sizes: string;
  className?: string;
  loading?: "eager" | "lazy";
}) {
  if (!item.frame) {
    return (
      <ResponsiveImage
        sizes={sizes}
        src={item.src}
        alt={item.alt}
        className={`h-full w-full object-contain ${className}`}
        {...(loading ? { loading } : {})}
      />
    );
  }

  return (
    <span
      className="relative mx-auto block h-full max-w-full overflow-hidden rounded-lg bg-white"
      style={{ aspectRatio: FRAME_RATIO[item.frame] }}
    >
      <ResponsiveImage
        sizes={sizes}
        src={item.src}
        alt={item.alt}
        className={`h-full w-full object-cover object-top ${className}`}
        {...(loading ? { loading } : {})}
      />
      {item.markers?.map((marker, index) => (
        <span
          key={`${marker.x}-${marker.y}`}
          aria-hidden="true"
          className="comparison-marker absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
        >
          {index + 1}
        </span>
      ))}
    </span>
  );
}

type ImageGalleryProps = {
  items: GalleryItem[];
  variant?: "default" | "carousel" | "comparison";
  /** Seção com os resultados, oferecida ao fim do tour de telas com defeitos. */
  resultsTargetId?: string;
};

export function ImageGallery({
  items,
  variant = "default",
  resultsTargetId,
}: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [openTour, setOpenTour] = useState(false);

  useEffect(() => {
    setActiveIndex(0);
  }, [items]);

  useEffect(() => {
    if (!expanded) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setExpanded(false);

      if (event.key === "ArrowLeft") {
        setActiveIndex(
          (current) => (current - 1 + items.length) % items.length
        );
      }

      if (event.key === "ArrowRight") {
        setActiveIndex(
          (current) => (current + 1) % items.length
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [expanded, items.length]);

  const activeImage = items[activeIndex];

  if (!activeImage) return null;

  function closeLightbox() {
    setExpanded(false);
    setOpenTour(false);
  }

  function goToResults() {
    closeLightbox();
    document
      .getElementById(resultsTargetId ?? "")
      ?.scrollIntoView({ behavior: scrollBehavior(), block: "start" });
  }

  function previous() {
    setActiveIndex(
      (current) => (current - 1 + items.length) % items.length
    );
  }

  function next() {
    setActiveIndex(
      (current) => (current + 1) % items.length
    );
  }

  if (variant === "comparison") {
    // Telas web com marcadores precisam da proporção exata para os pontos não saírem do lugar.
    const fitsScreen = items.some((item) => item.frame === "web" && item.markers);

    return (
      <>
        <div className="snap-carousel grid grid-cols-2 gap-5">
          {items.map((item, index) => (
            <button
              key={`${item.src}-${index}`}
              type="button"
              onClick={() => {
                setActiveIndex(index);
                setExpanded(true);
              }}
              className="group min-w-0 cursor-zoom-in text-left"
              aria-label={`Ampliar ${item.title ?? item.alt}`}
            >
              <div
                className={`flex items-center justify-center overflow-hidden rounded-xl border border-border bg-muted ${
                  fitsScreen ? "aspect-[1600/1138]" : "h-[300px] lg:h-[360px]"
                }`}
              >
                <GalleryImage
                  sizes="(min-width: 1240px) 570px, (min-width: 768px) 50vw, 85vw"
                  item={item}
                  className="transition duration-300 group-hover:scale-[1.02]"
                />
              </div>

              <p className="mt-2 text-[13px] text-muted-foreground">
                {item.title ?? item.alt}
              </p>
            </button>
          ))}
        </div>

        {expanded && (
          <Lightbox
            items={items}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            startWithTour={openTour}
            onClose={closeLightbox}
            previous={previous}
            next={next}
          />
        )}
      </>
    );
  }

  if (variant === "carousel") {
    return (
      <>
        <section className="w-full space-y-3">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="relative flex h-[300px] items-center justify-center sm:h-[380px] lg:h-[460px]">
              {items.map((item, index) => {
                const offset = index - activeIndex;

                return (
                  <button
                    key={`${item.src}-${index}`}
                    type="button"
                    onClick={() => {
                      if (index === activeIndex) {
                        setExpanded(true);
                      } else {
                        setActiveIndex(index);
                      }
                    }}
                    aria-label={
                      index === activeIndex
                        ? "Ampliar imagem"
                        : `Ver ${item.title ?? item.alt}`
                    }
                    className="absolute left-1/2 h-[86%] w-[76%] overflow-hidden rounded-2xl border border-white/15 bg-card shadow-xl transition-all duration-500 ease-out"
                    style={{
                      transform: `translateX(calc(-50% + ${offset * 84}%)) scale(${index === activeIndex ? 1 : 0.88})`,
                      opacity: Math.abs(offset) > 1 ? 0 : 1,
                      zIndex: index === activeIndex ? 2 : 1,
                      pointerEvents:
                        Math.abs(offset) > 1 ? "none" : "auto",
                      filter:
                        index === activeIndex
                          ? "none"
                          : "brightness(0.72)",
                    }}
                  >
                    <ResponsiveImage
                      sizes="(min-width: 1240px) 880px, 76vw"
                      src={item.src}
                      alt={item.alt}
                      className="h-full w-full object-contain"
                    />
                  </button>
                );
              })}

              <button
                type="button"
                onClick={previous}
                aria-label="Imagem anterior"
                className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-background/95 p-2 shadow-lg transition hover:scale-105 sm:left-4 sm:p-3"
              >
                <CaretLeft size={20} />
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Próxima imagem"
                className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-background/95 p-2 shadow-lg transition hover:scale-105 sm:right-4 sm:p-3"
              >
                <CaretRight size={20} />
              </button>
            </div>

            <div className="mt-3 flex justify-center gap-2">
              {items.map((item, index) => (
                <button
                  key={`${item.src}-${index}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Ir para imagem ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-6 bg-primary"
                      : "w-1.5 bg-muted-foreground/40"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">
                {activeImage.title ?? activeImage.alt}
              </p>
              {activeImage.caption && (
                <p className="mt-1 text-xs text-muted-foreground">
                  {activeImage.caption}
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="shrink-0 text-sm text-muted-foreground hover:text-foreground"
            >
              Ampliar
            </button>
          </div>
        </section>

        {expanded && (
          <Lightbox
            items={items}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            startWithTour={openTour}
            onClose={closeLightbox}
            previous={previous}
            next={next}
          />
        )}
      </>
    );
  }

  const thumbnails = items.filter((_, index) => index !== activeIndex);

  return (
    <>
      <section className="w-full md:hidden">
        <div
          className="snap-carousel"
          onScroll={(event) => setActiveIndex(activeSlide(event.currentTarget))}
        >
          {items.map((item, index) => (
            <button
              key={`${item.src}-${index}`}
              type="button"
              onClick={() => {
                setActiveIndex(index);
                setExpanded(true);
              }}
              aria-label={`Ampliar ${item.title ?? item.alt}`}
              className="h-[300px] overflow-hidden rounded-2xl bg-muted"
            >
              <GalleryImage sizes="85vw" item={item} />
            </button>
          ))}
        </div>

        <div className="mt-3 flex items-baseline justify-between gap-3">
          <p className="min-w-0 truncate text-sm font-medium">
            {activeImage.title ?? activeImage.alt}
          </p>
          <span className="shrink-0 text-xs text-muted-foreground">
            {activeIndex + 1} / {items.length}
          </span>
        </div>

        {activeImage.reasons || items.length === 1 ? (
          <div className="mt-3 flex items-center justify-between gap-3">
            {activeImage.reasons ? (
              <ReasonsButton
                onClick={() => {
                  setOpenTour(true);
                  setExpanded(true);
                }}
              />
            ) : (
              <span />
            )}
            {items.length === 1 ? (
              <button
                type="button"
                onClick={() => setExpanded(true)}
                aria-label="Ampliar imagem"
                className="grid size-11 shrink-0 place-items-center rounded-full border border-border transition-colors hover:bg-foreground hover:text-background"
              >
                <ArrowsOut size={18} aria-hidden="true" />
              </button>
            ) : null}
          </div>
        ) : null}

        {items.length > 1 ? (
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="mt-4 w-full rounded-full border border-border px-5 py-2.5 text-[13px] transition-colors hover:bg-foreground hover:text-background"
          >
            Ver todos
          </button>
        ) : null}
      </section>

      <section className="hidden w-full space-y-3 md:block">
        <div className="group relative flex h-[300px] items-center justify-center overflow-hidden rounded-2xl bg-muted sm:h-[420px] lg:h-[500px]">
          <button
            type="button"
            onClick={() => setExpanded(true)}
            aria-label="Ampliar imagem"
            className="h-full w-full cursor-zoom-in"
          >
            <span key={activeImage.src} className="slide-fade block h-full w-full">
              <GalleryImage
                sizes="(min-width: 1240px) 1160px, 100vw"
                item={activeImage}
                loading="eager"
              />
            </span>
          </button>

          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={previous}
                aria-label="Imagem anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-2 text-white transition hover:bg-black/65 sm:opacity-0 sm:group-hover:opacity-100"
              >
                <CaretLeft size={22} />
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Próxima imagem"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-2 text-white transition hover:bg-black/65 sm:opacity-0 sm:group-hover:opacity-100"
              >
                <CaretRight size={22} />
              </button>

              <div className="absolute bottom-3 left-3 rounded-full bg-black/75 px-3 py-1 text-xs text-white">
                {activeIndex + 1} / {items.length}
              </div>
            </>
          )}

          <button
            type="button"
            onClick={() => setExpanded(true)}
            aria-label="Ver galeria ampliada"
            className="absolute bottom-3 right-3 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
          >
            <SquaresFour size={18} />
          </button>
        </div>

        {thumbnails.length > 0 && (
          <div className="grid grid-cols-4 gap-2 sm:grid-cols-5">
            {thumbnails.slice(0, 5).map((item) => {
              const itemIndex = items.indexOf(item);

              return (
                <button
                  key={`${item.src}-${itemIndex}`}
                  type="button"
                  onClick={() => setActiveIndex(itemIndex)}
                  aria-label={`Ver imagem ${itemIndex + 1}`}
                  className="h-[72px] overflow-hidden rounded-lg border-2 border-transparent opacity-75 transition hover:border-primary hover:opacity-100 sm:h-[90px]"
                >
                  <ResponsiveImage
                    sizes="120px"
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover object-top"
                  />
                </button>
              );
            })}
          </div>
        )}

        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">
              {activeImage.title ?? activeImage.alt}
            </p>
            {activeImage.caption && (
              <p className="mt-1 text-sm text-muted-foreground">
                {activeImage.caption}
              </p>
            )}
          </div>

          <div className="flex shrink-0 items-center gap-4">
            {activeImage.reasons ? (
              <ReasonsButton
                onClick={() => {
                  setOpenTour(true);
                  setExpanded(true);
                }}
              />
            ) : null}
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="min-h-6 text-sm text-muted-foreground transition hover:text-foreground"
            >
              {items.length > 1 ? "Ver todas" : "Ampliar"}
            </button>
          </div>
        </div>
      </section>

      {expanded && (
        <Lightbox
          items={items}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          startWithTour={openTour}
          onGoToResults={resultsTargetId ? goToResults : undefined}
          onClose={closeLightbox}
          previous={previous}
          next={next}
        />
      )}
    </>
  );
}

type LightboxProps = {
  items: GalleryItem[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  startWithTour: boolean;
  onGoToResults?: (() => void) | undefined;
  onClose: () => void;
  previous: () => void;
  next: () => void;
};

/** Telas mais altas que isso ficam pequenas inteiras e podem ser ampliadas. */
const TALL_SCREEN_RATIO = 2.7;

/** Folga em volta do item destacado no tour. */
const SPOT_MARGIN = 6;

/** A tela precisa ser este tanto mais alta que o aparelho para deslizar durante o tour. */
const DEVICE_WINDOW_MARGIN = 1.15;

/** Posição da tela dentro do aparelho, em % da imagem, para centralizar o trecho destacado. */
function deviceScroll(spot: GalleryReason, visiblePercent: number) {
  const centered = spot.y + spot.h / 2 - visiblePercent / 2;
  return Math.max(0, Math.min(Math.min(centered, spot.y), 100 - visiblePercent));
}

function TourPanel({
  reasons,
  screenKey,
  step,
  setStep,
  screenLabel,
  closing,
  onPreviousScreen,
  onNextScreen,
  onGoToResults,
  onClose,
}: {
  reasons: GalleryReason[];
  screenKey: string;
  step: number;
  setStep: (step: number) => void;
  screenLabel: string;
  closing: boolean;
  onPreviousScreen: (() => void) | undefined;
  onNextScreen: (() => void) | undefined;
  onGoToResults: (() => void) | undefined;
  onClose: () => void;
}) {
  const isFirstStep = step === 0;
  const isLastStep = step === reasons.length - 1;
  const activeRef = useRef<HTMLLIElement>(null);

  // Mantém o ponto ativo visível quando a lista é maior que o painel.
  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: "nearest", behavior: scrollBehavior() });
  }, [step, screenKey]);

  return (
    <aside
      aria-label="O que foi pensado"
      className={`tour-panel flex max-h-[42%] w-full shrink-0 flex-col rounded-2xl bg-background p-4 text-foreground md:mt-16 md:max-h-[calc(100%-5rem)] md:w-[320px] md:self-start ${
        closing ? "is-closing" : ""
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-[14px] font-semibold">O que foi pensado</h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar o que foi pensado"
          className="rounded-full p-1 transition hover:bg-panel"
        >
          <X size={16} />
        </button>
      </div>

      <ol
        key={screenKey}
        style={{ "--cascade-count": reasons.length } as CSSProperties}
        className="reasons-cascade mt-3 grid min-h-0 gap-2 overflow-y-auto"
      >
        {reasons.map((reason, index) => {
          const isActive = index === step;

          return (
            <li
              key={reason.text}
              ref={isActive ? activeRef : undefined}
              style={{ "--cascade-index": index } as CSSProperties}
              className={`rounded-xl text-[14px] leading-[1.55] transition-colors duration-300 ${
                isActive ? "bg-foreground text-background" : "bg-panel text-muted-foreground"
              }`}
            >
              <button
                type="button"
                onClick={() => setStep(index)}
                aria-current={isActive ? "step" : undefined}
                className="flex w-full gap-3 p-3 text-left hover:text-foreground aria-[current=step]:hover:text-background"
              >
                <span aria-hidden="true" className="comparison-marker shrink-0">
                  {index + 1}
                </span>
                <span>{reason.text}</span>
              </button>
              {reason.ref ? (
                <div className="px-3 pb-3 pl-[48px]">
                  <ReferenceLink reference={reason.ref} showLabel={isActive} />
                </div>
              ) : null}
            </li>
          );
        })}
      </ol>

      {isLastStep && !onNextScreen && onGoToResults ? (
        <button
          type="button"
          onClick={onGoToResults}
          className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-[13px] text-background transition-opacity hover:opacity-85"
        >
          Ver os resultados <span aria-hidden="true">→</span>
        </button>
      ) : null}

      <div className="mt-3 flex items-center justify-between gap-2">
        <span className="text-xs text-muted-foreground">
          Ponto {step + 1} de {reasons.length} · {screenLabel}
        </span>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            disabled={isFirstStep && !onPreviousScreen}
            onClick={isFirstStep ? onPreviousScreen : () => setStep(step - 1)}
            aria-label={isFirstStep ? "Tela anterior" : "Ponto anterior"}
            className="rounded-full border border-border p-2 transition-colors hover:bg-foreground hover:text-background disabled:pointer-events-none disabled:opacity-40"
          >
            <CaretLeft size={14} />
          </button>
          <button
            type="button"
            disabled={isLastStep && !onNextScreen}
            onClick={isLastStep ? onNextScreen : () => setStep(step + 1)}
            aria-label={isLastStep ? "Próxima tela" : "Próximo ponto"}
            className="rounded-full border border-border p-2 transition-colors hover:bg-foreground hover:text-background disabled:pointer-events-none disabled:opacity-40"
          >
            <CaretRight size={14} />
          </button>
        </div>
      </div>
    </aside>
  );
}

function Lightbox({
  items,
  activeIndex,
  setActiveIndex,
  startWithTour,
  onGoToResults,
  onClose,
  previous,
  next,
}: LightboxProps) {
  const tour = useCascadeToggle(startWithTour);
  const [step, setStep] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const pendingStep = useRef(0);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Leva o foco para a galeria e devolve ao botão de origem quando ela fecha.
  useEffect(() => {
    const opener = document.activeElement;
    dialogRef.current?.focus({ preventScroll: true });

    return () => {
      if (opener instanceof HTMLElement) opener.focus({ preventScroll: true });
    };
  }, []);

  /** Mantém a navegação por teclado dentro da galeria. */
  function trapFocus(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Tab" || !dialogRef.current) return;

    const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
      "a[href], button:not([disabled])",
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;

    if (event.shiftKey && (active === first || active === dialogRef.current)) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first?.focus();
    }
  }
  const activeImage = items[activeIndex];
  const reasons = activeImage?.reasons;
  const spot = tour.isOpen ? reasons?.[step] : undefined;

  useEffect(() => {
    setStep(pendingStep.current);
    pendingStep.current = 0;
    setZoomed(false);
  }, [activeIndex]);

  if (!activeImage) return null;

  /** Próxima tela com motivos, pulando as que não têm tour. */
  function findScreen(direction: 1 | -1) {
    for (let offset = 1; offset < items.length; offset += 1) {
      const raw = activeIndex + direction * offset;
      // O tour dos defeitos não volta ao início: ele termina no botão dos resultados.
      if (onGoToResults && raw >= items.length) return undefined;
      const index = (raw + items.length * offset) % items.length;
      if (items[index]?.reasons) return index;
    }
    return undefined;
  }

  const nextScreen = findScreen(1);
  const previousScreen = findScreen(-1);
  const meta = imageMeta[activeImage.src];
  const ratio = meta ? meta.width / meta.height : 1;
  const isTall = meta ? meta.height / meta.width > TALL_SCREEN_RATIO : false;
  const isScrolling = isTall && zoomed && !spot;
  const frameRatio = activeImage.frame ? FRAME_RATIO[activeImage.frame] : undefined;
  // No tour, telas longas aparecem em uma janela de aparelho que desliza até o trecho.
  const deviceRatio =
    spot && frameRatio && ratio * DEVICE_WINDOW_MARGIN < frameRatio ? frameRatio : undefined;
  const visiblePercent = deviceRatio ? (ratio / deviceRatio) * 100 : 100;
  const scrollTop = spot && deviceRatio ? deviceScroll(spot, visiblePercent) : 0;
  const stageRatio = deviceRatio ?? ratio;

  return (
    <div
      ref={dialogRef}
      tabIndex={-1}
      className="lightbox fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Galeria de imagens"
      onClick={onClose}
      onKeyDown={trapFocus}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar galeria"
        className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
      >
        <X size={24} />
      </button>

      <div
        className="flex h-full w-full max-w-7xl flex-col gap-4 md:flex-row"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-4">
          <div className="flex w-full items-center justify-between gap-4 pr-14 text-white">
            <div className="min-w-0">
              <p className="truncate text-sm font-medium sm:text-base">
                {activeImage.title ?? activeImage.alt}
              </p>
              <p className="text-xs text-white/60">
                {activeIndex + 1} de {items.length}
                {isScrolling ? " · role para ver a tela inteira" : ""}
              </p>
            </div>

            <div className="flex shrink-0 gap-2">
              {items.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={previous}
                    aria-label="Imagem anterior"
                    className="rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
                  >
                    <CaretLeft size={22} />
                  </button>
    
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Próxima imagem"
                    className="rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
                  >
                    <CaretRight size={22} />
                  </button>
                </>
              ) : null}
            </div>
          </div>

          <div
            className={`min-h-0 w-full flex-1 [container-type:size] ${
              isScrolling ? "overflow-y-auto" : "flex items-center justify-center"
            }`}
          >
            <div
              key={activeImage.src}
              className={`slide-fade relative overflow-hidden ${isScrolling ? "mx-auto" : ""}`}
              style={{
                aspectRatio: stageRatio,
                width: isScrolling
                  ? `min(100cqw, ${meta?.width ?? 1600}px)`
                  : `min(100cqw, calc(100cqh * ${stageRatio}))`,
              }}
            >
              <div
                className="device-screen relative"
                style={{
                  aspectRatio: ratio,
                  transform: `translateY(-${scrollTop}%)`,
                }}
              >
                <ResponsiveImage
                  sizes="100vw"
                  loading="eager"
                  src={activeImage.src}
                  alt={activeImage.alt}
                  className="block h-full w-full"
                />

                {spot ? (
                  <span
                    aria-hidden="true"
                    className="tour-spotlight"
                    style={{
                      left: `calc(${spot.x}% - ${SPOT_MARGIN}px)`,
                      top: `calc(${spot.y}% - ${SPOT_MARGIN}px)`,
                      width: `calc(${spot.w}% + ${SPOT_MARGIN * 2}px)`,
                      height: `calc(${spot.h}% + ${SPOT_MARGIN * 2}px)`,
                    }}
                  />
                ) : null}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {reasons ? (
              <button
                type="button"
                onClick={tour.toggle}
                aria-expanded={tour.isOpen}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[13px] text-white transition hover:bg-white/20"
              >
                <Lightbulb size={16} aria-hidden="true" />
                {tour.isOpen ? "Ocultar o que foi pensado" : "Ver o que foi pensado"}
              </button>
            ) : null}

            {isTall && !spot ? (
              <button
                type="button"
                onClick={() => setZoomed((value) => !value)}
                className="rounded-full bg-white/10 px-4 py-2 text-[13px] text-white transition hover:bg-white/20"
              >
                {zoomed ? "Ver tela inteira" : "Ampliar para ler"}
              </button>
            ) : null}
          </div>

          {items.length > 1 && !(tour.isMounted && reasons) ? (
            <div className="flex max-w-full justify-center gap-2 overflow-x-auto py-2">
              {items.map((item, index) => (
                <button
                  key={`${item.src}-${index}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Ver imagem ${index + 1}`}
                  className={`h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition sm:h-16 sm:w-24 ${
                    index === activeIndex
                      ? "border-white"
                      : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                >
                  <ResponsiveImage
                    sizes="96px"
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover object-top"
                  />
                </button>
              ))}
            </div>
          ) : null}
        </div>

        {tour.isMounted && reasons ? (
          <TourPanel
            reasons={reasons}
            screenKey={activeImage.src}
            step={step}
            setStep={setStep}
            screenLabel={`Tela ${activeIndex + 1} de ${items.length}`}
            closing={tour.phase === "closing"}
            onPreviousScreen={
              previousScreen === undefined
                ? undefined
                : () => {
                    pendingStep.current = (items[previousScreen]?.reasons?.length ?? 1) - 1;
                    setActiveIndex(previousScreen);
                  }
            }
            onNextScreen={
              nextScreen === undefined ? undefined : () => setActiveIndex(nextScreen)
            }
            onGoToResults={onGoToResults}
            onClose={tour.close}
          />
        ) : null}
      </div>
    </div>
  );
}

/** Converte as notas em passos do tour, levando a área da tela enquadrada para a imagem inteira. */
function notesToReasons(item: GalleryItem, notes: ComparisonNote[]): GalleryReason[] {
  const meta = imageMeta[item.src];
  const frameRatio = item.frame ? FRAME_RATIO[item.frame] : undefined;
  const scale = meta && frameRatio ? meta.width / frameRatio / meta.height : 1;

  return notes.map(({ text, ref, area: [x, y, w, h] }) => ({
    text,
    ref,
    x,
    y: y * scale,
    w,
    h: h * scale,
  }));
}

export function comparisonPair({
  label,
  before,
  after,
  beforeAlt,
  afterAlt,
  frame,
  notes,
}: {
  label: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  frame: "web" | "mobile";
  notes: ComparisonNote[];
}): ComparisonPair {
  return {
    label,
    before: {
      src: before,
      alt: beforeAlt,
      title: "Antes",
      caption: beforeAlt,
      // As telas antigas da Cursiva têm outra proporção e aparecem inteiras.
      frame: frame === "mobile" ? frame : undefined,
    },
    after: { src: after, alt: afterAlt, title: "Depois", caption: afterAlt, frame },
    notes,
  };
}

export type ComparisonPair = {
  label: string;
  before: GalleryItem;
  after: GalleryItem;
  notes: ComparisonNote[];
};

/** No celular, cada par é um bloco próprio, com título, imagens e notas. */
function MobileComparison({ pair }: { pair: ComparisonPair }) {
  const items = useMemo(
    () => [
      pair.before,
      {
        ...pair.after,
        markers: pair.notes,
        reasons: notesToReasons(pair.after, pair.notes),
      },
    ],
    [pair],
  );

  return (
    <article>
      <h3 className="case-subheading mb-3">{pair.label}</h3>
      <ImageGallery variant="comparison" items={items} />
      <div className="mt-5">
        <ComparisonNotes notes={pair.notes} />
      </div>
    </article>
  );
}

/** Antes/depois lado a lado, passando para os lados entre os pares. */
export function ComparisonGallery({ pairs }: { pairs: ComparisonPair[] }) {
  const [index, setIndex] = useState(0);
  const pair = pairs[index];

  if (!pair) return null;

  function go(step: number) {
    setIndex((current) => (current + step + pairs.length) % pairs.length);
  }

  return (
    <section>
      <div className="space-y-10 md:hidden">
        {pairs.map((item) => (
          <MobileComparison key={item.label} pair={item} />
        ))}
      </div>

      <div className="mb-4 hidden items-center justify-between gap-3 md:flex">
        <p className="min-w-0 truncate text-sm font-medium">{pair.label}</p>

        <div className="flex shrink-0 items-center gap-2">
          <span className="text-xs text-muted-foreground">
            {index + 1} / {pairs.length}
          </span>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Comparação anterior"
            className="rounded-full border border-border bg-background p-2 transition-colors hover:bg-foreground hover:text-background"
          >
            <CaretLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Próxima comparação"
            className="rounded-full border border-border bg-background p-2 transition-colors hover:bg-foreground hover:text-background"
          >
            <CaretRight size={16} />
          </button>
        </div>
      </div>

      <div
        key={pair.label}
        className="slide-fade hidden gap-6 md:grid lg:grid-cols-[minmax(0,1fr)_260px] lg:items-center lg:gap-8"
      >
        <div className="min-w-0">
          <ImageGallery
            variant="comparison"
            items={[
              pair.before,
              {
                ...pair.after,
                markers: pair.notes,
                reasons: notesToReasons(pair.after, pair.notes),
              },
            ]}
          />
        </div>
        <ComparisonNotes notes={pair.notes} />
      </div>
    </section>
  );
}
