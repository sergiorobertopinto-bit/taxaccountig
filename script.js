const money = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

const percent = new Intl.NumberFormat("pt-BR", {
  style: "percent",
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

const STORAGE_KEY = "sumaumaRelatoriosV2";
const TEAM_KEY = "sumaumaEquipeAtual";
const TEACHER_CODE = "ufma2026";

const caseImages = [
  "linear-gradient(135deg, rgba(28, 67, 55, .18), rgba(132, 75, 42, .20)), url('assets/case-1-jucara.png')",
  "linear-gradient(135deg, rgba(23, 84, 91, .18), rgba(188, 139, 80, .18)), url('assets/case-2-redes.png')",
  "linear-gradient(135deg, rgba(68, 41, 86, .18), rgba(174, 70, 51, .16)), url('assets/case-3-bumba.png')",
  "linear-gradient(135deg, rgba(85, 55, 37, .18), rgba(183, 80, 63, .18)), url('assets/case-4-restaurante.png')",
  "linear-gradient(135deg, rgba(42, 77, 79, .20), rgba(127, 78, 55, .16)), url('assets/case-5-tiquira.png')",
  "linear-gradient(135deg, rgba(33, 72, 98, .20), rgba(65, 105, 82, .16)), url('assets/case-6-consultoria.png')",
  "linear-gradient(135deg, rgba(21, 93, 95, .18), rgba(205, 150, 62, .16)), url('assets/case-7-mercado.png')",
  "linear-gradient(135deg, rgba(87, 39, 41, .24), rgba(35, 48, 54, .22)), url('assets/case-8-fiscalizacao.png')",
];

const caseVideoFiles = [
  "assets/videos/case-1.mp4",
  "assets/videos/case-2.mp4",
  "assets/videos/case-3.mp4",
  "assets/videos/case-4.mp4",
  "assets/videos/case-5.mp4",
  "assets/videos/case-6.mp4",
  "assets/videos/case-7.mp4",
  "assets/videos/case-8.mp4",
];

const caseGifFiles = [
  "assets/videos/case-1.gif",
  "assets/videos/case-2.gif",
  "assets/videos/case-3.gif",
  "assets/videos/case-4.gif",
  "assets/videos/case-5.gif",
  "assets/videos/case-6.gif",
  "assets/videos/case-7.gif",
  "assets/videos/case-8.gif",
];

const cases = [
  {
    title: "A Juçara que virou assinatura mensal",
    place: "Praia Grande, São Luís",
    difficulty: "Nível 1 - MEI/ME e Simples Nacional",
    badge: "Simples",
    character: "Dona Creuza da Praia Grande",
    initials: "DC",
    line: "Meu filho, a juçara tá saindo mais que fofoca em fila de cartório. Só não quero pagar tributo como se fosse mineradora.",
    talks: [
      "Eu vendo no balcão, no aplicativo e para dois cafés do Centro Histórico.",
      "Tenho nota das compras, mas meu sobrinho quer misturar tudo no PIX dele. Eu disse: sai pra lá, menino!",
      "Quero crescer sem susto e sem visita surpresa de fiscal.",
    ],
    story:
      "Uma microempresa vende juçara, farinha e combos por aplicativo. O faturamento ainda é pequeno, a margem é boa e a rotina fiscal precisa ser simples para não virar novela.",
    data: {
      receita: 180000,
      custos: 72000,
      folha: 24000,
      setor: "Comércio de alimentos",
      margem: 0.47,
      riscoBase: 18,
    },
    options: [
      ["simples", "Enquadrar no Simples Nacional e organizar emissão de notas", "Baixa complexidade e obrigação mensal concentrada."],
      ["presumido", "Migrar para Lucro Presumido imediatamente", "Troca de regime com maior formalização de apurações."],
      ["ignore", "Postergar emissão de notas das vendas por aplicativo", "Decisão voltada ao caixa imediato e regularização posterior."],
    ],
    answer: "simples",
    feedback: {
      simples:
        "Boa escolha. Para esse porte e rotina, o Simples reduz complexidade e mantém o caixa previsível. A economia vem da escolha lícita do regime e da organização das notas.",
      presumido:
        "A decisão aumenta a complexidade sem ganho proporcional. A carga estimada fica maior e a empresária perde tempo com rotinas que ainda não fazem sentido para o porte atual.",
      ignore:
        "Erro perigoso. Receita sem documento fiscal derruba a conformidade e pode gerar multa, cobrança retroativa e fiscalização. Planejamento lícito não é esconder receita.",
    },
  },
  {
    title: "Casa das Redes de Barreirinhas",
    place: "Barreirinhas",
    difficulty: "Nível 2 - ME com estoque e ICMS",
    badge: "Simples",
    character: "Seu Ribamar das Redes",
    initials: "SR",
    line: "Rapaz, vendi rede pra turista, pousada e influenciador. Quero crescer, mas sem o fisco bater tambor na minha porta.",
    talks: [
      "O estoque entra e sai ligeiro na temporada dos Lençóis.",
      "Tenho fornecedor com nota e outro que diz que 'nota é detalhe'. Isso me deu foi coceira.",
      "Se o controle de estoque ficar redondo, eu durmo mais tranquilo.",
    ],
    story:
      "Uma loja de redes e artesanato ampliou vendas no turismo. Tem estoque, compras com notas e faturamento ainda dentro de microempresa.",
    data: {
      receita: 420000,
      custos: 252000,
      folha: 48000,
      setor: "Comércio varejista",
      margem: 0.29,
      riscoBase: 24,
    },
    options: [
      ["simples", "Permanecer no Simples e implantar controle de estoque", "Regime simplificado com reforço nos documentos de compras e vendas."],
      ["real", "Migrar para Lucro Real para aproveitar controles de compra", "Apuração por lucro efetivo e créditos, com maior exigência operacional."],
      ["stock", "Priorizar fornecedores com menor preço, mesmo sem documentação completa", "Estratégia de redução de custo de aquisição."],
    ],
    answer: "simples",
    feedback: {
      simples:
        "Boa decisão. O Simples ainda preserva simplicidade e o controle de estoque reduz risco de divergência entre mercadoria comprada e vendida.",
      real:
        "O Lucro Real pode ser ótimo quando há margem apertada e créditos relevantes, mas aqui a empresa ainda não tem estrutura para suportar a apuração mais complexa.",
      stock:
        "Comprar sem nota compromete estoque, crédito, custo e defesa fiscal. A economia aparente vira risco de autuação e perda de reputação do escritório.",
    },
  },
  {
    title: "Bumba Meu Boi Produções Ltda.",
    place: "São José de Ribamar",
    difficulty: "Nível 3 - Serviços e Lucro Presumido",
    badge: "Presumido",
    character: "Jaciara Matraca",
    initials: "JM",
    line: "Meu bem, o boi dança, o cachê entra e a planilha precisa acompanhar no ritmo certo.",
    talks: [
      "A receita vem de contratos de apresentação, oficina e produção de evento.",
      "Custo tem, mas a margem costuma ficar alta quando a agenda fecha.",
      "Eu quero pagar direito, mas sem transformar matraca em máquina de imposto.",
    ],
    story:
      "Uma produtora cultural presta serviços para eventos, tem margem alta, poucos custos dedutíveis e receita anual já passou do conforto do Simples.",
    data: {
      receita: 950000,
      custos: 210000,
      folha: 130000,
      setor: "Prestação de serviços",
      margem: 0.64,
      riscoBase: 32,
    },
    options: [
      ["presumido", "Optar pelo Lucro Presumido com calendário fiscal definido", "Apuração por presunção e rotinas periódicas de recolhimento."],
      ["simples", "Manter a lógica do Simples enquanto a agenda cresce", "Regime conhecido pela equipe, com apuração concentrada."],
      ["real", "Escolher Lucro Real e apurar pelo lucro efetivo", "Modelo completo, com escrituração e conciliações mais exigentes."],
    ],
    answer: "presumido",
    feedback: {
      presumido:
        "Excelente. Com margem real acima da margem presumida, o Lucro Presumido tende a reduzir a carga sobre renda, desde que as obrigações sejam cumpridas no prazo.",
      simples:
        "O enquadramento precisa respeitar limites e anexos. Forçar permanência pode gerar diferença de tributo, juros e multa.",
      real:
        "O Lucro Real exige escrituração e conciliações fortes. Com margem alta e poucos custos dedutíveis, a carga estimada supera a alternativa presumida.",
    },
  },
  {
    title: "Restaurante Panelada Cósmica",
    place: "Mercado das Tulhas, São Luís",
    difficulty: "Nível 4 - Margem apertada e risco operacional",
    badge: "Comparação",
    character: "Neto do Mercado das Tulhas",
    initials: "NM",
    line: "Doutor, aqui tem prato feito, delivery, música ao vivo e um garçom que acha que cupom fiscal é guardanapo.",
    talks: [
      "O delivery cresceu, mas o caixa fecha fazendo careta.",
      "Tem insumo subindo, folha pesando e cupom fiscal precisando de treinamento.",
      "Se a equipe errar documento, a margem vira fumaça.",
    ],
    story:
      "Restaurante com receita crescente, custo alto de insumos, folha relevante e erros recorrentes em emissão de documentos fiscais.",
    data: {
      receita: 1280000,
      custos: 820000,
      folha: 210000,
      setor: "Restaurante",
      margem: 0.2,
      riscoBase: 48,
    },
    options: [
      ["simples", "Simples com saneamento fiscal e treinamento da equipe", "Regime simplificado somado à correção dos processos de caixa."],
      ["presumido", "Lucro Presumido com a rotina atual de emissão", "Troca de regime mantendo os processos operacionais como estão."],
      ["ignore", "Tratar parte do delivery como controle interno provisório", "Separação temporária das vendas digitais para ajuste posterior."],
    ],
    answer: "simples",
    feedback: {
      simples:
        "Boa escolha para o caso didático. A carga estimada é competitiva e o ganho real vem do saneamento: cupom, NFS-e quando cabível e conciliações diárias.",
      presumido:
        "Trocar regime sem corrigir emissão e conciliação apenas muda o nome do problema. A margem baixa e os erros de documento elevam o risco.",
      ignore:
        "Erro grave. Plataformas, pagamentos e documentos deixam rastros. Omissão de receita pode levar a autuação e, em cenário extremo, arbitramento.",
    },
  },
  {
    title: "Tiquira Tech Exportações",
    place: "Alcântara",
    difficulty: "Nível 5 - Lucro Real e créditos",
    badge: "Real",
    character: "Dr. Walber Tiquirense",
    initials: "WT",
    line: "Minha tiquira é artesanal, mas meu ERP é nervoso. Se tiver crédito lícito, eu quero é apurar bonito.",
    talks: [
      "Eu compro insumo com nota, tenho controle de lote e concilio tudo no ERP.",
      "A margem é apertada; bonito mesmo é lucro depois do tributo correto.",
      "Se o crédito for lícito e documentado, bote na mesa.",
    ],
    story:
      "Indústria com receita alta, margem baixa, insumos documentados, despesas financeiras e controles contábeis maduros.",
    data: {
      receita: 3600000,
      custos: 2700000,
      folha: 390000,
      setor: "Indústria",
      margem: 0.14,
      riscoBase: 42,
    },
    options: [
      ["real", "Adotar Lucro Real com conciliação mensal e créditos documentados", "Apuração completa com lucro efetivo e aproveitamento de créditos."],
      ["presumido", "Usar Lucro Presumido pela simplicidade de apuração", "Presunção de lucro com menor esforço de escrituração fiscal."],
      ["simples", "Buscar enquadramento simplificado para reduzir burocracia", "Tentativa de simplificação frente ao porte e à operação."],
    ],
    answer: "real",
    feedback: {
      real:
        "Ótimo. Quando a margem efetiva é baixa e há documentação robusta, o Lucro Real pode reduzir a carga de IRPJ/CSLL e aproveitar créditos de forma lícita.",
      presumido:
        "A simplicidade custou caro. Com margem efetiva inferior à presunção, o imposto sobre renda estimado fica maior que no Lucro Real.",
      simples:
        "O regime simplificado não deve ser usado como atalho quando o porte, os limites e a operação não comportam a escolha.",
    },
  },
  {
    title: "Consultoria Guarnicê Analytics",
    place: "Renascença, São Luís",
    difficulty: "Nível 6 - Retenções na fonte",
    badge: "Retenções",
    character: "Ana Guarnicê",
    initials: "AG",
    line: "Me retiveram IR, CSLL, PIS e COFINS. Meu caixa sumiu mais rápido que vaga na sombra da UFMA.",
    talks: [
      "Meus clientes grandes retêm tributo em quase toda nota.",
      "Eu tenho os comprovantes, mas eles ficam espalhados em e-mail, portal e pasta.",
      "O medo é pagar duas vezes e ainda achar que foi eficiência.",
    ],
    story:
      "Empresa de consultoria emite notas para grandes clientes que fazem retenções. O desafio é compensar corretamente e não pagar tributo em duplicidade.",
    data: {
      receita: 1700000,
      custos: 310000,
      folha: 520000,
      setor: "Consultoria",
      margem: 0.51,
      riscoBase: 45,
      retencoes: 78000,
    },
    options: [
      ["presumido", "Lucro Presumido com mapa de retenções e compensações", "Regime por presunção integrado ao controle documental das retenções."],
      ["payagain", "Recolher integralmente e revisar retenções apenas no fechamento anual", "Postura conservadora, com impacto imediato no caixa."],
      ["offset", "Compensar valores informados pela equipe comercial", "Uso de controles internos como base para compensação."],
    ],
    answer: "presumido",
    feedback: {
      presumido:
        "Boa estratégia. A escolha do regime conversa com a margem e o mapa de retenções protege o caixa, evitando recolher novamente o que já foi retido.",
      payagain:
        "A conformidade não exige pagar duas vezes. Sem controle de retenções, a empresa antecipa caixa desnecessariamente e perde competitividade.",
      offset:
        "Compensação sem lastro documental pode ser glosada. O caminho lícito exige nota, informe, escrituração e conciliação por competência.",
    },
  },
  {
    title: "Mercado Bacanga 2033",
    place: "Bacanga, São Luís",
    difficulty: "Nível 7 - Reforma Tributária IBS/CBS",
    badge: "2033",
    character: "Lia do Bacanga",
    initials: "LB",
    line: "O sistema pediu IBS, CBS, crédito, débito e eu pedi foi um café. Tu me acode?",
    talks: [
      "Eu preciso saber o que muda no preço quando o crédito aparecer direito.",
      "Cadastro de produto errado hoje vira dor de cabeça dobrada na transição.",
      "Não quero esperar 2033 para descobrir que o sistema estava torto.",
    ],
    story:
      "Supermercado em fase de adaptação: precisa simular preço e carga no modelo atual e no cenário pós-transição, com IBS/CBS consolidados.",
    data: {
      receita: 5200000,
      custos: 4050000,
      folha: 610000,
      setor: "Varejo alimentar",
      margem: 0.1,
      riscoBase: 52,
      ibsCbsRate: 0.265,
    },
    options: [
      ["reform", "Parametrizar produtos, simular IBS/CBS e treinar equipe fiscal", "Preparação antecipada para preço, crédito e documentos."],
      ["wait", "Aguardar o encerramento da transição para mudar cadastros", "Ajuste concentrado no fim do período de transição."],
      ["raise", "Revisar preços por aumento geral sem estudo de créditos", "Reprecificação rápida para proteger margem."],
    ],
    answer: "reform",
    feedback: {
      reform:
        "Perfeito para a transição. A empresa compara cenário atual e 2033, revisa cadastro de produtos e reduz risco de erro em documento fiscal.",
      wait:
        "A espera custa caro. A reforma tem fases de teste e transição; cadastro, documentos e preço precisam ser simulados antes da mudança final.",
      raise:
        "Repassar preço no escuro é ruim. O IBS/CBS precisa ser analisado com débitos e créditos, não apenas com uma alíquota aplicada por medo.",
    },
  },
  {
    title: "A Fiscalização por Ofício",
    place: "Escritório fiscal, São Luís",
    difficulty: "Nível 8 - Obrigações e Lucro Arbitrado",
    badge: "Arbitrado",
    character: "Auditora Zuleide",
    initials: "AZ",
    line: "Bom dia. Vim conferir ECD, ECF, notas, extratos, estoque e essa gaveta tremendo ali.",
    talks: [
      "Houve fiscalização por ofício. A documentação não sustentou a apuração declarada.",
      "Sem escrituração confiável, o fisco pode arbitrar o lucro e aplicar multa de ofício.",
      "Neste caso, a multa será de 75% do IRPJ apurado no cenário de arbitramento.",
    ],
    story:
      "Cliente com escrituração incompleta, receitas sem conciliação e obrigações acessórias atrasadas. Houve fiscalização por ofício e, se a equipe não regularizar, a empresa será multada em 75% do IRPJ.",
    data: {
      receita: 2400000,
      custos: 1450000,
      folha: 320000,
      setor: "Comércio e serviços mistos",
      margem: 0.26,
      riscoBase: 78,
      officeFine: true,
    },
    options: [
      ["regularize", "Regularizar escrituração, retificar obrigações e documentar defesa", "Reconstrução do lastro contábil e fiscal para reduzir dano."],
      ["arbitrado", "Aceitar Lucro Arbitrado como se fosse escolha de planejamento", "Tratamento do arbitramento como rota comum de apuração."],
      ["hide", "Não apresentar documentos inconsistentes na fiscalização", "Redução de exposição imediata durante o procedimento fiscal."],
    ],
    answer: "regularize",
    feedback: {
      regularize:
        "Decisão madura. Regularizar obrigações e reconstruir lastro contábil reduz o risco de arbitramento e fortalece a defesa do contribuinte.",
      arbitrado:
        "Lucro Arbitrado não é prêmio por criatividade. Houve fiscalização por ofício e a empresa será multada em 75% do IRPJ no cenário de arbitramento.",
      hide:
        "A ausência de documentos agrava o risco. Sem prova contábil, o contribuinte perde capacidade de demonstrar a base correta e pode sofrer arbitramento, além de multa de ofício de 75% do IRPJ.",
    },
  },
];

const dialogueExtensions = [
  [
    "Essa assinatura de juçara é uma oportunidade: dá previsibilidade, compra melhor a produção local e mantém entregadores trabalhando.",
    "Meus clientes são famílias, cafés e gente que quer consumir produto daqui com qualidade.",
    "Para a economia de São Luís, cada pote vendido movimenta fornecedor, embalagem, aplicativo e pequeno comércio.",
    "Mas eu tenho medo da Reforma Tributária: será que IBS e CBS vão aumentar meu preço ou eu vou conseguir aproveitar algum crédito?",
  ],
  [
    "A rede maranhense leva Barreirinhas para a casa do turista; meu produto carrega trabalho artesanal e renda da comunidade.",
    "Atendo pousadas, visitantes e moradores, mas estoque sem controle vira prejuízo ligeiro.",
    "Quando eu compro certo, vendo certo e registro certo, a economia local ganha confiança.",
    "O que me aperreia é a Reforma Tributária: se mudar ICMS para IBS, eu não sei se pago mais ou se o crédito ajuda.",
  ],
  [
    "Bumba meu boi é cultura, serviço, emprego temporário, costureira, músico, transporte e turismo girando junto.",
    "Meus clientes contratam apresentação, oficina e produção; não é só festa, é cadeia econômica.",
    "Quando o regime tributário encaixa, sobra caixa para pagar artista e melhorar estrutura.",
    "A Reforma Tributária me deixa preocupada: serviço cultural vai pesar mais no preço ou a regra nova vai neutralizar melhor?",
  ],
  [
    "Meu restaurante alimenta comerciário, turista, estudante e família; se eu erro tributo, o prato feito sente primeiro.",
    "A oportunidade está no delivery e no movimento do Centro, mas margem de restaurante é miúda.",
    "Cada fornecedor local depende do caixa girando: peixe, tempero, verdura, farinha e equipe.",
    "Com a Reforma Tributária, meu medo é não saber se o crédito dos insumos vai compensar ou se o preço final sobe.",
  ],
  [
    "A tiquira é produto regional com potencial de indústria, tecnologia, exportação e controle sério.",
    "Meu cliente quer qualidade e rastreabilidade; eu preciso de crédito fiscal documentado para competir.",
    "Quando a fábrica cresce, compra mais insumo local, formaliza emprego e melhora a arrecadação sem improviso.",
    "A Reforma Tributária me preocupa porque crédito, não cumulatividade e preço de venda vão decidir se consigo expandir.",
  ],
  [
    "Minha consultoria ajuda empresas maranhenses a ler dados, vender melhor e controlar custos.",
    "O serviço parece leve, mas retenção na fonte mexe no caixa e pode gerar pagamento em duplicidade.",
    "Se eu planejo certo, meus clientes crescem e a economia local ganha gestão profissional.",
    "Tenho receio da Reforma Tributária: serviços podem ficar mais caros se eu não entender CBS, IBS e créditos.",
  ],
  [
    "O mercado do Bacanga abastece família todo dia; arroz, feijão, fruta e regional não podem virar luxo por erro de cadastro.",
    "A oportunidade é modernizar preço, estoque e documento antes de 2033 chegar batendo na porta.",
    "Quando supermercado local funciona bem, fornecedor, transportador, caixa e bairro inteiro se beneficiam.",
    "Meu medo é a Reforma Tributária: será que o crédito de IBS/CBS reduz a carga ou eu vou ter que repassar aumento?",
  ],
  [
    "A fiscalização por ofício acontece quando os sinais não fecham: nota, extrato, estoque, ECD, ECF e apuração.",
    "O papel do escritório é proteger a empresa com prova contábil, não improvisar depois que a intimação chega.",
    "Quando a contabilidade falha, a economia perde confiança e o contribuinte pode pagar muito mais que o necessário.",
    "Na transição da Reforma Tributária, divergência digital tende a aparecer mais rápido; por isso o risco de arbitramento precisa ficar claro.",
  ],
];

const state = {
  current: 0,
  unlocked: 0,
  coins: 500,
  reputation: 50,
  compliance: 55,
  clients: 1,
  team: localStorage.getItem(TEAM_KEY) || "",
  answers: Array(cases.length).fill(null),
  calcInputs: {},
  calcResults: {},
  talkIndex: 0,
  soundOn: false,
  videoPlaying: false,
  videoLine: 0,
  teacherOpen: false,
};

const els = {
  coins: document.querySelector("#coins"),
  reputation: document.querySelector("#reputation"),
  compliance: document.querySelector("#compliance"),
  clients: document.querySelector("#clients"),
  currentTeam: document.querySelector("#currentTeam"),
  teamName: document.querySelector("#teamName"),
  saveTeam: document.querySelector("#saveTeamBtn"),
  sound: document.querySelector("#soundBtn"),
  bigSound: document.querySelector("#bigSoundBtn"),
  startVideo: document.querySelector("#startVideoBtn"),
  pauseVideo: document.querySelector("#pauseVideoBtn"),
  levelList: document.querySelector("#levelList"),
  difficulty: document.querySelector("#caseDifficulty"),
  title: document.querySelector("#caseTitle"),
  badge: document.querySelector("#caseBadge"),
  avatar: document.querySelector("#avatar"),
  characterName: document.querySelector("#characterName"),
  characterLine: document.querySelector("#characterLine"),
  interactionLine: document.querySelector("#interactionLine"),
  talkBtn: document.querySelector("#talkBtn"),
  story: document.querySelector("#caseStory"),
  data: document.querySelector("#caseData"),
  visual: document.querySelector("#caseVisual"),
  clientVideo: document.querySelector("#clientVideo"),
  clientGif: document.querySelector("#clientGif"),
  videoPlaceholder: document.querySelector("#videoPlaceholder"),
  visualPlace: document.querySelector("#visualPlace"),
  visualTitle: document.querySelector("#visualTitle"),
  speechBubble: document.querySelector("#speechBubble"),
  optionsTab: document.querySelector("#optionsTab"),
  calcTab: document.querySelector("#calcTab"),
  reformTab: document.querySelector("#reformTab"),
  feedback: document.querySelector("#feedback"),
  prev: document.querySelector("#prevBtn"),
  next: document.querySelector("#nextBtn"),
  restart: document.querySelector("#restartBtn"),
  scoreboard: document.querySelector("#scoreboard"),
  reportTable: document.querySelector("#reportTable"),
  exportCsv: document.querySelector("#exportCsvBtn"),
  exportJson: document.querySelector("#exportJsonBtn"),
  exportHtml: document.querySelector("#exportHtmlBtn"),
  clearReports: document.querySelector("#clearReportsBtn"),
  teacherCode: document.querySelector("#teacherCode"),
  unlockTeacher: document.querySelector("#unlockTeacherBtn"),
  teacherRoom: document.querySelector("#teacherRoom"),
  teacherDetailWrap: document.querySelector("#teacherDetailWrap"),
  teacherLockMsg: document.querySelector("#teacherLockMsg"),
  teacherCharts: document.querySelector("#teacherCharts"),
  teacherTeams: document.querySelector("#teacherTeams"),
  teacherCorrect: document.querySelector("#teacherCorrect"),
  teacherCalcs: document.querySelector("#teacherCalcs"),
};

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function getReports() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveReports(reports) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reports));
}

