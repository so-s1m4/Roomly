import {Component, inject, OnInit, signal} from '@angular/core';
import {ActivatedRoute, RouterLink, RouterOutlet} from '@angular/router';
import {CommonModule} from '@angular/common';
import {Notifications} from '@shared/ui/notifications/notifications';
import {Block} from '@shared/ui/block/block';
import { NgIcon } from '@ng-icons/core';
import {Organization} from '@app/layout/components/organization/organization';
import {Navigation} from '@app/layout/components/navigation/navigation';
import {Footer} from '@app/layout/components/footer/footer';
import Firms from '@app/layout/components/firms/firms';
import {MainService} from '@services/main.service';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, CommonModule, Notifications, Block, Organization, Navigation, Footer, Firms],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
  standalone: true,
})
export class Layout implements OnInit {
  mainService = inject(MainService);
  activatedRoute = inject(ActivatedRoute);
  isNavOpened = signal(true);

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const firmId = params.get('spaceId');
      const nodeId = params.get('nodeId');
      if (firmId) {
        this.mainService.changeToFirm(firmId);
      }
      if (nodeId) {
        this.mainService.currentNodeId.set(nodeId);
      }
    })
  }
}
