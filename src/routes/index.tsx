import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Reveal } from "@/components/site/Reveal";
import { AboutMe } from "@/components/site/AboutMe";
import {
  miniaturaTelaInicialAngeloniUrl,
  miniaturaTelaInicialBookingUrl,
  miniaturaTelaInicialCursivaUrl,
} from "@/assets/assets";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sophia dos Santos - Product Designer UX/UI" },
      {
        name: "description",
        content:
          "Portfólio de Sophia dos Santos, designer de produto focada em criar experiências intuitivas e centradas nas pessoas. Cursiva, Booking.com e Angeloni: em casa.",
      },
      { property: "og:title", content: "Sophia dos Santos - Product Designer UX/UI" },
      {
        property: "og:description",
        content:
          "Estudos de caso de UX/UI e Product Design: Cursiva, redesign do Booking.com e Angeloni: em casa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const PROJECTS = [
  {
    to: "/cursiva",
    name: "Cursiva",
    role: "Sistema para professores",
    description:
      "Projeto colaborativo de uma plataforma educacional que utiliza tecnologia e IA para simplificar tarefas repetitivas da rotina dos professores e tornar sua experiência mais clara e intuitiva.",
    thumb: miniaturaTelaInicialCursivaUrl,
  },
  {
    to: "/booking",
    name: "Booking.com",
    role: "Redesign · Web & Mobile",
    description:
      "Projeto acadêmico de redesign das principais etapas de uma experiência de reserva, explorando novas possibilidades de organização e navegação para web e mobile.",
    thumb: miniaturaTelaInicialBookingUrl,
  },
  {
    to: "/angeloni",
    name: "Angeloni: em casa",
    role: "Experiência de compras",
    description:
      "Projeto acadêmico de uma experiência de compra personalizada, pensada para utilizar os hábitos do consumidor e tornar compras recorrentes mais rápidas e práticas.",
    thumb: miniaturaTelaInicialAngeloniUrl,
  },
] as const;

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader variant="pill" />

      <section className="hero-aurora">
        <div className="mx-auto flex min-h-[78vh] max-w-[1240px] flex-col justify-center px-6 pb-24 pt-40 md:px-10">
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

      <main id="trabalhos" className="mx-auto max-w-[1240px] px-6 pb-32 md:px-10">
        <h2 className="sr-only">Projetos</h2>
        <div className="space-y-20">
          {PROJECTS.map((project) => (
            <Reveal key={project.to}>
              <article className="grid items-center gap-10 md:grid-cols-[minmax(0,340px)_minmax(0,1fr)] md:gap-16">
                <div>
                  <h3 className="font-display text-[22px] font-bold tracking-tight">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-[13.5px] text-muted-foreground">{project.role}</p>
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
                  <img
                    src={project.thumb}
                    alt={`Prévia das telas do projeto ${project.name}`}
                    loading="lazy"
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
