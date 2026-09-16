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

import angeloniCapa from "@/assets/Angeloni/Capa.png";
import angeloniFigjam from "@/assets/Angeloni/Figjam.png";

import angeloniLogin from "@/assets/Angeloni/Login.png";
import angeloniTelaInicial from "@/assets/Angeloni/Tela Inicial.png";
import angeloniPesquisa from "@/assets/Angeloni/Pesquisa - mobile.png";
import angeloniDetalhesProduto from "@/assets/Angeloni/Detalhes do Produto.png";
import angeloniCarrinho from "@/assets/Angeloni/Carrinho 6.png";

import angeloniSplash from "@/assets/Angeloni/Splash Screen - mobile.png";
import angeloniTelaInicialMobile from "@/assets/Angeloni/Tela inicial - mobile.png";

import telasAngeloniCadastrar from "@/assets/Angeloni/Cadastrar - mobile.png";
import telasAngeloniDescricao from "@/assets/Angeloni/Descrição do item - mobile.png";
import telasAngeloniEntrar from "@/assets/Angeloni/Entrar - mobile.png";
import telasAngeloniPesquisa from "@/assets/Angeloni/Pesquisa - mobile.png";
import telasAngeloniSugestoes from "@/assets/Angeloni/Sugestões inteligentes - mobile.png";
import telasAngeloniTelaInicial from "@/assets/Angeloni/Tela inicial - mobile.png";
import telasAngeloniTelaPesquisar from "@/assets/Angeloni/Tela pesquisar - mobile.png";

import capaBookingHome from "@/assets/Booking/Capa - home booking.png";

