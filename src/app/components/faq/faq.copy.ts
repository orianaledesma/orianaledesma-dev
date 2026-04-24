export interface FaqItemCopy {
  question: string;
  answer: string;
}

export interface FaqCopy {
  h2: string;
  items: FaqItemCopy[];
}

export const FAQ_COPY: FaqCopy = {
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
        'Scope is fixed and small on purpose. One landing, one clear goal, one integration. No feature creep. That\'s how the timeline holds.',
    },
    {
      question: 'Do you work in Spanish or English?',
      answer:
        "Both, natively. I'm Argentine, based in Lithuania. Calls, docs and code comments in whichever you prefer.",
    },
    {
      question: 'What do you NOT do?',
      // Adjusted: removed the trailing period after "as we go" to match the punchy list rhythm
      answer:
        'Full apps from scratch with vague scope. Logos. SEO-only projects. Anything where "we\'ll figure it out as we go."',
    },
    {
      question: "What's the payment structure?",
      answer:
        '50% to start, 50% on delivery. Stripe or SEPA. Invoice from the EU.',
    },
    {
      question: 'What if I need changes after launch?',
      answer:
        '14 days of revisions included. After that, hourly or a small retainer.',
    },
  ],
};
