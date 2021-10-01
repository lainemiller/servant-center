import { state } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-case-worker',
  templateUrl: './case-worker.component.html',
  styleUrls: ['./case-worker.component.scss']
})
export class CaseWorkerComponent implements OnInit {
  displayMenu: boolean = true;
@HostListener('window:resize')
onWindowResize() {
  this.displayMenu = window.innerWidth > 768;
}

  items: MenuItem[] = [{
    label: 'DASHBOARD',
    icon: 'fa fa-tachometer-alt',
    styleClass: 'menu-items--text menu-item--1',
    routerLink: ['/case-worker/']
  },
  {
    label: 'MESSAGES',
    icon: 'fa fa-bell',
    styleClass: 'menu-items--text menu-item--2',
    routerLink: ['/case-worker/messages']
  },
  {
    label: 'RESIDENT SEARCH',
    icon: 'fa fa-search',
    styleClass: 'menu-items--text menu-item--3',
    routerLink: ['/case-worker/resident-search']
  },
  {
    label: 'PROFILE',
    icon: 'fa fa-user-circle',
    styleClass: 'menu-items--text menu-item--5',
    routerLink: ['/case-worker/profile']
  }];
  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void{
    this.displayMenu = !this.displayMenu
  }
}
