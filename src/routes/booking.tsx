
import { createFileRoute } from "@tanstack/react-router";

import {
  CaseHero,
  CaseSection,
  CaseShell,
  DecisionCards,
  NextProject,
  Panel,
  PanelImage,
  ScreenGrid,
} from "@/components/site/CaseLayout";

import {
  ComparisonGallery,
  ImageGallery,
  type ComparisonNote,
  type ComparisonPair,
  type GalleryItem,
} from "@/components/site/ImageGallery";

import {
  bookingImagem1Url,
  bookingImagem2Url,
  cardInterativoCapturaDeTelaBuscaDeAcomodacoesUrl,
  cardInterativoCapturaDeTelaInicioUrl,
  cardInterativoGroup1Url,
  cardInterativoGroup2Url,
  cardInterativoGroup4Url,
  cardInterativoScreencaptureBookingHotelBrSeteIlhasPtBrHtml202608262116121Url,
  telasBookingBuscaDeAcomodacoesMobileUrl,
  telasBookingBuscaDeAcomodacoesWebUrl,
  telasBookingDetalhesDaAcomodacaoMobileUrl,
  telasBookingDetalhesDaAcomodacaoWebUrl,
  telasBookingInicioBookingUrl,
  telasBookingInicioWebBookingUrl,
} from "@/assets/assets";
import { REFS } from "@/components/site/references";
import capaAngeloni from "@/assets/optimized/Angeloni/capa-home-angeloni-large.webp";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Booking.com · Redesign · Sophia dos Santos" },
      {
        name: "description",
        content:
          "Redesign das três principais páginas da jornada de reserva do Booking.com, para web e mobile.",
      },
      { property: "og:title", content: "Booking.com · Redesign · Sophia dos Santos" },
      {
        property: "og:description",
        content:
          "Redesign das três principais páginas da jornada de reserva do Booking.com, para web e mobile.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://sophiadossantos.com/og-image.png" },
      { name: "twitter:image", content: "https://sophiadossantos.com/og-image.png" },
    ],
  }),

  component: BookingCase,
});

// CONFIRMAR: pontos observados nas telas originais.
const ORIGINAL_WEB_SCREENS = [
  {
    src: cardInterativoCapturaDeTelaInicioUrl,
    alt: "Página inicial original do Booking.com para web",
    title: "Página inicial",
    caption: "Interface original do Booking.com para web",
    reasons: [
      {
        text: "Título, faixa azul e formulário competem pelo primeiro olhar.",
        ref: REFS.visualHierarchy,
        x: 11,
        y: 10.5,
        w: 78,
        h: 2,
      },
      {
        text: "Logo abaixo, benefícios e ofertas somam mais decisões antes da busca.",
        ref: REFS.minimalist,
        x: 11,
        y: 14.2,
        w: 78,
        h: 14.2,
      },
    ],
  },
  {
    src: cardInterativoCapturaDeTelaBuscaDeAcomodacoesUrl,
    alt: "Busca original de acomodações do Booking.com para web",
    title: "Busca de acomodações",
    caption: "Interface original da busca para web",
    reasons: [
      {
        text: "A coluna de filtros é longa e precisa de rolagem para ser percorrida.",
        x: 12,
        y: 17.5,
        w: 19,
        h: 55,
      },
      {
        text: "Selos verdes, vermelhos e azuis se repetem, e a cor deixa de indicar prioridade.",
        ref: REFS.useOfColor,
        x: 31,
        y: 22,
        w: 57,
        h: 51,
      },
    ],
  },
  {
    src: cardInterativoScreencaptureBookingHotelBrSeteIlhasPtBrHtml202608262116121Url,
    alt: "Página original de detalhes da acomodação do Booking.com para web",
    title: "Detalhes da acomodação",
    caption: "Interface original dos detalhes para web",
    reasons: [
      {
        text: "Busca, caminho de navegação e abas se empilham antes do nome do hotel.",
        ref: REFS.minimalist,
        x: 11,
        y: 6.7,
        w: 78,
        h: 3.8,
      },
      {
        text: "A coluna lateral reúne nota, depoimento e mapa em um espaço estreito.",
        ref: REFS.chunking,
        x: 69,
        y: 11.5,
        w: 20,
        h: 12,
      },
    ],
  },
];

