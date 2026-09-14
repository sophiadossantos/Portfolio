import { Link } from "@tanstack/react-router";
import { MapPin } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

import sophiaPhoto from "@/assets/sophia-dos-santos.jpg";
import { Reveal } from "@/components/site/Reveal";

const WHATSAPP_URL = "https://wa.me/5548998380521";
const LINKEDIN_URL = "https://www.linkedin.com/in/sophia-dos-santos";

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
    const update = () => setTime(BRASILIA_TIME.format(new Date()));
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

export function AboutMe() {
  return (
    <Reveal>
      <section
        id="sobre-mim"
        className="about-space"
        aria-labelledby="about-title"
      >
        <div className="about-intro">
          <h2 id="about-title">SOBRE MIM</h2>

          <p>
            Tenho 20 anos e sou de Santa Catarina. Atualmente curso Engenharia
            de Software e estou construindo minha trajetória na área de Product
            Design. Sempre tive bastante interesse pela parte estética e, com
            o tempo, fui me interessando também por tudo que existe por trás de
            uma boa experiência.
          </p>
        </div>

        <figure className="about-photo">
          <img
            src={sophiaPhoto}
            alt="Sophia dos Santos sorrindo"
            loading="lazy"
          />

          <figcaption>
            <MapPin weight="fill" aria-hidden="true" />
            Criciúma, SC
          </figcaption>

          <span className="about-hover-label">essa sou eu</span>
        </figure>

        <BrasiliaClock />

        <Link to="/" className="about-link about-link-portfolio">
          <img
            src="/favicon.png"
            alt=""
            className="about-link-star"
            aria-hidden="true"
          />

          <span>
            <small>ver meu trabalho</small>
            Portfólio
          </span>
        </Link>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="about-link about-link-chat"
        >
          <img
            src="/favicon.png"
            alt=""
            className="about-link-star"
            aria-hidden="true"
          />

          <span>
            <small>fale comigo</small>
            Vamos conversar
          </span>
        </a>

        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
          className="about-link about-link-linkedin"
        >
          <img
            src="/favicon.png"
            alt=""
            className="about-link-star"
            aria-hidden="true"
          />

          <span>
            <small>me encontre por lá</small>
            LinkedIn
          </span>
        </a>
      </section>
    </Reveal>
  );
}