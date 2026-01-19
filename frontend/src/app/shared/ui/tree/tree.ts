import {Component, effect, Input, input, model, OnInit, output, signal} from '@angular/core';
import {NgClass, NgStyle} from '@angular/common';
import {NgIcon} from '@ng-icons/core';
import {Icons} from '@models/Icons.enum';

@Component({
  selector: 'app-tree',
  imports: [
    NgClass,
    NgIcon,
    NgStyle
  ],
  templateUrl: './tree.html',
  styleUrl: './tree.css',
})
export class Tree implements OnInit {
  withEditBtn = input<boolean>(false);
  node = input<NodeType | null>(null);
  isOpenedByDefault = input<boolean>(false);
  isOpened = signal<boolean>(false);
  selected = input<string | number | null>();



  size = input<number>(1.25);
  selectNode = output<string>();
  editedNode = output<NodeType>();
  protected readonly Icons = Icons;

  stopPropagation($event: Event) {
    $event.stopPropagation();
  }

  ngOnInit() {
    this.isOpened.set(this.isOpenedByDefault());
  }
}
