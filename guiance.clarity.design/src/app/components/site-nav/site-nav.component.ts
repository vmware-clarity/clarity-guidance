import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ClarityIcons, timesIcon } from '@cds/core/icon';
import { ClrNavigationModule, ClrVerticalNavModule } from '@clr/angular';

import cipPages from '../../../compiled-content/cip-pages.json';

@Component({
  selector: 'app-site-nav',
  templateUrl: './site-nav.component.html',
  styleUrl: './site-nav.component.scss',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ClrNavigationModule, ClrVerticalNavModule],
})
export class SiteNavComponent {
  protected readonly cipPages = cipPages;

  constructor() {
    // remove after https://github.com/vmware-clarity/ng-clarity/pull/1590 is released
    ClarityIcons.addIcons(timesIcon);
    ClarityIcons.addAliases(['times', ['close']]);
  }
}
