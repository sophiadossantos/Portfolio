
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
  ScreenGrid,
} from "@/components/site/CaseLayout";


import {
  ComparisonGallery,
  comparisonPair,
  type ComparisonNote,
  type GalleryItem,
} from "@/components/site/ImageGallery";

import { REFS } from "@/components/site/references";

import cursivaCapa from "@/assets/optimized/Cursiva/capa-large.webp";
import cursivaFigjam from "@/assets/optimized/Cursiva/figjam-large.webp";
import cursivaConcorrentes from "@/assets/optimized/Cursiva/concorrentes-large.webp";
import cursivaLandingPage from "@/assets/optimized/Cursiva/landing-page-large.webp";

import cursivaLoginAntes from "@/assets/optimized/Cursiva/login-antes-large.webp";
import cursivaLogin from "@/assets/optimized/Cursiva/login-large.webp";

import cursivaDadosPessoaisAntes from "@/assets/optimized/Cursiva/dados-pessoais-antes-large.webp";
import cursivaDadosPessoais from "@/assets/optimized/Cursiva/onboarding-dados-pessoais-large.webp";

import cursivaProvasAntes from "@/assets/optimized/Cursiva/provas-antes-large.webp";
import cursivaProvas from "@/assets/optimized/Cursiva/tela-de-provas-1-large.webp";

import telasCursivaImportarProva from "@/assets/optimized/Cursiva/importar-prova-large.webp";
import telasCursivaLogin from "@/assets/optimized/Cursiva/login-large.webp";
import telasCursivaOnboardingDadosPessoais from "@/assets/optimized/Cursiva/onboarding-dados-pessoais-large.webp";
import telasCursivaOnboardingEscola from "@/assets/optimized/Cursiva/onboarding-escola-large.webp";
import telasCursivaOnboardingIniciar from "@/assets/optimized/Cursiva/onboarding-iniciar-large.webp";
import telasCursivaOnboardingMaterias from "@/assets/optimized/Cursiva/onboarding-materias-large.webp";
import telasCursivaOnboardingModalidade from "@/assets/optimized/Cursiva/onboarding-modalidade-large.webp";
import telasCursivaOnboardingNivelDeEnsino from "@/assets/optimized/Cursiva/onboarding-nivel-de-ensino-large.webp";
import telasCursivaOnboardingPreparandoAmbiente from "@/assets/optimized/Cursiva/onboarding-preparando-ambiente-large.webp";
import telasCursivaTelaDeProvas from "@/assets/optimized/Cursiva/tela-de-provas-large.webp";
import telasCursivaTelaDeProvas2 from "@/assets/optimized/Cursiva/tela-de-provas-2-large.webp";
import telasCursivaTelaInicialAssistente from "@/assets/optimized/Cursiva/tela-inicial-assistente-large.webp";
import telasCursivaTelaInicialTour from "@/assets/optimized/Cursiva/tela-inicial-tour-large.webp";
import telasCursivaAnalisandoProva from "@/assets/optimized/Cursiva/analisando-prova-large.webp";

import capaAngeloniHome from "@/assets/optimized/Angeloni/capa-home-angeloni-large.webp";

export const Route = createFileRoute("/cursiva")({
  head: () => ({
    meta: [
      { title: "Cursiva · Estudo de caso · Sophia dos Santos" },
      {
        name: "description",
        content:
          "Como reestruturei a experiência de uma plataforma com IA para professores com níveis muito diferentes de familiaridade com tecnologia.",
      },
      { property: "og:title", content: "Cursiva · Estudo de caso · Sophia dos Santos" },
      {
        property: "og:description",
        content:
          "Como reestruturei a experiência de uma plataforma com IA para professores com níveis muito diferentes de familiaridade com tecnologia.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://sophiadossantos.com/cursiva" },
      { property: "og:image", content: "https://sophiadossantos.com/og-image.png" },
      { name: "twitter:image", content: "https://sophiadossantos.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://sophiadossantos.com/cursiva" }],
  }),
  component: CursivaCase,
});

