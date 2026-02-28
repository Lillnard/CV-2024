// script.js
const ModoDark = document.querySelector('.modo-dark');
const langBtn = document.getElementById('langBtn');
const langLabel = document.getElementById('langLabel');
const btnPdf = document.getElementById('btnPdf');
const btnPdfTop = document.getElementById('btnPdfTop');

let moon = document.getElementById('moon');
let sun = document.getElementById('sun');
let body = document.querySelector('body');
let container = document.querySelector('.container');
let langMode = 'pt'; // começa em PT

// Dicionário de tradução (chaves = data-i18n)
const i18n = {
  pt: {
    dadosPessoais: "Dados Pessoais",
    cel: "Cel. / WhatsApp:",
    nasc: "Data de nascimento:",
    nascData: "24/03/1994",
    cidade: "Cidade:",
    portfolio: "Portfólio:",
    formacao: "Formação Acadêmica",
    estacio: "Universidade Estácio",
    ads: "Análise e Desenvolvimento de Sistemas - Cursando",
    resumo: "Resumo Profissional",
    resumoTxt:
      "Profissional com mais de 15 anos de carreira, com experiência em trabalho em equipe, organização de processos e resolução de problemas. <br><br>" +
      "Em transição de carreira para a área da tecnologia, atualmente estou cursando Análise e Desenvolvimento de Sistemas (ADS), com foco em desenvolvimento web e backend. <br><br>" +
      "Possuo conhecimento em HTML, CSS e JavaScript, Power BI, Python e bancos de dados SQL e NoSQL.",
    principaisCompetencias: "Principais Competências:",
    competenciasTxt:
      "Facilidade de aprendizado, responsabilidade, comprometimento, boa comunicação, criatividade, inteligência emocional, adaptabilidade, raciocínio rápido, pensamento lógico, tomada de decisão e resolução de problemas.",
    objetivo: "Objetivo Profissional",
    objetivoTxt:
      "Iniciar minha carreira na área de desenvolvimento web, colocando em prática meus conhecimentos acadêmicos, adquirindo e desenvolvendo as minhas habilidades técnicas e contribuindo para o crescimento da equipe e da empresa.",
    experiencia: "Experiência Profissional",
    operlogEmpresa: "OPERLOG - LOGÍSTICA E TRANSPORTE (05/2024 - ATUALMENTE)",
    cargo: "Cargo:",
    cargoOperlog: "Líder Operacional",
    operlog1: "- Liderança e organização de equipe operacional, com foco em padronização de processos, análise de indicadores e melhoria contínua",
    operlog2: "- Acompanhamento de processos de recebimento, armazenagem, separação e expedição de mercadorias",
    operlog3: "- Garantia do cumprimento de normas de segurança, organização do ambiente de trabalho e boas práticas operacionais",
    operlog4: "- Comunicação constante com diferentes áreas, garantindo alinhamento de demandas, prazos e prioridades",
    homefastEmpresa: "HOME FAST IMÓVEIS (06/2018 - 02/2024)",
    cargoHomefast: "Corretor Imobiliário",
    home1: "- Prospecção de imóveis e clientes",
    home2: "- Atendimento consultivo, a fim de entender e analisar a necessidade de cada cliente",
    home3: "- Organização, padronização e manutenção de informações de imóveis, contratos e clientes",
    home4: "- Acompanhamento de processos ponta a ponta, garantindo cumprimento de prazos e qualidade nas entregas",
    competenciasDesenv: "Competências desenvolvidas:",
    homeComp: "Análise de requisitos, organização de dados e informações, comunicação assertiva, foco em experiência do cliente, gestão de processos e prazos",
    codigoEmpresa: "CÓDIGO IMÓVEIS (01/2008 - 06/2018)",
    cargos: "Cargos:",
    cargoCodigo: "Office-boy, Auxiliar Administrativo e Corretor Imobiliário",
    cod1: "- Cadastro, atualização e organização de dados de imóveis em sistemas internos e site da empresa",
    cod2: "- Apoio administrativo, controle de informações, documentos e contratos",
    cod3: "- Atendimento ao cliente e suporte na resolução de demandas e dúvidas",
    cod4: "- Realização de vistorias técnicas e registro de informações operacionais",
    codComp: "Organização, atenção aos detalhes, documentação de processos, atendimento ao cliente, controle de informações",
    cursos: "Cursos e Certificações",
    bradesco: "Bradesco - GenAI & Dados",
    cursando: "Cursando",
    bradescoTxt: "- Python para analisar e organizar dados, usando inteligência artificial generativa, SQL, Excel, Power Query e Microsoft Copilot",
    vivo: "VIVO: Python A.I. BackEnd Developer",
    concluidoEm: "Concluído em",
    vivo1: "- Introdução à linguagem de programação Python - Nível intermediário",
    vivo2: "- Utilização dos frameworks FastAPI e LangChain",
    vivo3: "- Desenvolvimento de APIs com FastAPI, Python e Docker",
    vivo4: "- Introdução aos pilares da Inteligência Artificial",
    pda: "Python Data Analytics",
    pda1: "- Introdução à linguagem de programação Python - Nível básico",
    pda2: "- SQL e NoSQL",
    pda3: "- Análise de dados com Power BI",
    pda4: "- Fundamentos e técnicas de Machine Learning",
    angular: "Desenvolvimento front-end com Angular",
    angular1: "- Fundamentos do framework Angular",
    angular2: "- Utilização das linguagens JavaScript e TypeScript - Nível avançado",
    jogos: "Desenvolvimento de Jogos",
    jogos1: "- Princípios do desenvolvimento de jogos",
    jogos2: "- Utilização de HTML, CSS e JavaScript - Nível intermediário",
    bootcamp: "Bootcamp Programação do Zero",
    bootcamp1: "- Introdução à lógica de programação",
    bootcamp2: "- Introdução ao HTML, CSS e JavaScript - Nível básico",
    perito: "Perito Judicial",
    tti: "Técnico em Transações Imobiliárias",
    baixarPdf: "Baixar PDF",
    pdfHint: "Dica: na janela de impressão, selecione “Salvar como PDF”."
  },

  en: {
    dadosPessoais: "Personal Information",
    cel: "Phone / WhatsApp:",
    nasc: "Date of birth:",
    nascData: "03/24/1994",
    cidade: "City:",
    portfolio: "Portfolio:",
    formacao: "Education",
    estacio: "Estácio University",
    ads: "Systems Analysis and Development (in progress)",
    resumo: "Professional Summary",
    resumoTxt:
      "Professional with over 15 years of experience, skilled in teamwork, process organization, and problem-solving. <br><br>" +
      "Currently transitioning into the tech field and studying Systems Analysis and Development, focused on web development and backend. <br><br>" +
      "Knowledge in HTML, CSS and JavaScript, Power BI, Python, and SQL/NoSQL databases.",
    principaisCompetencias: "Key Skills:",
    competenciasTxt:
      "Fast learner, responsible, committed, strong communication, creativity, emotional intelligence, adaptability, quick reasoning, logical thinking, decision-making, and problem-solving.",
    objetivo: "Career Objective",
    objetivoTxt:
      "Start my career in web development by applying my academic knowledge, improving my technical skills, and contributing to the growth of the team and the company.",
    experiencia: "Work Experience",
    operlogEmpresa: "OPERLOG - LOGISTICS & TRANSPORT (05/2024 - PRESENT)",
    cargo: "Position:",
    cargoOperlog: "Operations Team Lead",
    operlog1: "- Team leadership and operational organization, focused on process standardization, KPI analysis, and continuous improvement",
    operlog2: "- Monitoring inbound, storage, picking, and shipping processes",
    operlog3: "- Ensuring safety standards, workplace organization, and operational best practices",
    operlog4: "- Constant communication with different areas to align demands, deadlines, and priorities",
    homefastEmpresa: "HOME FAST REAL ESTATE (06/2018 - 02/2024)",
    cargoHomefast: "Real Estate Agent",
    home1: "- Property and client prospecting",
    home2: "- Consultative customer service to understand and analyze each client's needs",
    home3: "- Organizing, standardizing, and maintaining property, contract, and client information",
    home4: "- End-to-end process follow-up, ensuring deadlines and quality delivery",
    competenciasDesenv: "Skills developed:",
    homeComp: "Requirements analysis, data and information organization, assertive communication, customer experience focus, process and deadline management",
    codigoEmpresa: "CÓDIGO REAL ESTATE (01/2008 - 06/2018)",
    cargos: "Roles:",
    cargoCodigo: "Office assistant, Administrative Assistant, and Real Estate Agent",
    cod1: "- Registering, updating, and organizing property data in internal systems and company website",
    cod2: "- Administrative support, controlling information, documents, and contracts",
    cod3: "- Customer service and support for questions and issue resolution",
    cod4: "- Conducting technical inspections and recording operational information",
    codComp: "Organization, attention to detail, process documentation, customer service, information control",
    cursos: "Courses & Certifications",
    bradesco: "Bradesco - GenAI & Data",
    cursando: "In progress",
    bradescoTxt: "- Python for data analysis and organization using generative AI, SQL, Excel, Power Query and Microsoft Copilot",
    vivo: "VIVO: Python A.I. Backend Developer",
    concluidoEm: "Completed in",
    vivo1: "- Python programming introduction (intermediate)",
    vivo2: "- Using FastAPI and LangChain frameworks",
    vivo3: "- API development with FastAPI, Python and Docker",
    vivo4: "- Introduction to the pillars of Artificial Intelligence",
    pda: "Python Data Analytics",
    pda1: "- Python programming introduction (basic)",
    pda2: "- SQL and NoSQL",
    pda3: "- Data analysis with Power BI",
    pda4: "- Machine Learning fundamentals and techniques",
    angular: "Front-end development with Angular",
    angular1: "- Angular framework fundamentals",
    angular2: "- JavaScript and TypeScript (advanced)",
    jogos: "Game Development",
    jogos1: "- Game development principles",
    jogos2: "- HTML, CSS and JavaScript (intermediate)",
    bootcamp: "Programming Bootcamp: From Zero",
    bootcamp1: "- Introduction to programming logic",
    bootcamp2: "- Intro to HTML, CSS and JavaScript (basic)",
    perito: "Court Expert (Perito Judicial)",
    tti: "Real Estate Transactions Technician",
    baixarPdf: "Download PDF",
    pdfHint: "Tip: in the print window, choose “Save as PDF”."
  }
};

// Dark mode
ModoDark.addEventListener('click', () => {
  toggleDarkMode();
});

function toggleDarkMode(){
  moon.classList.toggle('hide');
  sun.classList.toggle('hide');
  ModoDark.classList.toggle('dark');
  body.classList.toggle('dark');
  container.classList.toggle('dark');

  // mantém o botão idioma acompanhando o tema
  langBtn.classList.toggle('dark');
}

// Idioma
langBtn.addEventListener('click', () => {
  langMode = (langMode === 'pt') ? 'en' : 'pt';
  applyLanguage(langMode);

  // label mostra o "próximo" idioma
  langLabel.textContent = (langMode === 'pt') ? 'EN' : 'PT-BR';
  document.documentElement.lang = (langMode === 'pt') ? 'pt-br' : 'en';
});

function applyLanguage(lang){
  const dict = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!dict[key]) return;
    el.innerHTML = dict[key];
  });
}

// ✅ PDF (topo e final) - offline/nativo
function printPdf(){
  window.print();
}

btnPdf.addEventListener('click', printPdf);
btnPdfTop.addEventListener('click', printPdf);

// inicia em PT
applyLanguage('pt');
langLabel.textContent = 'EN';