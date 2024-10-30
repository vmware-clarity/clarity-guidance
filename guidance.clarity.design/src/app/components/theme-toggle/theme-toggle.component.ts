import { Component, OnDestroy, OnInit } from '@angular/core';
import { ClarityIcons, moonIcon, sunIcon } from '@cds/core/icon';
import { ClrIconModule } from '@clr/angular';
import { Observable, Subscription } from 'rxjs';

type ThemeType = 'light' | 'dark';

const themeLocalStorageKey = 'theme';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
  standalone: true,
  imports: [ClrIconModule],
})
export class ThemeToggleComponent implements OnInit, OnDestroy {
  protected theme = getPreferredTheme();
  protected themeIconInverse = false;

  private toggleThemeOnSystemThemeChangeSubscription: Subscription | undefined;

  constructor() {
    ClarityIcons.addIcons(moonIcon, sunIcon);
  }

  ngOnInit() {
    this.setTheme(this.theme);

    if (!userHasSetTheme()) {
      this.toggleThemeOnSystemThemeChangeSubscription = this.toggleThemeOnSystemThemeChange().subscribe();
    }
  }

  ngOnDestroy() {
    this.toggleThemeOnSystemThemeChangeSubscription?.unsubscribe();
  }

  protected toggleTheme() {
    this.setTheme(this.theme === 'light' ? 'dark' : 'light');

    // set preferred theme and stop listening to global changes
    setPreferredTheme(this.theme);
    this.toggleThemeOnSystemThemeChangeSubscription?.unsubscribe();
  }

  private setTheme(theme: ThemeType) {
    this.theme = theme;

    document.body.setAttribute('cds-theme', theme);
  }

  private toggleThemeOnSystemThemeChange() {
    return new Observable(() => {
      const darkThemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

      const onSystemThemeChange = (event: MediaQueryListEvent) => {
        this.setTheme(event.matches ? 'dark' : 'light');
      };

      darkThemeMediaQuery.addEventListener('change', onSystemThemeChange);

      return function teardown() {
        darkThemeMediaQuery.removeEventListener('change', onSystemThemeChange);
      };
    });
  }
}

function getPreferredTheme(): ThemeType {
  const storedTheme = localStorage.getItem(themeLocalStorageKey);

  if (storedTheme) {
    return storedTheme === 'dark' ? 'dark' : 'light';
  } else {
    return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}

function userHasSetTheme(): boolean {
  return !!localStorage.getItem(themeLocalStorageKey);
}

function setPreferredTheme(theme: ThemeType) {
  return localStorage.setItem(themeLocalStorageKey, theme);
}
