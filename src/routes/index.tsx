import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { ResponsiveImage } from "@/components/site/ResponsiveImage";
import { Reveal } from "@/components/site/Reveal";
import { AboutMe } from "@/components/site/AboutMe";

import capaCursiva from "@/assets/optimized/Cursiva/capa-home-cursiva-large.webp";
import capaBooking from "@/assets/optimized/Booking/capa-home-booking-large.webp";
import capaAngeloni from "@/assets/optimized/Angeloni/capa-home-angeloni-large.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sophia dos Santos — Product Designer UX/UI" },
      {
        name: "description",
        content:
          "Portfólio de Sophia dos Santos, designer de produto em formação. Estudos de caso de UX/UI: Cursiva, redesign do Booking.com e Angeloni: em casa.",
      },
      { property: "og:title", content: "Sophia dos Santos — Product Designer UX/UI" },
      {
        property: "og:description",
        content:
          "Portfólio de Sophia dos Santos, designer de produto em formação. Estudos de caso de UX/UI: Cursiva, redesign do Booking.com e Angeloni: em casa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://sophiadossantos.com/og-image.png" },
      { name: "twitter:image", content: "https://sophiadossantos.com/og-image.png" },
    ],
  }),
  component: Home,
});

const PROJECTS = [
  {
    to: "/cursiva",
    name: "Cursiva",
    role: "Plataforma para professores · Web",
    description:
      "Liderei o Product Design de uma plataforma com IA que simplifica tarefas repetitivas da rotina de professores, para quem tem muita ou pouca familiaridade com tecnologia.",
    thumb: capaCursiva,
  },
  {
    to: "/booking",
    name: "Booking.com",
    role: "Redesign · Web & Mobile",
    description:
      "Redesign acadêmico das três principais páginas da jornada de reserva, repensando hierarquia, espaçamentos e navegação para web e mobile.",
    thumb: capaBooking,
  },
  {
    to: "/angeloni",
    name: "Angeloni: em casa",
    role: "Experiência de compras · Mobile",
    description:
      "App de compras que aprende com os hábitos do consumidor. Refiz o projeto do zero depois de aprofundar meus estudos, e a evolução da V1 para a V2 é parte do case.",
    thumb: capaAngeloni,
  },
] as const;

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader variant="pill" />

      <section className="hero-aurora">
        <div className="mx-auto flex max-w-[1240px] flex-col justify-center px-6 pb-16 pt-32 md:px-10 md:pt-36">
          <Reveal>
            <h1 className="max-w-[900px] font-display text-[28px] leading-[1.35] tracking-tight md:text-[34px]">
              <span className="font-bold">Olá, eu sou a Sophia.</span>{" "}
              <span className="font-normal">
                Designer de Produto em formação, focada em criar experiências intuitivas e
                centradas nas pessoas.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <a
              href="#trabalhos"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-foreground/25 bg-white/40 px-5 py-2.5 text-[13px] backdrop-blur transition-colors hover:bg-foreground hover:text-background"
            >
              Conheça o meu trabalho
              <span aria-hidden="true">↓</span>
            </a>
          </Reveal>
        </div>
      </section>

      <main
        id="trabalhos"
        className="mx-auto max-w-[1240px] scroll-mt-24 px-6 pb-32 pt-8 md:px-10 md:pt-12"
      >
        <h2 className="sr-only">Projetos</h2>

        <div className="project-list">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.to}>
              <article className="grid items-center gap-10 md:grid-cols-[minmax(0,340px)_minmax(0,1fr)] md:gap-16">
                <div>
                  <h3 className="font-display text-[22px] font-bold tracking-tight">
                    {project.name}
                  </h3>

                  <p className="mt-1 text-[13.5px] text-muted-foreground">
                    {project.role}
                  </p>

                  <p className="mt-5 max-w-[380px] text-[13.5px] leading-[1.75] text-muted-foreground">
                    {project.description}
                  </p>

                  <Link
                    to={project.to}
                    className="mt-7 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-[13px] transition-colors hover:bg-foreground hover:text-background"
                  >
                    Ver estudo de caso
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>

                <Link
                  to={project.to}
                  className="group block overflow-hidden"
                  aria-label={`Ver estudo de caso ${project.name}`}
                >
                  <ResponsiveImage
                    src={project.thumb}
                    alt={`Prévia das telas do projeto ${project.name}`}
                    priority={index === 0}
                    sizes="(min-width: 768px) 756px, 100vw"
                    className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                  />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <AboutMe />
      </main>
    </div>
  );
}