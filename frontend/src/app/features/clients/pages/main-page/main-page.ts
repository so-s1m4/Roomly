import {Component, inject} from '@angular/core';
import {Block} from "@shared/ui/block/block";
import {Game} from "@features/games/components/game/game";
import {Modal} from "@shared/ui/modal/modal";
import {NgIcon} from "@ng-icons/core";
import {RouterLink, RouterOutlet} from "@angular/router";
import {Icons} from '@models/Icons.enum';
import {ClientsService} from '@features/clients/services/clients-service';
import {NgStyle} from '@angular/common';
import {Client} from '@features/clients/components/client/client';
import {SearchBar} from '@shared/ui/search-bar/search-bar';

@Component({
  selector: 'app-main-page',
  imports: [
    Block,
    Modal,
    NgIcon,
    RouterLink,
    RouterOutlet,
    NgStyle,
    Client,
    SearchBar
  ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {
  clientsService = inject(ClientsService);
  clients = this.clientsService.getClientsFiltered();
  protected readonly Icons = Icons;


  onSubmitSearch(query: SearchOutput) {
    this.clientsService.filterClients({
      query: query.value
    });
  }
}
