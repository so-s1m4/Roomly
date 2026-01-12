import {effect, inject, Injectable, signal} from '@angular/core';
import {RouteContextService} from '@services/route-context.service';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  ctx = inject(RouteContextService);
  games = signal<GameType[]>([]);

  constructor() {
    effect(() => {
      this.loadGamesForCurrentContext(this.ctx.orgId()!, this.ctx.nodeId()!);
    });
  }

  loadGamesForCurrentContext(orgId: string, nodeId: string) {
    this.games.set([
      { id: 'game1', title: `Game 1 for org ${orgId} and node ${nodeId}`, description: '', difficulty: 4, players: {
      min: 2, max: 6
      }, minAge: 13, playTime: {
      min: 30, max: 60
      }, img: {
        id: 'a23',
        image_path: 'https://imgs.search.brave.com/z9l2N2hruI1DJIUbYAKetjbBW7jj_4JCGuLlbKOaLJE/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9pbWct/Y29ycC5jb20vaW1h/Z2VzL3NsaWRlcy9j/aXRpZXMvaW1nLWR1/YmFpLmpwZw'
        } },])
  }

}
