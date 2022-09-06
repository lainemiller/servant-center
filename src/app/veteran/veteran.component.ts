import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Auth } from '@aws-amplify/auth';
import { MenuItem } from 'primeng/api';
import { VeteranProfileResponse } from '../shared/models/VeteranProfileResponse';

import { ClipBoardService } from '../shared/services/clip-board.service';
import { VeteranDashboardService } from './services/veteran-dashboard.service';
import { VeteranprofileService } from './services/veteranprofile.service';

@Component({
  selector: 'app-veteran',
  templateUrl: './veteran.component.html',
  styleUrls: ['./veteran.component.scss'],
})
export class VeteranComponent implements OnInit {
  public name: any;
  public data: any;
  public image: any;
  public userInfo: any;
  veteran_id!: number;

  constructor(
    private cacheData: ClipBoardService,
    private service: VeteranDashboardService,
    private getName: VeteranprofileService,
    private route: ActivatedRoute,
    private clipboardService: ClipBoardService
  ) {
    // this.service.getName().subscribe((data) => {
    //   this.userInfo = data;
    //   console.log("UserInfo: ",this.userInfo);
    //   this.userInfo = this.userInfo.result;
    //   this.name = this.userInfo[0].nick_name;
    //   this.image = this.userInfo[0].photo;
    //   if (this.image === null) {
    //     this.image = '../assets/images/user-profile.jpg';
    //   }
    // });
    this.veteran_id = this.cacheData.get("veteranId");
    this.getName.getProfileData(this.veteran_id).subscribe((data) => {
      this.userInfo = data;
      this.name = this.userInfo.data[0].nick_name;
      this.image = this.userInfo.data[0].photo;
      if (this.image === null) {
        this.image = '../assets/images/user-profile.jpg';
      }
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
