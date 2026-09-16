import { createFileRoute } from "@tanstack/react-router";
import {
  CaseHero,
  CaseSection,
  CaseShell,
  NextProject,
  PanelImage,
  ScreenGrid,
} from "@/components/site/CaseLayout";

import cursivaImagem1 from "@/assets/Cursiva/Capa.png";
import cursivaImagem2 from "@/assets/Cursiva/Frame 170.png";
import cursivaImagem3 from "@/assets/Cursiva/Concorrentes.png";
import cursivaImagem4 from "@/assets/Cursiva/Figjam.png";
import cursivaImagem5 from "@/assets/Cursiva/Dados pessoais - antes.png";
import cursivaImagem6 from "@/assets/Cursiva/Provas - antes.png";

import telasCursivaImportarProva1 from "@/assets/Cursiva/Importar prova.png";
import telasCursivaLogin1 from "@/assets/Cursiva/Login.png";
import telasCursivaOnboardingDadosPessoais1 from "@/assets/Cursiva/Onboarding - Dados pessoais.png";
import telasCursivaOnboardingEscola11 from "@/assets/Cursiva/Onboarding - Escola.png";
import telasCursivaOnboardingIniciar1 from "@/assets/Cursiva/Onboarding - Iniciar.png";
import telasCursivaOnboardingMaterias1 from "@/assets/Cursiva/Onboarding - Matérias.png";
import telasCursivaOnboardingModalidade1 from "@/assets/Cursiva/Onboarding - Modalidade.png";
import telasCursivaOnboardingNivelDeEnsino1 from "@/assets/Cursiva/Onboarding - Nível de ensino.png";
import telasCursivaOnboardingPreparandoAmbiente11 from "@/assets/Cursiva/Onboarding - Preparando ambiente.png";
import telasCursivaTelaDeProvas12 from "@/assets/Cursiva/Tela de provas-1.png";
import telasCursivaTelaDeProvas31 from "@/assets/Cursiva/Tela de provas-2.png";
import telasCursivaTelaDeProvas51 from "@/assets/Cursiva/Tela de provas.png";
import telasCursivaTelaInicialAssistente2 from "@/assets/Cursiva/Tela inicial - Assistente.png";
import telasCursivaTelaInicialTour1 from "@/assets/Cursiva/Tela inicial - Tour.png";

import miniaturaTelaInicialAngeloni from "@/assets/Angeloni/Tela Inicial.png";

