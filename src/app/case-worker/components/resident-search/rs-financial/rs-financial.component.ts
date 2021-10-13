import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rs-financial',
  templateUrl: './rs-financial.component.html',
  styleUrls: ['./rs-financial.component.scss']
})
export class RsFinancialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('rs financial component');
  }

}