function activeTeam() {
  return state.team.trim() || "Equipe sem nome";
}

let audioCtx;
let musicTimer;

function ensureAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
}

function playTone(freq = 440, duration = 0.12, gainValue = 0.04) {
  if (!state.soundOn) return;
  ensureAudio();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = "triangle";
  osc.frequency.value = freq;
  gain.gain.value = gainValue;
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
  osc.stop(audioCtx.currentTime + duration);
}

function startMusic() {
  ensureAudio();
  stopMusic();
  const notes = [196, 247, 294, 330, 294, 247];
  let step = 0;
  musicTimer = window.setInterval(() => {
    playTone(notes[step % notes.length], 0.09, 0.018);
    step += 1;
  }, 520);
}

function stopMusic() {
  if (musicTimer) window.clearInterval(musicTimer);
  musicTimer = null;
}

function speakLine(text) {
  els.speechBubble.textContent = text;
}

function setSound(on) {
  state.soundOn = on;
  els.sound.textContent = state.soundOn ? "Som: on" : "Som: off";
  els.bigSound.textContent = state.soundOn ? "Som ambiente ativo" : "Ativar som ambiente";
  if (state.soundOn) {
    startMusic();
    playTone(520, 0.15, 0.05);
  } else {
    stopMusic();
  }
}

