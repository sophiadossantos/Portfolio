
import { createFileRoute } from "@tanstack/react-router";

import {
  CaseHero,
  CaseSection,
  CaseShell,
  DecisionCards,
  NextProject,
  Panel,
  PanelImage,
} from "@/components/site/CaseLayout";

import {
  ComparisonGallery,
  ImageGallery,
  comparisonPair,
  type ComparisonNote,
  type GalleryItem,
} from "@/components/site/ImageGallery";

import { REFS } from "@/components/site/references";

import angeloniCapa from "@/assets/optimized/Angeloni/capa-large.webp";
import angeloniFigjam from "@/assets/optimized/Angeloni/figjam-large.webp";

import angeloniLogin from "@/assets/optimized/Angeloni/login-large.webp";
import angeloniTelaInicial from "@/assets/optimized/Angeloni/tela-inicial-large.webp";
import angeloniPesquisa from "@/assets/optimized/Angeloni/tela-pesquisa-large.webp";
import angeloniDetalhesProduto from "@/assets/optimized/Angeloni/detalhes-do-produto-large.webp";
import angeloniCarrinho from "@/assets/optimized/Angeloni/carrinho-6-large.webp";

import angeloniSplash from "@/assets/optimized/Angeloni/splash-screen-mobile-large.webp";
import angeloniTelaInicialMobile from "@/assets/optimized/Angeloni/tela-inicial-mobile-large.webp";

import telasAngeloniCadastrar from "@/assets/optimized/Angeloni/cadastrar-mobile-large.webp";
import telasAngeloniDescricao from "@/assets/optimized/Angeloni/descricao-do-item-mobile-large.webp";
import telasAngeloniEntrar from "@/assets/optimized/Angeloni/entrar-mobile-large.webp";
import telasAngeloniPesquisa from "@/assets/optimized/Angeloni/pesquisa-mobile-large.webp";
import telasAngeloniSugestoes from "@/assets/optimized/Angeloni/sugestoes-inteligentes-mobile-large.webp";
import telasAngeloniTelaInicial from "@/assets/optimized/Angeloni/tela-inicial-mobile-large.webp";
import telasAngeloniTelaPesquisar from "@/assets/optimized/Angeloni/tela-pesquisar-mobile-large.webp";

import capaCursiva from "@/assets/optimized/Cursiva/capa-home-cursiva-large.webp";

export const Route = createFileRoute("/angeloni")({
  head: () => ({
    meta: [
      { title: "Angeloni: em casa · Estudo de caso · Sophia dos Santos" },
      {
        name: "description",
        content:
          "Da V1 à V2: como refiz um app de compras personalizado depois de aprofundar meus estudos em UX/UI.",
      },
      { property: "og:title", content: "Angeloni: em casa · Estudo de caso · Sophia dos Santos" },
      {
        property: "og:description",
        content:
          "Da V1 à V2: como refiz um app de compras personalizado depois de aprofundar meus estudos em UX/UI.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://sophiadossantos.com/og-image.png" },
      { name: "twitter:image", content: "https://sophiadossantos.com/og-image.png" },
    ],
  }),

  component: AngeloniCase,
});

// CONFIRMAR: pontos observados nas telas da primeira versão.
const FIRST_VERSION_SCREENS: GalleryItem[] = [
  {
    src: angeloniLogin,
    alt: "Tela de login do aplicativo",
    reasons: [
      {
        text: "O logo colorido ocupa quase um terço da tela e atrasa o formulário.",
        ref: REFS.visualHierarchy,
        x: 10,
        y: 9,
        w: 75,
        h: 21,
      },
      {
        text: "A padronagem atrás do botão adiciona textura onde a ação deveria se destacar.",
        ref: REFS.minimalist,
        x: 0,
        y: 45,
        w: 100,
        h: 55,
      },
    ],
  },
  {
    src: angeloniTelaInicial,
    alt: "Tela inicial do aplicativo",
    reasons: [
      {
        text: "Seis opções com o mesmo peso não indicam por onde começar.",
        ref: REFS.visualHierarchy,
        x: 5,
        y: 33,
        w: 90,
        h: 64,
      },
      {
        text: "Texto escuro sobre foto borrada tem contraste que varia a cada imagem.",
        ref: REFS.contrast,
        x: 6,
        y: 34,
        w: 42,
        h: 19,
      },
    ],
  },
  {
    src: angeloniPesquisa,
    alt: "Resultados de pesquisa",
    reasons: [
      {
        text: "A foto de cada item vem em um bloco com sombra, o que pesa a lista.",
        x: 3,
        y: 25,
        w: 94,
        h: 58,
      },
      {
        text: "Nome e preço usam pesos parecidos, sem ordem clara de leitura.",
        ref: REFS.visualHierarchy,
        x: 26,
        y: 32,
        w: 64,
        h: 7,
      },
    ],
  },
  {
    src: angeloniDetalhesProduto,
    alt: "Detalhes do produto",
    reasons: [
      {
        text: "A foto ocupa a primeira metade da tela e empurra a descrição para baixo.",
        x: 10,
        y: 21,
        w: 80,
        h: 32,
      },
      {
        text: "O seletor de quantidade aparece antes de a pessoa ler sobre o produto.",
        x: 9,
        y: 54,
        w: 82,
        h: 12,
      },
    ],
  },
  {
    src: angeloniCarrinho,
    alt: "Carrinho de compras",
    reasons: [
      {
        text: "Vazio, o carrinho não oferece um caminho de volta às compras.",
        ref: REFS.emptyStates,
        x: 30,
        y: 44,
        w: 40,
        h: 6,
      },
      {
        text: "Finalizar Compra segue em destaque mesmo sem itens.",
        ref: REFS.errors,
        x: 12,
        y: 86,
        w: 76,
        h: 9,
      },
    ],
  },
];

