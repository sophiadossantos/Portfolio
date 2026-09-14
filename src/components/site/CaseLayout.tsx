import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { Reveal } from "./Reveal";

export function CaseShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto w-full max-w-[1240px] px-6 pb-24 pt-28 md:px-10 md:pt-32">
        {children}
      </main>
    </div>
  );
}

export function CaseHero({
  title,
  subtitle,
  tags,
}: {
  title: string;
  subtitle: string;
  tags: string[];
}) {
  return (
    <Reveal>
      <header className="pb-10">
        <h1 className="font-display text-[34px] font-bold leading-tight tracking-tight md:text-[40px]">
          {title}
        </h1>
        <p className="mt-2 max-w-[760px] text-[14px] text-muted-foreground md:text-[15px]">
          {subtitle}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2.5">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border px-3.5 py-1.5 text-[12.5px] text-foreground/80"
            >
              {tag}
            </li>
          ))}
        </ul>
      </header>
    </Reveal>
  );
}

export function CaseSection({
  title,
  paragraphs,
  children,
}: {
  title: string;
  paragraphs: string[];
  children?: ReactNode;
}) {
  return (
    <section className="pt-14 first:pt-0">
      <Reveal>
        <h2 className="font-display text-[15px] font-semibold tracking-tight md:text-[16px]">
          {title}
        </h2>
        <div className="mt-3 max-w-[760px] space-y-4">
          {paragraphs.map((text) => (
            <p key={text.slice(0, 32)} className="text-[13.5px] leading-[1.75] text-muted-foreground md:text-[14px]">
              {text}
            </p>
          ))}
        </div>
      </Reveal>
      {children ? <div className="mt-8 space-y-6">{children}</div> : null}
    </section>
  );
}

/** Soft gray panel that holds the project imagery, as in the Figma frames. */
export function Panel({
  children,
  className = "",
  padded = true,
}: {
  children: ReactNode;
  className?: string;
  padded?: boolean;
}) {
  return (
    <Reveal>
      <div
        className={`overflow-hidden rounded-2xl bg-panel ${padded ? "p-6 md:p-10" : ""} ${className}`}
      >
        {children}
      </div>
    </Reveal>
  );
}

export function PanelImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Reveal>
      <div className="overflow-hidden rounded-2xl bg-panel">
        <img src={src} alt={alt} loading="lazy" className="block w-full" />
      </div>
    </Reveal>
  );
}

export function ScreenGrid({
  items,
  columns = 2,
}: {
  items: { src: string; alt: string }[];
  columns?: 2 | 3;
}) {
  return (
    <Panel>
      <div
        className={`grid gap-5 md:gap-7 ${columns === 3 ? "grid-cols-2 md:grid-cols-3" : "grid-cols-1 md:grid-cols-2"}`}
      >
        {items.map((item) => (
          <img
            key={item.src}
            src={item.src}
            alt={item.alt}
            loading="lazy"
            className="block w-full rounded-lg transition-transform duration-500 hover:-translate-y-1"
          />
        ))}
      </div>
    </Panel>
  );
}

export function NextProject({
  to,
  name,
  thumb,
}: {
  to: "/cursiva" | "/booking" | "/angeloni";
  name: string;
  thumb: string;
}) {
  return (
    <Reveal>
      <section className="mt-24 border-t border-border pt-12">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_1fr]">
          <Link to={to} className="group block overflow-hidden">
            <img
              src={thumb}
              alt={`Prévia do projeto ${name}`}
              loading="lazy"
              className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.015]"
            />
          </Link>
          <div>
            <p className="text-[13px] text-muted-foreground">Próximo projeto</p>
            <h2 className="font-display mt-1 text-[24px] font-bold tracking-tight md:text-[28px]">
              {name}
            </h2>
            <Link
              to={to}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-[13px] transition-colors hover:bg-foreground hover:text-background"
            >
              Ver estudo de caso
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
