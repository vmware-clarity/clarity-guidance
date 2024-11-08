import { Component } from '@angular/core';

import { ExampleComponent } from './example.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [ExampleComponent],
})
export class AppComponent {}
