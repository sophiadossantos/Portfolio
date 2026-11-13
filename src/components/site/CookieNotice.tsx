import { useEffect, useState } from "react";

import { startAnalytics } from "@/lib/analytics";

const CONSENT_KEY = "cookie-consent";
type Consent = "accepted" | "declined";

function readConsent() {
  try {
    return window.localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

function saveConsent(consent: Consent) {
  try {
    window.localStorage.setItem(CONSENT_KEY, consent);
  } catch {
    // Sem armazenamento, a escolha vale só para esta visita.
  }
}

export function CookieNotice() {
  const [visible, setVisible] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);

  useEffect(() => {
    const consent = readConsent();
    if (consent === "accepted") void startAnalytics();
    else if (consent === null) setVisible(true);
  }, []);

  function choose(consent: Consent) {
    saveConsent(consent);
    setVisible(false);
    if (consent === "accepted") void startAnalytics();
  }

  if (!visible) return null;

  return (
    <section className="privacy-notice" aria-labelledby="privacy-title">
      <h2 id="privacy-title">Este site usa cookies</h2>

      <p>
        Usamos cookies para melhorar sua experiência e analisar o tráfego do site. Ao clicar em
        Aceitar, você concorda com o uso de cookies.
      </p>

      {detailsOpen && (
        <dl id="privacy-details" className="privacy-details">
          <div>
            <dt>O que é coletado</dt>
            <dd>Dados de navegação, como páginas visitadas, dispositivo e navegador.</dd>
          </div>
          <div>
            <dt>Ferramenta usada</dt>
            <dd>Google Analytics.</dd>
          </div>
          <div>
            <dt>Sua escolha</dt>
            <dd>Você pode recusar sem afetar a navegação no site.</dd>
          </div>
        </dl>
      )}

      <div className="privacy-footer">
        <button
          type="button"
          className="privacy-more"
          aria-expanded={detailsOpen}
          aria-controls="privacy-details"
          onClick={() => setDetailsOpen((open) => !open)}
        >
          {detailsOpen ? "Ver menos" : "Saber mais"}
        </button>

        <div className="privacy-actions">
          <button type="button" onClick={() => choose("declined")}>
            Recusar
          </button>
          <button type="button" onClick={() => choose("accepted")}>
            Aceitar
          </button>
        </div>
      </div>
    </section>
  );
}