const LANDING_SCREENS: GalleryItem[] = [
  {
    src: cursivaLandingPage,
    alt: "Landing page da Cursiva para professores",
    title: "Landing page",
    caption: "Página de apresentação do Cursiva para web",
    frame: "web",
    reasons: [
      {
        text: "A promessa e um único botão abrem a página, e a frase abaixo avisa que não é preciso cadastro.",
        ref: REFS.visualHierarchy,
        x: 7.5,
        y: 1.8,
        w: 46,
        h: 4.2,
      },
      {
        text: "As dores vêm nas palavras do professor, como passar horas corrigindo, antes de qualquer recurso.",
        ref: REFS.match,
        x: 7.5,
        y: 7.9,
        w: 85,
        h: 3.4,
      },
      {
        text: "Cinco perguntas rápidas geram uma prova de verdade, e o valor aparece antes de pedir uma conta.",
        ref: REFS.wizards,
        x: 9.5,
        y: 36.3,
        w: 83,
        h: 5,
      },
      {
        text: "Cada ferramenta vira um card com nome, frase curta e prévia da tela.",
        ref: REFS.chunking,
        x: 7.7,
        y: 42.5,
        w: 92.3,
        h: 7.7,
      },
      {
        text: "O plano Completo é o único cheio de cor, o que orienta a escolha sem esconder os outros.",
        ref: REFS.visualHierarchy,
        x: 8,
        y: 62.3,
        w: 84,
        h: 6.3,
      },
      {
        text: "Um depoimento de professora aparece logo depois dos preços, quando a pessoa está decidindo.",
        x: 14,
        y: 70.2,
        w: 72,
        h: 4.5,
      },
      {
        text: "As dúvidas ficam recolhidas, e cada pessoa abre só a pergunta que interessa.",
        ref: REFS.progressiveDisclosure,
        x: 7.5,
        y: 80.5,
        w: 85,
        h: 8,
      },
      {
        text: "A última seção repete a chamada para quem leu tudo e ainda não clicou.",
        x: 7.5,
        y: 90.2,
        w: 85,
        h: 3.2,
      },
    ],
  },
];