const ORIGINAL_MOBILE_SCREENS = [
  {
    src: cardInterativoGroup2Url,
    alt: "Página inicial original do Booking.com para mobile",
    title: "Página inicial",
    caption: "Interface original do Booking.com para mobile",
    reasons: [
      {
        text: "O formulário aberto ocupa a maior parte da primeira tela.",
        ref: REFS.progressiveDisclosure,
        x: 4,
        y: 14,
        w: 92,
        h: 12,
      },
      {
        text: "Os benefícios aparecem antes de qualquer acomodação.",
        x: 0,
        y: 30,
        w: 100,
        h: 20,
      },
    ],
  },
  {
    src: cardInterativoGroup1Url,
    alt: "Busca original de acomodações do Booking.com para mobile",
    title: "Busca de acomodações",
    caption: "Interface original da busca para mobile",
    reasons: [
      {
        text: "Os resultados começam só depois de um bloco grande de campos.",
        x: 3,
        y: 9.7,
        w: 95,
        h: 27,
      },
      {
        text: "No card, desconto, alerta e benefícios têm destaque parecido com o preço.",
        ref: REFS.visualHierarchy,
        x: 2,
        y: 46,
        w: 98,
        h: 23,
      },
    ],
  },
  {
    src: cardInterativoGroup4Url,
    alt: "Página original de detalhes da acomodação para mobile",
    title: "Detalhes da acomodação",
    caption: "Interface original dos detalhes para mobile",
    reasons: [
      {
        text: "Selos e ações aparecem antes do nome, que é a informação principal.",
        ref: REFS.visualHierarchy,
        x: 4,
        y: 10.4,
        w: 92,
        h: 12.5,
      },
      {
        text: "Comodidades em blocos grandes alongam bastante a página.",
        x: 4,
        y: 43.7,
        w: 92,
        h: 11,
      },
    ],
  },
];

