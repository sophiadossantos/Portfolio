export type DesignReference = { label: string; summary: string; href: string };

const nng = (label: string, slug: string, summary: string): DesignReference => ({
  label: `Nielsen Norman Group: ${label}`,
  summary,
  href: `https://www.nngroup.com/articles/${slug}/`,
});

const wcag = (label: string, slug: string, summary: string): DesignReference => ({
  label: `WCAG 2.2: ${label}`,
  summary,
  href: `https://www.w3.org/WAI/WCAG22/Understanding/${slug}.html`,
});

/** Fontes externas citadas nos estudos de caso. Use apenas fontes oficiais de design. */
export const REFS = {
  // Heurísticas de Nielsen
  status: nng(
    "visibilidade do status do sistema",
    "visibility-system-status",
    "O sistema deve manter as pessoas informadas sobre o que está acontecendo, com retorno adequado e em tempo razoável.",
  ),
  match: nng(
    "correspondência com o mundo real",
    "match-system-real-world",
    "A interface deve falar a língua de quem usa, com palavras e conceitos familiares, e não termos internos do sistema.",
  ),
  control: nng(
    "controle e liberdade do usuário",
    "user-control-and-freedom",
    "As pessoas erram e mudam de ideia, por isso precisam de saídas claras, como cancelar, voltar ou pular.",
  ),
  consistency: nng(
    "consistência e padrões",
    "consistency-and-standards",
    "Elementos iguais devem ter a mesma aparência e funcionar do mesmo jeito, dentro do produto e nas convenções do mercado.",
  ),
  errors: nng(
    "prevenção de erros",
    "slips",
    "Melhor que boas mensagens de erro é evitar o erro, com restrições, valores padrão úteis e confirmações.",
  ),
  recognition: nng(
    "reconhecer em vez de lembrar",
    "recognition-and-recall",
    "Mostrar opções reduz a carga de memória: é mais fácil reconhecer algo do que lembrar dele.",
  ),
  flexibility: nng(
    "flexibilidade e eficiência de uso",
    "flexibility-efficiency-heuristic",
    "Atalhos e personalização aceleram quem já conhece o sistema, sem atrapalhar quem está começando.",
  ),
  minimalist: nng(
    "design estético e minimalista",
    "aesthetic-minimalist-design",
    "Cada informação extra compete com as relevantes. A interface deve trazer só o que apoia a tarefa.",
  ),
  help: nng(
    "ajuda e documentação",
    "help-and-documentation",
    "O ideal é não precisar de explicação, mas a ajuda, quando necessária, deve ser fácil de achar e focada na tarefa.",
  ),

  // Outros guias da Nielsen Norman Group
  progressiveDisclosure: nng(
    "revelação progressiva",
    "progressive-disclosure",
    "Mostrar primeiro o essencial e deixar o restante para quando for pedido reduz a complexidade percebida.",
  ),
  wizards: nng(
    "fluxos em etapas",
    "wizards",
    "Dividir uma tarefa longa em etapas sequenciais facilita a conclusão, desde que o progresso fique visível.",
  ),
  visualHierarchy: nng(
    "hierarquia visual",
    "visual-hierarchy-ux-definition",
    "Tamanho, cor, contraste e posição guiam o olhar e indicam o que é mais importante na tela.",
  ),
  emptyStates: nng(
    "estados vazios",
    "empty-state-interface-design",
    "Estados vazios devem explicar o que está acontecendo e orientar o próximo passo, em vez de mostrar uma tela em branco.",
  ),
  progress: nng(
    "indicadores de progresso",
    "progress-indicators",
    "Indicadores de progresso tranquilizam durante a espera e mostram que o sistema segue funcionando.",
  ),
  touchTarget: nng(
    "tamanho de áreas de toque",
    "touch-target-size",
    "Alvos de toque precisam ser grandes e ter espaço ao redor para evitar erros, principalmente no celular.",
  ),
  proximity: nng(
    "princípio de proximidade",
    "gestalt-proximity",
    "Elementos próximos são percebidos como um grupo, por isso o espaço ajuda a organizar a informação.",
  ),
  chunking: nng(
    "agrupamento de informação",
    "chunking",
    "Dividir o conteúdo em blocos pequenos e relacionados facilita escanear e entender.",
  ),
  forms: nng(
    "formulários na web",
    "web-form-design",
    "Bons formulários têm poucos campos, uma coluna e rótulos claros.",
  ),
  scanning: nng(
    "como as pessoas leem na web",
    "how-users-read-on-the-web",
    "Na web, as pessoas escaneiam mais do que leem. Textos curtos e estrutura clara ajudam.",
  ),
  dropdowns: nng(
    "menus suspensos",
    "drop-down-menus",
    "Menus suspensos escondem opções. Quando há espaço, mostrá-las diretamente facilita a escolha.",
  ),
  aesthetics: nng(
    "efeito estética e usabilidade",
    "aesthetic-usability-effect",
    "Interfaces agradáveis são percebidas como mais fáceis de usar, o que aumenta a tolerância a pequenos problemas.",
  ),
  responseTimes: nng(
    "tempos de resposta",
    "response-times-3-important-limits",
    "Até 1 segundo mantém o fluxo de pensamento. Perto de 10 segundos a atenção se perde, e a pessoa precisa de retorno.",
  ),
  icons: nng(
    "usabilidade de ícones",
    "icon-usability",
    "Poucos ícones são universais. Um rótulo em texto deixa o significado claro.",
  ),
  carousels: nng(
    "carrosséis",
    "designing-effective-carousels",
    "Carrosséis escondem conteúdo, e muitas pessoas não passam dos primeiros itens.",
  ),

  // WCAG 2.2
  contrast: wcag(
    "1.4.3 contraste mínimo",
    "contrast-minimum",
    "Texto comum precisa de contraste mínimo de 4,5:1 com o fundo, e texto grande de 3:1.",
  ),
  useOfColor: wcag(
    "1.4.1 uso de cor",
    "use-of-color",
    "A cor não pode ser o único meio de transmitir uma informação, indicar uma ação ou diferenciar elementos.",
  ),
  nonTextContrast: wcag(
    "1.4.11 contraste de elementos",
    "non-text-contrast",
    "Componentes de interface e gráficos precisam de contraste mínimo de 3:1 com as cores adjacentes.",
  ),
  targetSize: wcag(
    "2.5.8 tamanho do alvo",
    "target-size-minimum",
    "Alvos de toque ou clique devem ter pelo menos 24 por 24 pixels CSS, com algumas exceções.",
  ),
  labels: wcag(
    "3.3.2 rótulos ou instruções",
    "labels-or-instructions",
    "Campos que pedem dados precisam de rótulos ou instruções que expliquem o que preencher.",
  ),
  headings: wcag(
    "2.4.6 títulos e rótulos",
    "headings-and-labels",
    "Títulos e rótulos devem descrever o tema ou a finalidade do conteúdo.",
  ),
  statusMessages: wcag(
    "4.1.3 mensagens de status",
    "status-messages",
    "Mensagens de status devem ser anunciadas por tecnologias assistivas sem precisar mover o foco.",
  ),
  redundantEntry: wcag(
    "3.3.7 entrada redundante",
    "redundant-entry",
    "Informações já fornecidas no mesmo processo devem ser reaproveitadas, sem pedir que a pessoa as digite de novo.",
  ),
  reflow: wcag(
    "1.4.10 refluxo",
    "reflow",
    "O conteúdo deve se adaptar a telas estreitas, de 320 pixels, sem exigir rolagem nas duas direções.",
  ),

  // Apple
  tabBars: {
    label: "Apple Human Interface Guidelines: barras de abas",
    summary:
      "Barras de abas dão acesso às seções principais do app e ficam sempre visíveis na parte inferior da tela.",
    href: "https://developer.apple.com/design/human-interface-guidelines/tab-bars",
  },
} satisfies Record<string, DesignReference>;
