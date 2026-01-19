import { Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: 'users',
    loadComponent: () =>
      import('./pages/main-page/main-page').then(m => m.MainPage),
    children: [
      {
        path: 'role/create',
        loadComponent: () =>
          import('./components/role-create/role-create').then(m => m.RoleCreate),
      },
      {
        path: 'role/:id',
        loadComponent: () =>
          import('./components/role-edit/role-edit').then(m => m.RoleEdit),
      },
    ]
  },

];

export default ROUTES;
