import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import cipPages from '../../../compiled-content/cip-pages.json';

@Component({
  selector: 'app-cip-index',
  templateUrl: './cip-index.component.html',
  styleUrl: './cip-index.component.scss',
  standalone: true,
  imports: [RouterLink, TitleCasePipe],
})
export class CipIndexComponent {
  protected readonly cipIndex = getCipIndex();
}

export function getCipIndex() {
  const categories: string[] = [];
  const pages: Record<string, typeof cipPages> = {};

  for (const cipPage of cipPages) {
    if (!categories.includes(cipPage.category)) {
      categories.push(cipPage.category);
    }

    if (!pages[cipPage.category]) {
      pages[cipPage.category] = [];
    }

    pages[cipPage.category].push(cipPage);
  }

  return { categories, pages };
}
