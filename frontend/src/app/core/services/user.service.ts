import {Injectable, signal} from '@angular/core';
import {ROLE} from '@models/Flags.enum';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users = signal<UserType[]>([]);

  constructor() {
    this.loadUsers();
  }

  loadUsers() {
    this.users.set([
      {id: 'u1', name: 'Alice', locationId: '4', email: 'maks.rvachov.at@gmx.at', flags: ROLE.ADMIN},
      {id: 'u2', name: 'Bob', locationId: '2', email: 'maks.rvachov.at@gmx.at', flags: ROLE.ADMIN},
      {id: 'u3', name: 'Charlie', locationId: '4', email: 'maks.rvachov.at@gmx.at', flags: ROLE.OPERATOR},
    ]);
  }
}
