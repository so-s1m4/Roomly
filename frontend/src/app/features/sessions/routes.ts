import { Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: 'sessions',
    loadComponent: () =>
      import('./pages/main-page/main-page').then(m => m.MainPage),
  },
];

export default ROUTES;