// CONFIRMAR: porquês escritos a partir das telas e dos objetivos do projeto.
const SOLUTION_SCREENS: GalleryItem[] = [
  {
    src: angeloniSplash,
    alt: "Splash screen do aplicativo",
    reasons: [
      {
        text: "A frase resume a proposta do app antes de pedir qualquer dado.",
        x: 6,
        y: 63,
        w: 88,
        h: 7,
      },
      {
        text: "Cadastre-se preenchido e Entrar em cinza indicam qual é a ação principal.",
        ref: REFS.visualHierarchy,
        x: 6,
        y: 73,
        w: 88,
        h: 6,
      },
    ],
  },
  {
    src: telasAngeloniEntrar,
    alt: "Tela de entrar",
    reasons: [
      {
        text: "Dois campos e uma ação mantêm o foco em entrar.",
        ref: REFS.minimalist,
        x: 6,
        y: 12,
        w: 88,
        h: 44,
      },
      {
        text: "Campos altos e bem separados reduzem toques errados no celular.",
        ref: REFS.touchTarget,
        x: 6,
        y: 20,
        w: 88,
        h: 30,
      },
    ],
  },
  {
    src: telasAngeloniCadastrar,
    alt: "Tela de cadastro",
    reasons: [
      {
        text: "Confirmar senha ajuda a evitar erro de digitação, já que o texto fica oculto.",
        ref: REFS.errors,
        x: 6,
        y: 43,
        w: 88,
        h: 10,
      },
      {
        text: "Título, campos e botão repetem a tela de entrar, o que dispensa aprender outro padrão.",
        ref: REFS.consistency,
        x: 6,
        y: 12,
        w: 88,
        h: 50,
      },
    ],
  },
  {
    src: telasAngeloniTelaInicial,
    alt: "Tela inicial personalizada",
    reasons: [
      {
        text: "A sugestão muda conforme os hábitos do consumidor, que é a ideia central do app.",
        ref: REFS.flexibility,
        x: 6,
        y: 25,
        w: 88,
        h: 28,
      },
      {
        text: "Compre novamente mostra produtos já comprados, sem precisar lembrar nomes.",
        ref: REFS.recognition,
        x: 4,
        y: 56,
        w: 96,
        h: 20,
      },
    ],
  },
  {
    src: telasAngeloniSugestoes,
    alt: "Sugestões inteligentes",
    reasons: [
      {
        text: "O preço aparece em cada opção, então dá para decidir sem abrir os detalhes.",
        x: 6,
        y: 36,
        w: 88,
        h: 33,
      },
      {
        text: "A seta indica que a opção abre mais informações no mesmo lugar.",
        ref: REFS.progressiveDisclosure,
        x: 86,
        y: 36,
        w: 10,
        h: 33,
      },
    ],
  },
  {
    src: telasAngeloniDescricao,
    alt: "Descrição do item",
    reasons: [
      {
        text: "Foto, nome e preço seguem a ordem de importância para quem está comprando.",
        ref: REFS.visualHierarchy,
        x: 6,
        y: 30,
        w: 88,
        h: 31,
      },
      {
        text: "O botão ocupa a largura da tela e tem altura confortável para o toque.",
        ref: REFS.targetSize,
        x: 6,
        y: 80,
        w: 88,
        h: 8,
      },
    ],
  },
  {
    src: telasAngeloniTelaPesquisar,
    alt: "Tela de pesquisar",
    reasons: [
      {
        text: "Categorias como Receber visitas usam situações reais, não nomes de setores do mercado.",
        ref: REFS.match,
        x: 6,
        y: 45,
        w: 88,
        h: 45,
      },
      {
        text: "O banner fica separado das categorias para não parecer uma opção de navegação.",
        ref: REFS.proximity,
        x: 6,
        y: 26,
        w: 88,
        h: 17,
      },
    ],
  },
  {
    src: telasAngeloniPesquisa,
    alt: "Resultados da pesquisa",
    reasons: [
      {
        text: "Foto, nome e preço ficam sempre na mesma posição, o que agiliza a leitura da lista.",
        ref: REFS.scanning,
        x: 6,
        y: 30,
        w: 88,
        h: 50,
      },
      {
        text: "O seletor de quantidade serve de atalho para comprar sem abrir cada produto.",
        ref: REFS.flexibility,
        x: 74,
        y: 30,
        w: 22,
        h: 50,
      },
    ],
  },
];

