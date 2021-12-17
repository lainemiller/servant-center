import { Component, HostListener, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DataService } from './services/data.service';
import Auth from '@aws-amplify/auth';

@Component({
  selector: 'app-case-worker',
  templateUrl: './case-worker.component.html',
  styleUrls: ['./case-worker.component.scss'],
})
export class CaseWorkerComponent implements OnInit {
  displayMenu: boolean = true;
  public msgCount: number = 1;
  public msgData: any;
  public userInfo: any;
  public name!: string;
  public login!: string;
  public profilePic!: string;
  items!: MenuItem[];

  @HostListener('window:resize')
  onWindowResize() {
    this.displayMenu = window.innerWidth > 768;
  }

  constructor(private service: DataService) {
    this.service.getMsgCount().subscribe(
      (data: any) => {
        this.msgData = data;
        this.msgCount = this.msgData.msgs.length;
        this.itemChange(this.msgCount);
      },
      (err: any) => {
        this.itemChange(0);
      }
    );
    this.service.getUserData().subscribe((data) => {
      this.userInfo = data;
      console.log(this.userInfo);
      this.userInfo = this.userInfo.result;
      this.name = this.userInfo[0].nick_name;
      this.profilePic = this.userInfo[0].photo;
      if (this.profilePic === null) {
        this.profilePic = '../assets/images/user-profile.jpg';
      }
      this.login = this.userInfo[0].last_login_date_time;
    });
  }
  itemChange(msgs: number) {
    this.items = [
      {
        label: 'DASHBOARD',
        icon: 'fa fa-tachometer-alt',
        styleClass: 'menu-items--text menu-item--1',
        routerLink: ['/case-worker/'],
      },
      {
        label: `MESSAGES (${msgs})+`,
        icon: 'fa fa-bell',
        styleClass: 'menu-items--text menu-item--2',
        routerLink: ['/case-worker/messages'],
      },
      {
        label: 'RESIDENT SEARCH',
        icon: 'fa fa-search',
        styleClass: 'menu-items--text menu-item--3',
        routerLink: ['/case-worker/resident-search'],
      },
      {
        label: 'PROFILE',
        icon: 'fa fa-user-circle',
        styleClass: 'menu-items--text menu-item--5',
        routerLink: ['/case-worker/profile'],
      },
      {
        label: 'LOGOUT',
        icon: 'fas fa-sign-out-alt',
        styleClass: 'menu-items--text menu-item--6',
        command: () => this.onLogoutClick(),
      },
    ];
  }

  ngOnInit(): void {
    console.log('case worker component');
    if (window.innerWidth < 768) this.displayMenu = false;
  }

  toggleMenu(): void {
    this.displayMenu = !this.displayMenu;
  }
  activeMenu(event: any) {
    if (window.innerWidth < 768) this.displayMenu = !this.displayMenu;
  }
  onLogoutClick() {
    console.log('Logout Clicked');

    Auth.signOut();
  }
}
