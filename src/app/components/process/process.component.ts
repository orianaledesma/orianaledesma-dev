import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { HeroVariant } from '../hero/hero.component';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  timeframe?: string;
}

interface ProcessContent {
  label: string;
  headline: string;
  steps: ProcessStep[];
}

const PROCESS_CONTENT: Record<HeroVariant, ProcessContent> = {
  technical: {
    label: 'How we work',
    headline: 'Simple process. No surprises.',
    steps: [
      {
        number: '01',
        title: 'Discovery',
        description: 'A free 30-min call to understand the project, your existing stack, and what you need to solve. No forms. No bureaucracy.',
      },
      {
        number: '02',
        title: 'Proposal',
        description: 'A written proposal with detailed scope, fixed price and timeline. No surprises. You know exactly what you\'re getting and when.',
      },
      {
        number: '03',
        title: 'Build',
        description: 'Iterative development with regular updates. Repository access from day one. Short feedback loop — no weeks of silence.',
      },
      {
        number: '04',
        title: 'Delivery',
        description: 'Deploy, documentation and full handoff. If something isn\'t right, we fix it. The project closes when you\'re satisfied.',
      },
    ],
  },
  brand: {
    label: 'How we work',
    headline: 'Simple process. No surprises.',
    steps: [
      {
        number: '01',
        title: 'Discovery',
        description: 'A free 30-min call to understand the project, your existing stack, and what you need to solve. No forms. No bureaucracy.',
      },
      {
        number: '02',
        title: 'Proposal',
        description: 'A written proposal with detailed scope, fixed price and timeline. No surprises. You know exactly what you\'re getting and when.',
      },
      {
        number: '03',
        title: 'Build',
        description: 'Iterative development with regular updates. Repository access from day one. Short feedback loop — no weeks of silence.',
      },
      {
        number: '04',
        title: 'Delivery',
        description: 'Deploy, documentation and full handoff. If something isn\'t right, we fix it. The project closes when you\'re satisfied.',
      },
    ],
  },
  narrative: {
    label: 'How It Works',
    headline: 'From first call to delivered product — no surprises.',
    steps: [
      {
        number: '01',
        title: 'Discovery Call',
        description: 'A free 30-minute call where I understand what you need, what you\'ve already tried, and whether I\'m the right fit. No pitch. No proposal spam.',
        timeframe: '30 min',
      },
      {
        number: '02',
        title: 'Scope & Proposal',
        description: 'You get a written document with timeline, deliverables, and price. Nothing vague — you know exactly what you\'re getting before signing anything.',
        timeframe: '24–48h after call',
      },
      {
        number: '03',
        title: 'Build',
        description: 'I work in short cycles with visible progress. You get updates, not silence. If something shifts, I tell you before it becomes a problem.',
        timeframe: '1–8 weeks depending on scope',
      },
      {
        number: '04',
        title: 'Delivery & Handoff',
        description: 'Clean code, documented, ready to use. For Travel-Tech projects, I include a walkthrough so your team can manage the basics without calling a developer for every small update.',
        timeframe: 'On agreed date',
      },
    ],
  },
};

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessComponent {
  variant = input<HeroVariant>('technical');

  content = computed(() => PROCESS_CONTENT[this.variant()]);
}