const SOLUTION_SCREENS: GalleryItem[] = [
  {
    src: telasCursivaLogin,
    alt: "Tela de login da Cursiva",
    reasons: [
      {
        text: "Um único cartão com poucos campos reduz o que precisa ser processado para entrar.",
        ref: REFS.minimalist,
        x: 55,
        y: 9,
        w: 41,
        h: 82,
      },
      {
        text: "A mensagem sobre o roxo usa texto branco e peso forte para continuar legível.",
        ref: REFS.contrast,
        x: 4,
        y: 68,
        w: 42,
        h: 22,
      },
    ],
  },
  {
    src: telasCursivaOnboardingIniciar,
    alt: "Onboarding: iniciar",
    reasons: [
      {
        text: "Seis palavras com ícone resumem a proposta e se escaneiam mais rápido que um parágrafo.",
        ref: REFS.scanning,
        x: 45,
        y: 43,
        w: 48,
        h: 16,
      },
      {
        text: "Avisar que leva menos de 2 minutos antecipa o esforço antes de o cadastro começar.",
        ref: REFS.status,
        x: 45,
        y: 72,
        w: 28,
        h: 6,
      },
    ],
  },
  {
    src: telasCursivaOnboardingDadosPessoais,
    alt: "Onboarding: dados pessoais",
    reasons: [
      {
        text: "A barra mostra em qual etapa o professor está e quantas faltam.",
        ref: REFS.wizards,
        x: 19,
        y: 15,
        w: 62,
        h: 6,
      },
      {
        text: "Os rótulos ficam fixos acima dos campos e seguem visíveis durante o preenchimento.",
        ref: REFS.labels,
        x: 19,
        y: 30,
        w: 62,
        h: 58,
      },
    ],
  },
  {
    src: telasCursivaOnboardingNivelDeEnsino,
    alt: "Onboarding: nível de ensino",
    reasons: [
      {
        text: "Escolher entre opções à vista pede reconhecer, sem precisar lembrar ou digitar.",
        ref: REFS.recognition,
        x: 19,
        y: 33,
        w: 62,
        h: 20,
      },
      {
        text: "O título faz uma pergunta direta, então a tarefa fica clara antes da ação.",
        ref: REFS.headings,
        x: 19,
        y: 22,
        w: 30,
        h: 9,
      },
    ],
  },
  {
    src: telasCursivaOnboardingMaterias,
    alt: "Onboarding: matérias",
    reasons: [
      {
        text: "A grade mostra todas as matérias de uma vez, sem escondê-las em uma lista suspensa.",
        ref: REFS.dropdowns,
        x: 19,
        y: 33,
        w: 62,
        h: 42,
      },
      {
        text: "O campo Outra matéria atende quem leciona algo fora da lista, sem travar o cadastro.",
        ref: REFS.flexibility,
        x: 19,
        y: 76,
        w: 62,
        h: 11,
      },
    ],
  },
  {
    src: telasCursivaOnboardingModalidade,
    alt: "Onboarding: modalidade",
    reasons: [
      {
        text: "Presencial, Híbrido e Remoto são os termos que o professor já usa no dia a dia.",
        ref: REFS.match,
        x: 19,
        y: 32,
        w: 62,
        h: 17,
      },
      {
        text: "A opção escolhida ganha uma borda em volta do cartão inteiro, fácil de perceber.",
        ref: REFS.nonTextContrast,
        x: 39,
        y: 32,
        w: 20,
        h: 17,
      },
    ],
  },
  {
    src: telasCursivaOnboardingEscola,
    alt: "Onboarding: escola",
    reasons: [
      {
        text: "O texto explica para que a escola será usada e responde à dúvida antes de ela surgir.",
        ref: REFS.help,
        x: 19,
        y: 22,
        w: 55,
        h: 8,
      },
      {
        text: "Iniciar minha jornada troca o rótulo do botão e sinaliza que esta é a última etapa.",
        ref: REFS.wizards,
        x: 34,
        y: 64,
        w: 31,
        h: 7,
      },
    ],
  },
  {
    src: telasCursivaOnboardingPreparandoAmbiente,
    alt: "Onboarding: preparando o ambiente",
    reasons: [
      {
        text: "A barra indica que o sistema segue trabalhando enquanto o ambiente é criado.",
        ref: REFS.progress,
        x: 7,
        y: 32,
        w: 24,
        h: 5,
      },
      {
        text: "A coruja humaniza a espera, um momento sem nenhuma tarefa para o professor.",
        ref: REFS.aesthetics,
        x: 59,
        y: 40,
        w: 29,
        h: 57,
      },
    ],
  },
  {
    src: telasCursivaTelaInicialTour,
    alt: "Tela inicial com tour guiado",
    reasons: [
      {
        text: "O tour pode ser pulado, então quem já conhece a plataforma não fica preso nele.",
        ref: REFS.control,
        x: 61,
        y: 63,
        w: 34,
        h: 30,
      },
      {
        text: "Três indicadores agrupam o trabalho do professor em um único olhar.",
        ref: REFS.chunking,
        x: 8,
        y: 28,
        w: 84,
        h: 16,
      },
    ],
  },
  {
    src: telasCursivaTelaInicialAssistente,
    alt: "Tela inicial com assistente",
    reasons: [
      {
        text: "A ajuda abre sobre a tela e não tira o professor da tarefa que estava fazendo.",
        ref: REFS.help,
        x: 60,
        y: 18,
        w: 35,
        h: 75,
      },
      {
        text: "Perguntas prontas dão exemplos do que pedir à IA, sem exigir que a pessoa invente um comando.",
        ref: REFS.recognition,
        x: 61,
        y: 52,
        w: 33,
        h: 15,
      },
    ],
  },
  {
    src: telasCursivaTelaDeProvas,
    alt: "Tela de provas",
    reasons: [
      {
        text: "Gerar prova é um botão cheio e Corrigir prova é contornado, o que define a ação principal.",
        ref: REFS.visualHierarchy,
        x: 7,
        y: 28,
        w: 34,
        h: 8,
      },
      {
        text: "As listas vazias explicam o estado atual em vez de mostrar um espaço em branco.",
        ref: REFS.emptyStates,
        x: 8,
        y: 47,
        w: 84,
        h: 37,
      },
    ],
  },
  {
    src: telasCursivaImportarProva,
    alt: "Tela de importar prova",
    reasons: [
      {
        text: "A área de envio diz o que fazer e aceita tanto PDF quanto fotos.",
        ref: REFS.labels,
        x: 8,
        y: 42,
        w: 84,
        h: 20,
      },
      {
        text: "Matéria e turma são escolhidas em listas, o que evita erros de digitação.",
        ref: REFS.errors,
        x: 8,
        y: 64,
        w: 84,
        h: 9,
      },
    ],
  },
  {
    src: telasCursivaTelaDeProvas2,
    alt: "Correção da prova de inglês",
    reasons: [
      {
        text: "Todos os cartões seguem a mesma estrutura, o que facilita comparar os alunos.",
        ref: REFS.consistency,
        x: 8,
        y: 46,
        w: 84,
        h: 40,
      },
      {
        text: "O status une cor e texto, então a informação não depende de enxergar vermelho ou verde.",
        ref: REFS.useOfColor,
        x: 26,
        y: 47,
        w: 66,
        h: 6,
      },
    ],
  },
  {
    src: telasCursivaAnalisandoProva,
    alt: "Análise de prova",
    reasons: [
      {
        text: "O título diz o que está acontecendo enquanto a IA lê o material.",
        ref: REFS.statusMessages,
        x: 7,
        y: 20,
        w: 35,
        h: 12,
      },
      {
        text: "Mostrar as questões conforme ficam prontas reduz a sensação de espera.",
        ref: REFS.responseTimes,
        x: 8,
        y: 41,
        w: 84,
        h: 18,
      },
    ],
  },
];

