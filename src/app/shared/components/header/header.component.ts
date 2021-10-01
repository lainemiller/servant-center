import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleMenu: EventEmitter<boolean> = new EventEmitter();
  menuState: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleMenuState(): void {
    this.menuState = !this.menuState
    this.toggleMenu.emit(this.menuState);
  }
}
