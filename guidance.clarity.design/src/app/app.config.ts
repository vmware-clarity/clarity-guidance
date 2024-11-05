import { APP_INITIALIZER, ApplicationConfig, inject, Provider, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NavigationEnd, provideRouter, Router } from '@angular/router';
import { filter } from 'rxjs';

import { routes } from './app.routes';

const scrollTopOnNavigationProvider: Provider = {
  provide: APP_INITIALIZER,
  multi: true,
  useFactory: () => {
    const router = inject(Router);

    return () => {
      router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
        document.querySelector('main')?.scrollTo(0, 0);
      });
    };
  },
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    scrollTopOnNavigationProvider,
  ],
};