const META = [
  {
    label: "Meu papel",
    value: "Cuidei da experiência e da interface",
  },
  { label: "Equipe", value: "4 pessoas" },
  {
    label: "Duração",
    value: "Em andamento: desenvolvimento desde fevereiro de 2026, design desde maio de 2026",
  },
  { label: "Ferramentas", value: "Figma, FigJam" },
];

const MAP_DECISION = {
  title: "Mapear tudo antes de redesenhar",
  problem:
    "O produto tinha sido pensado funcionalidade por funcionalidade, e as telas pareciam partes isoladas.",
  decision:
    "Registrar todas as telas em um mapa de fluxos antes de mexer em qualquer interface.",
  why: "Só vendo a jornada inteira dava para criar padrões consistentes e entender o que o professor precisa ver primeiro.",
  ref: REFS.consistency,
};

const LIGHT_INTERFACE_DECISION = {
  title: "Interface leve por padrão",
  problem:
    "Em conversas com professores, vimos que parte deles usa computadores antigos, e elementos visuais pesados prejudicariam a experiência.",
  decision:
    "Priorizar layouts limpos, com poucas animações e imagens, concentrar a identidade visual em cor e tipografia e conferir as telas em um computador antigo.",
  why: "A interface precisava carregar bem e ser clara em qualquer dispositivo, sem perder a identidade da marca.",
  ref: REFS.minimalist,
};

const GUIDANCE_DECISION = {
  title: "Orientação que aparece só quando é necessária",
  problem:
    "Guiar iniciantes com textos e avisos fixos deixaria a experiência pesada para quem já sabe usar.",
  decision:
    "Criar um onboarding em etapas, um tour guiado na tela inicial e um assistente disponível quando o professor precisar.",
  why: "Quem precisa de ajuda encontra, e quem não precisa não é interrompido.",
  ref: REFS.progressiveDisclosure,
};

