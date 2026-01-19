import {Component, computed, inject} from '@angular/core';
import {MainService} from '@services/main.service';
import {Block} from '@shared/ui/block/block';

@Component({
  selector: 'app-org-selection',
  imports: [
    Block
  ],
  templateUrl: './org-selection.html',
  styleUrl: './org-selection.css',
})
export class OrgSelection {

  mainService = inject(MainService);
  orgs = computed(()=>this.mainService.firms());

  router = inject(MainService).router;
  selectOrg(org: { title: string; id: string | number }) {
    this.router.navigate(['org', org.id, 'node', 'root']);
  }
}
