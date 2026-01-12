import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationService} from '@core/services/notification.service';
import {NotificationType} from '@models/Notification.type';

@Component({
  selector: 'app-notifications',
  imports: [
    CommonModule
  ],
  templateUrl: './notifications.html',
  standalone: true,
  styleUrl: './notifications.css'
})
export class Notifications {
  service = inject(NotificationService)

  protected readonly NotificationType = NotificationType;
}