const UPLOAD_DIFFICULTY = {
  title: "Enviar as provas sem trocar o aluno",
  context:
    "A correção depende de o professor anexar fotos das provas. É o passo com mais chance de erro: foto escura ou torta, página fora de ordem e uma turma inteira para enviar.",
  options:
    "Subir a turma inteira de uma vez, mas o envio ficava pesado em internet e computador fracos, sem mostrar o progresso, e uma foto ruim se perdia no meio. Escolher o aluno à mão em cada foto, lento demais para uma turma de 30. Aceitar só arquivos, o que obrigava a tirar a foto, passar para o computador e subir.",
  decision:
    "O professor sobe ou fotografa as provas e o Cursiva identifica o aluno pelo código impresso na prova. Quando a prova não foi gerada na plataforma, a identificação é pelo nome, e o professor revisa. Antes do envio há uma prévia, e a plataforma avisa quando a foto está ilegível. A ideia veio de professores próximos do time: propus o fluxo, debatemos e validamos com eles.",
  tradeoff:
    "O fluxo ficou mais complexo de construir. Ler o código ou o nome e detectar uma foto ilegível exigiu bem mais do desenvolvimento do que um upload simples.",
  mobile:
    "No celular, o botão já abre a câmera, as ações têm áreas de toque maiores e o envio é dividido em etapas menores.",
  ref: REFS.errors,
};

const SIGNUP_DIFFICULTY = {
  title: "Um cadastro curto que também servisse ao pagamento",
  context:
    "Eu queria um cadastro curto, para o professor chegar rápido à primeira prova. Essa decisão foi questionada: o desenvolvimento precisava de alguns dados já no cadastro para a etapa de pagamento.",
  decision: "Os campos necessários para o pagamento voltaram ao cadastro.",
  tradeoff: "O cadastro ficou mais longo do que eu queria.",
};

const AI_LIMITS_DECISION = {
  title: "Os limites da IA na interface",
  problem:
    "A IA leva um tempo para gerar ou corrigir uma prova e, às vezes, não consegue ler uma foto ou chegar ao resultado esperado.",
  decision:
    "Tudo o que a IA gera ou corrige pode ser revisado e editado pelo professor, há telas de espera enquanto ela processa e mensagens claras quando algo dá errado.",
  why: "O professor continua no controle do resultado e sempre sabe o que está acontecendo.",
  ref: REFS.status,
};

const METRICS = [
  {
    status: "real" as const,
    name: "Dúvidas de uso no suporte",
    value: "0",
    detail: "em mais de três meses com professores usando a plataforma.",
    why: "Mostra se a interface se explica sozinha.",
  },
  {
    status: "alvo" as const,
    name: "Fluxos de correção concluídos",
    detail: "Quantos fluxos iniciados chegam ao fim, do envio das fotos até receber a correção.",
    why: "A correção é a função principal da plataforma.",
  },
  {
    status: "alvo" as const,
    name: "Fotos enviadas de novo",
    detail: "Quantos envios precisam ser refeitos por foto ilegível ou página faltando.",
    why: "O envio das fotos foi o ponto mais debatido do fluxo.",
  },
  {
    status: "alvo" as const,
    name: "Tempo até a primeira prova",
    detail: "Quanto tempo leva, no primeiro acesso, do cadastro à primeira prova gerada.",
    why: "Mede a curva de aprendizado de quem tem pouca familiaridade digital.",
  },
];

// Posição dos marcadores em % sobre a imagem "Depois".
const LOGIN_NOTES: ComparisonNote[] = [
  {
    x: 90,
    y: 14,
    text: "A divisão meio a meio saiu, e o formulário virou o único bloco em primeiro plano.",
    area: [55, 9, 41, 82],
    ref: REFS.visualHierarchy,
  },
  {
    x: 19,
    y: 28,
    text: "A ilustração saiu para deixar o login mais leve e focado no formulário, e ficou para a tela de preparo do ambiente.",
    area: [0, 0, 42, 100],
  },
  {
    x: 88,
    y: 83,
    text: "O rodapé do cartão ficou com um único convite: criar conta.",
    area: [60, 78, 30, 9],
    ref: REFS.minimalist,
  },
];

