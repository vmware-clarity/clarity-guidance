import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ClrMainContainerModule, ClrNavigationModule } from '@clr/angular';

import { SiteNavComponent } from './components/site-nav/site-nav.component';
import { SkipLinkComponent } from './components/skip-link/skip-link.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    ClrMainContainerModule,
    ClrNavigationModule,
    SiteNavComponent,
    SkipLinkComponent,
    ThemeToggleComponent,
  ],
})
export class AppComponent {}
