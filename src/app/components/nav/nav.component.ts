import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  signal,
} from '@angular/core';

interface NavLink {
  label: string;
  fragment: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  scrolled  = signal(false);
  menuOpen  = signal(false);

  readonly links: NavLink[] = [
    { label: 'About',    fragment: 'about'    },
    { label: 'Services', fragment: 'services' },
    { label: 'Work',     fragment: 'work'     },
    { label: 'Contact',  fragment: 'contact'  },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }

  scrollTo(fragment: string): void {
    document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
    this.menuOpen.set(false);
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }
}
