import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

const NAV = [
  { label: "Sobre mim", href: "/#sobre-mim" },
  { label: "Currículo", href: "#curriculo" },
];

const WHATSAPP_URL = "https://wa.me/5548998380521";
const LINKEDIN_URL = "https://www.linkedin.com/in/sophia-dos-santos";
const EMAIL = "mailto:santossophiausa@gmail.com";

type SiteHeaderProps = {
  /** "pill" matches the home frame, "plain" matches the case study frames. */
  variant?: "pill" | "plain";
};

export function SiteHeader({ variant = "plain" }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        contactRef.current &&
        !contactRef.current.contains(event.target as Node)
      ) {
        setContactOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-border/70 bg-background shadow-[0_1px_8px_color-mix(in_oklab,var(--foreground)_6%,transparent)]"
          : "border-transparent bg-transparent shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-5 md:px-10 md:py-7">
        <Link
          to="/"
          className="text-[13px] font-bold tracking-tight text-foreground transition-opacity hover:opacity-60"
        >
          Sophia dos Santos
        </Link>

        <nav
          className={
            variant === "pill" && !scrolled
              ? "flex items-center gap-1 rounded-full bg-background px-2 py-1.5 shadow-sm"
              : "flex items-center gap-1"
          }
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

          <div ref={contactRef} className="relative">
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
      </div>
    </header>
  );
}