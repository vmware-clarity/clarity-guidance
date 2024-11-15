import {Component, OnDestroy} from '@angular/core';

import {LandingPageComponent} from './landing-page/landing-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
    styles: [
    `
      .main-container .content-container div.content-area {
        padding: 12px;
      }
    `,
    ],
  standalone: true,
  imports: [LandingPageComponent],
})
export class AppComponent implements OnDestroy {
    private mutationChanges: MutationObserver = new MutationObserver((mutations: MutationRecord[]) => {
        mutations.forEach((mutation: MutationRecord) => {
            // it is possible this to be called twice because the old class is removed and the new added

            const theme = (mutation.target as HTMLElement).classList.contains('figma-dark')
                ? 'dark' : 'light';
            document.body.setAttribute('cds-theme', theme)
        });
    });

    constructor() {
        this.mutationChanges.observe(document.documentElement, {
            attributeFilter: ['class'],
            attributeOldValue: true,
        });
    }

    ngOnDestroy() {
        this.mutationChanges?.disconnect();
    }
}
