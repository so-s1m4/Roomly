import {Injectable, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notifications: WritableSignal<{ message: string, type:NotificationType }[]> = signal([]);

  addNotification(message: string, type:NotificationType) {
    this.notifications.update((n)=>[...n, {message, type }]);
    setTimeout(() => {
      this.notifications.update(n=>n.slice(1));
    }, 2000)
  }
}
