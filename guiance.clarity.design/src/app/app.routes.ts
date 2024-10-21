import { Routes } from '@angular/router';

import { pageRoutes } from '../compiled-content/page-routes';

export const routes: Routes = [
  ...pageRoutes,
  {
    path: '**',
    loadComponent: () =>
      import('./components/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent),
  },
];
