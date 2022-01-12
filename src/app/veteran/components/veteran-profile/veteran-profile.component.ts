import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veteran-profile',
  templateUrl: './veteran-profile.component.html',
  styleUrls: ['./veteran-profile.component.scss'],
})
export class VeteranProfileComponent implements OnInit {
  // to show few fields in veteran profile
  isShowFields: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
