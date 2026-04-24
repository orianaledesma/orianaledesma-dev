import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavComponent }          from './components/nav/nav.component';
import { HeroComponent }         from './components/hero/hero.component';
import { TrustBarComponent }     from './components/trust-bar/trust-bar.component';
import { ServicesComponent }     from './components/services/services.component';
import { WhyMeComponent }        from './components/why-me/why-me.component';
import { WorkComponent }         from './components/work/work.component';
import { AvailabilityComponent } from './components/availability/availability.component';
import { FaqComponent }          from './components/faq/faq.component';
import { ContactComponent }      from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [
    NavComponent,
    HeroComponent,
    TrustBarComponent,
    ServicesComponent,
    WhyMeComponent,
    WorkComponent,
    AvailabilityComponent,
    FaqComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
