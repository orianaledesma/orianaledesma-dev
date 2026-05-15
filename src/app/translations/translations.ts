import { Lang } from '../models/language.model';

// ─── Shape ────────────────────────────────────────────────────────────────────

interface NavT {
  links: { label: string; fragment: string }[];
  cta: string;
}

interface HeroT {
  badge: string;
  h1: string;
  subheadline: string;
  tagline: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

interface ServiceCardT {
  label: string;
  title: string;
  price: string;
  for: string;
  features: string[];
  cta: string;
}

interface ServicesT {
  h2: string;
  sub: string;
  cards: ServiceCardT[];
}

interface WorkT {
  sectionLabel: string;
  h2: string;
}

interface FaqItemT { question: string; answer: string; }

interface FaqT {
  h2: string;
  items: FaqItemT[];
}

interface ContactFormT {
  nameLbl: string;
  namePlaceholder: string;
  nameRequired: string;
  nameMin: string;
  nameMax: string;
  emailLbl: string;
  emailInvalid: string;
  emailRequired: string;
  messageLbl: string;
  messagePlaceholder: string;
  messageRequired: string;
  messageMin: string;
  messageMax: string;
  success: string;
  error: string;
  rateLimit: string;
  sending: string;
  submit: string;
}

interface ContactT {
  h2: string;
  sub: string;
  calendlyCta: string;
  separator: string;
  form: ContactFormT;
  footer: string;
}

interface WhyMeT {
  h2: string;
  bullets: string[];
}

interface AvailabilitySlotT { label: string; detail: string; open: boolean; }

interface AvailabilityT {
  sectionLabel: string;
  h2: string;
  slots: AvailabilitySlotT[];
  closing: string;
  cta: string;
}

interface TrustBarT { items: string[]; }

interface AppTranslations {
  nav: NavT;
  hero: HeroT;
  services: ServicesT;
  work: WorkT;
  faq: FaqT;
  contact: ContactT;
  whyMe: WhyMeT;
  availability: AvailabilityT;
  trustBar: TrustBarT;
}

// ─── English ──────────────────────────────────────────────────────────────────

const en: AppTranslations = {
  nav: {
    links: [
      { label: 'Services', fragment: 'services' },
      { label: 'Work',     fragment: 'work'     },
      { label: 'FAQ',      fragment: 'faq'      },
      { label: 'Contact',  fragment: 'contact'  },
    ],
    cta: 'Book a 20-min call',
  },

  hero: {
    badge: 'EU-based · Now booking small-business projects',
    h1: "You don't need a big agency. You need a site that works.",
    subheadline:
      'I help small companies look as solid online as they are in person. Fast to launch, easy to maintain, fair price.',
    tagline: '€800–2,000 · no surprise invoices',
    ctaPrimary: 'Book a 20-min call',
    ctaSecondary: 'See recent work',
  },

  services: {
    h2: 'Three ways to work together',
    sub: 'Fixed scope. Fixed price. No "it depends".',
    cards: [
      {
        label: 'MOST REQUESTED',
        title: 'The Creator Landing',
        price: 'From €1,200 · 14 days',
        for: 'Creators, coaches, infoproducers launching a product, course or waitlist.',
        features: [
          '1 high-converting landing page (Next.js or Astro)',
          'Payment / waitlist / booking integration (Stripe, Hotmart, Calendly)',
          'Mobile-first, <2s load, SEO-ready',
          'Analytics + 1 A/B test after launch',
        ],
        cta: 'Start my landing →',
      },
      {
        label: 'FOR TEAMS',
        title: 'Frontend Engineering on Demand',
        price: '€70/hr · monthly retainer from €2,400',
        for: 'SaaS teams of 2–20 that need senior frontend without the hiring overhead.',
        features: [
          'Angular, Next.js, React (5 years in production)',
          'Component systems, performance audits, migrations',
          'EU timezone, async-first, Slack/Linear/GitHub',
          'Code reviews included',
        ],
        cta: 'Request a scoping call →',
      },
      {
        label: 'NICHE',
        title: 'Travel-Tech Site + Content Kit',
        price: 'From €1,800 · 3–4 weeks',
        for: 'Boutique hotels, tour operators and travel brands that want a site built by someone who has actually stayed in them.',
        features: [
          'Booking-ready site (multilingual EN/ES)',
          '5 reels + 15 photos shot on location (optional)',
          '48h turnaround on content edits',
        ],
        cta: 'Tell me about your property →',
      },
    ],
  },

  work: {
    sectionLabel: 'Selected work',
    h2: 'Case studies',
  },

  faq: {
    h2: 'Before you reach out',
    items: [
      {
        question: "I'm a creator, not a tech person. Can you work with me?",
        answer:
          "Yes — that's the point. You give me your offer, your audience and your goals. I handle domain, hosting, payments, analytics. You get a site you can edit, not a black box.",
      },
      {
        question: "What if I don't have a designer?",
        answer:
          "Design is included in the Creator Landing. I've been shipping interfaces for 5 years and running my own brand for 5 — I know what converts in LATAM and in the EU.",
      },
      {
        question: 'How fast can you actually deliver in 14 days?',
        answer:
          "Scope is fixed and small on purpose. One landing, one clear goal, one integration. No feature creep. That's how the timeline holds.",
      },
      {
        question: 'Do you work in Spanish or English?',
        answer:
          "Both, natively. I'm Argentine, based in Lithuania. Calls, docs and code comments in whichever you prefer.",
      },
      {
        question: 'What do you NOT do?',
        answer:
          "Full apps from scratch with vague scope. Logos. SEO-only projects. Anything where \"we'll figure it out as we go.\"",
      },
      {
        question: "What's the payment structure?",
        answer: '50% to start, 50% on delivery. Stripe or SEPA. Invoice from the EU.',
      },
      {
        question: 'What if I need changes after launch?',
        answer: '14 days of revisions included. After that, hourly or a small retainer.',
      },
    ],
  },

  contact: {
    h2: 'Ship something that actually converts.',
    sub: 'Tell me about your project in 3 lines. I reply within 48h.',
    calendlyCta: 'Book a 20-min intro call',
    separator: 'or',
    form: {
      nameLbl: 'Name',
      namePlaceholder: 'Your name',
      nameRequired: 'Name is required',
      nameMin: 'At least 2 characters required',
      nameMax: 'Maximum 50 characters',
      emailLbl: 'Email',
      emailRequired: 'Email is required',
      emailInvalid: 'Enter a valid email address',
      messageLbl: 'Message',
      messagePlaceholder: 'Tell me about your project...',
      messageRequired: 'Message is required',
      messageMin: 'At least 10 characters required',
      messageMax: 'Maximum 500 characters',
      success: "Message sent! I'll reply within 24h.",
      error: 'Something went wrong. Email me directly at',
      rateLimit: 'Too many attempts. Please wait 10 minutes before trying again.',
      sending: 'Sending…',
      submit: 'Send a brief →',
    },
    footer:
      'Based in Kaunas, Lithuania · EU VAT invoicing · Working with clients in LATAM and the EU',
  },

  whyMe: {
    h2: 'Why founders and creators hire me',
    bullets: [
      'I ship production code for a 5M-user fintech by day.',
      'I built a travel brand from zero by night.',
      'I know what "converts" means because my own product depends on it.',
      'From the EU, for brands that value judgment over volume.',
      "I'd rather do fewer projects, better.",
    ],
  },

  availability: {
    sectionLabel: 'Availability',
    h2: 'Q2 2026 availability',
    slots: [
      { label: 'Creator Landings',    detail: '3 open · June delivery',  open: true  },
      { label: 'Retainer slot',       detail: '1 open · starting May',   open: true  },
      { label: 'Travel-Tech project', detail: 'By application',          open: false },
    ],
    closing: 'Booking closes June 15 or when filled.',
    cta: 'Claim a slot →',
  },

  trustBar: {
    items: [
      'Exploriando — travel platform built from zero to production',
      'Trade-Calendar — SaaS for traders, live in production',
      'You work directly with the person who builds it',
    ],
  },
};

// ─── Español ──────────────────────────────────────────────────────────────────

const es: AppTranslations = {
  nav: {
    links: [
      { label: 'Servicios', fragment: 'services' },
      { label: 'Proyectos', fragment: 'work'     },
      { label: 'FAQ',       fragment: 'faq'      },
      { label: 'Contacto',  fragment: 'contact'  },
    ],
    cta: 'Reservar llamada de 20 min',
  },

  hero: {
    badge: 'Desde la UE · Tomando proyectos para pequeñas empresas',
    h1: 'No necesitás una agencia grande. Necesitás un sitio que funcione.',
    subheadline:
      'Ayudo a pequeñas empresas a verse online tan sólidas como son en persona. Rápido de lanzar, fácil de mantener, precio justo.',
    tagline: '€800–2.000 · sin facturas sorpresa',
    ctaPrimary: 'Reservar llamada de 20 min',
    ctaSecondary: 'Ver trabajos recientes',
  },

  services: {
    h2: 'Tres formas de trabajar juntos',
    sub: 'Alcance fijo. Precio fijo. Sin "depende".',
    cards: [
      {
        label: 'MÁS SOLICITADO',
        title: 'La Landing del Creador',
        price: 'Desde €1.200 · 14 días',
        for: 'Creadores, coaches e infoproductores que lanzan un producto, curso o lista de espera.',
        features: [
          '1 landing de alta conversión (Next.js o Astro)',
          'Integración de pago / lista de espera / reserva (Stripe, Hotmart, Calendly)',
          'Mobile-first, <2s de carga, SEO listo',
          'Analytics + 1 prueba A/B post-lanzamiento',
        ],
        cta: 'Empezar mi landing →',
      },
      {
        label: 'PARA EQUIPOS',
        title: 'Ingeniería Frontend on Demand',
        price: '€70/hora · retainer mensual desde €2.400',
        for: 'Equipos SaaS de 2 a 20 personas que necesitan frontend senior sin el costo de contratación.',
        features: [
          'Angular, Next.js, React (5 años en producción)',
          'Sistemas de componentes, auditorías de rendimiento, migraciones',
          'Zona horaria UE, async-first, Slack/Linear/GitHub',
          'Code reviews incluidos',
        ],
        cta: 'Solicitar una llamada de alcance →',
      },
      {
        label: 'NICHO',
        title: 'Sitio Travel-Tech + Kit de Contenido',
        price: 'Desde €1.800 · 3–4 semanas',
        for: 'Hoteles boutique, operadores de viajes y marcas de turismo que quieren un sitio construido por alguien que realmente los ha visitado.',
        features: [
          'Sitio listo para reservas (multilingüe EN/ES)',
          '5 reels + 15 fotos tomadas en el lugar (opcional)',
          'Turnaround de 48h para ediciones de contenido',
        ],
        cta: 'Contame sobre tu propiedad →',
      },
    ],
  },

  work: {
    sectionLabel: 'Trabajo seleccionado',
    h2: 'Casos de estudio',
  },

  faq: {
    h2: 'Antes de contactarme',
    items: [
      {
        question: 'Soy creador/a, no técnico/a. ¿Podés trabajar conmigo?',
        answer:
          'Sí — para eso está. Vos me das tu oferta, tu audiencia y tus objetivos. Yo me encargo del dominio, hosting, pagos y analytics. Obtenés un sitio que podés editar, no una caja negra.',
      },
      {
        question: '¿Qué pasa si no tengo diseñador/a?',
        answer:
          'El diseño está incluido en la Creator Landing. Llevo 5 años haciendo interfaces y 5 administrando mi propia marca — sé qué convierte en LATAM y en la UE.',
      },
      {
        question: '¿Cómo podés entregar en 14 días?',
        answer:
          'El alcance es fijo y chico a propósito. Una landing, un objetivo claro, una integración. Sin scope creep. Así se mantiene el plazo.',
      },
      {
        question: '¿Trabajás en español o inglés?',
        answer:
          'En los dos, con fluidez nativa. Soy argentina, vivo en Lituania. Llamadas, documentos y comentarios de código en el que prefieras.',
      },
      {
        question: '¿Qué NO hacés?',
        answer:
          'Apps completas desde cero con alcance vago. Logos. Proyectos solo de SEO. Cualquier cosa donde «lo vamos viendo».',
      },
      {
        question: '¿Cómo es la estructura de pago?',
        answer: '50% para empezar, 50% en la entrega. Stripe o SEPA. Factura desde la UE.',
      },
      {
        question: '¿Qué pasa si necesito cambios después del lanzamiento?',
        answer: '14 días de revisiones incluidos. Después, por hora o retainer pequeño.',
      },
    ],
  },

  contact: {
    h2: 'Lanzá algo que realmente convierta.',
    sub: 'Contame tu proyecto en 3 líneas. Respondo en menos de 48h.',
    calendlyCta: 'Reservar una llamada de 20 min',
    separator: 'o',
    form: {
      nameLbl: 'Nombre',
      namePlaceholder: 'Tu nombre',
      nameRequired: 'El nombre es obligatorio',
      nameMin: 'Mínimo 2 caracteres',
      nameMax: 'Máximo 50 caracteres',
      emailLbl: 'Email',
      emailRequired: 'El email es obligatorio',
      emailInvalid: 'Ingresá un email válido',
      messageLbl: 'Mensaje',
      messagePlaceholder: 'Contame tu proyecto...',
      messageRequired: 'El mensaje es obligatorio',
      messageMin: 'Mínimo 10 caracteres',
      messageMax: 'Máximo 500 caracteres',
      success: '¡Mensaje enviado! Respondo en menos de 48h.',
      error: 'Algo salió mal. Escribime directamente a',
      rateLimit: 'Demasiados intentos. Por favor esperá 10 minutos antes de volver a intentarlo.',
      sending: 'Enviando…',
      submit: 'Enviar propuesta →',
    },
    footer:
      'Basada en Vilnius, Lituania · Facturación con IVA UE · Trabajo con clientes en LATAM y la UE',
  },

  whyMe: {
    h2: 'Por qué los founders y creadores me contratan',
    bullets: [
      'De día, shippeo código en producción para una fintech con 5M de usuarios.',
      'De noche, construí una marca de viajes desde cero.',
      'Sé lo que significa "convertir" porque mi propio producto depende de eso.',
      'Desde la UE, para marcas que valoran el criterio más que el volumen.',
      'Prefiero hacer menos proyectos, pero mejores.',
    ],
  },

  availability: {
    sectionLabel: 'Disponibilidad',
    h2: 'Disponibilidad Q2 2026',
    slots: [
      { label: 'Landings para Creadores', detail: '3 disponibles · entrega en junio', open: true  },
      { label: 'Slot de Retainer',        detail: '1 disponible · inicio en mayo',   open: true  },
      { label: 'Proyecto Travel-Tech',    detail: 'Por solicitud',                   open: false },
    ],
    closing: 'Reservas cerradas el 15 de junio o cuando se complete.',
    cta: 'Reservar un lugar →',
  },

  trustBar: {
    items: [
      'Exploriando — plataforma de viajes, de cero a producción',
      'Trade-Calendar — SaaS para traders, en producción',
      'Trabajás directo con quien lo construye',
    ],
  },
};

// ─── Português ────────────────────────────────────────────────────────────────

const pt: AppTranslations = {
  nav: {
    links: [
      { label: 'Serviços', fragment: 'services' },
      { label: 'Projetos', fragment: 'work'     },
      { label: 'FAQ',      fragment: 'faq'      },
      { label: 'Contato',  fragment: 'contact'  },
    ],
    cta: 'Agendar call de 20 min',
  },

  hero: {
    badge: 'Da UE · Aceitando projetos para pequenas empresas',
    h1: 'Você não precisa de uma agência grande. Precisa de um site que funcione.',
    subheadline:
      'Ajudo pequenas empresas a parecer tão sólidas online quanto são pessoalmente. Rápido de lançar, fácil de manter, preço justo.',
    tagline: '€800–2.000 · sem faturas surpresa',
    ctaPrimary: 'Agendar call de 20 min',
    ctaSecondary: 'Ver trabalhos recentes',
  },

  services: {
    h2: 'Três formas de trabalhar juntos',
    sub: 'Escopo fixo. Preço fixo. Sem "depende".',
    cards: [
      {
        label: 'MAIS SOLICITADO',
        title: 'A Landing do Criador',
        price: 'A partir de €1.200 · 14 dias',
        for: 'Criadores, coaches e infoprodutores lançando um produto, curso ou lista de espera.',
        features: [
          '1 landing page de alta conversão (Next.js ou Astro)',
          'Integração de pagamento / lista de espera / reserva (Stripe, Hotmart, Calendly)',
          'Mobile-first, <2s de carregamento, SEO pronto',
          'Analytics + 1 teste A/B após o lançamento',
        ],
        cta: 'Começar minha landing →',
      },
      {
        label: 'PARA EQUIPES',
        title: 'Engenharia Frontend sob Demanda',
        price: '€70/hora · retainer mensal a partir de €2.400',
        for: 'Equipes SaaS de 2 a 20 pessoas que precisam de frontend sênior sem o custo de contratação.',
        features: [
          'Angular, Next.js, React (5 anos em produção)',
          'Sistemas de componentes, auditorias de performance, migrações',
          'Fuso horário UE, async-first, Slack/Linear/GitHub',
          'Code reviews incluídos',
        ],
        cta: 'Solicitar uma chamada de escopo →',
      },
      {
        label: 'NICHO',
        title: 'Site Travel-Tech + Kit de Conteúdo',
        price: 'A partir de €1.800 · 3–4 semanas',
        for: 'Hotéis boutique, operadores de viagem e marcas de turismo que querem um site construído por alguém que realmente os visitou.',
        features: [
          'Site pronto para reservas (multilíngue EN/ES)',
          '5 reels + 15 fotos no local (opcional)',
          '48h de prazo para edições de conteúdo',
        ],
        cta: 'Me conta sobre sua propriedade →',
      },
    ],
  },

  work: {
    sectionLabel: 'Trabalho selecionado',
    h2: 'Estudos de caso',
  },

  faq: {
    h2: 'Antes de entrar em contato',
    items: [
      {
        question: 'Sou criador/a, não técnico/a. Você consegue trabalhar comigo?',
        answer:
          'Sim — é exatamente para isso. Você me dá sua oferta, seu público e seus objetivos. Eu cuido do domínio, hospedagem, pagamentos e analytics. Você recebe um site que consegue editar, não uma caixa preta.',
      },
      {
        question: 'E se eu não tiver designer?',
        answer:
          'O design está incluído na Creator Landing. Tenho 5 anos entregando interfaces e 5 gerenciando minha própria marca — sei o que converte no LATAM e na UE.',
      },
      {
        question: 'Como você realmente entrega em 14 dias?',
        answer:
          'O escopo é fixo e pequeno de propósito. Uma landing, um objetivo claro, uma integração. Sem feature creep. É assim que o prazo se mantém.',
      },
      {
        question: 'Você trabalha em português ou inglês?',
        answer:
          'Nos dois, com fluência nativa. Sou argentina, morando na Lituânia. Chamadas, documentos e comentários de código no idioma que preferir.',
      },
      {
        question: 'O que você NÃO faz?',
        answer:
          "Apps completos do zero com escopo vago. Logos. Projetos só de SEO. Qualquer coisa em que 'a gente vai descobrindo'.",
      },
      {
        question: 'Qual é a estrutura de pagamento?',
        answer: '50% para começar, 50% na entrega. Stripe ou SEPA. Nota fiscal da UE.',
      },
      {
        question: 'E se eu precisar de alterações após o lançamento?',
        answer: '14 dias de revisões incluídos. Depois, por hora ou um pequeno retainer.',
      },
    ],
  },

  contact: {
    h2: 'Lance algo que realmente converta.',
    sub: 'Me conta seu projeto em 3 linhas. Respondo em até 48h.',
    calendlyCta: 'Agendar uma chamada de 20 min',
    separator: 'ou',
    form: {
      nameLbl: 'Nome',
      namePlaceholder: 'Seu nome',
      nameRequired: 'O nome é obrigatório',
      nameMin: 'Mínimo 2 caracteres',
      nameMax: 'Máximo 50 caracteres',
      emailLbl: 'Email',
      emailRequired: 'O email é obrigatório',
      emailInvalid: 'Digite um email válido',
      messageLbl: 'Mensagem',
      messagePlaceholder: 'Me conta seu projeto...',
      messageRequired: 'A mensagem é obrigatória',
      messageMin: 'Mínimo 10 caracteres',
      messageMax: 'Máximo 500 caracteres',
      success: 'Mensagem enviada! Respondo em até 48h.',
      error: 'Algo deu errado. Me escreva diretamente em',
      rateLimit: 'Muitas tentativas. Por favor aguarde 10 minutos antes de tentar novamente.',
      sending: 'Enviando…',
      submit: 'Enviar proposta →',
    },
    footer:
      'Baseada em Vilnius, Lituânia · Faturamento com IVA UE · Trabalho com clientes no LATAM e na UE',
  },

  whyMe: {
    h2: 'Por que founders e criadores me contratam',
    bullets: [
      'De dia, entrego código em produção para uma fintech com 5M de usuários.',
      'À noite, construí uma marca de viagens do zero.',
      'Sei o que significa "converter" porque meu próprio produto depende disso.',
      'Baseada na UE, para marcas que valorizam julgamento acima de volume.',
      'Prefiro fazer menos projetos, melhor feitos.',
    ],
  },

  availability: {
    sectionLabel: 'Disponibilidade',
    h2: 'Disponibilidade Q2 2026',
    slots: [
      { label: 'Landings para Criadores', detail: '3 abertas · entrega em junho', open: true  },
      { label: 'Vaga de Retainer',        detail: '1 aberta · início em maio',   open: true  },
      { label: 'Projeto Travel-Tech',     detail: 'Por inscrição',               open: false },
    ],
    closing: 'Reservas encerram em 15 de junho ou quando preenchido.',
    cta: 'Reservar uma vaga →',
  },

  trustBar: {
    items: [
      'Exploriando — plataforma de viagens, do zero à produção',
      'Trade-Calendar — SaaS para traders, em produção',
      'Você fala direto com quem constrói',
    ],
  },
};

// ─── Lietuvių ─────────────────────────────────────────────────────────────────

const lt: AppTranslations = {
  nav: {
    links: [
      { label: 'Paslaugos', fragment: 'services' },
      { label: 'Projektai', fragment: 'work'     },
      { label: 'DUK',       fragment: 'faq'      },
      { label: 'Kontaktai', fragment: 'contact'  },
    ],
    cta: 'Rezervuoti 20 min skambutį',
  },

  hero: {
    badge: 'Iš ES · Priimami mažų įmonių projektai',
    h1: 'Jums nereikia didelės agentūros. Jums reikia veikiančios svetainės.',
    subheadline:
      'Padedu mažoms įmonėms internete atrodyti taip pat patikimai, kaip jos atrodo gyvai. Greitai paleidžiama, lengva prižiūrėti, sąžininga kaina.',
    tagline: '€800–2 000 · jokių netikėtų sąskaitų',
    ctaPrimary: 'Rezervuoti 20 min skambutį',
    ctaSecondary: 'Žiūrėti darbus',
  },

  services: {
    h2: 'Trys bendradarbiavimo būdai',
    sub: 'Fiksuota apimtis. Fiksuota kaina. Be „priklauso nuo aplinkybių".',
    cards: [
      {
        label: 'POPULIARIAUSIAS',
        title: 'Kūrėjo nukreipimo puslapis',
        price: 'Nuo €1 200 · 14 dienų',
        for: 'Kūrėjams, treneriams ir infoproduktų pardavėjams, pristatantiems produktą, kursą ar laukimo sąrašą.',
        features: [
          '1 didelės konversijos nukreipimo puslapis (Next.js arba Astro)',
          'Mokėjimo / laukimo sąrašo / rezervacijos integracija (Stripe, Hotmart, Calendly)',
          'Mobile-first, <2s įkėlimas, SEO paruoštas',
          'Analitika + 1 A/B testas po paleidimo',
        ],
        cta: 'Kurti savo nukreipimo puslapį →',
      },
      {
        label: 'KOMANDOMS',
        title: 'Frontend inžinerija pagal poreikį',
        price: '€70/val. · mėnesinis retaineris nuo €2 400',
        for: 'SaaS komandoms nuo 2 iki 20 žmonių, kurioms reikia vyriausiojo frontend\'o be samdymo išlaidų.',
        features: [
          'Angular, Next.js, React (5 metai produkcijoje)',
          'Komponentų sistemos, veikimo auditas, migracijos',
          'ES laiko juosta, async-first, Slack/Linear/GitHub',
          'Kodo peržiūros įtrauktos',
        ],
        cta: 'Užsisakyti apimties aptarimo skambutį →',
      },
      {
        label: 'NIŠA',
        title: 'Kelionių svetainė + turinio rinkinys',
        price: 'Nuo €1 800 · 3–4 savaitės',
        for: 'Butikiniai viešbučiai, kelionių operatoriai ir kelionių prekių ženklai, norintys svetainės, sukurtos žmogaus, kuris iš tikrųjų juos aplankė.',
        features: [
          'Svetainė, paruošta rezervacijoms (daugiakalbė EN/ES)',
          '5 reels + 15 nuotraukų, darytų vietoje (neprivaloma)',
          '48 val. turnaround turinio redagavimui',
        ],
        cta: 'Papasakokite apie savo vietą →',
      },
    ],
  },

  work: {
    sectionLabel: 'Atrinkti darbai',
    h2: 'Atvejų studijos',
  },

  faq: {
    h2: 'Prieš susisiekiant',
    items: [
      {
        question: 'Esu kūrėjas, ne techninis žmogus. Ar galite dirbti su manimi?',
        answer:
          'Taip — tam ir skirta. Jūs duodate savo pasiūlymą, auditoriją ir tikslus. Aš rūpinuosi domenu, hostingu, mokėjimais ir analitika. Gausite svetainę, kurią galėsite redaguoti, o ne juodą dėžę.',
      },
      {
        question: 'Ką daryti, jei neturiu dizainerio?',
        answer:
          'Dizainas įtrauktas į kūrėjo nukreipimo puslapio paketą. Praleidau 5 metus kuriant sąsajas ir 5 metus valdydama savo prekės ženklą — žinau, kas konvertuoja LATAM ir ES.',
      },
      {
        question: 'Kaip galite pristatyti per 14 dienų?',
        answer:
          'Apimtis yra fiksuota ir maža tyčia. Vienas nukreipimo puslapis, vienas aiškus tikslas, viena integracija. Be funkcijų kaupimo. Taip ir laikomasi terminų.',
      },
      {
        question: 'Kuria kalba dirbate?',
        answer:
          'Anglų kalba yra mano pagrindinė profesinės komunikacijos kalba, tačiau susisiekti galite lietuviškai. Esu argentinietė, gyvenanti Kaune. Skambučiai, dokumentai ir kodo komentarai — kuria kalba pageidaujate.',
      },
      {
        question: 'Ko NEDAROTE?',
        answer:
          'Pilnų programėlių nuo nulio su miglota apimtimi. Logotipų. Tik SEO projektų. Bet ko, kur „kaip nors išsiaiškinsime".',
      },
      {
        question: 'Kokia mokėjimo struktūra?',
        answer: '50% pradžioje, 50% pristatymo metu. Stripe arba SEPA. Sąskaita faktūra iš ES.',
      },
      {
        question: 'Ką daryti, jei po paleidimo prireiks pakeitimų?',
        answer: 'Įtrauktos 14 dienų peržiūros. Po to — valandiniu tarifu arba mažu retaineriu.',
      },
    ],
  },

  contact: {
    h2: 'Sukurkite kažką, kas iš tikrųjų konvertuoja.',
    sub: 'Papasakokite apie projektą 3 eilutėmis. Atsakau per 48 val.',
    calendlyCta: 'Užsisakyti 20 min pažintinį skambutį',
    separator: 'arba',
    form: {
      nameLbl: 'Vardas',
      namePlaceholder: 'Jūsų vardas',
      nameRequired: 'Vardas privalomas',
      nameMin: 'Būtini mažiausiai 2 simboliai',
      nameMax: 'Daugiausiai 50 simbolių',
      emailLbl: 'El. paštas',
      emailRequired: 'El. paštas privalomas',
      emailInvalid: 'Įveskite tinkamą el. pašto adresą',
      messageLbl: 'Žinutė',
      messagePlaceholder: 'Papasakokite apie projektą...',
      messageRequired: 'Žinutė privaloma',
      messageMin: 'Būtini mažiausiai 10 simbolių',
      messageMax: 'Daugiausiai 500 simbolių',
      success: 'Žinutė išsiųsta! Atsakysiu per 48 val.',
      error: 'Kažkas nepavyko. Rašykite tiesiogiai',
      rateLimit: 'Per daug bandymų. Palaukite 10 minučių ir bandykite dar kartą.',
      sending: 'Siunčiama…',
      submit: 'Siųsti užklausą →',
    },
    footer:
      'Įsikūrusi Kaune, Lietuva · ES PVM sąskaita faktūra · Dirbu su klientais LATAM ir ES',
  },

  whyMe: {
    h2: 'Kodėl steigėjai ir kūrėjai mane samdo',
    bullets: [
      'Dieną rašau produkcinį kodą fintech įmonei su 5M vartotojų.',
      'Naktį sukūriau kelionių prekės ženklą nuo nulio.',
      'Žinau, ką reiškia „konvertuoti" — nuo to priklauso ir mano produktas.',
      'Iš ES, prekės ženklams, vertinantiems sprendimus labiau nei apimtį.',
      'Verčiau darysiu mažiau projektų, bet geriau.',
    ],
  },

  availability: {
    sectionLabel: 'Prieinamumas',
    h2: 'Q2 2026 prieinamumas',
    slots: [
      { label: 'Kūrėjų landing page', detail: '3 laisvos vietos · pristatymas birželį', open: true  },
      { label: 'Retainerio vieta',             detail: '1 laisva vieta · pradžia gegužę',       open: true  },
      { label: 'Kelionių technologijų projektas', detail: 'Pagal paraišką',                     open: false },
    ],
    closing: 'Registracija baigiasi birželio 15 d. arba kai vietos užpildytos.',
    cta: 'Rezervuoti vietą →',
  },

  trustBar: {
    items: [
      'Exploriando — kelionių platforma nuo nulio iki produkcijos',
      'Trade-Calendar — SaaS prekiautojams, produkcijoje',
      'Dirbate tiesiogiai su kūrėju',
    ],
  },
};

// ─── Export ───────────────────────────────────────────────────────────────────

export const TRANSLATIONS: Record<Lang, AppTranslations> = { en, es, pt, lt };