function currentTalkLines() {
  return [...cases[state.current].talks, ...(dialogueExtensions[state.current] || [])];
}

function startClientVideo() {
  if (els.visual.classList.contains("has-gif") && !els.visual.classList.contains("has-video")) {
    state.videoPlaying = true;
    els.visual.classList.add("video-playing", "speaking");
    const src = caseGifFiles[state.current];
    els.clientGif.src = `${src}?play=${Date.now()}`;
    playTone(520, 0.12, 0.04);
    return;
  }

  if (!els.visual.classList.contains("has-video")) {
    els.speechBubble.textContent = "O vídeo deste cliente ainda não foi carregado. Gere o MP4 e salve em assets/videos para este nível.";
    els.videoPlaceholder.classList.remove("hidden");
    playTone(180, 0.16, 0.05);
    return;
  }
  state.videoPlaying = true;
  els.visual.classList.add("video-playing", "speaking");
  els.clientVideo.muted = false;
  const playPromise = els.clientVideo.play();
  if (playPromise) {
    playPromise.catch(() => {
      els.speechBubble.textContent = "O navegador bloqueou o áudio. Clique diretamente no player do vídeo para liberar som e reprodução.";
    });
  } else {
    playTone(520, 0.12, 0.04);
  }
}

function pauseClientVideo() {
  state.videoPlaying = false;
  els.visual.classList.remove("video-playing", "speaking");
  els.clientVideo.pause();
}

