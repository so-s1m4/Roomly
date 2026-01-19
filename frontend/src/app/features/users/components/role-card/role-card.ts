import {Component, input} from '@angular/core';
import {NgIcon} from '@ng-icons/core';
import {Icons} from '@models/Icons.enum';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-role-card',
  imports: [
    NgIcon,
    RouterLink
  ],
  templateUrl: './role-card.html',
  styleUrl: './role-card.css',
})
export class RoleCard {
  role = input.required<RoleType>()
  protected readonly Icons = Icons;
}
