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
import {
  angeloniImagem1Url,
  angeloniImagem2Url,
  angeloniImagem3Url,
  angeloniImagem4Url,
  angeloniImagem5Url,
  miniaturaTelaInicialBookingUrl,
  telasAngeloniCadastrar1Url,
  telasAngeloniDescricaoDoItem1Url,
  telasAngeloniEntrar1Url,
  telasAngeloniPesquisa1Url,
  telasAngeloniSplashScreenAngeloni3Url,
  telasAngeloniSugestoesInteligentes1Url,
  telasAngeloniTelaInicialAngeloni3Url,
  telasAngeloniTelaPesquisar1Url,
} from "@/assets/assets";

export const Route = createFileRoute("/angeloni")({
  head: () => ({
    meta: [
      { title: "Angeloni: em casa — Estudo de caso | Sophia dos Santos" },
      {
        name: "description",
        content:
          "Estudo de caso do Angeloni: em casa, uma experiência de compras personalizada a partir dos hábitos de cada consumidor.",
      },
      {
        property: "og:title",
        content: "Angeloni: em casa — Estudo de caso | Sophia dos Santos",
      },
      {
        property: "og:description",
        content:
          "Da primeira versão à nova experiência: hierarquia, espaçamento e personalização em um app de supermercado.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AngeloniCase,
});

const SOLUTION_SCREENS = [
  { src: telasAngeloniSplashScreenAngeloni3Url, alt: "Splash screen do aplicativo" },
  { src: telasAngeloniEntrar1Url, alt: "Tela de entrar" },
  { src: telasAngeloniCadastrar1Url, alt: "Tela de cadastro" },
  { src: telasAngeloniTelaInicialAngeloni3Url, alt: "Tela inicial personalizada" },
  { src: telasAngeloniSugestoesInteligentes1Url, alt: "Sugestões inteligentes" },
  { src: telasAngeloniDescricaoDoItem1Url, alt: "Descrição do item" },
  { src: telasAngeloniTelaPesquisar1Url, alt: "Tela de pesquisar" },
  { src: telasAngeloniPesquisa1Url, alt: "Resultados da pesquisa" },
];

function AngeloniCase() {
  return (
    <CaseShell>
      <CaseHero
        title="Angeloni: em casa"
        subtitle="Repensando a experiência de compras a partir dos hábitos de cada consumidor."
        tags={["Projeto acadêmico · 2025/2026", "Product Design", "UX/UI", "Mobile"]}
      />

      <CaseSection
        title="Visão geral"
        paragraphs={[
          "O projeto foi desenvolvido na disciplina de UX/UI da faculdade, a partir de uma atividade que propunha a criação de um sistema digital para um supermercado da cidade.",
          "A partir da liberdade da proposta, tive a ideia de criar uma experiência que aprendesse com os hábitos de cada consumidor. O sistema utilizaria o histórico de compras para tornar as próximas compras mais rápidas, práticas e personalizadas.",
        ]}
      >
        <PanelImage src={angeloniImagem1Url} alt="Visão geral do aplicativo Angeloni: em casa" />
      </CaseSection>

      <CaseSection
        title="O ponto de partida"
        paragraphs={[
          "A primeira versão foi construída principalmente a partir das minhas próprias percepções como usuária e das ideias que eu tinha naquele momento sobre como essa experiência poderia funcionar.",
          "Como eu ainda estava no processo de aprendizado em UX/UI e Figma, muitas das decisões foram tomadas sem um estudo mais aprofundado ou referências que ajudassem a fundamentá-las.",
          "Naquele momento, a interface fazia sentido para mim. Foi somente depois de continuar estudando que comecei a perceber que algumas escolhas poderiam ser melhores.",
        ]}
      >
        <PanelImage src={angeloniImagem2Url} alt="Telas da primeira versão do projeto" />
      </CaseSection>

      <CaseSection
        title="Olhando novamente para a primeira versão"
        paragraphs={[
          "Depois de finalizar a V1, continuei meus estudos de UX/UI e Figma. Conforme adquiri mais conhecimento e repertório, comecei a enxergar o projeto de outra maneira.",
          "Ao voltar para a primeira versão, percebi que havia muitas informações competindo pela atenção, pouco espaço entre os elementos e uma hierarquia visual que poderia ser mais clara.",
          "Foi nesse momento que decidi não apenas ajustar a interface, mas refazer o projeto com aquilo que eu havia aprendido.",
        ]}
      >
        <PanelImage src={angeloniImagem3Url} alt="Mapa completo das telas da primeira versão" />
      </CaseSection>

      <CaseSection
        title="Da V1 à nova experiência"
        paragraphs={[
          "Antes de começar a segunda versão, busquei referências em outras experiências de compra digital para entender melhor como informações e funcionalidades poderiam ser apresentadas. A partir disso, comecei a revisar as telas e trabalhar principalmente os espaçamentos, a escala, a tipografia, as cores e a hierarquia visual.",
          "A diferença entre as duas versões acabou mostrando muito do meu próprio processo de aprendizado. A V2 passou a ter mais respiro, uma hierarquia mais clara e um uso mais intencional das cores, tornando a interface menos carregada e mais fácil de acompanhar.",
        ]}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Panel>
            <img
              src={angeloniImagem4Url}
              alt="Telas da versão 1: entrada e splash"
              loading="lazy"
              className="block w-full"
            />
          </Panel>
          <Panel>
            <img
              src={angeloniImagem5Url}
              alt="Telas da versão 2: entrada e tela inicial"
              loading="lazy"
              className="block w-full"
            />
          </Panel>
        </div>
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

      <NextProject to="/booking" name="Booking.com" thumb={miniaturaTelaInicialBookingUrl} />
    </CaseShell>
  );
}