function loadClientVideo() {
  const src = caseVideoFiles[state.current];
  const gifSrc = caseGifFiles[state.current];
  if (els.clientVideo.dataset.src === src && els.clientGif.dataset.src === gifSrc) return;
  els.visual.classList.remove("has-video", "has-gif", "video-playing", "speaking");
  els.clientVideo.pause();
  els.clientVideo.removeAttribute("src");
  els.clientVideo.dataset.src = src;
  els.clientGif.removeAttribute("src");
  els.clientGif.dataset.src = gifSrc;
  els.clientVideo.load();
  els.videoPlaceholder.classList.remove("hidden");

  fetch(src, { method: "HEAD" })
    .then((response) => {
      if (!response.ok) throw new Error("video missing");
      els.clientVideo.src = src;
      els.clientVideo.load();
      els.visual.classList.add("has-video");
      els.videoPlaceholder.classList.add("hidden");
    })
    .catch(() => {
      fetch(gifSrc, { method: "HEAD" })
        .then((response) => {
          if (!response.ok) throw new Error("gif missing");
          els.clientGif.src = gifSrc;
          els.visual.classList.add("has-gif");
          els.videoPlaceholder.classList.add("hidden");
        })
        .catch(() => {
          els.videoPlaceholder.innerHTML = `<strong>Vídeo IA do cliente pendente</strong><span>Salve o arquivo como <code>${src}</code>. O jogo tocará o vídeo automaticamente nesta área.</span>`;
        });
    });
}

function calcKey(future, regime) {
  return `${state.current}-${future ? "future" : "current"}-${regime}`;
}

function parseNumber(value) {
  if (!value) return NaN;
  return Number(String(value).replace(/\./g, "").replace(",", ".").replace(/[^\d.-]/g, ""));
}

function estimate(caseItem, future = false) {
  const d = caseItem.data;
  const profit = Math.max(0, d.receita - d.custos - d.folha);
  const simpleRate = d.receita <= 360000 ? 0.06 : d.receita <= 900000 ? 0.092 : d.receita <= 1800000 ? 0.124 : 0.155;
  const service = d.setor.toLowerCase().includes("serv") || d.setor.toLowerCase().includes("consult");
  const presumedPercent = service ? 0.32 : 0.08;
  const issIcms = service ? 0.035 : 0.045;
  const presumidoBase = d.receita * presumedPercent;
  const presumidoIncome = presumidoBase * 0.24 + Math.max(0, presumidoBase - 240000) * 0.1;
  const realIncome = profit * 0.34;
  const retencoes = d.retencoes || 0;
  const ibsCbsRate = d.ibsCbsRate || 0.265;
  const currentPresumidoConsumption = d.receita * (0.0365 + issIcms);
  const currentRealConsumption = Math.max(0, d.receita * 0.0925 - Math.min(d.custos, d.receita * 0.7) * 0.0925) + d.receita * issIcms;
  const futureConsumption = Math.max(0, d.receita * ibsCbsRate - d.custos * ibsCbsRate);
  const consumptionPresumido = future ? futureConsumption : currentPresumidoConsumption;
  const consumptionReal = future ? futureConsumption : currentRealConsumption;
  const simpleTax = future ? d.receita * Math.max(simpleRate * 0.55, 0.035) + futureConsumption * 0.45 : d.receita * simpleRate;
  const arbitratedIrpj = d.receita * 0.096 * 0.15;
  const officeFine = d.officeFine ? arbitratedIrpj * 0.75 : 0;

  return {
    simples: {
      name: "Simples Nacional",
      tax: simpleTax,
      rate: simpleTax / d.receita,
    },
    presumido: {
      name: "Lucro Presumido",
      tax: Math.max(0, presumidoIncome + consumptionPresumido - retencoes),
      rate: Math.max(0, presumidoIncome + consumptionPresumido - retencoes) / d.receita,
    },
    real: {
      name: "Lucro Real",
      tax: Math.max(0, realIncome + consumptionReal - retencoes),
      rate: Math.max(0, realIncome + consumptionReal - retencoes) / d.receita,
    },
    arbitrado: {
      name: "Lucro Arbitrado",
      tax: d.receita * (future ? 0.24 : 0.22) + d.riscoBase * 1900 + officeFine,
      rate: (d.receita * (future ? 0.24 : 0.22) + d.riscoBase * 1900 + officeFine) / d.receita,
      officeFine,
    },
  };
}

