import { Injectable, signal, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class RouteContextService {
  private router = inject(Router);

  orgId = signal<string | null>(null);
  nodeId = signal<string | null>(null);

  constructor() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        const url = this.router.routerState.snapshot.root;
        const params = this.collectParams(url);

        this.orgId.set(params['orgId'] ?? null);
        this.nodeId.set(params['nodeId'] ?? null);
      });
  }

  private collectParams(route: any, acc: any = {}): any {
    if (route.params) {
      Object.assign(acc, route.params);
    }
    if (route.firstChild) {
      return this.collectParams(route.firstChild, acc);
    }
    return acc;
  }
}
