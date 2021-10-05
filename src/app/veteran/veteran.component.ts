import { Component, Host, HostListener, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-veteran',
  templateUrl: './veteran.component.html',
  styleUrls: ['./veteran.component.scss'],
})
export class VeteranComponent implements OnInit {
  public displayMenu = true;

  @HostListener('window:resize')
  onWindowResize() {
    this.displayMenu = window.innerWidth > 768;
  }

  public items: MenuItem[] = [
    {
      label: 'DASHBOARD',
      icon: 'fa fa-tachometer-alt',
      styleClass: 'menu-items--text menu-item--1',
      routerLink: ['/veteran/'],
    },
    {
      label: 'ASSESSMENT',
      icon: 'fa fa-file-alt',
      styleClass: 'menu-items--text menu-item--2',
      routerLink: ['/veteran/assessment'],
    },
    {
      label: 'TREATMENT PLAN',
      icon: 'pi pi-star',
      styleClass: 'menu-items--text menu-item--3',
      routerLink: ['/veteran/treatment-plan'],
    },
    {
      label: 'HEALTH TRACKER',
      icon: 'fa fa-heartbeat',
      styleClass: 'menu-items--text menu-item--4',
      routerLink: ['/veteran/health-tracker'],
    },
    {
      label: 'PROFILE',
      icon: 'fa fa-user-circle',
      styleClass: 'menu-items--text menu-item--5',
      routerLink: ['/veteran/profile'],
    },
    {
      label: 'LOGOUT',
      icon: 'fas fa-sign-out-alt',
      styleClass: 'menu-items--text menu-item--6',
      routerLink: ['/veteran/'],
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleMenu(): void {
    this.displayMenu = !this.displayMenu;
  }
}