const PERSONAL_DATA_NOTES: ComparisonNote[] = [
  {
    x: 81,
    y: 18,
    text: "O fluxo perdeu as etapas Endereço e Plano e ficou mais curto.",
    area: [19, 15, 62, 6],
  },
  {
    x: 78,
    y: 30,
    text: "Saiu o cartão cinza em volta dos campos, o que reduz uma camada visual.",
    area: [19, 22, 62, 67],
  },
  {
    x: 29,
    y: 13,
    text: "Voltar substituiu Sair no topo, o que evita abandonar o cadastro por engano.",
    area: [19, 10, 11, 6],
    ref: REFS.control,
  },
];

const EXAMS_NOTES: ComparisonNote[] = [
  {
    x: 43,
    y: 32,
    text: "A correção ficava escondida em um carrossel de três rotas, e agora gerar e corrigir são dois botões sempre visíveis.",
    area: [7, 28, 34, 8],
    ref: REFS.carousels,
  },
  {
    x: 28,
    y: 46,
    text: "Busca e filtro entraram para quem acumula muitas provas.",
    area: [8, 43, 84, 14],
    ref: REFS.flexibility,
  },
  {
    x: 60,
    y: 64,
    text: "Ir para correção aparece só na prova que pede essa ação.",
    area: [8, 58, 84, 18],
  },
];

const COMPARISON_PAIRS = [
  comparisonPair({
    label: "Login",
    before: cursivaLoginAntes,
    after: cursivaLogin,
    beforeAlt: "Tela de login da versão anterior",
    afterAlt: "Tela de login reconstruída",
    frame: "web",
    notes: LOGIN_NOTES,
  }),
  comparisonPair({
    label: "Dados pessoais",
    before: cursivaDadosPessoaisAntes,
    after: cursivaDadosPessoais,
    beforeAlt: "Tela de dados pessoais da versão anterior",
    afterAlt: "Tela de dados pessoais reconstruída",
    frame: "web",
    notes: PERSONAL_DATA_NOTES,
  }),
  comparisonPair({
    label: "Provas",
    before: cursivaProvasAntes,
    after: cursivaProvas,
    beforeAlt: "Tela de provas da versão anterior",
    afterAlt: "Tela de provas reconstruída",
    frame: "web",
    notes: EXAMS_NOTES,
  }),
];

