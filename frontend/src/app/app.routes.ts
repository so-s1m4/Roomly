import { Routes } from '@angular/router';
import DashboardRoutes from '@features/dashboard/routes';
import SessionRoutes from '@features/sessions/routes';
import GamesRoutes from '@features/games/routes';
import ClientsRoutes from '@features/clients/routes';
import UsersRoutes from '@features/users/routes';
import SettingsRoutes from '@features/settings/routes';

export const routes: Routes = [
  {
    path: 'org/:orgId',
    children: [
      {
        path: 'node/:nodeId',
        loadComponent: () =>
          import('./layout/layout').then(m => m.Layout),
        children: [
          ...DashboardRoutes,
          ...SessionRoutes,
          ...GamesRoutes,
          ...ClientsRoutes,
          ...UsersRoutes,
          ...SettingsRoutes
        ]
      },

      // /org/:orgId/node → /org/:orgId/node/root
      {
        path: 'node',
        redirectTo: 'node/root',
        pathMatch: 'full',
      },

      // /org/:orgId → /org/:orgId/node/root
      {
        path: '',
        redirectTo: 'node/root',
        pathMatch: 'full',
      },
    ],
  },
];
