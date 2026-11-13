import { createFileRoute } from "@tanstack/react-router";

import {
  CaseHero,
  CaseSection,
  CaseShell,
  DecisionCards,
  DifficultyBlock,
  MetricCards,
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

import v1Splash from "@/assets/optimized/Angeloni/V1/01-splash-large.webp";
import v1Entrar from "@/assets/optimized/Angeloni/V1/02-entrar-large.webp";
import v1Cadastro from "@/assets/optimized/Angeloni/V1/03-cadastro-large.webp";
import v1Inicio from "@/assets/optimized/Angeloni/V1/04-inicio-large.webp";
import v1Busca from "@/assets/optimized/Angeloni/V1/05-busca-large.webp";
import v1Produto from "@/assets/optimized/Angeloni/V1/06-produto-large.webp";
import v1Carrinho from "@/assets/optimized/Angeloni/V1/07-carrinho-large.webp";
import v1CarrinhoVazio from "@/assets/optimized/Angeloni/V1/08-carrinho-vazio-large.webp";
import v1Entrega from "@/assets/optimized/Angeloni/V1/09-entrega-large.webp";
import v1Pagamento from "@/assets/optimized/Angeloni/V1/10-pagamento-large.webp";
import v1Revisao from "@/assets/optimized/Angeloni/V1/11-revisao-large.webp";
import v1Confirmado from "@/assets/optimized/Angeloni/V1/12-confirmado-large.webp";
import v1Acompanhar from "@/assets/optimized/Angeloni/V1/13-acompanhar-large.webp";
import v1Perfil from "@/assets/optimized/Angeloni/V1/14-perfil-large.webp";

import v2Splash from "@/assets/optimized/Angeloni/V2/01-splash-large.webp";
import v2Entrar from "@/assets/optimized/Angeloni/V2/02-entrar-large.webp";
import v2Cadastro from "@/assets/optimized/Angeloni/V2/03-cadastro-large.webp";
import v2Inicio from "@/assets/optimized/Angeloni/V2/04-inicio-large.webp";
import v2EscolherEndereco from "@/assets/optimized/Angeloni/V2/05-escolher-endereco-large.webp";
import v2Sugestoes from "@/assets/optimized/Angeloni/V2/06-sugestoes-large.webp";
import v2SugestaoAberta from "@/assets/optimized/Angeloni/V2/07-sugestao-aberta-large.webp";
import v2Categorias from "@/assets/optimized/Angeloni/V2/08-categorias-large.webp";
import v2Resultado from "@/assets/optimized/Angeloni/V2/09-resultado-large.webp";
import v2Produto from "@/assets/optimized/Angeloni/V2/10-produto-large.webp";
import v2Carrinho from "@/assets/optimized/Angeloni/V2/11-carrinho-large.webp";
import v2CarrinhoVazio from "@/assets/optimized/Angeloni/V2/12-carrinho-vazio-large.webp";
import v2Entrega from "@/assets/optimized/Angeloni/V2/13-entrega-large.webp";
import v2Pagamento from "@/assets/optimized/Angeloni/V2/14-pagamento-large.webp";
import v2Revisao from "@/assets/optimized/Angeloni/V2/15-revisao-large.webp";
import v2Confirmado from "@/assets/optimized/Angeloni/V2/16-confirmado-large.webp";
import v2Rastreio from "@/assets/optimized/Angeloni/V2/17-rastreio-large.webp";
import v2RastreioDetalhes from "@/assets/optimized/Angeloni/V2/18-rastreio-detalhes-large.webp";
import v2Pedidos from "@/assets/optimized/Angeloni/V2/19-pedidos-large.webp";
import v2DetalhesDoPedido from "@/assets/optimized/Angeloni/V2/20-detalhes-do-pedido-large.webp";
import v2Perfil from "@/assets/optimized/Angeloni/V2/21-perfil-large.webp";
import v2MeusDados from "@/assets/optimized/Angeloni/V2/22-meus-dados-large.webp";
import v2Enderecos from "@/assets/optimized/Angeloni/V2/23-enderecos-large.webp";
import v2FormasDePagamento from "@/assets/optimized/Angeloni/V2/24-formas-de-pagamento-large.webp";
import v2Notificacoes from "@/assets/optimized/Angeloni/V2/25-notificacoes-large.webp";
import v2Ajuda from "@/assets/optimized/Angeloni/V2/26-ajuda-large.webp";

import v1PrimeiroAcesso from "@/assets/optimized/Angeloni/primeiro-acesso/v1-large.webp";
import v2PrimeiroAcesso from "@/assets/optimized/Angeloni/primeiro-acesso/v2-large.webp";

import capaBooking from "@/assets/optimized/Booking/capa-home-booking-large.webp";

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
      { property: "og:url", content: "https://sophiadossantos.com/angeloni" },
      { property: "og:image", content: "https://sophiadossantos.com/og-image.png" },
      { name: "twitter:image", content: "https://sophiadossantos.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://sophiadossantos.com/angeloni" }],
  }),

  component: AngeloniCase,
});