function CursivaCase() {
  return (
    <CaseShell>
      <CaseHero
        title="Cursiva"
        subtitle="Uma plataforma com IA criada para simplificar a rotina de professores."
        tags={["Projeto colaborativo · 2026", "Product Design", "UX/UI", "Web"]}
        meta={META}
      />

      <CaseSection
        title="Visão geral"
        highlight="Entrei em um produto que já sabia o que fazer. Meu trabalho foi definir como as pessoas fariam."
        paragraphs={[
          "O Cursiva nasceu como um projeto colaborativo para usar tecnologia e IA na redução de tarefas repetitivas da rotina de professores. Quando entrei, o foco estava nos recursos que a plataforma deveria oferecer. Fiquei responsável pela experiência e pela interface, para transformar essa lista de funcionalidades em uma experiência clara, intuitiva e agradável de usar.",
        ]}
      >
        <PanelImage
          src={cursivaCapa}
          priority
          alt="Visão geral das telas da Cursiva"
        />
      </CaseSection>

      <CaseSection
        title="O desafio"
        highlight="A mesma interface precisava guiar quem tem pouca familiaridade com tecnologia sem limitar quem já é experiente."
        paragraphs={[
          "Professores acessam a plataforma com níveis muito diferentes de familiaridade digital e em dispositivos que variam de computadores modernos a equipamentos antigos e pouco potentes. A experiência precisava ser compreensível sem depender de um usuário experiente ou de um dispositivo de alto desempenho.",
        ]}
      >
        <DecisionCards decision={LIGHT_INTERFACE_DECISION} />
      </CaseSection>

      <CaseSection
        title="Entendendo o mercado"
        paragraphs={[
          "Analisei plataformas educacionais existentes para entender como organizavam funcionalidades, fluxos e informações. Esse levantamento me ajudou a separar o que valia reaproveitar, adaptar ou repensar.",
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
          "Comecei mapeando todas as telas do sistema e analisando cada uma individualmente: organização das informações, hierarquia dos elementos e se o professor entenderia o que fazer em cada etapa. A partir disso, reestruturei as telas pensando menos no que o sistema faz e mais em como o usuário realiza cada tarefa.",
        ]}
      >
        <DecisionCards decision={MAP_DECISION} />

        <PanelImage
          src={cursivaFigjam}
          alt="Mapa de fluxos e telas da plataforma"
        />
      </CaseSection>

      <CaseSection title="Antes e depois">
        <Panel>
          <ComparisonGallery pairs={COMPARISON_PAIRS} />
        </Panel>
      </CaseSection>

      <CaseSection
        title="A solução"
        paragraphs={[
          "Os recursos definidos no início foram mantidos, mas passaram a fazer parte de uma jornada pensada a partir de quem usa o produto: um onboarding que prepara o ambiente do professor, uma tela inicial com tour e assistente e fluxos de provas consistentes entre si.",
        ]}
      >
        <DecisionCards decision={GUIDANCE_DECISION} />

        <ScreenGrid items={SOLUTION_SCREENS} />
      </CaseSection>

      <CaseSection
        title="A landing page"
        paragraphs={[
          "Além da plataforma, desenhei a página que apresenta o Cursiva a novos professores. Ela fala primeiro da rotina de quem ensina, mostra o produto em uso e deixa gerar uma prova antes de criar uma conta.",
        ]}
      >
        <ScreenGrid items={LANDING_SCREENS} />
      </CaseSection>

      <CaseSection
        title="Dificuldades e decisões"
        paragraphs={[
          "O projeto tinha quatro restrições ao mesmo tempo: professores com níveis muito diferentes de familiaridade digital, computadores antigos nas escolas, um time de quatro pessoas com o desenvolvimento já em andamento quando o design entrou e os limites da própria IA.",
          "Como venho da engenharia, desenhei pensando nos componentes que já existiam e conversando com o desenvolvimento na mesma língua, o que encurtou muitas dessas decisões.",
        ]}
      >
        <DifficultyBlock difficulty={UPLOAD_DIFFICULTY} />
        <DifficultyBlock difficulty={SIGNUP_DIFFICULTY} />
        <DecisionCards decision={AI_LIMITS_DECISION} />
      </CaseSection>

      <CaseSection
        title="Como medir o impacto"
        paragraphs={[
          "O Cursiva está com professores há mais de três meses, com um primeiro grupo de até 20 professores, e já tem clientes. Nesse período, nenhuma dúvida sobre como usar a plataforma chegou ao time: o que chegou foram problemas técnicos pontuais ao gerar provas e pedidos de novas funcionalidades.",
          "Os professores contam que a plataforma é fácil de usar, que conseguem usar sem pedir ajuda, que a correção ficou mais rápida e que o visual novo deixou tudo mais organizado.",
          "Ainda não há dados de uso medidos, então estas são as métricas que queremos acompanhar no fluxo principal. Elas mostram o que medir, não resultados.",
        ]}
      >
        <MetricCards metrics={METRICS} />
      </CaseSection>

      <CaseSection
        title="O que aprendi"
        paragraphs={[
          "Cuidar da experiência e da interface em um projeto colaborativo me mostrou que muitas das decisões mais importantes não estão na tela, e sim em entender como as funcionalidades se conectam e no que o usuário precisa enxergar primeiro.",
        ]}
      />

      <NextProject to="/angeloni" name="Angeloni: em casa" thumb={capaAngeloniHome} />
    </CaseShell>
  );
}
