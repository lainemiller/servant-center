import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sc-main-body',
  templateUrl: './sc-main-body.component.html',
  styleUrls: ['./sc-main-body.component.scss']
})
export class ScMainBodyComponent implements OnInit {

  title = "Servant Center";

  constructor() { }

  ngOnInit(): void {
  }

}
