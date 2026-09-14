import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const NAV = [
  { label: "Sobre mim", href: "/#sobre-mim" },
  { label: "Currículo", href: "#curriculo" },
  { label: "Contato", href: "#contato" },
];

type SiteHeaderProps = {
  /** "pill" matches the home frame, "plain" matches the case study frames. */
  variant?: "pill" | "plain";
};

export function SiteHeader({ variant = "plain" }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
        </nav>
      </div>
    </header>
  );
}
