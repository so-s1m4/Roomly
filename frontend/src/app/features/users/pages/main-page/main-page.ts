import {Component, computed, inject, signal} from '@angular/core';
import {RoleCard} from '@features/users/components/role-card/role-card';
import {ROLE} from '@models/Flags.enum';
import {NgIcon} from '@ng-icons/core';
import {Icons} from '@models/Icons.enum';
import {Modal} from '@shared/ui/modal/modal';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {NgStyle} from '@angular/common';
import {Tree} from '@shared/ui/tree/tree';
import {MainService} from '@services/main.service';
import {UserService} from '@services/user.service';

@Component({
  selector: 'app-main-page',
  imports: [
    RoleCard,
    NgIcon,
    Modal,
    RouterLink,
    RouterOutlet,
    NgStyle,
    Tree
  ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {
  roles: RoleType[] = [
    {
      id: "1",
      name: "Супер-админ",
      description: "Имеет все права без ограничений.",
      flags: ROLE.SUPERADMIN
    },
    {
      id: "1",
      name: 'Админ',
      description: 'Может просматривать, создавать, редактировать и удалять игры, клиентов, сессии, пользователей, роли, настройки и филиалы.',
      flags: ROLE.ADMIN
    },
    {
      id: "1",
      name: 'Оператор',
      description: 'Может просматривать и создавать игры, клиентов, сессии и пользователей.',
      flags: ROLE.OPERATOR
    }
  ]

  mainService = inject(MainService);
  userService = inject(UserService);
  treeNodeWithUsers = computed<NodeType>(() => {return mergeLocsWithUsers(this.mainService.treeNode(), this.userService.users())});
  router = inject(Router);

  protected readonly Icons = Icons;
  onEdit(node: NodeType) {
    switch (node.type) {
      case 'user':
        this.router.navigate(['user', node.id])
        break;
      default:
        this.router.navigate(['node', node.id])
        break;
    }
  };
}

function mergeLocsWithUsers(node: NodeType, users: UserType[]): NodeType {
  const copy = structuredClone(node);

  // 1) Сначала рекурсивно мерджим только локации/не-user детей
  const mergedChildren = (copy.children ?? []).map(child => mergeLocsWithUsers(child, users));

  // 2) Добавляем пользователей только к узлу-локации (или к любому, если тебе так нужно)
  const userNodes: NodeType[] = users
    .filter(u => u.locationId === copy.id)
    .map(u => ({
      id: u.id,
      parentId: copy.id,
      label: u.name,
      children: [],
      type: 'user',
      icon: Icons.User,
    }));

  // 3) Склеиваем в нужном порядке (пользователи сверху)
  copy.children = [...userNodes, ...mergedChildren];

  return copy;
}
