import {Component, input, signal} from '@angular/core';
import {Block} from '@shared/ui/block/block';
import {NgIcon} from '@ng-icons/core';
import {Icons} from '@models/Icons.enum';

@Component({
  selector: 'app-game',
  imports: [
    Block,
    NgIcon
  ],
  templateUrl: './game.html',
  styleUrl: './game.css',
})
export class Game {
  data = input<GameType | null>(null);


  protected readonly Icons = Icons;
}