// CONFIRMAR: porquês escritos a partir das telas e dos objetivos do projeto.
const SOLUTION_SCREENS: GalleryItem[] = [
  {
    src: telasBookingInicioWebBookingUrl,
    alt: "Página inicial redesenhada para web",
    frame: "web",
    reasons: [
      {
        text: "Campos empilhados criam uma única linha de leitura, de cima para baixo.",
        ref: REFS.forms,
        x: 7,
        y: 5.2,
        w: 36,
        h: 13,
      },
      {
        text: "As fotos mostram o produto, que é a hospedagem, sem depender de texto promocional.",
        ref: REFS.minimalist,
        x: 48,
        y: 5.2,
        w: 45,
        h: 11.3,
      },
      {
        text: "Quatro garantias curtas ficam logo após a busca e respondem às dúvidas mais comuns.",
        ref: REFS.scanning,
        x: 7,
        y: 20,
        w: 82,
        h: 4,
      },
      {
        text: "Hotéis, apartamentos, resorts e chalés têm o nome sobre a foto, o que permite explorar sem digitar.",
        ref: REFS.recognition,
        x: 7.5,
        y: 33.2,
        w: 85.5,
        h: 7.5,
      },
      {
        text: "Cada seção tem título e subtítulo próprios, o que divide a página longa em blocos.",
        ref: REFS.chunking,
        x: 7.5,
        y: 42.5,
        w: 85,
        h: 8.2,
      },
      {
        text: "Os banners ficam no fim, depois das opções de hospedagem, e não interrompem a busca.",
        ref: REFS.visualHierarchy,
        x: 7.5,
        y: 77.8,
        w: 85.5,
        h: 13.3,
      },
    ],
  },
  {
    src: telasBookingBuscaDeAcomodacoesWebUrl,
    alt: "Busca de acomodações redesenhada para web",
    frame: "web",
    reasons: [
      {
        text: "Destino, datas e ocupação seguem à vista para corrigir a busca sem recomeçar.",
        ref: REFS.control,
        x: 7.5,
        y: 6.4,
        w: 85,
        h: 4.4,
      },
      {
        text: "Os filtros mais usados ficam a um clique, sem abrir um painel.",
        ref: REFS.flexibility,
        x: 7.5,
        y: 15.7,
        w: 85,
        h: 2.4,
      },
      {
        text: "O mapa fica ao lado dos cards e evita memorizar endereços ao trocar de tela.",
        ref: REFS.recognition,
        x: 8,
        y: 18.3,
        w: 28,
        h: 12,
      },
      {
        text: "Foto, nome, estrelas, local, descrição e preço seguem sempre a mesma ordem.",
        ref: REFS.scanning,
        x: 38.5,
        y: 18.8,
        w: 26,
        h: 18.2,
      },
      {
        text: "Verificar disponibilidade fica na mesma posição em todos os cards, o que cria um ritmo previsível.",
        ref: REFS.consistency,
        x: 38.5,
        y: 34.6,
        w: 26,
        h: 2.4,
      },
    ],
  },
  {
    src: telasBookingDetalhesDaAcomodacaoWebUrl,
    alt: "Detalhes da acomodação redesenhados para web",
    frame: "web",
    reasons: [
      {
        text: "Estrelas, nome e endereço confirmam que esta é a acomodação certa.",
        ref: REFS.headings,
        x: 7.5,
        y: 5.8,
        w: 54,
        h: 2.3,
      },
      {
        text: "Reservar agora é o elemento mais forte da linha, o que deixa claro o próximo passo.",
        ref: REFS.visualHierarchy,
        x: 82,
        y: 6.6,
        w: 10.5,
        h: 1.3,
      },
      {
        text: "A grade mostra cinco fotos, e o contador avisa quantas ainda existem.",
        ref: REFS.status,
        x: 7.5,
        y: 7.9,
        w: 54,
        h: 5.6,
      },
      {
        text: "Seis comodidades aparecem primeiro, e as demais ficam em Ver todas.",
        ref: REFS.progressiveDisclosure,
        x: 7.5,
        y: 20.9,
        w: 46,
        h: 4.3,
      },
      {
        text: "Cada suíte vira um card com comodidades, valor e botão, no lugar de uma tabela densa.",
        ref: REFS.chunking,
        x: 7.5,
        y: 36.4,
        w: 85,
        h: 13.6,
      },
      {
        text: "Nota geral, notas por categoria e depoimentos reúnem a opinião de outros hóspedes na própria página.",
        x: 7.5,
        y: 52,
        w: 85,
        h: 10,
      },
      {
        text: "As perguntas frequentes ficam recolhidas e respondem às dúvidas antes de um contato.",
        ref: REFS.help,
        x: 7.5,
        y: 61.4,
        w: 85,
        h: 11,
      },
      {
        text: "Cancelamento, pagamento e regras seguem fáceis de consultar antes de reservar.",
        ref: REFS.errors,
        x: 41.5,
        y: 79.3,
        w: 51.5,
        h: 9,
      },
    ],
  },
  {
    src: telasBookingInicioBookingUrl,
    alt: "Página inicial redesenhada para mobile",
    frame: "mobile",
    reasons: [
      {
        text: "A busca completa abre só quando pedida e não ocupa a primeira tela.",
        ref: REFS.progressiveDisclosure,
        x: 5,
        y: 3.7,
        w: 90,
        h: 2,
      },
      {
        text: "Hospedagens, Voos e Experiências ficam em uma faixa com rolagem lateral, ocupando uma só linha.",
        x: 5,
        y: 5.9,
        w: 95,
        h: 1.4,
      },
      {
        text: "Pesquisas anteriores voltam prontas, sem digitar de novo.",
        ref: REFS.redundantEntry,
        x: 5,
        y: 8,
        w: 95,
        h: 7.2,
      },
      {
        text: "Acomodações salvas mantêm nota e preço à vista, antes de abrir qualquer página.",
        ref: REFS.recognition,
        x: 5,
        y: 16,
        w: 95,
        h: 9.4,
      },
      {
        text: "O banner ocupa a largura da tela e marca a troca de assunto na página.",
        ref: REFS.proximity,
        x: 5,
        y: 38.4,
        w: 90,
        h: 6.8,
      },
      {
        text: "Os benefícios ficam no fim, quando a pessoa já viu as opções.",
        ref: REFS.visualHierarchy,
        x: 5,
        y: 83,
        w: 90,
        h: 12.7,
      },
      {
        text: "A barra inferior mantém Explorar, Favoritos, Reservas e Perfil sempre a um toque.",
        ref: REFS.tabBars,
        x: 0,
        y: 97.9,
        w: 100,
        h: 2.1,
      },
    ],
  },
  {
    src: telasBookingBuscaDeAcomodacoesMobileUrl,
    alt: "Busca de acomodações redesenhada para mobile",
    frame: "mobile",
    reasons: [
      {
        text: "O resumo lembra destino, datas e pessoas sem tomar espaço dos resultados.",
        ref: REFS.minimalist,
        x: 5,
        y: 7,
        w: 90,
        h: 3.4,
      },
      {
        text: "Ordenar, Filtrar e Mapa combinam ícone e texto, e o significado não depende de adivinhar o ícone.",
        ref: REFS.icons,
        x: 5,
        y: 11,
        w: 74,
        h: 2.6,
      },
      {
        text: "O total de acomodações confirma o tamanho do resultado.",
        ref: REFS.statusMessages,
        x: 5.5,
        y: 15,
        w: 38,
        h: 1.8,
      },
      {
        text: "O card em largura total mantém a leitura em uma coluna, sem rolagem lateral.",
        ref: REFS.reflow,
        x: 5,
        y: 17.8,
        w: 90,
        h: 23.4,
      },
      {
        text: "O principal benefício fica sobre a foto, visível antes de ler o card.",
        ref: REFS.visualHierarchy,
        x: 7.5,
        y: 18.5,
        w: 47,
        h: 2,
      },
      {
        text: "Um único botão por card deixa claro como continuar.",
        ref: REFS.minimalist,
        x: 5,
        y: 38.2,
        w: 90,
        h: 3,
      },
    ],
  },
  {
    src: telasBookingDetalhesDaAcomodacaoMobileUrl,
    alt: "Detalhes da acomodação redesenhados para mobile",
    frame: "mobile",
    reasons: [
      {
        text: "A foto maior puxa o olhar, e as menores mostram a variedade do lugar.",
        ref: REFS.visualHierarchy,
        x: 5,
        y: 6.7,
        w: 90,
        h: 5.1,
      },
      {
        text: "Etiquetas curtas agrupam as comodidades em uma única faixa.",
        ref: REFS.chunking,
        x: 5,
        y: 11.9,
        w: 95,
        h: 1.2,
      },
      {
        text: "Datas, ocupação e promoção vêm antes do valor e explicam como ele foi calculado.",
        ref: REFS.status,
        x: 5,
        y: 13.7,
        w: 90,
        h: 8.2,
      },
      {
        text: "Reservar ocupa a largura da tela e vem logo depois do valor.",
        ref: REFS.touchTarget,
        x: 5,
        y: 22.1,
        w: 90,
        h: 1.7,
      },
      {
        text: "Barras por categoria mostram pontos fortes e fracos sem ler cada avaliação.",
        ref: REFS.scanning,
        x: 5,
        y: 30.6,
        w: 90,
        h: 6.7,
      },
      {
        text: "Mapa e distâncias respondem o que há por perto sem sair do app.",
        ref: REFS.recognition,
        x: 5,
        y: 44.5,
        w: 90,
        h: 15.6,
      },
      {
        text: "Políticas e informações ficam recolhidas para não alongar ainda mais a página.",
        ref: REFS.progressiveDisclosure,
        x: 5,
        y: 90.4,
        w: 90,
        h: 6,
      },
      {
        text: "Selecionar quartos fecha a página com uma ação clara.",
        ref: REFS.visualHierarchy,
        x: 5,
        y: 96.7,
        w: 90,
        h: 1.6,
      },
    ],
  },
];

