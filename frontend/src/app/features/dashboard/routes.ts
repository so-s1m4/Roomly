import { Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/main-page/main-page').then(m => m.MainPage),
  },
  {
    path: 'overview',
    redirectTo: ''
  }
];

export default ROUTES;
