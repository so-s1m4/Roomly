import {computed, effect, inject, Injectable, signal} from '@angular/core';
import {RouteContextService} from '@services/route-context.service';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  ctx = inject(RouteContextService);
  clients = signal<ClientType[]>([]);

  currentFilters = signal<{query: string}>({query: ''});

  constructor() {
    this.loadClients(this.ctx.orgId()!, this.ctx.nodeId()!);
  }

  loadClients(orgId: string, nodeId: string) {
    this.clients.set([{
      id: 'client1',
      img: {id: 'img1', image_path: 'https://imgs.search.brave.com/N9D01AITdHJynFvVoAiXse90_eHab16vIKrioUMwQ8I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/NDQxNzk2L3Bob3Rv/L3BvcnRyYWl0LW9m/LWEtcm9ib3QuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUZf/eDBDLTRobDRCeGpE/RG9ESHFMUks3RTh2/a25YNXFQN0RQVzZ6/Y0FhVmc9'} ,
      firstName: `Maksym`,
      lastName: 'Ivanov',
      email: 'maks.rvachov.at@gmail.com',
      phone: '+4369010400237',
      birthDate: new Date('1990-01-01')
    },{
      id: 'client1',
      img: {id: 'img1', image_path: 'https://imgs.search.brave.com/N9D01AITdHJynFvVoAiXse90_eHab16vIKrioUMwQ8I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/NDQxNzk2L3Bob3Rv/L3BvcnRyYWl0LW9m/LWEtcm9ib3QuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUZf/eDBDLTRobDRCeGpE/RG9ESHFMUks3RTh2/a25YNXFQN0RQVzZ6/Y0FhVmc9'} ,
      firstName: `Maksym`,
      lastName: 'Ivanov',
      email: 'maks.rvachov.at@gmail.com',
      phone: '+4369010400237',
      birthDate: new Date('1990-01-01')
    },{
      id: 'client1',
      img: {id: 'img1', image_path: 'https://imgs.search.brave.com/N9D01AITdHJynFvVoAiXse90_eHab16vIKrioUMwQ8I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/NDQxNzk2L3Bob3Rv/L3BvcnRyYWl0LW9m/LWEtcm9ib3QuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUZf/eDBDLTRobDRCeGpE/RG9ESHFMUks3RTh2/a25YNXFQN0RQVzZ6/Y0FhVmc9'} ,
      firstName: `Maksym`,
      lastName: 'Ivanov',
      email: 'maks.rvachov.at@gmail.com',
      phone: '+4369010400237',
      birthDate: new Date('1990-01-01')
    },{
      id: 'client1',
      img: {id: 'img1', image_path: 'https://imgs.search.brave.com/N9D01AITdHJynFvVoAiXse90_eHab16vIKrioUMwQ8I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/NDQxNzk2L3Bob3Rv/L3BvcnRyYWl0LW9m/LWEtcm9ib3QuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUZf/eDBDLTRobDRCeGpE/RG9ESHFMUks3RTh2/a25YNXFQN0RQVzZ6/Y0FhVmc9'} ,
      firstName: `Maksym`,
      lastName: 'Ivanov',
      email: 'maks.rvachov.at@gmail.com',
      phone: '+4369010400237',
      birthDate: new Date('1990-01-01')
    },{
      id: 'client1',
      img: {id: 'img1', image_path: 'https://imgs.search.brave.com/N9D01AITdHJynFvVoAiXse90_eHab16vIKrioUMwQ8I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/NDQxNzk2L3Bob3Rv/L3BvcnRyYWl0LW9m/LWEtcm9ib3QuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUZf/eDBDLTRobDRCeGpE/RG9ESHFMUks3RTh2/a25YNXFQN0RQVzZ6/Y0FhVmc9'} ,
      firstName: `Maksym`,
      lastName: 'Ivanov',
      email: 'maks.rvachov.at@gmail.com',
      phone: '+4369010400237',
      birthDate: new Date('1990-01-01')
    },{
      id: 'client1',
      img: {id: 'img1', image_path: 'https://imgs.search.brave.com/N9D01AITdHJynFvVoAiXse90_eHab16vIKrioUMwQ8I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/NDQxNzk2L3Bob3Rv/L3BvcnRyYWl0LW9m/LWEtcm9ib3QuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUZf/eDBDLTRobDRCeGpE/RG9ESHFMUks3RTh2/a25YNXFQN0RQVzZ6/Y0FhVmc9'} ,
      firstName: `Maksym`,
      lastName: 'Ivanov',
      email: 'maks.rvachov.at@gmail.com',
      phone: '+4369010400237',
      birthDate: new Date('1990-01-01')
    },])
  }

  getClientById(clientId: string) {
    return this.clients().find(i=> i.id === clientId);
  }

  getClientsFiltered() {
    return computed(()=> {
      const filters = this.currentFilters();
      return this.clients().filter(client=> {
        if (filters.query) {
          let result = true;
          for (let queryLower of filters.query.toLowerCase().split(' ')){
            if (client.firstName.toLowerCase().includes(queryLower) ||
              client.lastName.toLowerCase().includes(queryLower) ||
              client.email.toLowerCase().includes(queryLower) ||
              client.phone.toLowerCase().includes(queryLower)) {
            } else {
              result = false;
            }
          }
          return result
        }
        return true;
      });})
  }

  filterClients(query: {query: string}) {
    this.currentFilters.set(query);
  }
}
