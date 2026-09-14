import { createFileRoute } from "@tanstack/react-router";
import {
  CaseHero,
  CaseSection,
  CaseShell,
  NextProject,
  Panel,
  PanelImage,
  ScreenGrid,
} from "@/components/site/CaseLayout";
import { ScrollCard } from "@/components/site/ScrollCard";
import {
  bookingImagem1Url,
  bookingImagem2Url,
  cardInterativoCapturaDeTelaBuscaDeAcomodacoesUrl,
  cardInterativoCapturaDeTelaInicioUrl,
  cardInterativoGroup1Url,
  cardInterativoGroup2Url,
  cardInterativoGroup4Url,
  cardInterativoScreencaptureBookingHotelBrSeteIlhasPtBrHtml202608262116121Url,
  miniaturaTelaInicialCursivaUrl,
  telasBookingBuscaDeAcomodacoesMobileUrl,
  telasBookingBuscaDeAcomodacoesWebUrl,
  telasBookingDetalhesDaAcomodacaoMobileUrl,
  telasBookingDetalhesDaAcomodacaoWebUrl,
  telasBookingInicioBookingUrl,
  telasBookingInicioWebBookingUrl,
} from "@/assets/assets";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Booking.com — Redesign | Sophia dos Santos" },
      {
        name: "description",
        content:
          "Estudo de caso do redesign das principais páginas da experiência de reserva do Booking.com para web e mobile.",
      },
      { property: "og:title", content: "Booking.com — Redesign | Sophia dos Santos" },
      {
        property: "og:description",
        content:
          "Redesign de uma experiência de reserva: análise das páginas atuais e nova organização visual para web e mobile.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookingCase,
});

const SOLUTION_SCREENS = [
  { src: telasBookingInicioWebBookingUrl, alt: "Página inicial redesenhada — web" },
  { src: telasBookingBuscaDeAcomodacoesWebUrl, alt: "Busca de acomodações — web" },
  { src: telasBookingDetalhesDaAcomodacaoWebUrl, alt: "Detalhes da acomodação — web" },
  { src: telasBookingInicioBookingUrl, alt: "Página inicial redesenhada — mobile" },
  { src: telasBookingBuscaDeAcomodacoesMobileUrl, alt: "Busca de acomodações — mobile" },
  { src: telasBookingDetalhesDaAcomodacaoMobileUrl, alt: "Detalhes da acomodação — mobile" },
];

const WEB_COMPARISONS: Array<[string, string, string]> = [
  [cardInterativoCapturaDeTelaInicioUrl, telasBookingInicioWebBookingUrl, "Página inicial"],
  [
    cardInterativoCapturaDeTelaBuscaDeAcomodacoesUrl,
    telasBookingBuscaDeAcomodacoesWebUrl,
    "Busca de acomodações",
  ],
  [
    cardInterativoScreencaptureBookingHotelBrSeteIlhasPtBrHtml202608262116121Url,
    telasBookingDetalhesDaAcomodacaoWebUrl,
    "Detalhes da acomodação",
  ],
];

const MOBILE_COMPARISONS: Array<[string, string, string]> = [
  [cardInterativoGroup2Url, telasBookingInicioBookingUrl, "Página inicial"],
  [cardInterativoGroup1Url, telasBookingBuscaDeAcomodacoesMobileUrl, "Busca de acomodações"],
  [
    cardInterativoGroup4Url,
    telasBookingDetalhesDaAcomodacaoMobileUrl,
    "Detalhes da acomodação",
  ],
];

