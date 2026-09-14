import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ChatCircleDots,
  LinkedinLogo,
  MapPin,
  Sparkle,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";

import sophiaPhoto from "@/assets/sophia-dos-santos.jpg";
import bookCover from "@/assets/trono-de-vidro.jpg";
import coffeePhoto from "@/assets/cafe-sophia.jpg";
import { Reveal } from "@/components/site/Reveal";

const WHATSAPP_URL = "https://wa.me/48998380521";
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
    <div className="about-clock" aria-label={`Horário atual em Criciúma, SC: ${time}`}>
      <span>CRICIÚMA, SC</span>
      <time>{time}</time>
    </div>
  );
}

export function AboutMe() {
  return (
    <Reveal>
      <section id="sobre-mim" className="about-space" aria-labelledby="about-title">
        <div className="about-intro">
          <h2 id="about-title">SOBRE MIM</h2>
          <p>
            Sou a Sophia, designer de produto em formação. Entre uma ideia, um café e algumas
            horas de Figma, estou sempre tentando criar alguma coisa nova.
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
          <Sparkle className="about-link-star about-link-star-one" weight="fill" aria-hidden="true" />
          <Sparkle className="about-link-star about-link-star-two" weight="fill" aria-hidden="true" />
          <span>
            <small>ver meu trabalho</small>
            PORTFÓLIO
          </span>
          <ArrowUpRight aria-hidden="true" />
        </Link>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="about-link about-link-chat"
        >
          <Sparkle className="about-link-star about-link-star-one" weight="fill" aria-hidden="true" />
          <Sparkle className="about-link-star about-link-star-two" weight="fill" aria-hidden="true" />
          <span>
            <small>fale comigo</small>
            VAMOS CONVERSAR
          </span>
          <ChatCircleDots aria-hidden="true" />
        </a>

        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
          className="about-link about-link-linkedin"
        >
          <Sparkle className="about-link-star about-link-star-one" weight="fill" aria-hidden="true" />
          <Sparkle className="about-link-star about-link-star-two" weight="fill" aria-hidden="true" />
          <span>
            <small>me encontre por lá</small>
            LINKEDIN
          </span>
          <LinkedinLogo weight="fill" aria-hidden="true" />
        </a>

        <figure className="about-sticker about-book">
          <img src={bookCover} alt="Capa do livro Trono de Vidro, de Sarah J. Maas" loading="lazy" />
          <figcaption className="about-hover-label">meu favorito</figcaption>
        </figure>

        <figure className="about-sticker about-coffee">
          <img src={coffeePhoto} alt="Café e waffles sobre uma mesa" loading="lazy" />
          <figcaption className="about-hover-label">pequenos momentos</figcaption>
        </figure>
      </section>
    </Reveal>
  );
}