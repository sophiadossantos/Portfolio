
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

import cursivaCapa from "@/assets/Cursiva/Capa.png";
import cursivaFigjam from "@/assets/Cursiva/Figjam.png";
import cursivaConcorrentes from "@/assets/Cursiva/Concorrentes.png";

import cursivaLoginAntes from "@/assets/Cursiva/Login - antes.png";
import cursivaLogin from "@/assets/Cursiva/Login.png";

import cursivaDadosPessoaisAntes from "@/assets/Cursiva/Dados pessoais - antes.png";
import cursivaDadosPessoais from "@/assets/Cursiva/Onboarding - Dados pessoais.png";

import cursivaProvasAntes from "@/assets/Cursiva/Provas - antes.png";
import cursivaProvas from "@/assets/Cursiva/Tela de provas-1.png";

import telasCursivaImportarProva from "@/assets/Cursiva/Importar prova.png";
import telasCursivaLogin from "@/assets/Cursiva/Login.png";
import telasCursivaOnboardingDadosPessoais from "@/assets/Cursiva/Onboarding - Dados pessoais.png";
import telasCursivaOnboardingEscola from "@/assets/Cursiva/Onboarding - Escola.png";
import telasCursivaOnboardingIniciar from "@/assets/Cursiva/Onboarding - Iniciar.png";
import telasCursivaOnboardingMaterias from "@/assets/Cursiva/Onboarding - Matérias.png";
import telasCursivaOnboardingModalidade from "@/assets/Cursiva/Onboarding - Modalidade.png";
import telasCursivaOnboardingNivelDeEnsino from "@/assets/Cursiva/Onboarding - Nível de ensino.png";
import telasCursivaOnboardingPreparandoAmbiente from "@/assets/Cursiva/Onboarding - Preparando ambiente.png";
import telasCursivaTelaDeProvas from "@/assets/Cursiva/Tela de provas.png";
import telasCursivaTelaDeProvas2 from "@/assets/Cursiva/Tela de provas-2.png";
import telasCursivaTelaInicialAssistente from "@/assets/Cursiva/Tela inicial - Assistente.png";
import telasCursivaTelaInicialTour from "@/assets/Cursiva/Tela inicial - Tour.png";
import telasCursivaAnalisandoProva from "@/assets/Cursiva/Analisando prova.png";

import capaBookingHome from "@/assets/Booking/Capa - home booking.png";

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
  {
    src: telasCursivaLogin,
    alt: "Tela de login da Cursiva",
  },
  {
    src: telasCursivaOnboardingIniciar,
    alt: "Onboarding: iniciar",
  },
  {
    src: telasCursivaOnboardingDadosPessoais,
    alt: "Onboarding: dados pessoais",
  },
  {
    src: telasCursivaOnboardingNivelDeEnsino,
    alt: "Onboarding: nível de ensino",
  },
  {
    src: telasCursivaOnboardingMaterias,
    alt: "Onboarding: matérias",
  },
  {
    src: telasCursivaOnboardingModalidade,
    alt: "Onboarding: modalidade",
  },
  {
    src: telasCursivaOnboardingEscola,
    alt: "Onboarding: escola",
  },
  {
    src: telasCursivaOnboardingPreparandoAmbiente,
    alt: "Onboarding: preparando o ambiente",
  },
  {
    src: telasCursivaTelaInicialTour,
    alt: "Tela inicial com tour guiado",
  },
  {
    src: telasCursivaTelaInicialAssistente,
    alt: "Tela inicial com assistente",
  },
  {
    src: telasCursivaTelaDeProvas,
    alt: "Tela de provas",
  },
  {
    src: telasCursivaImportarProva,
    alt: "Tela de importar prova",
  },
  {
    src: telasCursivaTelaDeProvas2,
    alt: "Histórico de provas",
  },
  {
    src: telasCursivaAnalisandoProva,
    alt: "Análise de prova",
  },
];

function ComparisonPanel({
  left,
  right,
  leftAlt,
  rightAlt,
}: {
  left: string;
  right: string;
  leftAlt: string;
  rightAlt: string;
}) {
  return (
    <Panel>
      <ImageGallery
        variant="comparison"
        items={[
          {
            src: left,
            alt: leftAlt,
            title: "Antes",
            caption: leftAlt,
          },
          {
            src: right,
            alt: rightAlt,
            title: "Depois",
            caption: rightAlt,
          },
        ]}
      />
    </Panel>
  );
}

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
          src={cursivaCapa}
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
          src={cursivaFigjam}
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
          src={cursivaConcorrentes}
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
        <ComparisonPanel
          left={cursivaLoginAntes}
          right={cursivaLogin}
          leftAlt="Tela de login da versão anterior"
          rightAlt="Tela de login reconstruída"
        />

        <ComparisonPanel
          left={cursivaDadosPessoaisAntes}
          right={cursivaDadosPessoais}
          leftAlt="Tela de dados pessoais da versão anterior"
          rightAlt="Tela de dados pessoais reconstruída"
        />

        <ComparisonPanel
          left={cursivaProvasAntes}
          right={cursivaProvas}
          leftAlt="Tela de provas da versão anterior"
          rightAlt="Tela de provas reconstruída"
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
        to="/booking"
        name="Booking.com"
        thumb={capaBookingHome}
      />
    </CaseShell>
  );
}
