import { JsonPipe, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ClarityIcons, timesIcon } from '@cds/core/icon';
import { ClrNavigationModule, ClrVerticalNavModule } from '@clr/angular';

import { SiteNavRemovePageTitleSuffixPipe } from './site-nav-remove-page-title-suffix.pipe';
import { getCipIndex } from '../cip-index/cip-index.component';

@Component({
  selector: 'app-site-nav',
  templateUrl: './site-nav.component.html',
  styleUrl: './site-nav.component.scss',
  standalone: true,
  imports: [
    TitleCasePipe,
    JsonPipe,
    RouterLink,
    RouterLinkActive,
    ClrNavigationModule,
    ClrVerticalNavModule,
    SiteNavRemovePageTitleSuffixPipe,
  ],
})
export class SiteNavComponent {
  protected readonly cipIndex = getCipIndex();

  constructor() {
    // remove after https://github.com/vmware-clarity/ng-clarity/pull/1590 is released
    ClarityIcons.addIcons(timesIcon);
    ClarityIcons.addAliases(['times', ['close']]);
  }
}
