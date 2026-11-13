
import { ImageGallery, ReferenceLink, type GalleryItem } from "./ImageGallery";
import type { DesignReference } from "./references";
import { ResponsiveImage } from "./ResponsiveImage";
import { Link } from "@tanstack/react-router";
import {
  DeviceMobile,
  GitFork,
  Lightbulb,
  Question,
  Scales,
  Signpost,
  WarningCircle,
  type Icon as PhosphorIcon,
} from "@phosphor-icons/react";
import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { Reveal } from "./Reveal";

export function CaseShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto w-full max-w-[1240px] px-6 pt-28 md:px-10 md:pt-32">
        {children}
      </main>
    </div>
  );
}

export type MetaItem = { label: string; value: string };

export function ProjectMeta({ items }: { items: MetaItem[] }) {
  return (
    <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-6 md:grid-cols-4">
      {items.map(({ label, value }) => (
        <div key={label}>
          <dt className="case-label">{label}</dt>
          <dd className="mt-1 text-[14px] leading-[1.55]">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function CaseHero({
  title,
  subtitle,
  tags,
  meta,
  action,
}: {
  title: string;
  subtitle: string;
  tags: string[];
  meta: MetaItem[];
  action?: { label: string; href: string };
}) {
  return (
    <Reveal>
      <header>
        <Link
          to="/"
          hash="trabalhos"
          className="mb-6 inline-flex min-h-6 items-center text-[13px] text-muted-foreground transition-colors hover:text-foreground"
        >
          <span aria-hidden="true">←</span> Voltar aos projetos
        </Link>
        <h1 className="font-display text-[34px] font-bold leading-tight tracking-tight md:text-[40px]">
          {title}
        </h1>
        <p className="mt-2 max-w-[760px] text-[14px] text-muted-foreground md:text-[15px]">
          {subtitle}
        </p>
        {action ? (
          <a
            href={action.href}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center rounded-full bg-foreground px-5 py-2.5 text-[13px] text-background transition-opacity hover:opacity-85"
          >
            {action.label}
          </a>
        ) : null}
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
        <ProjectMeta items={meta} />
      </header>
    </Reveal>
  );
}

export function CaseSection({
  id,
  title,
  highlight,
  paragraphs = [],
  children,
}: {
  id?: string;
  title: string;
  highlight?: string;
  paragraphs?: string[];
  children?: ReactNode;
}) {
  const body = highlight ? [highlight, ...paragraphs] : paragraphs;

  return (
    <section id={id} className="case-section">
      <Reveal>
        <h2 className="case-section-title">{title}</h2>
        {body.length > 0 ? (
          <div className="mt-3 max-w-[760px] space-y-4">
            {body.map((text) => (
              <p
                key={text.slice(0, 32)}
                className="text-[13.5px] leading-[1.75] text-muted-foreground md:text-[14px]"
              >
                {text}
              </p>
            ))}
          </div>
        ) : null}
      </Reveal>
      {children ? <div className="case-content">{children}</div> : null}
    </section>
  );
}

export type Decision = {
  title: string;
  problem: string;
  decision: string;
  why: string;
  ref?: DesignReference;
};

const DECISION_BLOCKS = [
  { key: "problem", label: "Problema", Icon: WarningCircle },
  { key: "decision", label: "Decisão", Icon: Lightbulb },
  { key: "why", label: "Por quê", Icon: Question },
] as const;

export function DecisionCard({
  label,
  Icon,
  reference,
  children,
}: {
  label: string;
  Icon: PhosphorIcon;
  reference: DesignReference | undefined;
  children: ReactNode;
}) {
  return (
    <div className="group h-full rounded-2xl bg-panel p-5 transition-colors duration-300 hover:bg-foreground hover:text-background">
      <Icon
        size={20}
        aria-hidden="true"
        className="text-muted-foreground transition-colors duration-300 group-hover:text-background"
      />
      <h4 className="mt-3 text-[13px] font-semibold">{label}</h4>
      <p className="mt-1 text-[14px] leading-[1.65] text-muted-foreground transition-colors duration-300 group-hover:text-background/80">
        {children} {reference ? <ReferenceLink reference={reference} /> : null}
      </p>
    </div>
  );
}

export function DecisionCards({ decision }: { decision: Decision }) {
  return (
    <Reveal>
      <article>
        <h3 className="case-subheading">{decision.title}</h3>
        <div className="mt-3 grid gap-3 lg:grid-cols-3">
          {DECISION_BLOCKS.map(({ key, label, Icon }) => (
            <DecisionCard
              key={key}
              label={label}
              Icon={Icon}
              reference={key === "why" ? decision.ref : undefined}
            >
              {decision[key]}
            </DecisionCard>
          ))}
        </div>
      </article>
    </Reveal>
  );
}

export type Difficulty = {
  title: string;
  context: string;
  options?: string;
  decision: string;
  tradeoff: string;
  mobile?: string;
  ref?: DesignReference;
};

const DIFFICULTY_BLOCKS = [
  { key: "context", label: "Contexto", Icon: Signpost },
  { key: "options", label: "Opções consideradas", Icon: GitFork },
  { key: "decision", label: "Decisão", Icon: Lightbulb },
  { key: "tradeoff", label: "Trade-off", Icon: Scales },
  { key: "mobile", label: "No celular", Icon: DeviceMobile },
] as const;

/** Uma dificuldade contada sempre no mesmo formato: contexto → opções → decisão → trade-off. */
export function DifficultyBlock({ difficulty }: { difficulty: Difficulty }) {
  const blocks = DIFFICULTY_BLOCKS.filter(({ key }) => difficulty[key]);

  return (
    <Reveal>
      <article>
        <h3 className="case-subheading">{difficulty.title}</h3>
        {/* Três blocos ficam lado a lado; com número ímpar maior, o último ocupa a linha toda. */}
        <div
          className={`mt-3 grid gap-3 ${blocks.length === 3 ? "lg:grid-cols-3" : "md:grid-cols-2"}`}
        >
          {blocks.map(({ key, label, Icon }, index) => (
            <div
              key={key}
              className={
                blocks.length > 3 && blocks.length % 2 === 1 && index === blocks.length - 1
                  ? "md:col-span-2"
                  : undefined
              }
            >
              <DecisionCard
                label={label}
                Icon={Icon}
                reference={key === "decision" ? difficulty.ref : undefined}
              >
                {difficulty[key]}
              </DecisionCard>
            </div>
          ))}
        </div>
      </article>
    </Reveal>
  );
}

export type Metric = {
  status: "real" | "meta";
  name: string;
  value: string;
  detail: string;
  why: string;
};

/** Métricas do case: "real" é resultado observado; "meta" é critério de sucesso ainda não medido. */
export function MetricCards({ metrics }: { metrics: Metric[] }) {
  return (
    <Reveal>
      <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <li key={metric.name} className="flex flex-col rounded-2xl bg-panel p-5">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-background px-2.5 py-1 text-[11px] font-medium">
              <span
                aria-hidden="true"
                className={`size-1.5 rounded-full ${metric.status === "real" ? "bg-emerald-500" : "bg-foreground/30"}`}
              />
              {metric.status === "real" ? "Resultado" : "Meta definida"}
            </span>
            <h4 className="mt-4 text-[13px] font-semibold">{metric.name}</h4>
            <p className="mt-2 text-[28px] font-semibold leading-none tracking-tight">
              {metric.value}
            </p>
            <p className="mt-2 text-[13px] leading-[1.6] text-muted-foreground">{metric.detail}</p>
            <p className="mt-4 border-t border-border pt-3 text-[13px] leading-[1.6] text-muted-foreground">
              {metric.why}
            </p>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

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

export function PanelImage({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <Reveal>
      <div className="overflow-hidden rounded-2xl bg-panel">
        <ResponsiveImage
          src={src}
          alt={alt}
          priority={priority}
          sizes="(min-width: 1240px) 1160px, 100vw"
          className="block w-full"
        />
      </div>
    </Reveal>
  );
}

export function ScreenGrid({
  items,
}: {
  items: GalleryItem[];
  columns?: 2 | 3;
}) {
  return <ImageGallery items={items} />;
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
      <section className="next-project">
        <div className="grid items-center md:grid-cols-[minmax(0,560px)_1fr] md:gap-3">
          {/* A capa tem uma faixa de sombra embaixo, compensada para o cartão marcar o fim do bloco. */}
          <Link to={to} className="group -mb-[17%] block overflow-hidden md:-mb-[21%]">
            <ResponsiveImage
              src={thumb}
              sizes="(min-width: 768px) 560px, 100vw"
              alt={`Prévia do projeto ${name}`}
              className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.015]"
            />
          </Link>

          {/* O cartão da capa começa a 5,94% da borda da imagem. */}
          <div className="relative px-[5.94%] md:self-end md:px-0">
            <p className="text-[13px] text-muted-foreground">
              Próximo projeto
            </p>
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
