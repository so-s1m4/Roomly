import {Component, effect, HostListener, inject, signal} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GamesService} from '@features/games/services/games.service';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {RangeValidator} from '@utils/RangeValidator';
import {urlToObjectURL} from '@utils/urlToObjectURL';
import {StarRatingSelector} from '@shared/ui/star-rating-selector/star-rating-selector';

@Component({
  selector: 'app-create-game',
  imports: [
    ReactiveFormsModule,
    StarRatingSelector
  ],
  templateUrl: './create-game.html',
  styleUrl: './create-game.css',
})
export class CreateGame {
  createForm = new FormGroup({
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
    maxPlayTime: new FormControl(60, [Validators.required, Validators.min(1)]),
    minAge: new FormControl(0),
    },
    {
      validators: [
        RangeValidator('minPlayers', 'maxPlayers', 'playersRange'),
        RangeValidator('minPlayTime', 'maxPlayTime', 'playtimeRange') ]
    }
  )

  gameService = inject(GamesService);

  @HostListener('click', ['$event']) onClick($event: any) {
    $event.stopPropagation();
  }
}
