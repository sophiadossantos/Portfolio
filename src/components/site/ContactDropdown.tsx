import { useEffect, useRef, useState, type MouseEvent, type PointerEvent } from "react";

import { EMAIL_URL, LINKEDIN_URL, RESUME_URL, WHATSAPP_URL } from "./contacts";

const EMAIL = { label: "E-mail", href: EMAIL_URL, external: false };
const WHATSAPP = { label: "WhatsApp", href: WHATSAPP_URL, external: true };
const LINKEDIN = { label: "LinkedIn", href: LINKEDIN_URL, external: true };
const RESUME = { label: "Currículo", href: RESUME_URL, external: true };

const FULL_CONTACTS = [EMAIL, WHATSAPP, LINKEDIN, RESUME];
const COMPACT_CONTACTS = [WHATSAPP, LINKEDIN, EMAIL];

const HOVER_CLOSE_DELAY_MS = 180;

type ContactDropdownProps = {
  className: string;
  label?: string;
  withStar?: boolean;
  align?: "left" | "right";
  compact?: boolean;
};

export function ContactDropdown({
  className,
  label = "Vamos conversar",
  withStar = true,
  align = "left",
  compact = false,
}: ContactDropdownProps) {
  const contacts = compact ? COMPACT_CONTACTS : FULL_CONTACTS;

  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isHovering = useRef(false);
  const closeTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: globalThis.PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const handlePointerEnter = (event: PointerEvent) => {
    if (event.pointerType !== "mouse") return;

    window.clearTimeout(closeTimer.current);
    isHovering.current = true;
    setOpen(true);
  };

  const handlePointerLeave = (event: PointerEvent) => {
    if (event.pointerType !== "mouse") return;

    isHovering.current = false;
    closeTimer.current = window.setTimeout(() => setOpen(false), HOVER_CLOSE_DELAY_MS);
  };

  const handleClick = (event: MouseEvent) => {
    // Com o mouse o hover já controla o menu; toque e teclado usam o clique.
    if (isHovering.current && event.detail > 0) return;

    setOpen((current) => !current);
  };

  return (
    <div
      ref={containerRef}
      className="contact-bubble"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <button
        type="button"
        onClick={handleClick}
        aria-expanded={open}
        aria-haspopup="true"
        className={className}
      >
        {withStar && (
          <img
            src="/favicon.png"
            width={14}
            height={14}
            alt=""
            className="about-link-star"
            aria-hidden="true"
          />
        )}
        {label}
      </button>

      <div
        className={`contact-bubble-menu ${align === "right" ? "is-right" : ""} ${compact ? "is-compact" : ""} ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        {!compact && (
          <p>
            Estou em busca de oportunidades em Product Design e UX/UI. Se você tem uma vaga, um
            projeto ou só quer trocar ideias sobre design, vou adorar receber sua mensagem.
          </p>
        )}

        <div className="contact-bubble-links">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.external ? "_blank" : undefined}
              rel={contact.external ? "noreferrer" : undefined}
              onClick={() => setOpen(false)}
            >
              <img
                src="/favicon.png"
                width={14}
                height={14}
                alt=""
                aria-hidden="true"
              />
              {contact.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
