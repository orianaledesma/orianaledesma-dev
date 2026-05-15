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

interface ServicePrice {
  amount: string;
  scope?: string;
  timeline: string;
}

interface ServiceCardT {
  label: string;
  title: string;
  price: ServicePrice;
  for: string;
  features: string[];
  cta: string;
}

interface CarePlanT {
  label: string;
  title: string;
  price: ServicePrice;
  intro: string;
  features: string[];
  cta: string;
}

interface ServicesT {
  h2: string;
  sub: string;
  cards: ServiceCardT[];
  carePlan: CarePlanT;
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

interface TrustBarT { items: string[]; }

interface LeadMagnetT {
  h2: string;
  sub: string;
  emailPlaceholder: string;
  submit: string;
  sending: string;
  success: string;
  error: string;
  rateLimit: string;
  privacy: string;
  orEmail: string;
}

interface AppTranslations {
  nav: NavT;
  hero: HeroT;
  services: ServicesT;
  work: WorkT;
  faq: FaqT;
  contact: ContactT;
  whyMe: WhyMeT;
  trustBar: TrustBarT;
  leadMagnet: LeadMagnetT;
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
    h2: 'Pick what your business actually needs',
    sub: 'Fixed scope. Fixed price. No "it depends".',
    cards: [
      {
        label: 'START HERE',
        title: 'One-Page Site',
        price: { amount: '€800', timeline: 'ready in 1 week' },
        for: 'Small businesses that need to look professional and get found — fast.',
        features: [
          'One sharp page: what you do, why you, how to reach you',
          'Contact form or WhatsApp — leads land straight in your inbox',
          'A clear, mobile-first design that loads fast',
          'Found on Google for your name and what you offer',
        ],
        cta: 'Book a 20-min call',
      },
      {
        label: 'MOST REQUESTED',
        title: 'Multi-Page Website',
        price: { amount: '€1,500', timeline: 'ready in 2–3 weeks' },
        for: 'Established businesses that need services, proof and a way to take clients online.',
        features: [
          'Up to 5 pages: home, services, about, contact + one you choose',
          'Take bookings or deposits online — money in, no monthly platform fee',
          'You update text and photos yourself — no developer needed',
          'Built to rank on Google in your area',
        ],
        cta: 'Book a 20-min call',
      },
      {
        label: 'SELL ONLINE',
        title: 'Small Online Store',
        price: { amount: '€2,000', scope: 'up to 30 products', timeline: 'ready in 3–4 weeks' },
        for: 'Businesses ready to sell online without paying a platform a cut.',
        features: [
          'A clean store for a focused catalogue — up to 30 products',
          'Secure checkout — you keep the full margin',
          'Manage products and orders from one simple screen',
          'A launch plan + short video walkthrough, plus 3 months of Care Plan included',
        ],
        cta: 'Book a 20-min call',
      },
    ],
    carePlan: {
      label: 'AFTER LAUNCH',
      title: 'Care Plan',
      price: { amount: '€69', timeline: 'per month' },
      intro: "I keep it online and handle the small stuff so you don't.",
      features: [
        'Promo banners for special days and seasons',
        'Up to 3 small changes a month — text, prices, photos, a banner',
        'One full refresh per year included',
        'Cancel anytime',
      ],
      cta: 'Book a 20-min call',
    },
  },

  work: {
    sectionLabel: 'Selected work',
    h2: 'Case studies',
  },

