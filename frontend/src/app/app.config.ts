import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import { provideIcons, provideNgIconsConfig } from '@ng-icons/core';
import * as heroOutlineIcons from '@ng-icons/heroicons/outline';
import * as heroSolidIcons from '@ng-icons/heroicons/solid';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([])),
    provideIcons({
      ...heroOutlineIcons,
      ...heroSolidIcons,
    }),
    provideNgIconsConfig({
      size: '2rem',
      strokeWidth: "1",
    })
  ]
};