export const Route = createFileRoute("/angeloni")({
  head: () => ({
    meta: [
      {
        title: "Angeloni: em casa — Estudo de caso | Sophia dos Santos",
      },
      {
        name: "description",
        content:
          "Estudo de caso do Angeloni: em casa, uma experiência de compras personalizada a partir dos hábitos de cada consumidor.",
      },
      {
        property: "og:title",
        content:
          "Angeloni: em casa — Estudo de caso | Sophia dos Santos",
      },
      {
        property: "og:description",
        content:
          "Da primeira versão à nova experiência: hierarquia, espaçamento e personalização em um app de supermercado.",
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

  component: AngeloniCase,
});

const SOLUTION_SCREENS = [
  {
    src: telasAngeloniEntrar,
    alt: "Tela de entrar",
  },
  {
    src: telasAngeloniCadastrar,
    alt: "Tela de cadastro",
  },
  {
    src: telasAngeloniTelaInicial,
    alt: "Tela inicial personalizada",
  },
  {
    src: telasAngeloniSugestoes,
    alt: "Sugestões inteligentes",
  },
  {
    src: telasAngeloniDescricao,
    alt: "Descrição do item",
  },
  {
    src: telasAngeloniTelaPesquisar,
    alt: "Tela de pesquisar",
  },
  {
    src: telasAngeloniPesquisa,
    alt: "Resultados da pesquisa",
  },
  {
    src: angeloniSplash,
    alt: "Splash screen do aplicativo",
  },
];

function ImageRow({
  images,
}: {
  images: Array<{
    src: string;
    alt: string;
  }>;
}) {
  return (
    <Panel>
      <div
        className={`grid items-center gap-5 ${
          images.length === 2
            ? "md:grid-cols-2"
            : images.length === 5
              ? "md:grid-cols-5"
              : "md:grid-cols-3"
        }`}
      >
        {images.map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="block h-auto max-h-[420px] w-full object-contain"
          />
        ))}
      </div>
    </Panel>
  );
}

function AngeloniCase() {
  return (
    <CaseShell>
      <CaseHero
        title="Angeloni: em casa"
        subtitle="Repensando a experiência de compras a partir dos hábitos de cada consumidor."
        tags={[
          "Projeto acadêmico · 2025/2026",
          "Product Design",
          "UX/UI",
          "Mobile",
        ]}
      />

      <CaseSection
        title="Visão geral"
        paragraphs={[
          "O projeto foi desenvolvido na disciplina de UX/UI da faculdade, a partir de uma atividade que propunha a criação de um sistema digital para um supermercado da cidade.",
          "A partir da liberdade da proposta, tive a ideia de criar uma experiência que aprendesse com os hábitos de cada consumidor. O sistema utilizaria o histórico de compras para tornar as próximas compras mais rápidas, práticas e personalizadas.",
        ]}
      >
        <PanelImage
          src={angeloniCapa}
          alt="Visão geral do aplicativo Angeloni: em casa"
        />
      </CaseSection>

      <CaseSection
        title="O ponto de partida"
        paragraphs={[
          "A primeira versão foi construída principalmente a partir das minhas próprias percepções como usuária e das ideias que eu tinha naquele momento sobre como essa experiência poderia funcionar.",
          "Como eu ainda estava no processo de aprendizado em UX/UI e Figma, muitas das decisões foram tomadas sem um estudo mais aprofundado ou referências que ajudassem a fundamentá-las.",
          "Naquele momento, a interface fazia sentido para mim. Foi somente depois de continuar estudando que comecei a perceber que algumas escolhas poderiam ser melhores.",
        ]}
      >
        <ImageRow
          images={[
            {
              src: angeloniLogin,
              alt: "Tela de login do aplicativo",
            },
            {
              src: angeloniTelaInicial,
              alt: "Tela inicial do aplicativo",
            },
            {
              src: angeloniPesquisa,
              alt: "Resultados de pesquisa",
            },
            {
              src: angeloniDetalhesProduto,
              alt: "Detalhes do produto",
            },
            {
              src: angeloniCarrinho,
              alt: "Carrinho de compras",
            },
          ]}
        />
      </CaseSection>

      <CaseSection
        title="Olhando novamente para a primeira versão"
        paragraphs={[
          "Depois de finalizar a V1, continuei meus estudos de UX/UI e Figma. Conforme adquiri mais conhecimento e repertório, comecei a enxergar o projeto de outra maneira.",
          "Ao voltar para a primeira versão, percebi que havia muitas informações competindo pela atenção, pouco espaço entre os elementos e uma hierarquia visual que poderia ser mais clara.",
          "Foi nesse momento que decidi não apenas ajustar a interface, mas refazer o projeto com aquilo que eu havia aprendido.",
        ]}
      >
        <PanelImage
          src={angeloniFigjam}
          alt="Mapa completo das telas da primeira versão"
        />
      </CaseSection>

      <CaseSection
        title="Da V1 à nova experiência"
        paragraphs={[
          "Antes de começar a segunda versão, busquei referências em outras experiências de compra digital para entender melhor como informações e funcionalidades poderiam ser apresentadas. A partir disso, comecei a revisar as telas e trabalhar principalmente os espaçamentos, a escala, a tipografia, as cores e a hierarquia visual.",
          "A diferença entre as duas versões acabou mostrando muito do meu próprio processo de aprendizado. A V2 passou a ter mais respiro, uma hierarquia mais clara e um uso mais intencional das cores, tornando a interface menos carregada e mais fácil de acompanhar.",
        ]}
      >
        <ImageRow
          images={[
            {
              src: angeloniLogin,
              alt: "Tela de login da primeira versão",
            },
            {
              src: angeloniSplash,
              alt: "Tela inicial da primeira versão",
            },
          ]}
        />

        <ImageRow
          images={[
            {
              src: angeloniTelaInicial,
              alt: "Tela inicial da nova versão",
            },
            {
              src: angeloniTelaInicialMobile,
              alt: "Tela inicial mobile da nova versão",
            },
          ]}
        />
      </CaseSection>

      <CaseSection
        title="A solução"
        paragraphs={[
          "Na nova versão, mantive a ideia principal do projeto: utilizar os hábitos de compra do consumidor para tornar a experiência cada vez mais personalizada.",
          "O resultado foi uma interface mais organizada e uma proposta que conseguia comunicar melhor a ideia inicial.",
          "Mais do que o resultado final, esse projeto foi importante para perceber como meu olhar mudou durante o processo. Aprendi que voltar para uma solução depois de adquirir mais conhecimento pode revelar problemas que antes eu nem conseguia enxergar.",
          "Também aprendi a questionar mais minhas próprias decisões e a entender que uma interface não precisa apenas funcionar ou parecer bonita. Cada escolha visual pode ajudar, ou dificultar, a forma como alguém entende e utiliza um produto.",
        ]}
      >
        <ScreenGrid items={SOLUTION_SCREENS} columns={3} />
      </CaseSection>

      <NextProject
        to="/booking"
        name="Booking.com"
        thumb={capaBookingHome}
      />
    </CaseShell>
  );
}