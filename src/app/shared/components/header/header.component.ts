import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleMenu: EventEmitter<boolean> = new EventEmitter();
  menuState: boolean = false;
  title!: string;
  caseComp: boolean = false;
  pattern: any = /\bcase-worker[a-zA-Z]*/;
  constructor(private router: Router) {
    if (this.router.url.match(this.pattern)) {
      this.title = 'CASE MANAGER';
      this.caseComp = true;
    } else {
      this.title = '';
      this.caseComp = false;
    }
  }

  ngOnInit(): void {}

  toggleMenuState(): void {
    this.menuState = !this.menuState;
    this.toggleMenu.emit(this.menuState);
  }
}
