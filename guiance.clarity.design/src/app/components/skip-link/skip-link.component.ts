/*
 * Copyright (c) 2016-2024 Broadcom. All Rights Reserved.
 * The term "Broadcom" refers to Broadcom Inc. and/or its subsidiaries.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { focusElement } from '@cds/core/internal';

@Component({
  selector: 'app-skip-link',
  templateUrl: './skip-link.component.html',
  styleUrl: './skip-link.component.scss',
  standalone: true,
})
export class SkipLinkComponent {
  hideSkipLink = true;

  skipToContent() {
    const h1Element = document.querySelector('h1');

    if (h1Element) {
      focusElement(h1Element);
    }
  }
}
