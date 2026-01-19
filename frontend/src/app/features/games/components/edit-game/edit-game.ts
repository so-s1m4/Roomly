import {Component, effect, HostListener, inject, signal} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GamesService} from '@features/games/services/games.service';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {RangeValidator} from '@utils/RangeValidator';
import {urlToObjectURL} from '@utils/urlToObjectURL';
import {StarRatingSelector} from '@shared/ui/star-rating-selector/star-rating-selector';

@Component({
  selector: 'app-edit-game',
  imports: [
    ReactiveFormsModule,
    StarRatingSelector
  ],
  templateUrl: './edit-game.html',
  styleUrl: './edit-game.css',
})
export class EditGame {
  editForm = new FormGroup({
    img: new FormControl(),
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(16)]
    ),
    description: new FormControl(''),
    difficulty: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(5)]),
    minPlayers: new FormControl(1, [Validators.required, Validators.min(1)]),
    maxPlayers: new FormControl(1, [Validators.required, Validators.min(1)]),
    minPlayTime: new FormControl(0, [Validators.required, Validators.min(1)]),
    maxPlayTime: new FormControl(0, [Validators.required, Validators.min(1)]),
    minAge: new FormControl(0),
    },
    {
      validators: [
        RangeValidator('minPlayers', 'maxPlayers', 'playersRange'),
        RangeValidator('minPlayTime', 'maxPlayTime', 'playtimeRange') ]
    }
  )

  constructor() {
    effect(async () => {
      this.activatedRoute.paramMap.subscribe(params => {
        const gameId = params.get('gameId');
        if (gameId) {
          const game = this.gameService.getGameById(gameId) || null
          this.currentGame.set(game);
          if (game) {
            let img = game.img || 'https://via.placeholder.com/150';
            urlToObjectURL(img.image_path).then(objectUrl => {
              this.editForm.patchValue({img: objectUrl});
            })
            this.editForm.patchValue({
              title:game.title,
              description: game.description,
              difficulty: game.difficulty,
              minPlayers: game.players.min,
              maxPlayers: game.players.max,
              minPlayTime: game.playTime.min,
              maxPlayTime: game.playTime.max,
              minAge: game.minAge

            })
          }
        }
      })
    })
  }
  activatedRoute = inject(ActivatedRoute);
  gameService = inject(GamesService);

  currentGame = signal<GameType | null>(null);

  @HostListener('click', ['$event']) onClick($event: any) {
    $event.stopPropagation();
  }
}