function regimeOrder(caseItem, future = false) {
  const calc = estimate(caseItem, future);
  return ["simples", "presumido", "real", "arbitrado"].sort((a, b) => calc[a].tax - calc[b].tax);
}

function band(value, low, high) {
  if (value <= low) return "Baixo";
  if (value >= high) return "Alto";
  return "Médio";
}

function meterWidth(label) {
  return { Baixo: 32, Médio: 62, Alto: 88 }[label] || 52;
}

function regimeClues(caseItem, key, future = false) {
  const calc = estimate(caseItem, future);
  const order = regimeOrder(caseItem, future);
  const rank = order.indexOf(key);
  const d = caseItem.data;
  const service = d.setor.toLowerCase().includes("serv") || d.setor.toLowerCase().includes("consult");
  const chargeBand = rank === 0 ? "Baixo" : rank === 1 ? "Médio" : "Alto";
  const complexity = key === "simples" ? "Baixo" : key === "presumido" ? "Médio" : "Alto";
  const risk = key === "arbitrado" ? "Alto" : key === "real" && d.riscoBase > 55 ? "Alto" : key === "simples" && d.receita > 3000000 ? "Alto" : band(d.riscoBase, 30, 65);
  const creditUse = key === "real" || future ? (d.custos / d.receita > 0.55 ? "Alto" : "Médio") : key === "presumido" ? "Baixo" : "Médio";
  const clue =
    key === "simples"
      ? "Observe porte, limite, anexos e simplicidade operacional."
      : key === "presumido"
        ? `Observe margem ${service ? "de serviço" : "presumida"}, obrigações e retenções.`
        : key === "real"
          ? "Observe margem efetiva, créditos documentados e escrituração robusta."
          : "Observe falha de escrituração, arbitramento e penalidades de ofício.";

  return {
    name: calc[key].name,
    chargeBand,
    complexity,
    risk,
    creditUse,
    clue,
  };
}

function regimeQuestions(key, future = false) {
  const current = {
    simples: ["Verifique porte, limite e atividade.", "Calcule se a simplificação compensa a perda de créditos.", "Avalie se a obrigação mensal reduz risco operacional."],
    presumido: ["Aplique a lógica de presunção sobre a receita.", "Compare margem real com margem presumida.", "Observe PIS/COFINS cumulativos e retenções quando existirem."],
    real: ["Apure lucro efetivo com custos e folha.", "Verifique créditos documentados e despesas dedutíveis.", "Confirme se a empresa suporta escrituração e conciliações."],
    arbitrado: ["Identifique falhas de escrituração e omissões.", "Avalie multa, prova documental e fiscalização por ofício.", "Lembre que arbitramento é consequência, não planejamento normal."],
  };
  const transition = {
    simples: ["Simule se o regime simplificado continua competitivo.", "Observe se o cliente da cadeia exigirá crédito.", "Revise cadastro fiscal e emissão de documentos."],
    presumido: ["Projete preço com IBS/CBS destacado.", "Analise se a presunção ainda conversa com a margem.", "Mapeie retenções e documentos eletrônicos."],
    real: ["Teste créditos de IBS/CBS sobre compras documentadas.", "Confira se a não cumulatividade melhora o caixa.", "Revise ERP, classificação fiscal e conciliações."],
    arbitrado: ["Meça o efeito de inconsistência digital na transição.", "Considere autuação, multa e perda de defesa.", "Cheque se documentos sustentam a apuração declarada."],
  };
  return (future ? transition : current)[key];
}

function optionRegime(optionId) {
  const map = {
    ignore: "arbitrado",
    stock: "arbitrado",
    payagain: "presumido",
    offset: "presumido",
    reform: "real",
    wait: "arbitrado",
    raise: "presumido",
    regularize: "real",
    hide: "arbitrado",
  };
  return map[optionId] || optionId;
}

function feedbackBasis(caseItem, selected) {
  const currentOrder = regimeOrder(caseItem, false);
  const futureOrder = regimeOrder(caseItem, true);
  const selectedRegime = optionRegime(selected.id);
  const selectedRank = currentOrder.indexOf(selectedRegime);
  const answerLabel = caseItem.options.find(([id]) => id === caseItem.answer)?.[1] || "rota indicada";
  const selectedRegimeName = estimate(caseItem, false)[selectedRegime]?.name || selected.title;
  const selectedBand = selectedRank <= 0 ? "menor pressão no simulador" : selectedRank === 1 ? "pressão intermediária no simulador" : "pressão alta no simulador";
  const futureSignal = futureOrder[0] === currentOrder[0] ? "o cenário 2033 preserva a mesma rota forte" : "o cenário 2033 muda a atenção para créditos e preço";
  return [
    `Base do alerta: o simulador interno comparou carga relativa, margem, créditos, obrigações acessórias e risco fiscal. Os estudantes informam R$ e % nas caixas de cálculo, e o jogo avalia a proximidade sem entregar o gabarito na tela do aluno.`,
    `A decisão escolhida caiu em ${selectedBand}. A rota de referência do caso é: ${answerLabel}.`,
    `No Cenário 2033, ${futureSignal}; por isso o jogo considera documentação, cadastro fiscal e conformidade acumulada.`,
    selectedRegimeName === selected.title ? "" : `Regime avaliado pela carta: ${selectedRegimeName}.`,
  ]
    .filter(Boolean)
    .join(" ");
}

function optionImpact(option, good) {
  if (good) return { coins: 240 + state.current * 40, reputation: 9 + state.current, compliance: 12 + state.current };
  if (option === "hide" || option === "ignore" || option === "stock") return { coins: -180 - state.current * 20, reputation: -10, compliance: -20 };
  return { coins: -80 - state.current * 12, reputation: -4, compliance: -8 };
}

function renderMetrics() {
  els.coins.textContent = money.format(state.coins);
  els.reputation.textContent = `${state.reputation}/100`;
  els.compliance.textContent = `${state.compliance}/100`;
  els.clients.textContent = state.clients;
  els.currentTeam.textContent = activeTeam();
  els.teamName.value = state.team;
  els.sound.textContent = state.soundOn ? "Som: on" : "Som: off";
}

function renderLevels() {
  els.levelList.innerHTML = "";
  cases.forEach((caseItem, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    const locked = index > state.unlocked;
    const done = Boolean(state.answers[index]);
    btn.className = `level-btn ${index === state.current ? "active" : ""} ${done ? "done" : ""} ${locked ? "locked" : ""}`;
    btn.disabled = locked || done || index !== state.current;
    btn.innerHTML = `
      <span class="level-number">${locked ? "?" : index + 1}</span>
      <span>
        <strong>${locked ? "Bloqueado" : done ? "Concluído" : caseItem.badge}</strong>
        <small>${locked ? "Este nível só aparece após a conclusão do anterior." : done ? "Caso fechado. Não é possível voltar." : caseItem.title}</small>
      </span>
    `;
    btn.addEventListener("click", () => {
      if (locked || done) return;
      state.current = index;
      state.talkIndex = 0;
      render();
    });
    els.levelList.appendChild(btn);
  });
}

function renderCaseData(caseItem) {
  const d = caseItem.data;
  const rows = [
    ["Receita anual", money.format(d.receita)],
    ["Custos/insumos", money.format(d.custos)],
    ["Folha anual", money.format(d.folha)],
    ["Margem estimada", percent.format(d.margem)],
    ["Atividade", d.setor],
    ["Risco fiscal base", `${d.riscoBase}/100`],
    ["Lucro operacional", money.format(Math.max(0, d.receita - d.custos - d.folha))],
    ["Obrigação crítica", d.officeFine ? "Fiscalização por ofício" : d.riscoBase > 60 ? "ECD/ECF e notas" : "Notas e apuração"],
  ];
  els.data.innerHTML = rows
    .map(([label, value]) => `<article class="data-card"><span>${label}</span><strong>${value}</strong></article>`)
    .join("");
}

