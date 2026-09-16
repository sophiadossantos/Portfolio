import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const NAV = [
  { label: "Sobre mim", href: "/#sobre-mim" },
  {
  label: "Currículo",
  href: "https://drive.google.com/file/d/1Cicpm-LeuSxQ5y9JuzlSKneEu4_Z9zYx/view?usp=sharing",
  },
];

const WHATSAPP_URL = "https://wa.me/5548998380521";
const LINKEDIN_URL = "https://www.linkedin.com/in/sophia-dos-santos";
const EMAIL = "mailto:santossophiausa@gmail.com";

type SiteHeaderProps = {
  variant?: "pill" | "plain";
};

export function SiteHeader({ variant = "plain" }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) {
      setContactOpen(false);
    }
  }, [mobileOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setContactOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled || mobileOpen
          ? "border-border/70 bg-background shadow-[0_1px_8px_color-mix(in_oklab,var(--foreground)_6%,transparent)]"
          : "border-transparent bg-transparent shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-5 md:px-10 md:py-7">
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="relative z-[61] text-[13px] font-bold tracking-tight text-foreground transition-opacity hover:opacity-60"
        >
          Sophia dos Santos
        </Link>

        {/* Desktop */}
        <nav
          className={`hidden md:flex ${
            variant === "pill" && !scrolled
              ? "items-center gap-1 rounded-full bg-background px-2 py-1.5 shadow-sm"
              : "items-center gap-1"
          }`}
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-1.5 text-[13px] text-foreground/80 transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}

          <div className="relative">
            <button
              type="button"
              onClick={() => setContactOpen((open) => !open)}
              aria-expanded={contactOpen}
              aria-haspopup="true"
              className="rounded-full px-3.5 py-1.5 text-[13px] text-foreground/80 transition-colors hover:text-foreground"
            >
              Contato
            </button>

            {contactOpen && (
              <div className="absolute right-0 top-full mt-3 w-[220px] rounded-2xl border border-border bg-background p-2 shadow-[0_10px_30px_color-mix(in_oklab,var(--foreground)_9%,transparent)]">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-[13px] transition-colors hover:bg-muted"
                >
                  <img
                    src="/favicon.png"
                    alt=""
                    className="h-3.5 w-3.5 object-contain"
                    aria-hidden="true"
                  />
                  WhatsApp
                </a>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-[13px] transition-colors hover:bg-muted"
                >
                  <img
                    src="/favicon.png"
                    alt=""
                    className="h-3.5 w-3.5 object-contain"
                    aria-hidden="true"
                  />
                  LinkedIn
                </a>

                <a
                  href={EMAIL}
                  className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-[13px] transition-colors hover:bg-muted"
                >
                  <img
                    src="/favicon.png"
                    alt=""
                    className="h-3.5 w-3.5 object-contain"
                    aria-hidden="true"
                  />
                  Email
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile */}
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="relative z-[61] flex h-9 w-9 items-center justify-center rounded-full text-foreground md:hidden"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          <span className={`hamburger ${mobileOpen ? "is-open" : ""}`}>
            <span />
            <span />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`mobile-menu md:hidden ${
          mobileOpen ? "is-open" : ""
        }`}
        aria-hidden={!mobileOpen}
      >
        {!contactOpen ? (
          <div className="mobile-menu-content">
            <a
              href="/#sobre-mim"
              onClick={closeMobileMenu}
              className="mobile-menu-link"
            >
              Sobre mim
            </a>

            <a
              href="https://drive.google.com/file/d/1Cicpm-LeuSxQ5y9JuzlSKneEu4_Z9zYx/view?usp=sharing"
              onClick={closeMobileMenu}
              className="mobile-menu-link"
            >
              Currículo
            </a>

            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="mobile-menu-link mobile-menu-contact"
            >
              Contato
              <span aria-hidden="true">→</span>
            </button>
          </div>
        ) : (
          <div className="mobile-menu-content">
            <button
              type="button"
              onClick={() => setContactOpen(false)}
              className="mobile-menu-back"
            >
              <span aria-hidden="true">←</span>
              Contato
            </button>

            <div className="mobile-contact-links">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                onClick={closeMobileMenu}
                className="mobile-contact-link"
              >
                <img
                  src="/favicon.png"
                  alt=""
                  aria-hidden="true"
                />
                WhatsApp
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                onClick={closeMobileMenu}
                className="mobile-contact-link"
              >
                <img
                  src="/favicon.png"
                  alt=""
                  aria-hidden="true"
                />
                LinkedIn
              </a>

              <a
                href={EMAIL}
                onClick={closeMobileMenu}
                className="mobile-contact-link"
              >
                <img
                  src="/favicon.png"
                  alt=""
                  aria-hidden="true"
                />
                Email
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}