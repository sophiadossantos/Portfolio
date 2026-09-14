type ScrollCardProps = {
  src: string;
  alt: string;
  /** Visible height of the card viewport. */
  height?: number;
  className?: string;
};

/**
 * Card with internal scroll: shows a tall screen capture inside a fixed
 * viewport so the visitor can explore the whole screen without leaving
 * the case study.
 */
export function ScrollCard({ src, alt, height = 440, className = "" }: ScrollCardProps) {
  return (
    <div
      className={`scroll-card group relative overflow-hidden rounded-xl border border-border/70 bg-white shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-shadow duration-300 hover:shadow-[0_12px_32px_-12px_rgba(16,24,40,0.18)] ${className}`}
      style={{ height }}
    >
      <div className="h-full w-full overflow-y-auto overscroll-contain">
        <img src={src} alt={alt} loading="lazy" className="block w-full" />
      </div>
      <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-foreground/80 px-2.5 py-1 text-[11px] font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        role para explorar
      </span>
    </div>
  );
}
