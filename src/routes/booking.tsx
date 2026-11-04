
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

import { ImageGallery } from "@/components/site/ImageGallery";

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
      {
        title: "Booking.com — Redesign | Sophia dos Santos",
      },
      {
        name: "description",
        content:
          "Estudo de caso do redesign das principais páginas da experiência de reserva do Booking.com para web e mobile.",
      },
      {
        property: "og:title",
        content: "Booking.com — Redesign | Sophia dos Santos",
      },
      {
        property: "og:description",
        content:
          "Redesign de uma experiência de reserva: análise das páginas atuais e nova organização visual para web e mobile.",
      },
      {
        property: "og:type",
        content: "article",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),

  component: BookingCase,
});

const ORIGINAL_WEB_SCREENS = [
  {
    src: cardInterativoCapturaDeTelaInicioUrl,
    alt: "Página inicial original do Booking.com para web",
    title: "Página inicial",
    caption: "Interface original do Booking.com para web",
  },
  {
    src: cardInterativoCapturaDeTelaBuscaDeAcomodacoesUrl,
    alt: "Busca original de acomodações do Booking.com para web",
    title: "Busca de acomodações",
    caption: "Interface original da busca para web",
  },
  {
    src: cardInterativoScreencaptureBookingHotelBrSeteIlhasPtBrHtml202608262116121Url,
    alt: "Página original de detalhes da acomodação do Booking.com para web",
    title: "Detalhes da acomodação",
    caption: "Interface original dos detalhes para web",
  },
];

const ORIGINAL_MOBILE_SCREENS = [
  {
    src: cardInterativoGroup2Url,
    alt: "Página inicial original do Booking.com para mobile",
    title: "Página inicial",
    caption: "Interface original do Booking.com para mobile",
  },
  {
    src: cardInterativoGroup1Url,
    alt: "Busca original de acomodações do Booking.com para mobile",
    title: "Busca de acomodações",
    caption: "Interface original da busca para mobile",
  },
  {
    src: cardInterativoGroup4Url,
    alt: "Página original de detalhes da acomodação para mobile",
    title: "Detalhes da acomodação",
    caption: "Interface original dos detalhes para mobile",
  },
];

const SOLUTION_SCREENS = [
  {
    src: telasBookingInicioWebBookingUrl,
    alt: "Página inicial redesenhada — web",
  },
  {
    src: telasBookingBuscaDeAcomodacoesWebUrl,
    alt: "Busca de acomodações — web",
  },
  {
    src: telasBookingDetalhesDaAcomodacaoWebUrl,
    alt: "Detalhes da acomodação — web",
  },
  {
    src: telasBookingInicioBookingUrl,
    alt: "Página inicial redesenhada — mobile",
  },
  {
    src: telasBookingBuscaDeAcomodacoesMobileUrl,
    alt: "Busca de acomodações — mobile",
  },
  {
    src: telasBookingDetalhesDaAcomodacaoMobileUrl,
    alt: "Detalhes da acomodação — mobile",
  },
];

const WEB_COMPARISONS: Array<[string, string, string]> = [
  [
    cardInterativoCapturaDeTelaInicioUrl,
    telasBookingInicioWebBookingUrl,
    "Página inicial",
  ],
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
  [
    cardInterativoGroup2Url,
    telasBookingInicioBookingUrl,
    "Página inicial",
  ],
  [
    cardInterativoGroup1Url,
    telasBookingBuscaDeAcomodacoesMobileUrl,
    "Busca de acomodações",
  ],
  [
    cardInterativoGroup4Url,
    telasBookingDetalhesDaAcomodacaoMobileUrl,
    "Detalhes da acomodação",
  ],
];

function BookingComparison({
  before,
  after,
  label,
  device,
}: {
  before: string;
  after: string;
  label: string;
  device: "web" | "mobile";
}) {
  const deviceLabel = device === "web" ? "web" : "mobile";

  return (
    <div>
      <p className="mb-3 text-[13px] font-medium">
        {label} · {device === "web" ? "Web" : "Mobile"}
      </p>

      <ImageGallery
        variant="comparison"
        items={[
          {
            src: before,
            alt: `${label}: interface original em ${deviceLabel}`,
            title: "Antes",
            caption: `${label} — versão original para ${deviceLabel}`,
          },
          {
            src: after,
            alt: `${label}: interface redesenhada em ${deviceLabel}`,
            title: "Depois",
            caption: `${label} — versão redesenhada para ${deviceLabel}`,
          },
        ]}
      />
    </div>
  );
}

function BookingCase() {
  return (
    <CaseShell>
      <CaseHero
        title="Booking.com"
        subtitle="Redesign de uma experiência de reserva"
        tags={[
          "Projeto acadêmico · 2026",
          "Redesign",
          "UX/UI",
          "Web & Mobile",
        ]}
      />

      <CaseSection
        title="Visão geral"
        paragraphs={[
          "O projeto foi desenvolvido na disciplina de UX/UI da faculdade, a partir de uma atividade que propunha escolher um sistema que já utilizamos no dia a dia e identificar pontos que poderiam ser melhorados através de um redesign.",
          "Escolhi trabalhar com o Booking por já conhecer sua experiência como usuária e por enxergar oportunidades de melhoria na jornada de reserva. A proposta foi redesenhar as três principais páginas da experiência, tanto para web quanto para mobile.",
        ]}
      >
        <PanelImage
          src={bookingImagem1Url}
          alt="Visão geral do redesign em web e mobile"
        />
      </CaseSection>

      <CaseSection
        title="O ponto de partida"
        paragraphs={[
          "Comecei explorando a experiência existente e observando as principais etapas da reserva. A ideia não era criar uma nova solução do zero, mas entender o que já funcionava e quais partes poderiam ser repensadas.",
          "A partir dessa análise, selecionei três páginas principais e comecei a observar como as informações e ações estavam organizadas em cada uma delas.",
        ]}
      >
        <Panel>
          <div className="space-y-3">
            <div>
              <h3 className="mb-3 text-sm font-semibold">
                Experiência original · Web
              </h3>

              <ImageGallery items={ORIGINAL_WEB_SCREENS} />
            </div>

            <div className="pt-5">
              <h3 className="mb-3 text-sm font-semibold">
                Experiência original · Mobile
              </h3>

              <ImageGallery items={ORIGINAL_MOBILE_SCREENS} />
            </div>
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
        <PanelImage
          src={bookingImagem2Url}
          alt="Análise das telas originais do Booking.com"
        />
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
          <div className="mb-5 grid grid-cols-2 gap-3 text-center text-[12px] font-semibold uppercase text-muted-foreground">
            <p>Antes</p>
            <p>Depois</p>
          </div>

          <div className="space-y-8">
            {WEB_COMPARISONS.map(([before, after, label]) => (
              <BookingComparison
                key={`${label}-web`}
                before={before}
                after={after}
                label={label}
                device="web"
              />
            ))}

            {MOBILE_COMPARISONS.map(([before, after, label]) => (
              <BookingComparison
                key={`${label}-mobile`}
                before={before}
                after={after}
                label={label}
                device="mobile"
              />
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

      <NextProject
        to="/cursiva"
        name="Cursiva"
        thumb={miniaturaTelaInicialCursivaUrl}
      />
    </CaseShell>
  );
}
