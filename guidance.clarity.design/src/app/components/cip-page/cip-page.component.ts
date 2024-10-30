import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cip-page',
  templateUrl: './cip-page.component.html',
  styleUrl: './cip-page.component.scss',
  standalone: true,
})
export class CipPageComponent {
  @Input({ required: true }) filename: string | undefined;
  @Input({ required: true }) title: string | undefined;
  @Input({ required: true }) number: number | undefined;
  @Input({ required: true }) state: string | undefined;
  @Input({ required: true }) created: string | undefined;
  @Input({ required: true }) updated: string | undefined;
}
