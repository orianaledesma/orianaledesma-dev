import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { HeroVariant } from '../hero/hero.component';

interface Testimonial {
  quote:       string;
  name:        string;
  role:        string;
  company:     string;
  placeholder?: boolean;
}

interface TestimonialsContent {
  label:        string;
  headline:     string;
  testimonials: Testimonial[];
}

const NARRATIVE_TESTIMONIALS: Testimonial[] = [
  {
    quote:   'Working with Oriana means the work gets done right — and she\'ll flag what needs fixing before you notice it yourself. Unique attention to detail, genuinely collaborative, and always focused on the team moving forward. A pleasure to have her on any project.',
    name:    'Oswald Rijo',
    role:    'Software Engineer',
    company: 'Compass',
  },
  { quote: '', name: '', role: '', company: '', placeholder: true },
  { quote: '', name: '', role: '', company: '', placeholder: true },
];

const TESTIMONIALS_CONTENT: Record<HeroVariant, TestimonialsContent> = {
  technical: { label: 'Testimonials',    headline: 'What clients say',                        testimonials: NARRATIVE_TESTIMONIALS },
  brand:     { label: 'Testimonials',    headline: 'What clients say',                        testimonials: NARRATIVE_TESTIMONIALS },
  narrative: { label: 'What People Say', headline: 'Trusted by engineers and teams who ship.', testimonials: NARRATIVE_TESTIMONIALS },
};

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent {
  variant = input<HeroVariant>('technical');

  content = computed(() => TESTIMONIALS_CONTENT[this.variant()]);

  hasRealTestimonials = signal(true);
}
