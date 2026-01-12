import {Component, input, output, signal} from '@angular/core';
import {NgClass} from '@angular/common';
import {NgIcon} from '@ng-icons/core';
import {Icons} from '@models/Icons.enum';

@Component({
  selector: 'app-tree',
  imports: [
    NgClass,
    NgIcon
  ],
  templateUrl: './tree.html',
  styleUrl: './tree.css',
})
export class Tree {
  node = input<NodeType | null>(null);
  isOpened = signal<boolean>(false);
  selectNode = output<string>();
  protected readonly Icons = Icons;
}
