import { Component, HostListener, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-case-worker',
  templateUrl: './case-worker.component.html',
  styleUrls: ['./case-worker.component.scss'],
})
export class CaseWorkerComponent implements OnInit {
  displayMenu: boolean = true;
  public msgCount: number=1;
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
    this.service.getMsgCount().subscribe((data:any)=>
    {
      this.msgData = data;
      this.msgCount = this.msgData.msgs.length;
      this.itemChange(this.msgCount);
    },
    (err:any)=>
    {
      this.itemChange(0);
    })
    this.service.getName().subscribe((data) => {
      this.userInfo = data;
      this.profilePic = this.userInfo.image;
      this.name = this.userInfo.name;
      this.login = this.userInfo.date;
    });
  
  }
  itemChange(msgs:number)
  {
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
        routerLink: ['/case-worker/dashboard'],
      },
    ];
  }

  ngOnInit(): void {
    console.log('case worker component');
  }

  toggleMenu(): void {
    this.displayMenu = !this.displayMenu;
  }
}