type Comparison = [before: string, after: string, label: string, notes: ComparisonNote[]];

// Posição dos marcadores em % sobre a imagem "Depois".
const WEB_COMPARISONS: Comparison[] = [
  [
    cardInterativoCapturaDeTelaInicioUrl,
    telasBookingInicioWebBookingUrl,
    "Página inicial",
    [
      {
        x: 44,
        y: 52,
        text: "A busca saiu da faixa azul para uma coluna própria.",
        area: [7, 22, 35, 54],
      },
      {
        x: 75,
        y: 30,
        text: "O banner azul deu lugar a fundo branco e fotos.",
        area: [48, 22, 42, 46],
      },
      {
        x: 20,
        y: 89,
        text: "Os benefícios perderam os cards cinza e viraram uma linha de ícones.",
        area: [8, 84, 84, 16],
        ref: REFS.proximity,
      },
    ],
  ],
  [
    cardInterativoCapturaDeTelaBuscaDeAcomodacoesUrl,
    telasBookingBuscaDeAcomodacoesWebUrl,
    "Busca de acomodações",
    [
      {
        x: 67,
        y: 27,
        text: "A faixa azul virou um bloco branco com campos contornados.",
        area: [9, 20, 83, 11],
      },
      {
        x: 5,
        y: 50,
        text: "Os filtros foram da coluna lateral para botões acima dos resultados.",
        area: [8, 48, 84, 6],
      },
      {
        x: 50,
        y: 66,
        text: "A lista virou grade, com a foto no topo de cada card.",
        area: [37, 54, 55, 46],
      },
    ],
  ],
  [
    cardInterativoScreencaptureBookingHotelBrSeteIlhasPtBrHtml202608262116121Url,
    telasBookingDetalhesDaAcomodacaoWebUrl,
    "Detalhes da acomodação",
    [
      {
        x: 32,
        y: 43,
        text: "Saíram as abas de seção e os selos de cima do nome.",
        area: [8, 37, 62, 11],
      },
      {
        x: 46,
        y: 59,
        text: "Uma foto grande e quatro menores formam uma grade regular, com contador no fim.",
        area: [8, 51, 52, 34],
      },
      {
        x: 82,
        y: 68,
        text: "O mapa ganhou o mesmo destaque das fotos.",
        area: [64, 51, 27, 34],
      },
    ],
  ],
];

