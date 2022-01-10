import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-header',
  templateUrl: './item-header.component.html',
  styleUrls: ['./item-header.component.scss'],
})
export class ItemHeaderComponent implements OnInit {
  @Input() title: string = '';
  @Input() color: string = 'red';
  constructor() {}

  ngOnInit(): void {
    console.log('item header component');
  }
}
