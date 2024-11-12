import {Component, OnDestroy} from '@angular/core';

import { ExampleComponent } from './example.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [ExampleComponent],
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