const MOBILE_COMPARISONS: Comparison[] = [
  [
    cardInterativoGroup2Url,
    telasBookingInicioBookingUrl,
    "Página inicial",
    [
      {
        x: 88,
        y: 16.5,
        text: "O formulário de três campos virou um campo só.",
        area: [5, 13.5, 90, 6],
      },
      {
        x: 60,
        y: 30,
        text: "Entrou uma seção com as buscas recentes.",
        area: [5, 27, 95, 26],
      },
      {
        x: 47,
        y: 92.5,
        text: "Acomodações salvas aparecem com nota e preço.",
        area: [5, 63, 95, 30],
      },
    ],
  ],
  [
    cardInterativoGroup1Url,
    telasBookingBuscaDeAcomodacoesMobileUrl,
    "Busca de acomodações",
    [
      {
        x: 94,
        y: 12.5,
        text: "O formulário amarelo virou um resumo do que foi buscado.",
        area: [6, 13, 88, 6],
      },
      {
        x: 85,
        y: 42,
        text: "A foto foi do lado do texto para o topo do card.",
        area: [5, 33.5, 90, 18],
      },
      {
        x: 88,
        y: 75,
        text: "O botão Ver detalhes entrou no fim do card, com área de toque ampla.",
        area: [6, 71, 88, 7],
        ref: REFS.targetSize,
      },
    ],
  ],
  [
    cardInterativoGroup4Url,
    telasBookingDetalhesDaAcomodacaoMobileUrl,
    "Detalhes da acomodação",
    [
      {
        x: 56,
        y: 40,
        text: "A foto única com setas virou uma grade com cinco fotos.",
        area: [6, 30, 88, 22],
      },
      {
        x: 48.5,
        y: 56,
        text: "Os blocos de comodidades viraram etiquetas.",
        area: [6, 54, 90, 4],
      },
      {
        x: 50,
        y: 68,
        text: "O formulário de datas desceu para perto do preço.",
        area: [5, 61, 90, 32],
      },
    ],
  ],
];

const ORIGINAL_SCREENS: GalleryItem[] = [
  ...ORIGINAL_WEB_SCREENS.map((screen) => ({ ...screen, frame: "web" as const })),
  ...ORIGINAL_MOBILE_SCREENS.map((screen) => ({ ...screen, frame: "mobile" as const })),
];

function toPairs(
  comparisons: Comparison[],
  frame: "web" | "mobile",
): ComparisonPair[] {
  return comparisons.map(([before, after, label, notes]) => ({
    label: `${label} · ${frame === "web" ? "Web" : "Mobile"}`,
    before: {
      src: before,
      alt: `${label}: interface original em ${frame}`,
      title: "Antes",
      caption: `${label}: versão original para ${frame}`,
      frame,
    },
    after: {
      src: after,
      alt: `${label}: interface redesenhada em ${frame}`,
      title: "Depois",
      caption: `${label}: versão redesenhada para ${frame}`,
      frame,
    },
    notes,
  }));
}

const COMPARISON_PAIRS = [
  ...toPairs(WEB_COMPARISONS, "web"),
  ...toPairs(MOBILE_COMPARISONS, "mobile"),
];

