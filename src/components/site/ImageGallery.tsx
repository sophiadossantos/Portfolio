
import { useEffect, useState } from "react";
import {
  CaretLeft,
  CaretRight,
  SquaresFour,
  X,
} from "@phosphor-icons/react";

import { ResponsiveImage } from "./ResponsiveImage";

export type GalleryItem = {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
};

type ImageGalleryProps = {
  items: GalleryItem[];
  variant?: "default" | "carousel" | "comparison";
};

export function ImageGallery({
  items,
  variant = "default",
}: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

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

  if (!items.length) return null;

  const activeImage = items[activeIndex];

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
    return (
      <>
        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          {items.map((item, index) => (
            <button
              key={`${item.src}-${index}`}
              type="button"
              onClick={() => {
                setActiveIndex(index);
                setExpanded(true);
              }}
              className="group min-w-0 text-left"
              aria-label={`Ampliar ${item.title ?? item.alt}`}
            >
              <div className="flex h-[220px] items-center justify-center overflow-hidden rounded-xl border border-border bg-muted sm:h-[300px] lg:h-[360px]">
                <ResponsiveImage
                  sizes="(min-width: 1240px) 570px, 50vw"
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.02]"
                />
              </div>

              <p className="mt-2 text-sm font-medium">
                {item.title ?? item.alt}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Clique para ampliar
              </p>
            </button>
          ))}
        </div>

        {expanded && (
          <Lightbox
            items={items}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            onClose={() => setExpanded(false)}
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
            onClose={() => setExpanded(false)}
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
      <section className="w-full space-y-3">
        <div className="group relative flex h-[300px] items-center justify-center overflow-hidden rounded-2xl bg-muted sm:h-[420px] lg:h-[500px]">
          <button
            type="button"
            onClick={() => setExpanded(true)}
            aria-label="Ampliar imagem"
            className="h-full w-full cursor-zoom-in"
          >
            <ResponsiveImage
              sizes="(min-width: 1240px) 1160px, 100vw"
              key={activeImage.src}
              src={activeImage.src}
              alt={activeImage.alt}
              className="h-full w-full object-contain"
            />
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

              <div className="absolute bottom-3 left-3 rounded-full bg-black/50 px-3 py-1 text-xs text-white">
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
                    className="h-full w-full object-cover"
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

          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="shrink-0 text-sm text-muted-foreground transition hover:text-foreground"
          >
            Ver todas
          </button>
        </div>
      </section>

      {expanded && (
        <Lightbox
          items={items}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          onClose={() => setExpanded(false)}
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
  onClose: () => void;
  previous: () => void;
  next: () => void;
};

function Lightbox({
  items,
  activeIndex,
  setActiveIndex,
  onClose,
  previous,
  next,
}: LightboxProps) {
  const activeImage = items[activeIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Galeria de imagens"
      onClick={onClose}
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
        className="flex h-full w-full max-w-7xl flex-col items-center justify-center gap-4"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex w-full items-center justify-between gap-4 text-white">
          <div className="min-w-0">
            <p className="truncate text-sm font-medium sm:text-base">
              {activeImage.title ?? activeImage.alt}
            </p>
            <p className="text-xs text-white/60">
              {activeIndex + 1} de {items.length}
            </p>
          </div>

          <div className="flex shrink-0 gap-2">
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
          </div>
        </div>

        <div className="flex min-h-0 w-full flex-1 items-center justify-center">
          <ResponsiveImage
            sizes="100vw"
            loading="eager"
            key={activeImage.src}
            src={activeImage.src}
            alt={activeImage.alt}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {items.length > 1 && (
          <div className="flex max-w-full gap-2 overflow-x-auto py-2">
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
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