function renderOptions(caseItem) {
  const selected = state.answers[state.current];
  els.optionsTab.innerHTML = caseItem.options
    .map(([id, title, description], index) => {
      const isSelected = selected?.id === id;
      const className = isSelected ? `option-btn selected ${selected.good ? "good" : "bad"}` : "option-btn";
      const status = isSelected ? (selected.good ? "rota validada" : "risco detectado") : "ainda não avaliado";
      return `
        <button class="${className}" type="button" data-option="${id}" ${selected ? "disabled" : ""}>
          <em>Plano ${String.fromCharCode(65 + index)} · ${status}</em>
          <strong>${title}</strong>
          <span>${description}</span>
        </button>
      `;
    })
    .join("");

  els.optionsTab.querySelectorAll("[data-option]").forEach((btn) => {
    btn.addEventListener("click", () => chooseOption(btn.dataset.option));
  });
}

function calcCards(caseItem, future = false) {
  const result = state.calcResults[`${state.current}-${future ? "future" : "current"}`];
  return `
    <article class="mission-note">
      <strong>${future ? "Cenário 2033: rodada de simulação" : "Mesa de cálculo: rodada principal"}</strong>
      <p>${future ? "Preencha suas estimativas para a transição IBS/CBS. O jogo avalia proximidade, mas só o ambiente do professor mostra a conferência detalhada." : "Preencha tributo estimado e carga efetiva para cada regime. Depois confira sua pontaria antes de tomar a decisão."}</p>
    </article>
    <div class="calc-grid">
      ${["simples", "presumido", "real", "arbitrado"]
        .map((key) => {
          const clue = regimeClues(caseItem, key, future);
          const questions = regimeQuestions(key, future);
          const inputKey = calcKey(future, key);
          const saved = state.calcInputs[inputKey] || {};
          return `
          <article class="calc-card">
            <h4>${clue.name}</h4>
            <div class="calc-entry-grid">
              <div class="calc-entry">
                <label>Tributo estimado (R$)
                  <input class="calc-input" data-future="${future ? "1" : "0"}" data-regime="${key}" data-field="tax" inputmode="decimal" placeholder="Ex.: 10800" value="${saved.tax || ""}" />
                </label>
              </div>
              <div class="calc-entry">
                <label>Carga efetiva (%)
                  <input class="calc-input" data-future="${future ? "1" : "0"}" data-regime="${key}" data-field="rate" inputmode="decimal" placeholder="Ex.: 6,0" value="${saved.rate || ""}" />
                </label>
              </div>
            </div>
            <p>${clue.clue}</p>
            <ul class="clue-list">
              ${questions.map((question) => `<li>${question}</li>`).join("")}
            </ul>
          </article>
        `;
        })
        .join("")}
    </div>
    <div class="calc-check-row">
      <button class="primary-btn calc-check" type="button" data-future="${future ? "1" : "0"}">Conferir cálculos</button>
      <span class="calc-result ${result?.score >= 70 ? "good" : result ? "warn" : ""}">${result ? `Pontaria dos cálculos: ${result.score}%` : "Preencha as estimativas para ganhar bônus."}</span>
    </div>
  `;
}

function renderCalc(caseItem) {
  els.calcTab.innerHTML = calcCards(caseItem, false);
  attachCalcHandlers(els.calcTab);
}

function renderReform(caseItem) {
  const risk = clamp(caseItem.data.riscoBase + (state.compliance < 45 ? 22 : 0), 0, 100);
  els.reformTab.innerHTML = `
    ${calcCards(caseItem, true)}
    <article class="calc-card">
      <h4>Risco de fiscalização no cenário de transição</h4>
      <div class="risk-meter" aria-label="Risco ${risk} de 100"><span style="width: ${risk}%"></span></div>
      <p>Como o jogo calcula o risco: parte da complexidade do caso, soma falhas de obrigação acessória e aumenta se a conformidade acumulada do escritório estiver baixa. Não é uma alíquota: é um medidor pedagógico de exposição fiscal.</p>
    </article>
  `;
  attachCalcHandlers(els.reformTab);
}

function attachCalcHandlers(container) {
  container.querySelectorAll(".calc-input").forEach((input) => {
    input.addEventListener("input", () => {
      const future = input.dataset.future === "1";
      const key = calcKey(future, input.dataset.regime);
      state.calcInputs[key] = state.calcInputs[key] || {};
      state.calcInputs[key][input.dataset.field] = input.value;
    });
  });

  container.querySelectorAll(".calc-check").forEach((button) => {
    button.addEventListener("click", () => checkCalculations(button.dataset.future === "1"));
  });
}

function checkCalculations(future = false) {
  const caseItem = cases[state.current];
  const calc = estimate(caseItem, future);
  let points = 0;
  let total = 0;
  const details = [];

  ["simples", "presumido", "real", "arbitrado"].forEach((regime) => {
    const values = state.calcInputs[calcKey(future, regime)] || {};
    const typedTax = parseNumber(values.tax);
    const typedRateRaw = parseNumber(values.rate);
    const expectedTax = calc[regime].tax;
    const expectedRate = calc[regime].rate;
    const typedRate = typedRateRaw > 1 ? typedRateRaw / 100 : typedRateRaw;
    const taxOk = Number.isFinite(typedTax) && Math.abs(typedTax - expectedTax) <= Math.max(expectedTax * 0.1, 600);
    const rateOk = Number.isFinite(typedRate) && Math.abs(typedRate - expectedRate) <= 0.018;
    total += 2;
    points += taxOk ? 1 : 0;
    points += rateOk ? 1 : 0;
    details.push(`${calc[regime].name}: tributo ${taxOk ? "próximo" : "distante"}, carga ${rateOk ? "próxima" : "distante"}`);
  });

  const score = Math.round((points / total) * 100);
  const resultKey = `${state.current}-${future ? "future" : "current"}`;
  const previous = state.calcResults[resultKey];
  state.calcResults[resultKey] = { score, details, checkedAt: new Date().toISOString() };

  if (!previous) {
    const bonus = Math.round(score / 5);
    state.coins += bonus;
    state.reputation = clamp(state.reputation + Math.round(score / 35), 0, 100);
    recordCalcAction(caseItem, future, score, details, bonus);
    playTone(score >= 70 ? 660 : 240, 0.16, 0.05);
  }

  render();
  setTab(future ? "reform" : "calc");
}

function renderFeedback() {
  const selected = state.answers[state.current];
  if (!selected) {
    els.feedback.className = "feedback hidden";
    els.feedback.innerHTML = "";
    return;
  }
  showFeedback(selected);
}

function chooseOption(optionId) {
  const caseItem = cases[state.current];
  if (state.answers[state.current]) return;
  const option = caseItem.options.find(([id]) => id === optionId);
  const good = optionId === caseItem.answer;
  const impact = optionImpact(optionId, good);

  const selected = {
    id: optionId,
    title: option[1],
    good,
    impact,
    feedback: caseItem.feedback[optionId],
    calcScore: state.calcResults[`${state.current}-current`]?.score ?? null,
    futureCalcScore: state.calcResults[`${state.current}-future`]?.score ?? null,
    time: new Date().toISOString(),
  };

  state.answers[state.current] = selected;
  state.coins += impact.coins;
  state.reputation = clamp(state.reputation + impact.reputation, 0, 100);
  state.compliance = clamp(state.compliance + impact.compliance, 0, 100);
  if (good) state.clients += 1;
  state.unlocked = clamp(Math.max(state.unlocked, state.current + 1), 0, cases.length - 1);

  recordAction(caseItem, selected);
  playTone(good ? 740 : 180, 0.22, 0.06);
  render();
  setTab("options");
}

