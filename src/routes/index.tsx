import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { ResponsiveImage } from "@/components/site/ResponsiveImage";
import { Reveal } from "@/components/site/Reveal";
import { AboutMe } from "@/components/site/AboutMe";
import { HeroTitle } from "@/components/site/HeroTitle";

import capaCursiva from "@/assets/optimized/Cursiva/capa-home-cursiva-large.webp";
import capaBooking from "@/assets/optimized/Booking/capa-home-booking-large.webp";
import capaAngeloni from "@/assets/optimized/Angeloni/capa-home-angeloni-large.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sophia dos Santos · Engenheira de Software · Design de Produto" },
      {
        name: "description",
        content:
          "Portfólio de Sophia dos Santos, engenheira de software focada em design de produto. Estudos de caso de UX/UI: Cursiva, redesign do Booking.com e Angeloni: em casa.",
      },
      {
        property: "og:title",
        content: "Sophia dos Santos · Engenheira de Software · Design de Produto",
      },
      {
        property: "og:description",
        content:
          "Portfólio de Sophia dos Santos, engenheira de software focada em design de produto. Estudos de caso de UX/UI: Cursiva, redesign do Booking.com e Angeloni: em casa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://sophiadossantos.com/" },
      { property: "og:image", content: "https://sophiadossantos.com/og-image.png" },
      { name: "twitter:image", content: "https://sophiadossantos.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://sophiadossantos.com/" }],
  }),
  component: Home,
});

type Project = {
  to: "/cursiva" | "/booking" | "/angeloni";
  name: string;
  impact: string;
  context: string;
  description: string;
  thumb: string;
  badge?: string;
};

const FEATURED: Project = {
  to: "/cursiva",
  name: "Cursiva",
  impact: "IA que tira a burocracia da rotina de professores",
  context: "Projeto aplicado · Web",
  badge: "Em uso por professores",
  description:
    "Liderei o Product Design de uma plataforma com IA que simplifica tarefas repetitivas da rotina de professores, para quem tem muita ou pouca familiaridade com tecnologia.",
  thumb: capaCursiva,
};

const PROJECTS: Project[] = [
  {
    to: "/angeloni",
    name: "Angeloni: em casa",
    impact: "compras que aprendem com você",
    context: "Conceito · Mobile",
    description:
      "Refiz o projeto do zero depois de aprofundar meus estudos, e a evolução da V1 para a V2 é parte do case.",
    thumb: capaAngeloni,
  },
  {
    to: "/booking",
    name: "Booking.com",
    impact: "menos ruído entre a busca e a reserva",
    context: "Acadêmico · Web & Mobile",
    description:
      "Redesign das três principais páginas da jornada de reserva, repensando hierarquia, espaçamentos e navegação.",
    thumb: capaBooking,
  },
];

function CaseLink({ to, name }: Pick<Project, "to" | "name">) {
  return (
    <Link
      to={to}
      aria-label={`Ver estudo de caso ${name}`}
      className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-[13px] transition-colors hover:bg-foreground hover:text-background"
    >
      Ver estudo de caso
      <span aria-hidden="true">→</span>
    </Link>
  );
}

function CaseThumb({
  project,
  priority = false,
  sizes,
}: {
  project: Project;
  priority?: boolean;
  sizes: string;
}) {
  return (
    <Link
      to={project.to}
      tabIndex={-1}
      aria-hidden="true"
      className="case-thumb group block overflow-hidden"
    >
      <ResponsiveImage
        src={project.thumb}
        alt=""
        priority={priority}
        sizes={sizes}
        className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.015]"
      />
    </Link>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader variant="pill" />

      <section className="hero-aurora">
        <div className="hero-fold relative mx-auto flex max-w-[1240px] flex-col justify-center px-6 pt-28 md:px-10 md:pt-32">
          <Reveal>
            <HeroTitle />
          </Reveal>
        </div>
      </section>

      <main id="trabalhos" className="mx-auto max-w-[1240px] scroll-mt-24 px-6 pb-32 md:px-10">
        <h2 className="sr-only">Projetos</h2>

        <Reveal>
          <article className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,680px)] md:gap-10">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-foreground/[0.06] px-3 py-1 text-[12px] font-medium text-foreground/80">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-emerald-500" />
                {FEATURED.badge}
              </p>

              <h3 className="mt-4 font-sans text-[26px] leading-[1.25] tracking-tight md:text-[28px]">
                <span className="font-bold">{FEATURED.name}</span>
                <span className="font-normal text-foreground/75"> — {FEATURED.impact}</span>
              </h3>

              <p className="mt-2 text-[14px] text-muted-foreground">{FEATURED.context}</p>

              <p className="mt-4 text-[16px] leading-[1.75] text-muted-foreground">
                {FEATURED.description}
              </p>

              <CaseLink to={FEATURED.to} name={FEATURED.name} />
            </div>

            <CaseThumb project={FEATURED} priority sizes="(min-width: 768px) 780px, 100vw" />
          </article>
        </Reveal>

        <div className="project-grid">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.to} delay={index * 80}>
              <article>
                <CaseThumb project={project} sizes="(min-width: 768px) 560px, 100vw" />

                <h3 className="mt-6 font-sans text-[22px] leading-[1.3] tracking-tight">
                  <span className="font-bold">{project.name}</span>
                  <span className="font-normal text-foreground/75"> — {project.impact}</span>
                </h3>

                <p className="mt-2 text-[14px] text-muted-foreground">{project.context}</p>

                <p className="mt-4 max-w-[480px] text-[15px] leading-[1.7] text-muted-foreground">
                  {project.description}
                </p>

                <CaseLink to={project.to} name={project.name} />
              </article>
            </Reveal>
          ))}
        </div>

        <AboutMe />
      </main>
    </div>
  );
}
