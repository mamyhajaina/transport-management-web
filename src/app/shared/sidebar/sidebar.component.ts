import { Component } from '@angular/core';


export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'nc-bank', class: '' },
  { path: '/icons', title: 'Icons', icon: 'nc-diamond', class: '' },
  { path: '/maps', title: 'Maps', icon: 'nc-pin-3', class: '' },
  { path: '/notifications', title: 'Notifications', icon: 'nc-bell-55', class: '' },
  { path: '/user', title: 'User Profile', icon: 'nc-single-02', class: '' },
  { path: '/table', title: 'Table List', icon: 'nc-tile-56', class: '' },
  { path: '/typography', title: 'Typography', icon: 'nc-caps-small', class: '' },
  { path: '/upgrade', title: 'Upgrade to PRO', icon: 'nc-spaceship', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
