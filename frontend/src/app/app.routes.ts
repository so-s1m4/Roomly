import { Routes } from '@angular/router';
import DashboardRoutes from '@features/dashboard/routes';
import SessionRoutes from '@features/sessions/routes';
import GamesRoutes from '@features/games/routes';
import ClientsRoutes from '@features/clients/routes';
import UsersRoutes from '@features/users/routes';
import SettingsRoutes from '@features/settings/routes';
import {RouteContextService} from '@services/route-context.service';

export const routes: Routes = [
  {
    path: 'org',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@features/org-selection/org-selection').then(m => m.OrgSelection),
        pathMatch: 'full',
      },
      {
        path: ':orgId',
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
              ...SettingsRoutes,
            ],
          },
          { path: 'node', redirectTo: 'node/root', pathMatch: 'full' },
          { path: '', redirectTo: 'node/root', pathMatch: 'full' },
        ],
      },
    ],
  },
  { path: '', redirectTo: 'org', pathMatch: 'full' },
  { path: '**', redirectTo: 'org' },
];