  faq: {
    h2: 'The questions every owner asks me',
    items: [
      {
        question: 'How much does a website actually cost?',
        answer:
          'Between €800 and €2,000 for most small businesses, depending on pages and whether you sell online. You get the exact number before we start — no surprise invoices.',
      },
      {
        question: 'How long does it take?',
        answer:
          'A one-page site: about a week. A full multi-page site: two to three weeks. An online store: three to four. I tell you the date up front and stick to it.',
      },
      {
        question: 'What do I need to have ready?',
        answer:
          "Your logo if you have one, a few photos, and a rough idea of what you want to say. If you don't have copy or images, I'll help you sort it.",
      },
      {
        question: 'Can I update it myself later?',
        answer:
          'Yes. I build it so you can change text, prices and photos without calling a developer. I show you how before we finish.',
      },
      {
        question: 'What if I need changes after it launches?',
        answer:
          'Two weeks of tweaks are included after launch. After that, the Care Plan covers ongoing changes — or pay per change, no contract.',
      },
      {
        question: 'Do you work in my language?',
        answer:
          "English, Spanish and Portuguese, all fluent. Calls and messages in whichever you're comfortable with — I'm Argentine, based in the EU.",
      },
      {
        question: 'How do I pay?',
        answer:
          '50% to start, 50% when it goes live. Bank transfer or card. Proper invoice from the EU.',
      },
      {
        question: 'What do you NOT do?',
        answer:
          'Huge platforms with vague scope. Logos. Anything where the plan is "we\'ll figure it out as we go." I keep it focused so it actually ships.',
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
    h2: 'Why small businesses pick me over an agency',
    bullets: [
      'You talk to the person who builds it — not an account manager who relays messages.',
      'The price I quote is the price you pay. No "extras" invoice at the end.',
      'I take a few projects at a time, so yours gets real attention and ships on schedule.',
      'I build things that keep working: fast, easy to update, nothing you have to babysit.',
      'Real work in production — Exploriando and Trade-Calendar were built from zero, not slides.',
    ],
  },

  trustBar: {
    items: [
      'Exploriando — travel platform built from zero to production',
      'Trade-Calendar — SaaS for traders, live in production',
      'You work directly with the person who builds it',
    ],
  },

  leadMagnet: {
    h2: 'Not ready to talk yet?',
    sub: 'Get a free check of how your business shows up online — what works, what to fix. No pitch, just useful.',
    emailPlaceholder: 'Your email',
    submit: 'Send me the free check',
    sending: 'Sending…',
    success: "Got it. I'll send your check within 48h.",
    error: 'Something went wrong. Email me directly at',
    rateLimit: 'Too many attempts. Please wait 10 minutes before trying again.',
    privacy: 'No spam. Just your check, then nothing unless you ask.',
    orEmail: 'Or email me directly at',
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
    h2: 'Elegí lo que tu negocio realmente necesita',
    sub: 'Alcance fijo. Precio fijo. Sin "depende".',
    cards: [
      {
        label: 'EMPEZÁ ACÁ',
        title: 'Sitio de Una Página',
        price: { amount: '€800', timeline: 'listo en 1 semana' },
        for: 'Pequeños negocios que necesitan verse profesionales y aparecer — rápido.',
        features: [
          'Una página clara: qué hacés, por qué vos, cómo contactarte',
          'Formulario o WhatsApp — los contactos te llegan directo',
          'Diseño claro, mobile-first y que carga rápido',
          'Aparecés en Google por tu nombre y lo que ofrecés',
        ],
        cta: 'Reservar llamada de 20 min',
      },
      {
        label: 'MÁS SOLICITADO',
        title: 'Sitio Multi-Página',
        price: { amount: '€1.500', timeline: 'listo en 2–3 semanas' },
        for: 'Negocios establecidos que necesitan servicios, prueba y una forma de captar clientes online.',
        features: [
          'Hasta 5 páginas: inicio, servicios, sobre vos, contacto + una a elección',
          'Cobrá reservas o señas online — sin comisión mensual de plataforma',
          'Actualizás textos y fotos vos mismo — sin depender de un dev',
          'Preparado para posicionar en Google en tu zona',
        ],
        cta: 'Reservar llamada de 20 min',
      },
      {
        label: 'VENDER ONLINE',
        title: 'Tienda Online Chica',
        price: { amount: '€2.000', scope: 'hasta 30 productos', timeline: 'lista en 3–4 semanas' },
        for: 'Negocios listos para vender online sin que una plataforma se quede con una parte.',
        features: [
          'Una tienda limpia para un catálogo enfocado — hasta 30 productos',
          'Checkout seguro — te quedás con todo el margen',
          'Gestionás productos y pedidos desde una sola pantalla',
          'Plan de lanzamiento + video corto de tu sitio, más 3 meses de Care Plan incluidos',
        ],
        cta: 'Reservar llamada de 20 min',
      },
    ],
    carePlan: {
      label: 'DESPUÉS DEL LANZAMIENTO',
      title: 'Care Plan',
      price: { amount: '€69', timeline: 'por mes' },
      intro: 'Lo mantengo online y me ocupo de lo chico para que vos no tengas que hacerlo.',
      features: [
        'Banners de promo para fechas y temporadas especiales',
        'Hasta 3 cambios chicos por mes — textos, precios, fotos, un banner',
        'Un refresh completo por año incluido',
        'Cancelás cuando quieras',
      ],
      cta: 'Reservar llamada de 20 min',
    },
  },

  work: {
    sectionLabel: 'Trabajo seleccionado',
    h2: 'Casos de estudio',
  },

  faq: {
    h2: 'Las preguntas que todo dueño me hace',
    items: [
      {
        question: '¿Cuánto cuesta realmente un sitio web?',
        answer:
          'Entre €800 y €2.000 para la mayoría de los negocios chicos, según las páginas y si vendés online. Tenés el número exacto antes de empezar — sin facturas sorpresa.',
      },
      {
        question: '¿Cuánto tarda?',
        answer:
          'Un sitio de una página: una semana aprox. Un sitio multi-página: dos a tres semanas. Una tienda online: tres a cuatro. Te doy la fecha desde el arranque y la cumplo.',
      },
      {
        question: '¿Qué necesito tener listo?',
        answer:
          'Tu logo si tenés, algunas fotos, y una idea general de lo que querés decir. Si no tenés textos o imágenes, te ayudo a resolverlo.',
      },
      {
        question: '¿Puedo actualizarlo yo después?',
        answer:
          'Sí. Lo armo para que cambies textos, precios y fotos sin llamar a un dev. Te muestro cómo antes de terminar.',
      },
      {
        question: '¿Y si necesito cambios después del lanzamiento?',
        answer:
          'Dos semanas de ajustes incluidas tras el lanzamiento. Después, el Care Plan cubre los cambios — o pagás por cambio, sin contrato.',
      },
      {
        question: '¿Trabajás en mi idioma?',
        answer:
          'Inglés, español y portugués, con fluidez. Llamadas y mensajes en el que te sientas cómodo — soy argentina, basada en la UE.',
      },
      {
        question: '¿Cómo se paga?',
        answer:
          '50% para empezar, 50% cuando sale online. Transferencia o tarjeta. Factura desde la UE.',
      },
      {
        question: '¿Qué NO hacés?',
        answer:
          'Plataformas enormes con alcance vago. Logos. Cualquier cosa donde el plan sea «lo vamos viendo». Lo mantengo enfocado para que realmente salga.',
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
    h2: 'Por qué los negocios chicos me eligen antes que a una agencia',
    bullets: [
      'Hablás con la persona que lo construye — no con un intermediario que pasa mensajes.',
      'El precio que te paso es el que pagás. Sin factura de "extras" al final.',
      'Tomo pocos proyectos a la vez, así el tuyo recibe atención real y sale a tiempo.',
      'Construyo cosas que siguen funcionando: rápidas, fáciles de actualizar, sin sorpresas.',
      'Trabajo real en producción — Exploriando y Trade-Calendar nacieron de cero, no de slides.',
    ],
  },

  trustBar: {
    items: [
      'Exploriando — plataforma de viajes, de cero a producción',
      'Trade-Calendar — SaaS para traders, en producción',
      'Trabajás directo con quien lo construye',
    ],
  },

  leadMagnet: {
    h2: '¿Todavía no querés hablar?',
    sub: 'Llevate un check gratis de cómo se ve tu negocio online — qué funciona, qué mejorar. Sin venta, solo útil.',
    emailPlaceholder: 'Tu email',
    submit: 'Mandame el check gratis',
    sending: 'Enviando…',
    success: 'Listo. Te mando tu check en menos de 48h.',
    error: 'Algo salió mal. Escribime directamente a',
    rateLimit: 'Demasiados intentos. Por favor esperá 10 minutos antes de volver a intentarlo.',
    privacy: 'Sin spam. Solo tu check, después nada salvo que lo pidas.',
    orEmail: 'O escribime directamente a',
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
    h2: 'Escolha o que seu negócio realmente precisa',
    sub: 'Escopo fixo. Preço fixo. Sem "depende".',
    cards: [
      {
        label: 'COMECE AQUI',
        title: 'Site de Uma Página',
        price: { amount: '€800', timeline: 'pronto em 1 semana' },
        for: 'Pequenos negócios que precisam parecer profissionais e ser encontrados — rápido.',
        features: [
          'Uma página clara: o que você faz, por que você, como te contatar',
          'Formulário ou WhatsApp — os contatos chegam direto pra você',
          'Design claro, mobile-first e que carrega rápido',
          'Aparece no Google pelo seu nome e o que você oferece',
        ],
        cta: 'Agendar call de 20 min',
      },
      {
        label: 'MAIS SOLICITADO',
        title: 'Site Multi-Página',
        price: { amount: '€1.500', timeline: 'pronto em 2–3 semanas' },
        for: 'Negócios estabelecidos que precisam de serviços, prova e uma forma de captar clientes online.',
        features: [
          'Até 5 páginas: início, serviços, sobre, contato + uma à escolha',
          'Receba reservas ou sinais online — sem taxa mensal de plataforma',
          'Você atualiza textos e fotos sozinho — sem depender de um dev',
          'Preparado para ranquear no Google na sua região',
        ],
        cta: 'Agendar call de 20 min',
      },
      {
        label: 'VENDER ONLINE',
        title: 'Loja Online Pequena',
        price: { amount: '€2.000', scope: 'até 30 produtos', timeline: 'pronta em 3–4 semanas' },
        for: 'Negócios prontos para vender online sem que uma plataforma fique com uma parte.',
        features: [
          'Uma loja limpa para um catálogo focado — até 30 produtos',
          'Checkout seguro — você fica com toda a margem',
          'Gerencia produtos e pedidos de uma só tela',
          'Plano de lançamento + vídeo curto do seu site, mais 3 meses de Care Plan incluídos',
        ],
        cta: 'Agendar call de 20 min',
      },
    ],
    carePlan: {
      label: 'APÓS O LANÇAMENTO',
      title: 'Care Plan',
      price: { amount: '€69', timeline: 'por mês' },
      intro: 'Mantenho online e cuido do pequeno para você não precisar.',
      features: [
        'Banners de promo para datas e temporadas especiais',
        'Até 3 mudanças pequenas por mês — textos, preços, fotos, um banner',
        'Um refresh completo por ano incluído',
        'Cancela quando quiser',
      ],
      cta: 'Agendar call de 20 min',
    },
  },

  work: {
    sectionLabel: 'Trabalho selecionado',
    h2: 'Estudos de caso',
  },

  faq: {
    h2: 'As perguntas que todo dono me faz',
    items: [
      {
        question: 'Quanto custa de verdade um site?',
        answer:
          'Entre €800 e €2.000 para a maioria dos pequenos negócios, dependendo das páginas e se você vende online. Você tem o número exato antes de começar — sem faturas surpresa.',
      },
      {
        question: 'Quanto tempo leva?',
        answer:
          'Um site de uma página: cerca de uma semana. Um site multi-página: duas a três semanas. Uma loja online: três a quatro. Te dou a data no início e cumpro.',
      },
      {
        question: 'O que preciso ter pronto?',
        answer:
          'Seu logo se tiver, algumas fotos, e uma ideia geral do que quer dizer. Se não tiver textos ou imagens, te ajudo a resolver.',
      },
      {
        question: 'Posso atualizar sozinho depois?',
        answer:
          'Sim. Construo de forma que você mude textos, preços e fotos sem chamar um dev. Te mostro como antes de terminar.',
      },
      {
        question: 'E se eu precisar de mudanças após o lançamento?',
        answer:
          'Duas semanas de ajustes incluídas após o lançamento. Depois, o Care Plan cobre as mudanças — ou paga por mudança, sem contrato.',
      },
      {
        question: 'Você trabalha no meu idioma?',
        answer:
          'Inglês, espanhol e português, com fluência. Chamadas e mensagens no que você se sentir confortável — sou argentina, baseada na UE.',
      },
      {
        question: 'Como é o pagamento?',
        answer:
          '50% para começar, 50% quando vai ao ar. Transferência ou cartão. Nota fiscal da UE.',
      },
      {
        question: 'O que você NÃO faz?',
        answer:
          'Plataformas enormes com escopo vago. Logos. Qualquer coisa em que o plano seja "a gente vai descobrindo". Mantenho focado para realmente sair.',
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
    h2: 'Por que pequenos negócios me escolhem em vez de uma agência',
    bullets: [
      'Você fala com quem constrói — não com um intermediário que repassa mensagens.',
      'O preço que passo é o que você paga. Sem fatura de "extras" no final.',
      'Pego poucos projetos por vez, então o seu recebe atenção real e sai no prazo.',
      'Construo coisas que continuam funcionando: rápidas, fáceis de atualizar, sem dor de cabeça.',
      'Trabalho real em produção — Exploriando e Trade-Calendar nasceram do zero, não de slides.',
    ],
  },

  trustBar: {
    items: [
      'Exploriando — plataforma de viagens, do zero à produção',
      'Trade-Calendar — SaaS para traders, em produção',
      'Você fala direto com quem constrói',
    ],
  },

  leadMagnet: {
    h2: 'Ainda não quer conversar?',
    sub: 'Receba um check grátis de como seu negócio aparece online — o que funciona, o que melhorar. Sem venda, só útil.',
    emailPlaceholder: 'Seu e-mail',
    submit: 'Me envie o check grátis',
    sending: 'Enviando…',
    success: 'Pronto. Te envio seu check em até 48h.',
    error: 'Algo deu errado. Me escreva diretamente em',
    rateLimit: 'Muitas tentativas. Por favor aguarde 10 minutos antes de tentar novamente.',
    privacy: 'Sem spam. Só o seu check, depois nada a menos que peça.',
    orEmail: 'Ou me escreva diretamente em',
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
    h2: 'Pasirinkite tai, ko jūsų verslui iš tikrųjų reikia',
    sub: 'Fiksuota apimtis. Fiksuota kaina. Be „priklauso nuo aplinkybių".',
    cards: [
      {
        label: 'PRADĖKITE ČIA',
        title: 'Vieno puslapio svetainė',
        price: { amount: '€800', timeline: 'paruošta per 1 savaitę' },
        for: 'Mažoms įmonėms, kurioms reikia atrodyti profesionaliai ir būti randamoms — greitai.',
        features: [
          'Vienas aiškus puslapis: ką darote, kodėl jūs, kaip susisiekti',
          'Kontaktų forma arba WhatsApp — užklausos krenta tiesiai jums',
          'Aiškus, mobile-first dizainas, kuris greitai įsikelia',
          'Randami Google pagal jūsų vardą ir tai, ką siūlote',
        ],
        cta: 'Rezervuoti 20 min skambutį',
      },
      {
        label: 'POPULIARIAUSIAS',
        title: 'Kelių puslapių svetainė',
        price: { amount: '€1 500', timeline: 'paruošta per 2–3 savaites' },
        for: 'Įsitvirtinusiems verslams, kuriems reikia paslaugų, įrodymų ir būdo priimti klientus internetu.',
        features: [
          'Iki 5 puslapių: pradžia, paslaugos, apie, kontaktai + vienas pasirinktas',
          'Priimkite rezervacijas ar užstatus internetu — be mėnesinio platformos mokesčio',
          'Patys atnaujinate tekstus ir nuotraukas — be programuotojo',
          'Paruošta reitinguotis Google jūsų regione',
        ],
        cta: 'Rezervuoti 20 min skambutį',
      },
      {
        label: 'PARDUOTI INTERNETU',
        title: 'Maža internetinė parduotuvė',
        price: { amount: '€2 000', scope: 'iki 30 produktų', timeline: 'paruošta per 3–4 savaites' },
        for: 'Verslams, pasiruošusiems parduoti internetu nemokant platformai dalies nuo kiekvieno pardavimo.',
        features: [
          'Tvarkinga parduotuvė fokusuotam katalogui — iki 30 produktų',
          'Saugus atsiskaitymas — pasiliekate visą maržą',
          'Valdote produktus ir užsakymus iš vieno ekrano',
          'Paleidimo planas + trumpas svetainės vaizdo įrašas, plius 3 mėn. Care Plan įskaičiuota',
        ],
        cta: 'Rezervuoti 20 min skambutį',
      },
    ],
    carePlan: {
      label: 'PO PALEIDIMO',
      title: 'Care Plan',
      price: { amount: '€69', timeline: 'per mėnesį' },
      intro: 'Prižiūriu svetainę ir tvarkau smulkmenas, kad jums nereikėtų.',
      features: [
        'Akcijų baneriai ypatingoms dienoms ir sezonams',
        'Iki 3 nedidelių pakeitimų per mėnesį — tekstai, kainos, nuotraukos, baneris',
        'Vienas pilnas atnaujinimas per metus įskaičiuotas',
        'Atšaukiate bet kada',
      ],
      cta: 'Rezervuoti 20 min skambutį',
    },
  },

  work: {
    sectionLabel: 'Atrinkti darbai',
    h2: 'Atvejų studijos',
  },

  faq: {
    h2: 'Klausimai, kuriuos užduoda kiekvienas savininkas',
    items: [
      {
        question: 'Kiek iš tikrųjų kainuoja svetainė?',
        answer:
          'Nuo €800 iki €2 000 daugumai mažų verslų, priklausomai nuo puslapių skaičiaus ir ar parduodate internetu. Tikslų skaičių gaunate prieš pradedant — jokių netikėtų sąskaitų.',
      },
      {
        question: 'Kiek laiko užtrunka?',
        answer:
          'Vieno puslapio svetainė: maždaug savaitė. Kelių puslapių: dvi–trys savaitės. Internetinė parduotuvė: trys–keturios. Datą pasakau iš karto ir jos laikausi.',
      },
      {
        question: 'Ką turiu turėti paruošta?',
        answer:
          'Logotipą, jei turite, kelias nuotraukas ir apytikslę idėją, ką norite pasakyti. Jei neturite tekstų ar vaizdų, padėsiu tai sutvarkyti.',
      },
      {
        question: 'Ar galėsiu pats atnaujinti vėliau?',
        answer:
          'Taip. Kuriu taip, kad galėtumėte keisti tekstus, kainas ir nuotraukas nesikreipdami į programuotoją. Parodau, kaip, prieš baigdama.',
      },
      {
        question: 'O jei prireiks pakeitimų po paleidimo?',
        answer:
          'Dvi savaitės pataisymų įskaičiuotos po paleidimo. Po to Care Plan dengia pakeitimus — arba mokate už pakeitimą, be sutarties.',
      },
      {
        question: 'Ar dirbate mano kalba?',
        answer:
          'Angliškai, ispaniškai ir portugališkai, laisvai. Skambučiai ir žinutės ta kalba, su kuria jaučiatės patogiai — esu argentinietė, įsikūrusi ES.',
      },
      {
        question: 'Kaip vyksta mokėjimas?',
        answer:
          '50% pradžioje, 50% kai svetainė paleidžiama. Pavedimu ar kortele. Sąskaita faktūra iš ES.',
      },
      {
        question: 'Ko NEDAROTE?',
        answer:
          'Didžiulių platformų su miglota apimtimi. Logotipų. Bet ko, kur planas yra „kaip nors išsiaiškinsime". Laikau viską fokusuota, kad tikrai būtų paleista.',
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
    h2: 'Kodėl maži verslai renkasi mane vietoj agentūros',
    bullets: [
      'Kalbate su žmogumi, kuris kuria — ne su tarpininku, perduodančiu žinutes.',
      'Kaina, kurią pasakau, yra ta, kurią mokate. Jokios „papildomų" sąskaitos pabaigoje.',
      'Imuosi nedaug projektų vienu metu, todėl jūsų sulaukia tikro dėmesio ir paleidžiamas laiku.',
      'Kuriu dalykus, kurie veikia toliau: greiti, lengvai atnaujinami, be rūpesčių.',
      'Tikras darbas produkcijoje — Exploriando ir Trade-Calendar sukurti nuo nulio, ne iš skaidrių.',
    ],
  },

  trustBar: {
    items: [
      'Exploriando — kelionių platforma nuo nulio iki produkcijos',
      'Trade-Calendar — SaaS prekiautojams, produkcijoje',
      'Dirbate tiesiogiai su kūrėju',
    ],
  },

  leadMagnet: {
    h2: 'Dar nepasiruošę kalbėtis?',
    sub: 'Gaukite nemokamą patikrą, kaip jūsų verslas atrodo internete — kas veikia, ką taisyti. Be pardavimo, tik nauda.',
    emailPlaceholder: 'Jūsų el. paštas',
    submit: 'Atsiųskite nemokamą patikrą',
    sending: 'Siunčiama…',
    success: 'Gauta. Patikrą atsiųsiu per 48 val.',
    error: 'Kažkas nepavyko. Rašykite tiesiogiai',
    rateLimit: 'Per daug bandymų. Palaukite 10 minučių ir bandykite dar kartą.',
    privacy: 'Jokio šlamšto. Tik jūsų patikra, po to nieko, nebent paprašysite.',
    orEmail: 'Arba rašykite man tiesiogiai',
  },
};

// ─── Export ───────────────────────────────────────────────────────────────────

export const TRANSLATIONS: Record<Lang, AppTranslations> = { en, es, pt, lt };
