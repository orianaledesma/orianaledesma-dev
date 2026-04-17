import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { HeroVariant } from '../hero/hero.component';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqContent {
  label: string;
  headline: string;
  items: FaqItem[];
}

const FAQ_CONTENT: Record<HeroVariant, FaqContent> = {
  technical: {
    label: 'FAQ',
    headline: 'Common questions',
    items: [
      {
        question: 'Do you work with clients outside Europe?',
        answer: 'Yes. I work with clients in Europe, LATAM and the US. My timezone is CET (Lithuania), with natural overlap with EU and morning overlap with EST.',
      },
      {
        question: 'How long does a typical project take?',
        answer: 'A complete website takes 3–6 weeks depending on scope. For Angular integrations in existing projects, it depends on complexity — we define that in the discovery call.',
      },
      {
        question: 'Do you offer post-launch maintenance?',
        answer: 'Yes. I offer monthly retainers for maintenance, updates and new features. Pricing and structure are discussed at project close.',
      },
      {
        question: 'What information do you need to get started?',
        answer: 'A description of the project and a link to your current site (if one exists) is enough for the first call. No formal brief required.',
      },
      {
        question: 'How does payment work?',
        answer: '50% at project start, 50% on delivery. I accept EUR/USD bank transfer. For long-term projects or retainers, we structure it differently.',
      },
    ],
  },
  brand: {
    label: 'FAQ',
    headline: 'Common questions',
    items: [
      {
        question: 'Do you work with clients outside Europe?',
        answer: 'Yes. I work with clients in Europe, LATAM and the US. My timezone is CET (Lithuania), with natural overlap with EU and morning overlap with EST.',
      },
      {
        question: 'How long does a typical project take?',
        answer: 'A complete website takes 3–6 weeks depending on scope. For Angular integrations in existing projects, it depends on complexity — we define that in the discovery call.',
      },
      {
        question: 'Do you offer post-launch maintenance?',
        answer: 'Yes. I offer monthly retainers for maintenance, updates and new features. Pricing and structure are discussed at project close.',
      },
      {
        question: 'What information do you need to get started?',
        answer: 'A description of the project and a link to your current site (if one exists) is enough for the first call. No formal brief required.',
      },
      {
        question: 'How does payment work?',
        answer: '50% at project start, 50% on delivery. I accept EUR/USD bank transfer. For long-term projects or retainers, we structure it differently.',
      },
    ],
  },
  narrative: {
    label: 'Before You Book',
    headline: 'The questions worth asking.',
    items: [
      {
        question: 'Your rates are higher than other freelancers I\'ve seen. Why?',
        answer: 'Because you\'re not hiring someone to execute a to-do list. You\'re hiring someone who\'s already seen the failure modes of what you\'re building — from the user side. A cheaper dev means a longer brief, more revisions, and more of your time spent explaining context. One senior who gets it from call one costs less in the end.',
      },
      {
        question: 'How long will my project take?',
        answer: 'A focused Travel-Tech website takes 3–6 weeks. Angular contracts depend on scope — and I\'ll give you an honest timeline before we start, not an optimistic one. The scope document you receive after our call has dates, not ranges.',
      },
      {
        question: 'I\'ve never worked with a remote developer. How do we communicate?',
        answer: 'Async-first via Slack or email, sync calls when needed — always EU hours. You\'ll never wait more than 24 hours for a reply on working days. I\'ve worked remotely across 40+ cities, so unclear communication is the one thing I have no patience for.',
      },
      {
        question: 'What if I don\'t have a clear brief yet?',
        answer: 'That\'s exactly what the discovery call is for. You don\'t need a spec document — you need to tell me what problem you\'re trying to solve and what\'s happened so far. I\'ll ask the right questions and turn that into a concrete scope.',
      },
      {
        question: 'How do I know you\'ll deliver? I\'ve been burned by freelancers before.',
        answer: 'Fair concern. Here\'s what reduces that risk: a written scope before anything starts, short delivery cycles so you see progress early, and a process where nothing ships without your sign-off. I don\'t disappear mid-project. If something shifts, you hear it from me first.',
      },
    ],
  },
};

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqComponent {
  variant = input<HeroVariant>('technical');

  openIndex = signal<number | null>(0);

  content = computed(() => FAQ_CONTENT[this.variant()]);

  toggle(index: number): void {
    this.openIndex.set(this.openIndex() === index ? null : index);
  }
}
