import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Auth } from '@aws-amplify/auth';
import { MenuItem } from 'primeng/api';

import { ClipBoardService } from '../shared/services/clip-board.service';
import { VeteranDashboardService } from './services/veteran-dashboard.service';

@Component({
  selector: 'app-veteran',
  templateUrl: './veteran.component.html',
  styleUrls: ['./veteran.component.scss'],
})
export class VeteranComponent implements OnInit {
  public name: any;
  public date: any;
  public data: any;
  public image: any;
  public userInfo: any;
 

  constructor(
    private service: VeteranDashboardService,
    private route: ActivatedRoute,
    private clipboardService: ClipBoardService
  ) {
    this.service.getName().subscribe((data) => {
      this.userInfo = data;
      console.log(this.userInfo);
      this.userInfo = this.userInfo.result;
      this.name = this.userInfo[0].nick_name;
      this.image = this.userInfo[0].photo;
      if (this.image === null) {
        this.image = '../assets/images/user-profile.jpg';
      }
      this.date = this.userInfo[0].last_login_date_time;
    });
  }

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
      command: () => this.onLogoutClick(),
    },
  ];

  ngOnInit(): void {
    console.log('veteran component');
    if (window.innerWidth < 768) this.displayMenu = false;

    const userData = this.clipboardService.get('userData');

    console.log('veteran component::userData:', userData);
  }

  toggleMenu(): void {
    this.displayMenu = !this.displayMenu;
  }
  activeMenu(event: any) {
    if (window.innerWidth < 768) this.displayMenu = !this.displayMenu;
  }
  onLogoutClick() {
    Auth.signOut();
  }
}