function BookingCase() {
  return (
    <CaseShell>
      <CaseHero
        title="Booking.com"
        subtitle="Redesign de uma experiência de reserva"
        tags={["Projeto acadêmico · 2026", "Redesign", "UX/UI", "Web & Mobile"]}
      />

      <CaseSection
        title="Visão geral"
        paragraphs={[
          "O projeto foi desenvolvido na disciplina de UX/UI da faculdade, a partir de uma atividade que propunha escolher um sistema que já utilizamos no dia a dia e identificar pontos que poderiam ser melhorados através de um redesign.",
          "Escolhi trabalhar com o Booking por já conhecer sua experiência como usuária e por enxergar oportunidades de melhoria na jornada de reserva. A proposta foi redesenhar as três principais páginas da experiência, tanto para web quanto para mobile.",
        ]}
      >
        <PanelImage src={bookingImagem1Url} alt="Visão geral do redesign em web e mobile" />
      </CaseSection>

      <CaseSection
        title="O ponto de partida"
        paragraphs={[
          "Comecei explorando a experiência existente e observando as principais etapas da reserva. A ideia não era criar uma nova solução do zero, mas entender o que já funcionava e quais partes poderiam ser repensadas.",
          "A partir dessa análise, selecionei três páginas principais e comecei a observar como as informações e ações estavam organizadas em cada uma delas.",
        ]}
      >
        <Panel>
          <div className="grid gap-5 md:grid-cols-3">
            <ScrollCard
              src={cardInterativoCapturaDeTelaInicioUrl}
              alt="Captura da página inicial original do Booking.com"
            />
            <ScrollCard
              src={cardInterativoCapturaDeTelaBuscaDeAcomodacoesUrl}
              alt="Captura da busca de acomodações original do Booking.com"
            />
            <ScrollCard
              src={
                cardInterativoScreencaptureBookingHotelBrSeteIlhasPtBrHtml202608262116121Url
              }
              alt="Captura da página de detalhes da acomodação original do Booking.com"
            />
          </div>
          <p className="mt-5 text-center text-[12.5px] text-muted-foreground">
            Card interativo com scroll interno
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <ScrollCard
              src={cardInterativoGroup2Url}
              alt="Captura da página inicial original no mobile"
            />
            <ScrollCard
              src={cardInterativoGroup1Url}
              alt="Captura da busca de acomodações original no mobile"
            />
            <ScrollCard
              src={cardInterativoGroup4Url}
              alt="Captura dos detalhes da acomodação original no mobile"
            />
          </div>
        </Panel>
      </CaseSection>

      <CaseSection
        title="Analisando o que já existia"
        paragraphs={[
          "Ao olhar para as telas com mais atenção, comecei a identificar pontos que poderiam ser trabalhados principalmente na hierarquia das informações, nos espaçamentos e na organização dos elementos.",
          "Esse processo me fez perceber que um redesign não significa simplesmente mudar aquilo que já existe. Antes de começar a criar, é importante entender a lógica da experiência e pensar no que realmente pode ser melhorado.",
        ]}
      >
        <PanelImage src={bookingImagem2Url} alt="Análise das telas originais do Booking.com" />
      </CaseSection>

      <CaseSection
        title="Redesenhando para web e mobile"
        paragraphs={[
          "Com os pontos que queria trabalhar definidos, comecei a desenvolver a nova proposta para as três páginas.",
          "Na versão web, trabalhei a organização das informações e a hierarquia dos elementos, buscando deixar a navegação mais clara.",
          "Depois, levei a proposta para o mobile, repensando a disposição dos elementos para que a experiência continuasse funcionando bem em uma tela menor.",
          "Trabalhar os dois formatos me ajudou a entender que responsividade não é apenas reduzir uma interface. Cada tamanho de tela apresenta necessidades diferentes e exige decisões próprias de organização.",
        ]}
      >
        <Panel>
          <div className="mb-5 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            <p className="text-center text-[12px] font-semibold uppercase text-muted-foreground">Antes</p>
            <span className="text-muted-foreground" aria-hidden="true">→</span>
            <p className="text-center text-[12px] font-semibold uppercase text-muted-foreground">Depois</p>
          </div>
          <div className="space-y-8">
            {WEB_COMPARISONS.map(([before, after, label]) => (
              <div key={label}>
                <p className="mb-3 text-[13px] font-medium">{label} · Web</p>
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 md:gap-5">
                  <ScrollCard src={before} alt={`${label}: interface anterior em web`} height={420} />
                  <span className="text-muted-foreground" aria-hidden="true">→</span>
                  <ScrollCard src={after} alt={`${label}: redesign atual em web`} height={420} />
                </div>
              </div>
            ))}
            {MOBILE_COMPARISONS.map(([before, after, label]) => (
              <div key={`${label}-mobile`}>
                <p className="mb-3 text-[13px] font-medium">{label} · Mobile</p>
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 md:gap-5">
                  <ScrollCard src={before} alt={`${label}: interface anterior em mobile`} height={460} />
                  <span className="text-muted-foreground" aria-hidden="true">→</span>
                  <ScrollCard src={after} alt={`${label}: redesign atual em mobile`} height={460} />
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </CaseSection>

      <CaseSection
        title="A solução"
        paragraphs={[
          "O resultado foi um redesign das três principais páginas da experiência de reserva, desenvolvido para web e mobile, mantendo a essência da plataforma original enquanto explorava uma nova organização visual.",
          "Mais do que o resultado visual, esse projeto me ajudou a entender melhor como trabalhar em cima de uma experiência existente.",
          "Aprendi que um redesign começa muito antes de mudar cores ou elementos de uma interface. É preciso observar, questionar e entender o que pode ser melhorado sem perder aquilo que já funciona.",
          "Também foi uma experiência importante para perceber as diferenças entre projetar para web e mobile e como essas decisões influenciam diretamente a experiência de quem utiliza o produto.",
        ]}
      >
        <ScreenGrid items={SOLUTION_SCREENS} columns={3} />
      </CaseSection>

      <NextProject to="/cursiva" name="Cursiva" thumb={miniaturaTelaInicialCursivaUrl} />
    </CaseShell>
  );
}
