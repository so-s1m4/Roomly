import {Component, computed, inject, output} from '@angular/core';
import {AppSelectComponent} from '@shared/ui/select/select';
import {NgIcon} from '@ng-icons/core';
import {Icons} from '@models/Icons.enum';
import {MainService} from '@services/main.service';

@Component({
  selector: 'app-firms',
  imports: [
    AppSelectComponent,
    NgIcon
  ],
  templateUrl: './firms.html',
  styleUrl: './firms.css',
})
class Firms {
  mainService = inject(MainService);
  protected readonly MainService = MainService;

  close = output()
  protected readonly Icons = Icons;
  selected = "1273512763"

  firms = computed(()=> this.mainService.firms().map(item=>({
    label: item.title,
    value: item.id,
    icon: Icons.BuildingOffice
  })))

  selectFirm($event: string | number | null) {
    if ($event){
      this.mainService.changeToFirm($event)
    }
  }
}

export default Firms
