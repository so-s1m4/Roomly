import {Component, inject} from '@angular/core';
import {Block} from '@shared/ui/block/block';
import {NgIcon} from '@ng-icons/core';
import {Icons} from '@models/Icons.enum';
import {GamesService} from '@features/games/services/games.service';
import {Game} from '@features/games/components/game/game';
import {Modal} from '@shared/ui/modal/modal';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-main-page',
  imports: [
    Block,
    NgIcon,
    Game,
    Modal,
    RouterOutlet,
    NgStyle,
    RouterLink
  ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {
  gamesService = inject(GamesService);
  games = this.gamesService.games;
  protected readonly Icons = Icons;
}
