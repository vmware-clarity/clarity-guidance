import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cip-page',
  templateUrl: './cip-page.component.html',
  styleUrl: './cip-page.component.scss',
  standalone: true,
})
export class CipPageComponent {
  @Input() filename: string | undefined;
  @Input() title: string | undefined;
  @Input() number: number | undefined;
  @Input() state: string | undefined;
  @Input() created: string | undefined;
  @Input() updated: string | undefined;
}
