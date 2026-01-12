import {Component, computed, inject, input, output} from '@angular/core';
import {Icons} from '@models/Icons.enum';
import {NgIcon} from '@ng-icons/core';
import {NgStyle} from '@angular/common';
import {PageType} from '@models/Page.type';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [
    NgIcon,
    NgStyle,
    RouterLink
  ],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation {
  short = input(false);
  openNav = output()

  pages: PageType[] = [
    {
      label: '',
      icon: Icons.Bars4,
      hidden: computed(() => !this.short()),
      click: ()=> this.openNav.emit(),
    },
    {
      label: 'Dashboard',
      icon: Icons.Square2x2,
      url: 'overview',
    },
    // {
    //   label: 'Calendar',
    //   icon: Icons.Calendar,
    //   url: '/calendar',
    // },
    {
      label: 'Sessions',
      icon: Icons.ListBullet,
      url: 'sessions',
    },
    // {
    //   label: 'Bookings',
    //   icon: Icons.Ticket,
    //   url: '/bookings',
    // },
    {
      label: 'Games',
      icon: Icons.Cube,
      url: 'games',
    },
    {
      label: 'Clients',
      icon: Icons.UserGroup,
      url: 'clients',
    },
    {
      label: 'Users & Roles',
      icon: Icons.UserPlus,
      url: 'users',
    },
    {
      label: 'Settings',
      icon: Icons.Settings,
      url: 'settings',
    }
  ]
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  clicked(page: PageType) {
    if (page.click) {
      page.click();
    }
    if (page.url) {
      this.router.navigate([page.url], { relativeTo: this.route } );
    }
  }
}
