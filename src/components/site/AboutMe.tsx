import { MapPin } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

import sophiaPhoto from "@/assets/optimized/sophia-dos-santos-large.webp";
import { ContactDropdown } from "@/components/site/ContactDropdown";
import { LINKEDIN_URL } from "@/components/site/contacts";
import { Reveal } from "@/components/site/Reveal";
import { ResponsiveImage } from "@/components/site/ResponsiveImage";

const BRASILIA_TIME = new Intl.DateTimeFormat("pt-BR", {
  timeZone: "America/Sao_Paulo",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

function BrasiliaClock() {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const update = () => {
      setTime(BRASILIA_TIME.format(new Date()));
    };

    update();

    const timer = window.setInterval(update, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div
      className="about-clock"
      aria-label={`Horário atual em Criciúma, SC: ${time}`}
    >
      <span>CRICIÚMA, SC</span>
      <time>{time}</time>
    </div>
  );
}

const aboutLinkClass =
  "about-link inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-[13px] transition-colors hover:bg-foreground hover:text-background";

export function AboutMe() {
  return (
    <Reveal>
      <section
        id="sobre-mim"
        className="about-space"
        aria-labelledby="about-title"
      >
        <div className="about-intro p-4">
          <h2
            id="about-title"
            className="normal-case"
          >
            Sobre mim
          </h2>

          <p>
            Tenho 20 anos, sou de Santa Catarina e curso Engenharia de Software. Sempre me
            interessei pela parte estética das coisas e, com o tempo, fui percebendo que o que
            mais me prende é o que existe por trás de uma boa experiência: entender como as
            pessoas pensam e transformar isso em interfaces claras. Hoje estou construindo minha
            trajetória em Product Design, unindo o olhar visual com a base técnica da engenharia.
          </p>

          <div className="about-links">
            <ContactDropdown className={`${aboutLinkClass} is-primary`} />

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className={aboutLinkClass}
            >
              <img
                src="/favicon.png"
                width={14}
                height={14}
                alt=""
                className="about-link-star"
                aria-hidden="true"
              />
              LinkedIn
            </a>
          </div>
        </div>

        <figure className="about-photo">
          <ResponsiveImage
            src={sophiaPhoto}
            alt="Sophia dos Santos sorrindo"
            sizes="290px"
          />

          <figcaption>
            <MapPin weight="fill" aria-hidden="true" />
            Criciúma, SC
          </figcaption>

          <BrasiliaClock />

          <span className="about-hover-label">essa sou eu</span>
        </figure>
      </section>
    </Reveal>
  );
}