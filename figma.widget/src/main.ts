import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideZoneChangeDetection } from '@angular/core';

import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from "@angular/platform-browser/animations";

bootstrapApplication(AppComponent, {
    providers: [
        provideAnimations(),
        provideZoneChangeDetection({ eventCoalescing: true }),
        // provideRouter(appRoutes),
        provideHttpClient()
    ]
})
    .catch((err) => console.error(err));