export const Route = createFileRoute("/cursiva")({
  head: () => ({
    meta: [
      { title: "Cursiva — Estudo de caso | Sophia dos Santos" },
      {
        name: "description",
        content:
          "Estudo de caso da Cursiva: plataforma educacional com IA criada para simplificar a rotina de professores.",
      },
      {
        property: "og:title",
        content: "Cursiva — Estudo de caso | Sophia dos Santos",
      },
      {
        property: "og:description",
        content:
          "Como projetei uma experiência clara e intuitiva para professores com diferentes níveis de familiaridade com tecnologia.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CursivaCase,
});

const SOLUTION_SCREENS = [
  { src: telasCursivaLogin1, alt: "Tela de login da Cursiva" },
  { src: telasCursivaOnboardingIniciar1, alt: "Onboarding: iniciar" },
  {
    src: telasCursivaOnboardingDadosPessoais1,
    alt: "Onboarding: dados pessoais",
  },
  {
    src: telasCursivaOnboardingNivelDeEnsino1,
    alt: "Onboarding: nível de ensino",
  },
  { src: telasCursivaOnboardingMaterias1, alt: "Onboarding: matérias" },
  { src: telasCursivaOnboardingModalidade1, alt: "Onboarding: modalidade" },
  { src: telasCursivaOnboardingEscola11, alt: "Onboarding: escola" },
  {
    src: telasCursivaOnboardingPreparandoAmbiente11,
    alt: "Onboarding: preparando o ambiente",
  },
  { src: telasCursivaTelaInicialTour1, alt: "Tela inicial com tour guiado" },
  { src: telasCursivaTelaInicialAssistente2, alt: "Tela inicial com assistente" },
  { src: telasCursivaTelaDeProvas12, alt: "Tela de provas" },
  { src: telasCursivaImportarProva1, alt: "Importar prova" },
  { src: telasCursivaTelaDeProvas31, alt: "Histórico de provas" },
  { src: telasCursivaTelaDeProvas51, alt: "Prova de inglês corrigida" },
];

function CursivaCase() {
  return (
    <CaseShell>
      <CaseHero
        title="Cursiva"
        subtitle="Uma plataforma educacional criada para simplificar a rotina de professores."
        tags={["Projeto pessoal · 2026", "Product Design", "UX/UI", "Web"]}
      />

      <CaseSection
        title="Visão geral"
        paragraphs={[
          "O Cursiva surgiu como um projeto pessoal desenvolvido em conjunto, a partir da ideia de utilizar tecnologia e inteligência artificial para reduzir tarefas repetitivas na rotina de professores. No início do projeto, o foco estava principalmente em definir os recursos que a plataforma deveria oferecer e como eles poderiam funcionar.",
          "Quando entrei no projeto, assumi a frente de Product Design com o objetivo de olhar para além das funcionalidades e construir uma experiência que fosse clara, intuitiva e agradável de utilizar.",
        ]}
      >
        <PanelImage
          src={cursivaImagem1}
          alt="Visão geral das telas da Cursiva"
        />
      </CaseSection>

      <CaseSection
        title="O desafio"
        paragraphs={[
          "Projetar para professores trazia um desafio que ia além da própria complexidade do produto. A experiência precisava funcionar para pessoas com níveis muito diferentes de familiaridade com tecnologia e em dispositivos que também poderiam variar bastante.",
          "Enquanto alguns professores poderiam acessar a plataforma em computadores mais modernos e ter bastante facilidade com ferramentas digitais, outros poderiam utilizar equipamentos mais antigos ou menos potentes e ter pouca familiaridade com esse tipo de tecnologia. Por isso, a experiência precisava ser simples e compreensível sem depender de um dispositivo de alto desempenho ou de um usuário com grande conhecimento tecnológico.",
          "Meu desafio como designer foi encontrar esse equilíbrio: criar uma interface que orientasse quem tivesse pouca familiaridade com tecnologia, sem tornar a experiência limitada para quem já estivesse acostumado com ferramentas digitais.",
        ]}
      >
        <PanelImage
          src={cursivaImagem2}
          alt="Mapa de fluxos e telas da plataforma"
        />
      </CaseSection>

      <CaseSection
        title="Entendendo o mercado"
        paragraphs={[
          "Como ponto de partida, busquei referências em plataformas já existentes no mercado. Analisei diferentes sistemas utilizados no contexto educacional e observei como eles organizavam funcionalidades, fluxos e informações.",
          "Esse levantamento me ajudou a identificar padrões de interação e entender quais soluções poderiam ser aproveitadas, adaptadas ou repensadas para a Cursiva.",
        ]}
      >
        <PanelImage
          src={cursivaImagem3}
          alt="Referências de plataformas educacionais"
        />
      </CaseSection>

      <CaseSection
        title="Reconstruindo a experiência"
        paragraphs={[
          "Como a estrutura inicial do produto estava muito concentrada nos recursos que o sistema deveria oferecer, comecei fazendo um levantamento completo das telas necessárias para o funcionamento da plataforma. Registrei todas as telas do sistema e passei a analisá-las individualmente, questionando a organização das informações, a hierarquia dos elementos e a forma como o professor entenderia o que fazer em cada etapa.",
          "A partir dessa análise, comecei a reestruturar cada tela, levando em consideração não apenas o que o sistema precisava fazer, mas principalmente como o usuário iria realizar essas tarefas. Considerei o contexto de uso dos professores, a variedade de dispositivos que poderiam utilizar e os diferentes níveis de familiaridade com tecnologia, buscando criar uma experiência que fosse clara para quem precisasse de mais orientação e, ao mesmo tempo, eficiente para usuários mais experientes.",
          "Também trabalhei na consistência entre as diferentes partes da plataforma, fazendo com que as telas deixassem de parecer funcionalidades isoladas e passassem a funcionar como partes de uma mesma experiência.",
        ]}
      >
        <PanelImage
          src={cursivaImagem4}
          alt="Primeiras reestruturações de telas"
        />
        <PanelImage
          src={cursivaImagem5}
          alt="Revisão do onboarding e formulários"
        />
        <PanelImage
          src={cursivaImagem6}
          alt="Revisão das telas de provas"
        />
      </CaseSection>

      <CaseSection
        title="A solução"
        paragraphs={[
          "A solução final transformou a estrutura inicial do Cursiva em uma experiência mais organizada, coerente e acessível. Os recursos definidos no início do projeto foram mantidos, mas passaram a fazer parte de uma jornada pensada também a partir das necessidades de quem utilizaria o produto.",
          "A interface foi construída buscando equilibrar clareza e simplicidade, considerando tanto a variedade de dispositivos quanto os diferentes níveis de familiaridade tecnológica dos professores. O trabalho transformou uma estrutura inicialmente muito orientada aos recursos do sistema em uma proposta de produto que também considera as pessoas, os dispositivos e os diferentes contextos em que a plataforma poderia ser utilizada.",
          "Assumir a frente de Product Design em um projeto colaborativo me fez perceber que projetar vai muito além de criar telas. Muitas das decisões mais importantes estão em entender como as funcionalidades se conectam, o que o usuário precisa enxergar primeiro e como tornar uma solução complexa mais simples de compreender.",
          "O Cursiva foi uma experiência importante para mim por me permitir acompanhar de perto essa transformação e assumir a responsabilidade pela experiência de um produto desde sua estrutura até a interface.",
        ]}
      >
        <ScreenGrid items={SOLUTION_SCREENS} />
      </CaseSection>

      <NextProject
        to="/angeloni"
        name="Angeloni: em casa"
        thumb={miniaturaTelaInicialAngeloni}
      />
    </CaseShell>
  );
}