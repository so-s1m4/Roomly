import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CommonModule} from '@angular/common';
import {Notifications} from '@shared/ui/notifications/notifications';
import {Block} from '@shared/ui/block/block';
import { NgIcon } from '@ng-icons/core';
import {Icons} from '@models/Icons.enum';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink, CommonModule, Notifications, Block, NgIcon],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
  standalone: true,
})
export class Layout {
  readonly pages = [
    { label: 'Feed', path: '/feed', icon: Icons.Home },
    { label: 'Projects', path: '/projects/search', icon: Icons.Search },
    { label: 'More', path: '/more', icon: Icons.Bars4 },
  ];

  isActive(path: string) {
    return window.location.href.includes(path);
  }
}
