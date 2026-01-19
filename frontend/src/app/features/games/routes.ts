import { Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: 'games',
    loadComponent: () =>
      import('./pages/main-page/main-page').then(m => m.MainPage),
    children: [
      {
        path: 'edit/:gameId',
        loadComponent: () =>
          import('./components/edit-game/edit-game').then(m => m.EditGame)
      },
      {
        path: 'create',
        loadComponent: () =>
          import('./components/create-game/create-game').then(m => m.CreateGame)
      }
    ]
  },
];

export default ROUTES;
