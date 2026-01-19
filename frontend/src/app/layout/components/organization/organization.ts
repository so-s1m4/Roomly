import {Component, computed, inject, OnInit, signal} from '@angular/core';
import {Tree} from '@shared/ui/tree/tree';
import {buildTree} from '@utils/buildTree';
import {ActivatedRoute, Router} from '@angular/router';
import {MainService} from '@services/main.service';

@Component({
  selector: 'app-organization',
  imports: [
    Tree
  ],
  templateUrl: './organization.html',
  styleUrl: './organization.css',
})
export class Organization {
  mainService = inject(MainService);
  data = computed(()=>this.mainService.treeNode())

  currentNodeId = computed(()=>this.mainService.currentNodeId())
  router = inject(Router);
  route = inject(ActivatedRoute)

  onSelect(id: string) {
    this.router.navigate(['node', id], { relativeTo: this.route.parent });
  }
}