function ImageRow({
  images,
  resultsTargetId,
}: {
  images: GalleryItem[];
  resultsTargetId?: string;
}) {
  return (
    <ImageGallery
      items={images.map((image) => ({ ...image, frame: "mobile" as const }))}
      {...(resultsTargetId ? { resultsTargetId } : {})}
    />
  );
}

const META = [
  {
    label: "Meu papel",
    value: "Projeto individual: conceito, UX e interface (V1 e V2)",
  },
  { label: "Equipe", value: "Individual, na disciplina de UX/UI" },
  {
    label: "Duração",
    value: "1 mês (V1 em novembro de 2025, V2 em junho de 2026)",
  },
  { label: "Ferramentas", value: "Figma" },
];

const SPACING_DECISION = {
  title: "Respiro antes de conteúdo",
  problem:
    "Na V1, os elementos ficavam colados e a tela parecia sempre cheia.",
  decision:
    "Criar uma escala de espaçamentos e aplicá-la em todas as telas.",
  why: "Com mais espaço, o usuário entende mais rápido o que é cada bloco.",
  ref: REFS.proximity,
};

const TYPOGRAPHY_DECISION = {
  title: "Hierarquia pela tipografia",
  problem:
    "Títulos, preços e descrições tinham tamanhos parecidos, sem uma ordem clara de leitura.",
  decision:
    "Definir uma escala tipográfica com poucos tamanhos e pesos bem diferentes entre si.",
  why: "A tipografia passa a indicar o que é mais importante sem precisar de cor ou caixa.",
  ref: REFS.visualHierarchy,
};

const COLOR_DECISION = {
  title: "Cor com função",
  problem:
    "As cores da marca estavam espalhadas por toda a interface e perdiam o significado.",
  decision:
    "Reservar a cor de destaque para ações principais e informações personalizadas.",
  why: "Quando a cor aparece, o usuário sabe que aquilo merece atenção.",
  ref: REFS.minimalist,
};

// Posição dos marcadores em % sobre a imagem "Depois".
// CONFIRMAR: ajuste a posição dos marcadores sobre as telas.
const HOME_NOTES: ComparisonNote[] = [
  {
    x: 50,
    y: 55.5,
    text: "Espaçamentos padronizados separam cada bloco de informação.",
    area: [5, 52, 90, 7],
    ref: REFS.proximity,
  },
  {
    x: 47,
    y: 29,
    text: "Tamanhos mais contrastantes definem a ordem de leitura.",
    area: [6, 26, 88, 8],
    ref: REFS.visualHierarchy,
  },
  {
    x: 82,
    y: 48,
    text: "A cor de destaque ficou reservada à ação principal.",
    area: [9, 45, 84, 6],
  },
  {
    x: 59,
    y: 92,
    text: "Os ícones do topo viraram uma barra inferior sempre à vista.",
    area: [5, 88, 90, 7],
    ref: REFS.tabBars,
  },
];

const ACCESS_NOTES: ComparisonNote[] = [
  {
    x: 88,
    y: 76.5,
    text: "Ao acessar, o usuário decide qual caminho seguir: se cadastrar ou entrar.",
    area: [6, 73, 88, 14],
    ref: REFS.control,
  },
  {
    x: 88,
    y: 30,
    text: "A imagem da sacola comunica compras em casa sem texto longo.",
    area: [6, 8, 88, 50],
  },
];