function recordAction(caseItem, selected) {
  const reports = getReports();
  reports.push({
    tipo: "Decisão",
    equipe: activeTeam(),
    caso: state.current + 1,
    titulo: caseItem.title,
    decisao: selected.title,
    resultado: selected.good ? "Adequada" : "Risco/erro",
    correta: selected.good,
    respostaEsperada: caseItem.options.find(([id]) => id === caseItem.answer)?.[1] || "",
    calculoAtual: selected.calcScore,
    calculo2033: selected.futureCalcScore,
    moedas: selected.impact.coins,
    reputacao: selected.impact.reputation,
    conformidade: selected.impact.compliance,
    placarMoedas: state.coins,
    placarReputacao: state.reputation,
    placarConformidade: state.compliance,
    horario: new Date().toLocaleString("pt-BR"),
  });
  saveReports(reports);
}

function recordCalcAction(caseItem, future, score, details, bonus) {
  const reports = getReports();
  reports.push({
    tipo: future ? "Cálculo 2033" : "Cálculo",
    equipe: activeTeam(),
    caso: state.current + 1,
    titulo: caseItem.title,
    decisao: future ? "Conferiu estimativas do Cenário 2033" : "Conferiu estimativas dos regimes atuais",
    resultado: score >= 70 ? "Boa aproximação" : "Precisa revisar",
    correta: score >= 70,
    respostaEsperada: expectedValues(caseItem, future),
    calculoAtual: future ? null : score,
    calculo2033: future ? score : null,
    detalhesCalculo: details.join(" | "),
    moedas: bonus,
    reputacao: Math.round(score / 35),
    conformidade: 0,
    placarMoedas: state.coins,
    placarReputacao: state.reputation,
    placarConformidade: state.compliance,
    horario: new Date().toLocaleString("pt-BR"),
  });
  saveReports(reports);
}

function expectedValues(caseItem, future = false) {
  const calc = estimate(caseItem, future);
  return ["simples", "presumido", "real", "arbitrado"]
    .map((key) => `${calc[key].name}: ${money.format(calc[key].tax)} | ${percent.format(calc[key].rate)}`)
    .join(" / ");
}

function showFeedback(selected) {
  const title = selected.good ? "Decisão aprovada pelo escritório" : "Alerta de risco fiscal";
  const impact = `Impacto: ${money.format(selected.impact.coins)} em moedas, ${selected.impact.reputation >= 0 ? "+" : ""}${selected.impact.reputation} reputação, ${selected.impact.compliance >= 0 ? "+" : ""}${selected.impact.compliance} conformidade.`;
  const basis = feedbackBasis(cases[state.current], selected);
  els.feedback.className = `feedback ${selected.good ? "good" : "bad"}`;
  els.feedback.innerHTML = `<h4>${title}</h4><p>${selected.feedback}</p><p>${basis}</p><p><strong>${impact}</strong></p>`;
}

function setTab(tabName) {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tab === tabName);
  });
  els.optionsTab.classList.toggle("hidden", tabName !== "options");
  els.calcTab.classList.toggle("hidden", tabName !== "calc");
  els.reformTab.classList.toggle("hidden", tabName !== "reform");
}

