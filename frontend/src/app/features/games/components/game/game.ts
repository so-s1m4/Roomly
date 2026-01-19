import {Component, input, signal} from '@angular/core';
import {Block} from '@shared/ui/block/block';
import {NgIcon} from '@ng-icons/core';
import {Icons} from '@models/Icons.enum';
import {RouterLink} from '@angular/router';
import {SlicePipe} from '@angular/common';

@Component({
  selector: 'app-game',
  imports: [
    Block,
    NgIcon,
    RouterLink,
    SlicePipe
  ],
  templateUrl: './game.html',
  styleUrl: './game.css',
})
export class Game {
  data = input<GameType | null>(null);
  protected readonly Icons = Icons;
}