const LOGIN_NOTES: ComparisonNote[] = [
  {
    x: 66,
    y: 14,
    text: "Logo, abas e padronagem saíram, e sobrou só o formulário.",
    area: [6, 10, 88, 10],
  },
  {
    x: 88,
    y: 26.5,
    text: "Os campos ganharam borda fina sobre fundo branco, no lugar do bloco cinza.",
    area: [6, 20, 88, 22],
    ref: REFS.nonTextContrast,
  },
  {
    x: 78,
    y: 53,
    text: "Esqueceu a senha? virou link de texto e não compete com o botão.",
    area: [6, 50, 88, 6],
  },
];

const COMPARISON_PAIRS = [
  comparisonPair({
    label: "Tela inicial",
    before: angeloniTelaInicial,
    after: angeloniTelaInicialMobile,
    beforeAlt: "Tela inicial da versão anterior",
    afterAlt: "Tela inicial da nova versão",
    frame: "mobile",
    notes: HOME_NOTES,
  }),
  comparisonPair({
    label: "Primeiro acesso",
    before: angeloniLogin,
    after: angeloniSplash,
    beforeAlt: "Tela de login da primeira versão",
    afterAlt: "Tela de abertura da nova versão, com as opções de cadastro e entrada",
    frame: "mobile",
    notes: ACCESS_NOTES,
  }),
  comparisonPair({
    label: "Login",
    before: angeloniLogin,
    after: telasAngeloniEntrar,
    beforeAlt: "Tela de login da primeira versão",
    afterAlt: "Tela de entrar da nova versão",
    frame: "mobile",
    notes: LOGIN_NOTES,
  }),
];

function AngeloniCase() {
  return (
    <CaseShell>
      <CaseHero
        title="Angeloni: em casa"
        subtitle="Uma experiência de compras que aprende com os hábitos de cada consumidor."
        tags={[
          "Projeto acadêmico · 2025/2026",
          "Product Design",
          "UX/UI",
          "Mobile",
        ]}
        meta={META}
      />

      <CaseSection
        title="Visão geral"
        highlight="Este case mostra um app, mas também mostra como meu olhar de designer mudou."
        paragraphs={[
          "A disciplina de UX/UI propôs criar um sistema digital para um supermercado da cidade. Tive a ideia de um app que usa o histórico de compras de cada consumidor para tornar as próximas compras mais rápidas, práticas e personalizadas.",
        ]}
      >
        <PanelImage
          src={angeloniCapa}
          priority
          alt="Visão geral do aplicativo Angeloni: em casa"
        />
      </CaseSection>

      <CaseSection
        title="A primeira versão"
        paragraphs={[
          "A V1 foi construída a partir das minhas percepções como usuária, quando eu ainda estava aprendendo UX/UI e Figma. Muitas decisões foram tomadas sem referências que as fundamentassem e, naquele momento, a interface fazia sentido para mim.",
        ]}
      >
        <ImageRow images={FIRST_VERSION_SCREENS} resultsTargetId="resultados" />
      </CaseSection>

      <CaseSection
        title="Olhando de novo para a V1"
        paragraphs={[
          "Depois de continuar estudando, voltei ao projeto e vi o que antes não enxergava: muitas informações competindo pela atenção, pouco espaço entre os elementos e uma hierarquia visual confusa. Em vez de ajustar a interface, decidi refazer o projeto com o que tinha aprendido.",
        ]}
      >
        <DecisionCards decision={SPACING_DECISION} />

        <PanelImage
          src={angeloniFigjam}
          alt="Mapa completo das telas da primeira versão"
        />
      </CaseSection>

      <CaseSection title="V1 × V2">
        <DecisionCards decision={TYPOGRAPHY_DECISION} />

        <Panel>
          <ComparisonGallery pairs={COMPARISON_PAIRS} />
        </Panel>
      </CaseSection>

      <CaseSection
        id="resultados"
        title="A solução"
        paragraphs={[
          "A ideia central foi mantida: usar os hábitos de compra para personalizar a experiência. A V2 comunica essa ideia de forma mais organizada e muito mais fácil de acompanhar.",
        ]}
      >
        <DecisionCards decision={COLOR_DECISION} />

        <ImageRow images={SOLUTION_SCREENS} />
      </CaseSection>

      <CaseSection
        title="O que aprendi"
        paragraphs={[
          "Voltar a uma solução depois de adquirir mais conhecimento revela problemas que antes eu nem conseguia enxergar. Hoje questiono mais minhas próprias decisões: cada escolha visual pode ajudar, ou dificultar, a forma como alguém entende um produto.",
        ]}
      />

      <NextProject
        to="/cursiva"
        name="Cursiva"
        thumb={capaCursiva}
      />
    </CaseShell>
  );
}