function renderReports() {
  const reports = getReports();
  els.exportCsv.disabled = !state.teacherOpen;
  els.exportJson.disabled = !state.teacherOpen;
  els.exportHtml.disabled = !state.teacherOpen;
  els.clearReports.disabled = !state.teacherOpen;
  els.teacherLockMsg.classList.toggle("hidden", state.teacherOpen);
  if (!reports.length) {
    els.scoreboard.innerHTML = `<p class="empty-state">Nenhuma equipe registrada ainda.</p>`;
    els.reportTable.innerHTML = `<p class="empty-state">As ações aparecerão aqui depois das decisões.</p>`;
    els.teacherTeams.textContent = "0";
    els.teacherCorrect.textContent = "0";
    els.teacherCalcs.textContent = "0";
    els.teacherRoom.classList.toggle("hidden", !state.teacherOpen);
    els.teacherDetailWrap.classList.toggle("hidden", !state.teacherOpen);
    els.teacherCharts.innerHTML = "";
    return;
  }

  const teams = new Map();
  reports.forEach((row) => {
    const current = teams.get(row.equipe) || {
      equipe: row.equipe,
      acoes: 0,
      adequadas: 0,
      decisoes: 0,
      calcScores: [],
      moedas: 0,
      reputacao: 0,
      conformidade: 0,
    };
    current.acoes += 1;
    if ((row.tipo || "Decisão") === "Decisão") {
      current.decisoes += 1;
      current.adequadas += row.correta || row.resultado === "Adequada" ? 1 : 0;
    }
    if (Number.isFinite(row.calculoAtual)) current.calcScores.push(row.calculoAtual);
    if (Number.isFinite(row.calculo2033)) current.calcScores.push(row.calculo2033);
    current.moedas = row.placarMoedas;
    current.reputacao = row.placarReputacao;
    current.conformidade = row.placarConformidade;
    teams.set(row.equipe, current);
  });

  const ranking = [...teams.values()]
    .map((team) => {
      const calcAvg = team.calcScores.length ? Math.round(team.calcScores.reduce((sum, score) => sum + score, 0) / team.calcScores.length) : 0;
      return { ...team, calcAvg, score: team.moedas + team.reputacao * 12 + team.conformidade * 12 + calcAvg * 4 + team.adequadas * 90 };
    })
    .sort((a, b) => b.score - a.score);
  els.scoreboard.innerHTML = `
    <table>
      <thead><tr><th>Posição</th><th>Equipe</th><th>Ações</th><th>Decisões corretas</th><th>Cálculos</th><th>Moedas</th><th>Reputação</th><th>Conformidade</th></tr></thead>
      <tbody>
        ${ranking
          .map(
            (team) =>
              `<tr><td><strong>#${ranking.indexOf(team) + 1}</strong></td><td>${team.equipe}</td><td>${team.acoes}</td><td>${team.adequadas}/${team.decisoes}</td><td>${team.calcAvg}%</td><td>${money.format(team.moedas)}</td><td>${team.reputacao}/100</td><td>${team.conformidade}/100</td></tr>`
          )
          .join("")}
      </tbody>
    </table>
  `;

  const decisionRows = reports.filter((row) => (row.tipo || "Decisão") === "Decisão");
  const calcRows = reports.filter((row) => (row.tipo || "").includes("Cálculo"));
  els.teacherTeams.textContent = ranking.length;
  els.teacherCorrect.textContent = `${decisionRows.filter((row) => row.correta || row.resultado === "Adequada").length}/${decisionRows.length}`;
  els.teacherCalcs.textContent = calcRows.length;
  els.teacherRoom.classList.toggle("hidden", !state.teacherOpen);
  els.teacherDetailWrap.classList.toggle("hidden", !state.teacherOpen);
  renderTeacherCharts(ranking, decisionRows, calcRows);

  els.reportTable.innerHTML = `
    <table>
      <thead><tr><th>Horário</th><th>Tipo</th><th>Equipe</th><th>Caso</th><th>Ação</th><th>Resultado</th><th>Resposta/valores esperados</th><th>Detalhe</th><th>Impacto</th></tr></thead>
      <tbody>
        ${reports
          .slice()
          .reverse()
          .map(
            (row) =>
              `<tr><td>${row.horario}</td><td>${row.tipo || "Decisão"}</td><td>${row.equipe}</td><td>${row.caso} - ${row.titulo}</td><td>${row.decisao}</td><td>${row.resultado}</td><td>${row.respostaEsperada || ""}</td><td>${row.detalhesCalculo || `Atual: ${row.calculoAtual ?? "-"}% | 2033: ${row.calculo2033 ?? "-"}%`}</td><td>${money.format(row.moedas)} | Rep. ${row.reputacao} | Conf. ${row.conformidade}</td></tr>`
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function renderTeacherCharts(ranking, decisionRows, calcRows) {
  if (!state.teacherOpen) {
    els.teacherCharts.innerHTML = "";
    return;
  }

  const maxScore = Math.max(1, ...ranking.map((team) => team.score));
  const scoreRows = ranking
    .map(
      (team) => `
        <div class="chart-row">
          <strong>${team.equipe}</strong>
          <span class="chart-track"><span class="chart-fill" style="width:${Math.max(5, (team.score / maxScore) * 100)}%"></span></span>
          <span>${Math.round(team.score)}</span>
        </div>
      `
    )
    .join("");
  const correct = decisionRows.filter((row) => row.correta || row.resultado === "Adequada").length;
  const calcGood = calcRows.filter((row) => row.correta).length;
  const decisionRate = decisionRows.length ? Math.round((correct / decisionRows.length) * 100) : 0;
  const calcRate = calcRows.length ? Math.round((calcGood / calcRows.length) * 100) : 0;

  els.teacherCharts.innerHTML = `
    <div class="chart-block">
      <h4>Ranking geral</h4>
      ${scoreRows || "<p class='empty-state'>Sem equipes para o gráfico.</p>"}
    </div>
    <div class="chart-block">
      <h4>Indicadores da turma</h4>
      <div class="chart-row"><strong>Decisões corretas</strong><span class="chart-track"><span class="chart-fill" style="width:${decisionRate}%"></span></span><span>${decisionRate}%</span></div>
      <div class="chart-row"><strong>Cálculos bons</strong><span class="chart-track"><span class="chart-fill" style="width:${calcRate}%"></span></span><span>${calcRate}%</span></div>
    </div>
  `;
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function exportCsv() {
  if (!state.teacherOpen) return;
  const reports = getReports();
  const headers = ["tipo", "equipe", "caso", "titulo", "decisao", "resultado", "correta", "respostaEsperada", "calculoAtual", "calculo2033", "detalhesCalculo", "moedas", "reputacao", "conformidade", "placarMoedas", "placarReputacao", "placarConformidade", "horario"];
  const rows = reports.map((row) => headers.map((header) => `"${String(row[header] ?? "").replaceAll('"', '""')}"`).join(";"));
  downloadFile("relatorio-sumauma-contabil.csv", [headers.join(";"), ...rows].join("\n"), "text/csv;charset=utf-8");
}

function exportJson() {
  if (!state.teacherOpen) return;
  downloadFile("relatorio-sumauma-contabil.json", JSON.stringify(getReports(), null, 2), "application/json;charset=utf-8");
}

function exportHtmlReport() {
  if (!state.teacherOpen) return;
  renderReports();
  const html = `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <title>Relatório Sumaúma Contábil</title>
  <style>
    body{font-family:Arial,sans-serif;margin:28px;color:#233036;background:#fffaf0}
    h1,h2{margin-bottom:8px}
    .meta{color:#66747b;margin-bottom:22px}
    table{width:100%;border-collapse:collapse;margin:14px 0 24px;background:white}
    th,td{border:1px solid #d8ded8;padding:8px;text-align:left;vertical-align:top}
    th{background:#eef7f4;color:#2f6f5e}
    .chart-row{display:grid;grid-template-columns:180px 1fr 60px;gap:10px;align-items:center;margin:8px 0}
    .chart-track{height:16px;background:#e7ece6;border-radius:999px;overflow:hidden}
    .chart-fill{display:block;height:100%;background:linear-gradient(90deg,#2f6f5e,#d99b2b)}
  </style>
</head>
<body>
  <h1>Relatório do Escritório Sumaúma Contábil</h1>
  <p class="meta">Emitido em ${new Date().toLocaleString("pt-BR")} | Tax Accounting - UFMA</p>
  <h2>Painel de rendimento</h2>
  ${els.scoreboard.innerHTML}
  <h2>Gráficos da turma</h2>
  ${els.teacherCharts.innerHTML}
  <h2>Relatório detalhado</h2>
  ${els.reportTable.innerHTML}
</body>
</html>`;
  downloadFile("relatorio-grafico-sumauma-contabil.html", html, "text/html;charset=utf-8");
}

function restart() {
  pauseClientVideo();
  state.current = 0;
  state.unlocked = 0;
  state.coins = 500;
  state.reputation = 50;
  state.compliance = 55;
  state.clients = 1;
  state.answers = Array(cases.length).fill(null);
  state.calcInputs = {};
  state.calcResults = {};
  state.talkIndex = 0;
  setTab("calc");
  render();
}

function render() {
  const caseItem = cases[state.current];
  renderMetrics();
  renderLevels();
  els.difficulty.textContent = caseItem.difficulty;
  els.title.textContent = caseItem.title;
  els.badge.textContent = caseItem.badge;
  els.avatar.textContent = caseItem.initials;
  els.characterName.textContent = caseItem.character;
  els.characterLine.textContent = caseItem.line;
  const talkLines = currentTalkLines();
  els.interactionLine.textContent = talkLines[state.talkIndex % talkLines.length];
  els.speechBubble.textContent = talkLines[state.talkIndex % talkLines.length];
  els.visual.classList.toggle("video-playing", state.videoPlaying);
  els.story.textContent = caseItem.story;
  els.visual.style.setProperty("--case-image", caseImages[state.current]);
  loadClientVideo();
  els.visualPlace.textContent = caseItem.place;
  els.visualTitle.textContent = caseItem.title;
  renderCaseData(caseItem);
  renderOptions(caseItem);
  renderCalc(caseItem);
  renderReform(caseItem);
  renderFeedback();
  renderReports();
  els.prev.disabled = true;
  const answered = Boolean(state.answers[state.current]);
  const finalCase = state.current === cases.length - 1;
  els.next.disabled = !answered || finalCase;
  els.next.classList.toggle("hidden", !answered);
  els.next.textContent = finalCase ? "Campanha concluída" : "Próximo nível";
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => setTab(tab.dataset.tab));
});

els.saveTeam.addEventListener("click", () => {
  state.team = els.teamName.value.trim();
  localStorage.setItem(TEAM_KEY, state.team);
  renderMetrics();
});

els.teamName.addEventListener("keydown", (event) => {
  if (event.key === "Enter") els.saveTeam.click();
});

els.sound.addEventListener("click", () => {
  setSound(!state.soundOn);
});

els.bigSound.addEventListener("click", () => {
  setSound(!state.soundOn);
});

els.startVideo.addEventListener("click", () => {
  startClientVideo();
});

els.pauseVideo.addEventListener("click", () => {
  pauseClientVideo();
});

els.clientVideo.addEventListener("play", () => {
  state.videoPlaying = true;
  els.visual.classList.add("video-playing", "speaking");
});

els.clientVideo.addEventListener("pause", () => {
  state.videoPlaying = false;
  els.visual.classList.remove("video-playing", "speaking");
});

els.clientVideo.addEventListener("ended", () => {
  pauseClientVideo();
});

els.clientVideo.addEventListener("error", () => {
  els.visual.classList.remove("has-video", "video-playing", "speaking");
  els.videoPlaceholder.classList.remove("hidden");
});

els.unlockTeacher.addEventListener("click", () => {
  if (els.teacherCode.value.trim().toLowerCase() === TEACHER_CODE) {
    state.teacherOpen = true;
    renderReports();
    playTone(620, 0.12, 0.05);
  } else {
    els.teacherCode.value = "";
    els.teacherCode.placeholder = "Código incorreto";
    playTone(180, 0.16, 0.05);
  }
});

els.teacherCode.addEventListener("keydown", (event) => {
  if (event.key === "Enter") els.unlockTeacher.click();
});

els.talkBtn.addEventListener("click", () => {
  state.talkIndex += 1;
  render();
  speakLine(els.interactionLine.textContent);
});

els.prev.addEventListener("click", () => {
  return;
});

els.next.addEventListener("click", () => {
  if (!state.answers[state.current]) return;
  pauseClientVideo();
  state.current = clamp(Math.min(state.current + 1, state.unlocked), 0, cases.length - 1);
  state.talkIndex = 0;
  state.videoLine = 0;
  setTab("calc");
  render();
});

els.restart.addEventListener("click", restart);
els.exportCsv.addEventListener("click", exportCsv);
els.exportJson.addEventListener("click", exportJson);
els.exportHtml.addEventListener("click", exportHtmlReport);
els.clearReports.addEventListener("click", () => {
  if (!state.teacherOpen) return;
  if (confirm("Deseja apagar os relatórios salvos neste navegador? Essa ação remove o histórico local das equipes.")) {
    saveReports([]);
    renderReports();
  }
});

setTab("calc");
render();