// CONFIRMAR: textos alternativos e motivos das telas da V1, montados a partir dos motivos que já
// estavam no site, com as áreas reposicionadas sobre as novas exportações do Figma.
const FIRST_VERSION_SCREENS: GalleryItem[] = [
  { src: v1Splash, alt: "Tela de abertura da primeira versão, só com o logo" },
  {
    src: v1Entrar,
    alt: "Tela de entrar da primeira versão",
    reasons: [
      {
        text: "O logo colorido ocupa quase um terço da tela e atrasa o formulário.",
        ref: REFS.visualHierarchy,
        x: 14,
        y: 9,
        w: 70,
        h: 21,
      },
      {
        text: "A padronagem atrás do botão adiciona textura onde a ação deveria se destacar.",
        ref: REFS.minimalist,
        x: 0,
        y: 83,
        w: 100,
        h: 17,
      },
    ],
  },
  { src: v1Cadastro, alt: "Tela de criar conta da primeira versão" },
  {
    src: v1Inicio,
    alt: "Tela inicial da primeira versão, com seis cartões de opções",
    reasons: [
      {
        text: "Seis opções com o mesmo peso não indicam por onde começar.",
        ref: REFS.visualHierarchy,
        x: 5,
        y: 34,
        w: 90,
        h: 63,
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
    src: v1Busca,
    alt: "Resultados de busca da primeira versão",
    reasons: [
      {
        text: "A foto de cada item vem em um bloco com sombra, o que pesa a lista.",
        x: 3,
        y: 31,
        w: 94,
        h: 54,
      },
      {
        text: "Nome e preço usam pesos parecidos, sem ordem clara de leitura.",
        ref: REFS.visualHierarchy,
        x: 26,
        y: 32,
        w: 66,
        h: 8,
      },
    ],
  },
  {
    src: v1Produto,
    alt: "Detalhes do produto na primeira versão",
    reasons: [
      {
        text: "A foto ocupa quase metade da tela e empurra a descrição para baixo.",
        x: 10,
        y: 21,
        w: 80,
        h: 32,
      },
      {
        text: "O seletor de quantidade aparece antes de a pessoa ler sobre o produto.",
        x: 9,
        y: 55,
        w: 82,
        h: 10,
      },
    ],
  },
  { src: v1Carrinho, alt: "Carrinho da primeira versão" },
  {
    src: v1CarrinhoVazio,
    alt: "Carrinho vazio da primeira versão",
    reasons: [
      {
        text: "Vazio, o carrinho não oferece um caminho de volta às compras.",
        ref: REFS.emptyStates,
        x: 28,
        y: 45,
        w: 44,
        h: 6,
      },
      {
        text: "Finalizar Compra segue em destaque mesmo sem itens.",
        ref: REFS.errors,
        x: 12,
        y: 86,
        w: 77,
        h: 9,
      },
    ],
  },
  { src: v1Entrega, alt: "Etapa de entrega da primeira versão" },
  { src: v1Pagamento, alt: "Etapa de pagamento da primeira versão" },
  { src: v1Revisao, alt: "Revisão do pedido na primeira versão" },
  { src: v1Confirmado, alt: "Pedido confirmado na primeira versão" },
  { src: v1Acompanhar, alt: "Acompanhamento do pedido na primeira versão" },
  { src: v1Perfil, alt: "Menu lateral de perfil da primeira versão" },
];

// CONFIRMAR: motivos das telas da V2. Os que têm nota ao lado do frame no Figma partem dela;
// os demais vêm do site anterior ou foram escritos agora.
const SOLUTION_SCREENS: GalleryItem[] = [
  {
    src: v2Splash,
    alt: "Tela de abertura com a sacola e as opções de entrar e se cadastrar",
    reasons: [
      {
        text: "A frase resume a proposta do app antes de pedir qualquer dado.",
        x: 6,
        y: 63,
        w: 88,
        h: 7,
      },
      {
        text: "Entrar preenchido e Cadastre-se só com contorno indicam qual é a ação principal.",
        ref: REFS.visualHierarchy,
        x: 6,
        y: 73,
        w: 88,
        h: 13,
      },
    ],
  },
  {
    src: v2Entrar,
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
        h: 22,
      },
    ],
  },
  {
    src: v2Cadastro,
    alt: "Tela de cadastro",
    reasons: [
      {
        text: "Confirmar senha ajuda a evitar erro de digitação, já que o texto fica oculto.",
        ref: REFS.errors,
        x: 6,
        y: 43,
        w: 88,
        h: 11,
      },
      {
        text: "Título, campos e botão repetem a tela de entrar, o que dispensa aprender outro padrão.",
        ref: REFS.consistency,
        x: 6,
        y: 12,
        w: 88,
        h: 51,
      },
    ],
  },
  {
    src: v2Inicio,
    alt: "Tela inicial com sugestão de café da manhã, compre novamente e explorar",
    reasons: [
      {
        text: "Cada bloco tem uma função. O primeiro sugere algo pelo horário do dia.",
        ref: REFS.flexibility,
        x: 6,
        y: 25,
        w: 88,
        h: 29,
      },
      {
        text: "Compre novamente traz o que a pessoa já leva, sem precisar lembrar nomes.",
        ref: REFS.recognition,
        x: 6,
        y: 57,
        w: 94,
        h: 20,
      },
      {
        text: "Explorar organiza a loja por intenção. Menos escolhas por vez, decisão mais rápida.",
        ref: REFS.match,
        x: 6,
        y: 79,
        w: 88,
        h: 11,
      },
    ],
  },
  {
    src: v2EscolherEndereco,
    alt: "Tela inicial com o seletor de endereço aberto",
    reasons: [
      {
        text: "O endereço fica no topo porque muda preço, estoque e prazo.",
        x: 6,
        y: 9,
        w: 40,
        h: 6,
      },
      {
        text: "Ele abre num menu sobre a tela, sem tirar a pessoa de onde está.",
        ref: REFS.dropdowns,
        x: 6,
        y: 15,
        w: 88,
        h: 23,
      },
    ],
  },
  {
    src: v2Sugestoes,
    alt: "Sugestões de café da manhã em três opções com preço",
    reasons: [
      {
        text: "Ao tocar em Montar meu café da manhã, o app sugere carrinhos prontos com base no horário e no histórico.",
        ref: REFS.flexibility,
        x: 6,
        y: 26,
        w: 88,
        h: 44,
      },
      {
        text: "O preço aparece em cada opção, então dá para decidir sem abrir os detalhes.",
        x: 6,
        y: 38,
        w: 88,
        h: 32,
      },
    ],
  },
  {
    src: v2SugestaoAberta,
    alt: "Sugestão de café da manhã aberta com os itens e o botão de adicionar",
    reasons: [
      {
        text: "Cada sugestão abre no lugar e mostra os itens antes de adicionar.",
        ref: REFS.progressiveDisclosure,
        x: 6,
        y: 38,
        w: 88,
        h: 29,
      },
      {
        text: "A pessoa confere o carrinho montado sem perder o contexto.",
        x: 8,
        y: 59,
        w: 84,
        h: 6,
      },
    ],
  },
  {
    src: v2Categorias,
    alt: "Tela de busca com banner e categorias",
    reasons: [
      {
        text: "Categorias como Receber visitas usam situações reais, não nomes de setores do mercado.",
        ref: REFS.match,
        x: 6,
        y: 50,
        w: 88,
        h: 40,
      },
      {
        text: "Foto com fundo azul-escuro e rótulo branco: o texto continua legível sobre qualquer imagem.",
        ref: REFS.contrast,
        x: 6,
        y: 50,
        w: 42,
        h: 7,
      },
      {
        text: "O banner fica separado das categorias para não parecer uma opção de navegação.",
        ref: REFS.proximity,
        x: 6,
        y: 27,
        w: 88,
        h: 15,
      },
    ],
  },
  {
    src: v2Resultado,
    alt: "Resultados da busca por hambúrguer",
    reasons: [
      {
        text: "O seletor de quantidade fica em cada item, sem precisar abrir o produto para adicionar.",
        ref: REFS.flexibility,
        x: 73,
        y: 31,
        w: 25,
        h: 45,
      },
      {
        text: "Foto, nome e preço ficam sempre na mesma posição, o que agiliza a leitura da lista.",
        ref: REFS.scanning,
        x: 6,
        y: 31,
        w: 66,
        h: 45,
      },
    ],
  },
  {
    src: v2Produto,
    alt: "Detalhes do produto",
    reasons: [
      {
        text: "Foto, nome e preço seguem a ordem de importância para quem está comprando.",
        ref: REFS.visualHierarchy,
        x: 6,
        y: 32,
        w: 88,
        h: 32,
      },
      {
        text: "O botão ocupa a largura da tela e tem altura confortável para o toque.",
        ref: REFS.targetSize,
        x: 6,
        y: 81,
        w: 88,
        h: 6,
      },
    ],
  },
  {
    src: v2Carrinho,
    alt: "Carrinho com cinco itens e o total",
    reasons: [
      {
        text: "Quantidade e remover ficam na própria linha de cada item.",
        x: 64,
        y: 18,
        w: 32,
        h: 47,
      },
      {
        text: "Subtotal, entrega e total ficam sempre à vista antes do botão.",
        x: 6,
        y: 67,
        w: 88,
        h: 12,
      },
    ],
  },
  {
    src: v2CarrinhoVazio,
    alt: "Carrinho vazio com o botão para ver as sugestões de hoje",
    reasons: [
      {
        text: "O estado vazio não é um beco sem saída: leva direto para as sugestões do dia.",
        ref: REFS.emptyStates,
        x: 6,
        y: 45,
        w: 88,
        h: 22,
      },
    ],
  },
  {
    src: v2Entrega,
    alt: "Primeira etapa da compra: endereço e forma de receber",
    reasons: [
      {
        text: "Checkout em três etapas com indicador de progresso.",
        ref: REFS.progress,
        x: 6,
        y: 14,
        w: 88,
        h: 7,
      },
      {
        text: "Cada etapa tem uma decisão só, e o botão de avançar fica sempre no mesmo lugar.",
        ref: REFS.wizards,
        x: 6,
        y: 88,
        w: 88,
        h: 6,
      },
    ],
  },
  {
    src: v2Pagamento,
    alt: "Segunda etapa da compra: forma de pagamento",
    reasons: [
      {
        text: "Cada forma de pagamento é uma opção inteira para tocar, com a escolhida destacada pela borda.",
        ref: REFS.targetSize,
        x: 6,
        y: 28,
        w: 88,
        h: 32,
      },
      { text: "O total segue visível em todas as etapas.", x: 6, y: 67, w: 88, h: 12 },
    ],
  },
  {
    src: v2Revisao,
    alt: "Terceira etapa da compra: revisão do pedido",
    reasons: [
      {
        text: "Na revisão, cada bloco tem um atalho para alterar sem voltar o fluxo inteiro.",
        ref: REFS.control,
        x: 6,
        y: 28,
        w: 88,
        h: 40,
      },
    ],
  },
  {
    src: v2Confirmado,
    alt: "Pedido confirmado com a previsão de entrega",
    reasons: [
      {
        text: "Acompanhar pedido é a ação principal; Voltar ao início vira link para não competir.",
        ref: REFS.visualHierarchy,
        x: 6,
        y: 83,
        w: 88,
        h: 10,
      },
      {
        text: "A previsão e o endereço de entrega aparecem logo na confirmação.",
        ref: REFS.status,
        x: 6,
        y: 46,
        w: 88,
        h: 12,
      },
    ],
  },
  {
    src: v2Rastreio,
    alt: "Rastreio do pedido no mapa, com a moto a caminho",
    reasons: [
      {
        text: "Acompanhar o pedido abre direto no mapa. A moto anda pela rota em tempo real.",
        ref: REFS.status,
        x: 0,
        y: 3,
        w: 100,
        h: 66,
      },
      {
        text: "A loja fica fixa na origem, para a pessoa entender de onde vem a entrega.",
        x: 3,
        y: 14,
        w: 22,
        h: 12,
      },
    ],
  },
  {
    src: v2RastreioDetalhes,
    alt: "Rastreio com a aba de detalhes aberta sobre o mapa",
    reasons: [
      {
        text: "Os detalhes ficam numa aba que expande por cima do mapa, sem parar o movimento da entrega.",
        ref: REFS.progressiveDisclosure,
        x: 0,
        y: 30,
        w: 100,
        h: 55,
      },
      {
        text: "A linha do tempo mostra cada etapa do pedido com o horário.",
        ref: REFS.status,
        x: 6,
        y: 53,
        w: 88,
        h: 26,
      },
    ],
  },
  {
    src: v2Pedidos,
    alt: "Lista de pedidos em andamento e anteriores",
    reasons: [
      {
        text: "O pedido em andamento fica separado dos anteriores.",
        ref: REFS.chunking,
        x: 6,
        y: 18,
        w: 88,
        h: 20,
      },
      {
        text: "O status aparece numa etiqueta com cor da própria paleta.",
        ref: REFS.useOfColor,
        x: 66,
        y: 26,
        w: 30,
        h: 47,
      },
    ],
  },
  {
    src: v2DetalhesDoPedido,
    alt: "Detalhes de um pedido entregue",
    reasons: [
      {
        text: "Comprar novamente transforma um pedido antigo em carrinho com um toque.",
        ref: REFS.flexibility,
        x: 6,
        y: 82,
        w: 88,
        h: 6,
      },
    ],
  },
  {
    src: v2Perfil,
    alt: "Tela de perfil com as opções da conta",
    reasons: [
      {
        text: "Na V1 o perfil era um menu lateral escondido. Na V2 virou uma aba fixa.",
        ref: REFS.tabBars,
        x: 6,
        y: 90,
        w: 88,
        h: 6,
      },
      { text: "Cada opção tem ícone e rótulo claros.", ref: REFS.icons, x: 6, y: 20, w: 88, h: 43 },
    ],
  },
  { src: v2MeusDados, alt: "Tela de meus dados" },
  { src: v2Enderecos, alt: "Lista de endereços salvos" },
  { src: v2FormasDePagamento, alt: "Formas de pagamento salvas" },
  {
    src: v2Notificacoes,
    alt: "Preferências de notificação",
    reasons: [
      {
        text: "Preferências separadas em Pedidos e Ofertas, cada uma com seu interruptor.",
        ref: REFS.chunking,
        x: 6,
        y: 15,
        w: 88,
        h: 44,
      },
    ],
  },
  {
    src: v2Ajuda,
    alt: "Tela de ajuda com perguntas frequentes",
    reasons: [
      {
        text: "Perguntas frequentes que abrem no lugar.",
        ref: REFS.help,
        x: 6,
        y: 15,
        w: 88,
        h: 31,
      },
      { text: "Por último, o atalho para o chat.", x: 6, y: 49, w: 88, h: 11 },
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

const INFORMATION_DIFFICULTY = {
  title: "Muita coisa disputando a tela inicial",
  context:
    "A tela inicial e a lista de recompra juntavam ofertas, recomendações, atalhos e os itens que a pessoa sempre compra, tudo pedindo atenção ao mesmo tempo.",
  decision:
    "Dar prioridade ao que vem do hábito de cada pessoa, agrupar o conteúdo em blocos com títulos e espaços claros e deixar a tipografia e a cor indicarem o que importa.",
  tradeoff:
    "As ofertas genéricas ficaram menos à vista, e a cor da marca passou a aparecer de forma mais contida.",
  ref: REFS.chunking,
};

const TARGET_METRICS = [
  {
    status: "alvo" as const,
    name: "Recorrência de compra",
    detail: "Pessoas que voltam a fazer a compra pelo app.",
    why: "Mostra se a experiência personalizada faz a pessoa voltar.",
  },
  {
    status: "alvo" as const,
    name: "Recomendações aceitas",
    detail: "Itens sugeridos pelo app que vão para o carrinho.",
    why: "Mostra se o app realmente aprende com o hábito de cada pessoa.",
  },
  {
    status: "alvo" as const,
    name: "Tempo para montar a compra",
    detail: "Do app aberto até o carrinho pronto.",
    why: "A promessa do app é deixar a compra do dia a dia mais rápida.",
  },
];

const SPACING_DECISION = {
  title: "Respiro antes de conteúdo",
  problem: "Na V1, os elementos ficavam colados e a tela parecia sempre cheia.",
  decision: "Criar uma escala de espaçamentos e aplicá-la em todas as telas.",
  why: "Com mais espaço, o usuário entende mais rápido o que é cada bloco.",
  ref: REFS.proximity,
};

const TYPOGRAPHY_DECISION = {
  title: "Hierarquia pela tipografia",
  problem:
    "Títulos, preços e descrições tinham tamanhos parecidos, sem uma ordem clara de leitura.",
  decision: "Definir uma escala tipográfica com poucos tamanhos e pesos bem diferentes entre si.",
  why: "A tipografia passa a indicar o que é mais importante sem precisar de cor ou caixa.",
  ref: REFS.visualHierarchy,
};

const COLOR_DECISION = {
  title: "Cor com função",
  problem: "As cores da marca estavam espalhadas por toda a interface e perdiam o significado.",
  decision: "Reservar a cor de destaque para ações principais e informações personalizadas.",
  why: "Quando a cor aparece, o usuário sabe que aquilo merece atenção.",
  ref: REFS.minimalist,
};

/** Nota com o marcador na borda direita da área destacada, em % da tela enquadrada. */
function note(
  text: string,
  area: ComparisonNote["area"],
  ref?: ComparisonNote["ref"],
): ComparisonNote {
  const [x, y, w, h] = area;
  return { text, area, ref, x: Math.min(x + w - 4, 92), y: y + h / 2 };
}

type PairSpec = {
  label: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  frame?: "mobile" | "trio";
  notes: ComparisonNote[];
};

// CONFIRMAR: notas das 14 comparações.
const PAIRS: PairSpec[] = [
  {
    label: "Primeiro acesso",
    before: v1PrimeiroAcesso,
    after: v2PrimeiroAcesso,
    beforeAlt: "Abertura, entrar e criar conta da primeira versão",
    afterAlt: "Abertura, entrar e cadastro da nova versão",
    frame: "trio",
    notes: [
      note(
        "A V1 abria só com o logo. Agora a frase resume a proposta e já mostra as duas entradas.",
        [2, 63, 28, 23],
        REFS.control,
      ),
      note(
        "Logo, abas e padronagem saíram do entrar, e sobrou só o formulário com campos de borda fina.",
        [36, 12, 28, 30],
        REFS.nonTextContrast,
      ),
      note("Esqueceu a senha? virou link de texto e não compete com o botão.", [36, 53, 28, 4]),
      note(
        "Sem abas: o cadastro é uma tela própria, no mesmo padrão de entrar.",
        [70, 12, 28, 51],
        REFS.consistency,
      ),
    ],
  },
  {
    label: "Tela inicial",
    before: v1Inicio,
    after: v2Inicio,
    beforeAlt: "Tela inicial da primeira versão",
    afterAlt: "Tela inicial da nova versão",
    notes: [
      note(
        "Os seis cartões viraram uma sugestão pelo horário do dia.",
        [6, 25, 88, 29],
        REFS.flexibility,
      ),
      note(
        "Compre novamente usa o histórico, que é a ideia central do app.",
        [6, 57, 94, 20],
        REFS.recognition,
      ),
      note(
        "Os ícones do topo viraram uma barra inferior sempre à vista.",
        [6, 90, 88, 6],
        REFS.tabBars,
      ),
    ],
  },
  {
    label: "Resultado da busca",
    before: v1Busca,
    after: v2Resultado,
    beforeAlt: "Resultados de busca da primeira versão",
    afterAlt: "Resultados de busca da nova versão",
    notes: [
      note(
        "Os itens perderam o bloco com sombra e ficaram separados por linhas finas.",
        [6, 31, 88, 45],
      ),
      note(
        "Nome e preço em azul definem a ordem de leitura.",
        [23, 33, 45, 8],
        REFS.visualHierarchy,
      ),
    ],
  },
  {
    label: "Produto",
    before: v1Produto,
    after: v2Produto,
    beforeAlt: "Detalhes do produto na primeira versão",
    afterAlt: "Detalhes do produto na nova versão",
    notes: [
      note("A foto ficou menor e a descrição subiu para a primeira tela.", [6, 32, 88, 50]),
      note("O botão adiciona direto, sem o seletor de quantidade no meio.", [6, 81, 88, 6]),
    ],
  },
  {
    label: "Carrinho",
    before: v1Carrinho,
    after: v2Carrinho,
    beforeAlt: "Carrinho da primeira versão",
    afterAlt: "Carrinho da nova versão",
    notes: [
      note(
        "Quantidade e remover ficam na própria linha, com área de toque maior.",
        [64, 18, 32, 47],
        REFS.targetSize,
      ),
      note("O total ganhou destaque logo acima do botão.", [6, 76, 88, 4]),
    ],
  },
  {
    label: "Carrinho vazio",
    before: v1CarrinhoVazio,
    after: v2CarrinhoVazio,
    beforeAlt: "Carrinho vazio da primeira versão",
    afterAlt: "Carrinho vazio da nova versão",
    notes: [
      note(
        "No lugar dos valores zerados, uma mensagem e um caminho para as sugestões do dia.",
        [6, 45, 88, 22],
        REFS.emptyStates,
      ),
    ],
  },
  {
    label: "Entrega",
    before: v1Entrega,
    after: v2Entrega,
    beforeAlt: "Etapa de entrega da primeira versão",
    afterAlt: "Etapa de entrega da nova versão",
    notes: [
      note(
        "Os ícones das etapas viraram números com nome, que dizem onde a pessoa está.",
        [6, 14, 88, 7],
        REFS.progress,
      ),
      note("As formas de receber viraram opções para escolher com um toque.", [6, 43, 88, 34]),
    ],
  },
  {
    label: "Pagamento",
    before: v1Pagamento,
    after: v2Pagamento,
    beforeAlt: "Etapa de pagamento da primeira versão",
    afterAlt: "Etapa de pagamento da nova versão",
    notes: [
      note(
        "Editar e Trocar Cartão saíram: cada forma de pagamento é uma opção para tocar.",
        [6, 28, 88, 32],
      ),
      note("O botão fica no mesmo lugar em todas as etapas.", [6, 88, 88, 6], REFS.consistency),
    ],
  },
  {
    label: "Revisão",
    before: v1Revisao,
    after: v2Revisao,
    beforeAlt: "Revisão do pedido na primeira versão",
    afterAlt: "Revisão do pedido na nova versão",
    notes: [
      note(
        "O texto voltou a um tamanho de leitura; na V1 a tela estava encolhida.",
        [6, 28, 88, 45],
      ),
      note(
        "Cada bloco tem um atalho para alterar sem voltar o fluxo.",
        [80, 30, 16, 40],
        REFS.control,
      ),
    ],
  },
  {
    label: "Pedido confirmado",
    before: v1Confirmado,
    after: v2Confirmado,
    beforeAlt: "Pedido confirmado na primeira versão",
    afterAlt: "Pedido confirmado na nova versão",
    notes: [
      note(
        "Ícone de confirmação e previsão de entrega aparecem logo de cara.",
        [6, 18, 88, 41],
        REFS.status,
      ),
      note("Voltar ao início vira link para não competir com a ação principal.", [6, 83, 88, 10]),
    ],
  },
  {
    label: "Acompanhar pedido",
    before: v1Acompanhar,
    after: v2Rastreio,
    beforeAlt: "Acompanhamento do pedido na primeira versão",
    afterAlt: "Rastreio do pedido na nova versão",
    notes: [
      note("O mapa ocupa a tela e mostra a moto na rota.", [0, 3, 100, 66]),
      note("Previsão e entregador aparecem sem abrir nada.", [6, 73, 88, 20], REFS.status),
    ],
  },
  {
    label: "Perfil",
    before: v1Perfil,
    after: v2Perfil,
    beforeAlt: "Menu lateral de perfil da primeira versão",
    afterAlt: "Perfil da nova versão",
    notes: [
      note(
        "O menu lateral escondido virou uma aba fixa na barra inferior.",
        [6, 90, 88, 6],
        REFS.tabBars,
      ),
      note("Cada opção ganhou ícone e rótulo.", [6, 20, 88, 43], REFS.icons),
    ],
  },
];

const COMPARISON_PAIRS = PAIRS.map(({ frame = "mobile", ...pair }) =>
  comparisonPair({ ...pair, frame }),
);

function AngeloniCase() {
  return (
    <CaseShell>
      <CaseHero
        title="Angeloni: em casa"
        subtitle="Uma experiência de compras que aprende com os hábitos de cada consumidor."
        tags={["Projeto acadêmico · 2025/2026", "Product Design", "UX/UI", "Mobile"]}
        meta={META}
      />

      <CaseSection
        title="Visão geral"
        highlight="Este case mostra um app, mas também mostra como meu olhar de designer mudou."
        paragraphs={[
          "A disciplina de UX/UI propôs criar um sistema digital para um supermercado da cidade. Tive a ideia de um app que usa o histórico de compras de cada consumidor para tornar as próximas compras mais rápidas, práticas e personalizadas.",
        ]}
      >
        <PanelImage src={angeloniCapa} priority alt="Visão geral do aplicativo Angeloni: em casa" />
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
          "Entre as duas versões, segui as disciplinas da faculdade, fiz cursos online e estudei as heurísticas de Nielsen e os artigos do Nielsen Norman Group.",
          "Com esse repertório, voltei ao projeto e vi o que antes não enxergava: muitas informações competindo pela atenção, pouco espaço entre os elementos e uma hierarquia visual confusa. Em vez de ajustar a interface, decidi refazer o projeto com o que tinha aprendido.",
          // CONFIRMAR: resumo da auditoria da V1 que estava no Figma (Processo / 01-auditoria-da-v1).
          "Antes de desenhar as telas que faltavam, auditei o protótipo inteiro. Encontrei 78 textos sem estilo, duas fontes fora da escala, cores soltas fora da paleta e áreas de toque de 24 px na barra de navegação. Na V2, todos os textos seguem a escala, as cores vêm só da paleta e as áreas de toque passaram para 69 × 40 px.",
        ]}
      >
        <DecisionCards decision={SPACING_DECISION} />
      </CaseSection>

      <CaseSection title="V1 × V2">
        <DecisionCards decision={TYPOGRAPHY_DECISION} />

        <Panel>
          <ComparisonGallery pairs={COMPARISON_PAIRS} />
        </Panel>
      </CaseSection>

      <CaseSection
        title="Dificuldades e decisões"
        paragraphs={[
          "A parte mais difícil da V2 foi organizar a informação. A personalização só funciona se a pessoa enxerga primeiro o que é dela.",
        ]}
      >
        <DifficultyBlock difficulty={INFORMATION_DIFFICULTY} />
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
        title="Como medir o impacto"
        paragraphs={[
          "O Angeloni: em casa é um conceito e não foi lançado, então não há resultados de uso. O retorno que existe veio dos colegas e da avaliação na disciplina.",
          "Se o app fosse lançado, estas seriam as métricas para saber se a personalização funciona. Elas mostram o que medir, não resultados.",
        ]}
      >
        <MetricCards metrics={TARGET_METRICS} />
      </CaseSection>

      <CaseSection
        title="O que aprendi"
        paragraphs={[
          "A primeira versão recebeu nota máxima na disciplina de UX/UI. A V2 foi uma evolução pessoal, feita depois, para aplicar o que aprendi.",
          "Voltar a uma solução depois de adquirir mais conhecimento revela problemas que antes eu nem conseguia enxergar. Hoje questiono mais minhas próprias decisões: cada escolha visual pode ajudar, ou dificultar, a forma como alguém entende um produto.",
        ]}
      />

      <NextProject to="/booking" name="Booking.com" thumb={capaBooking} />
    </CaseShell>
  );
}
