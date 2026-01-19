import {Component, input} from '@angular/core';
import {Block} from '@shared/ui/block/block';
import {DatePipe} from '@angular/common';
import {Icons} from '@models/Icons.enum';
import {NgIcon} from '@ng-icons/core';

@Component({
  selector: 'app-client',
  imports: [
    Block,
    DatePipe,
    NgIcon
  ],
  templateUrl: './client.html',
  styleUrl: './client.css',
})
export class Client {
  data = input<ClientType | null>(null);
  protected readonly Icons = Icons;
}
