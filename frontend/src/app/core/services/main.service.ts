import {inject, Injectable, signal} from '@angular/core';
import {Icons} from '@models/Icons.enum';
import {buildTree} from '@utils/buildTree';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MainService {
 currentFirmId= signal<string | number | null>(null);
 currentNodeId= signal<string | number | null>(null);
 firms = signal<Array<{title: string; id: string | number}>>([]);
 treeNode = signal<NodeType>(null as unknown as NodeType);
 flatNodes = signal<FlatNode[]>([]);

 router = inject(Router);

 constructor() {
   this.loadFirms()
   this.loadTreeNode(this.currentFirmId())
 }

 loadFirms() {
   this.firms.set([
     {
       title: "Escapers",
       id: "1273512763",
     },
     {
       title: "Roomly",
       id: "y1823182",
     }])
   this.currentFirmId.set(this.firms()[0].id)
 }
 loadTreeNode(firmId: string | number | null = null) {
    let d: FlatNode[];
    if (firmId == '1273512763') {
     d = [{id: '1', type: 'organization', label: 'Escapers', parentId: null}, {id: '2', type: 'place', label: 'Wien', parentId: '1'}, {id: '3', type: 'place', label: 'St.Pölten', parentId: '1'}, { id:'4', type:'location', label:'Traisenpark', parentId: '3'}, {id:'5', type:'location', label:'City Center', parentId:'2'}, {id:'6', type:'other', label:'Other', parentId:'3'}]
   } else {
     d = [{id: '1', type: 'organization', label: 'Roomly', parentId: null}, {id: '2', type: 'place', label: 'Wien', parentId: '1'}, {id: '3', type: 'place', label: 'St.Pölten', parentId: '1'}, { id:'4', type:'location', label:'Traisenpark', parentId: '3'}, {id:'5', type:'location', label:'City Center', parentId:'2'}, {id:'6', type:'other', label:'Other', parentId:'3'}]
   }
    this.flatNodes.set(d)
    this.treeNode.set(buildTree(d)[0])
  }

 changeToFirm(firmId: string | number | null) {
  this.currentFirmId.set(firmId);
  this.loadTreeNode(firmId)

   this.router.navigate(["org", firmId])
 }
}