const META = [
  {
    label: "Meu papel",
    value: "Projeto individual: análise e redesign web e mobile",
  },
  { label: "Equipe", value: "Individual, na disciplina de UX/UI" },
  // CONFIRMAR: Duração, ex. "6 semanas". Fica oculto até ter o valor.
  { label: "Ferramentas", value: "Figma" },
];

// CONFIRMAR: ajuste as três decisões para refletir exatamente o que você mudou nas telas.
const SEARCH_DECISION = {
  title: "Busca como protagonista",
  problem:
    "Na página inicial, o formulário de busca dividia atenção com banners e blocos promocionais.",
  decision:
    "Levar o formulário para uma coluna própria, com mais respiro e campos na ordem em que o usuário pensa: destino, datas e ocupação.",
  why: "Buscar uma hospedagem é o motivo principal de quem abre a página.",
  ref: REFS.visualHierarchy,
};

const RESULTS_DECISION = {
  title: "Menos ruído na lista de resultados",
  problem:
    "Cada resultado da busca trazia muitos selos, cores e informações com o mesmo peso.",
  decision:
    "Definir uma hierarquia fixa em cada card (foto, nome, estrelas, localização e preço) e reduzir os destaques secundários.",
  why: "Comparar opções fica mais rápido quando todos os cards seguem a mesma leitura.",
  ref: REFS.minimalist,
};

const MOBILE_DECISION = {
  title: "Mobile com decisões próprias",
  problem: "Reduzir a versão web não funcionava em uma tela pequena.",
  decision:
    "Repensar a disposição dos elementos no mobile, com busca compacta no topo, cards em largura total e botões amplos para o toque.",
  why: "Cada tamanho de tela tem necessidades diferentes, e responsividade não é só encolher a interface.",
  ref: REFS.touchTarget,
};

function BookingCase() {
  return (
    <CaseShell>
      <CaseHero
        title="Booking.com"
        subtitle="Redesign das três principais páginas da jornada de reserva."
        tags={[
          "Projeto acadêmico · 2026",
          "Redesign",
          "UX/UI",
          "Web & Mobile",
        ]}
        meta={META}
      />

      <CaseSection
        title="Visão geral"
        highlight="O objetivo não era reinventar o Booking, e sim entender o que já funcionava e o que podia ficar mais claro."
        paragraphs={[
          "A proposta da disciplina de UX/UI era escolher um sistema usado no dia a dia e redesenhá-lo. Escolhi o Booking porque conheço a experiência como usuária e via oportunidades de melhoria na jornada de reserva. Redesenhei as três páginas principais (inicial, busca e detalhes da acomodação) para web e mobile.",
        ]}
      >
        <PanelImage
          src={bookingImagem1Url}
          priority
          alt="Visão geral do redesign em web e mobile"
        />
      </CaseSection>

      <CaseSection
        title="O ponto de partida"
        paragraphs={[
          "Explorei a experiência atual etapa por etapa e selecionei as três páginas com mais impacto na reserva.",
        ]}
      >
        <DecisionCards decision={SEARCH_DECISION} />

        <ImageGallery items={ORIGINAL_SCREENS} resultsTargetId="resultados" />
      </CaseSection>

      <CaseSection
        title="Analisando o que já existia"
        paragraphs={[
          "Os principais pontos de melhoria estavam na hierarquia das informações, nos espaçamentos e na organização dos elementos: muitas informações com o mesmo peso visual disputando a atenção do usuário.",
        ]}
      >
        <DecisionCards decision={RESULTS_DECISION} />

        <PanelImage
          src={bookingImagem2Url}
          alt="Análise das telas originais do Booking.com"
        />
      </CaseSection>

      <CaseSection id="resultados" title="Redesenhando para web e mobile">
        <DecisionCards decision={MOBILE_DECISION} />

        <Panel>
          <ComparisonGallery pairs={COMPARISON_PAIRS} />
        </Panel>

        <ScreenGrid items={SOLUTION_SCREENS} columns={3} />
      </CaseSection>

      <CaseSection
        title="O que aprendi"
        paragraphs={[
          "Um redesign começa muito antes de mudar cores ou elementos. É preciso observar, questionar e entender o que pode ser melhorado sem perder o que já funciona. Projetar para web e mobile também me mostrou como cada formato exige decisões próprias.",
        ]}
      />

      <NextProject
        to="/angeloni"
        name="Angeloni: em casa"
        thumb={capaAngeloni}
      />
    </CaseShell>
  );
}
