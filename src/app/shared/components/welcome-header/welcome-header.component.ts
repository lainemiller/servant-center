import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-header',
  templateUrl: './welcome-header.component.html',
  styleUrls: ['./welcome-header.component.scss'],
})
export class WelcomeHeaderComponent implements OnInit {
  @Input() public name: any;
  @Input() public image: any;

  constructor() {}

  ngOnInit(): void {
    console.log('welcome header component');
  }

  changePhoto(imageInput: HTMLInputElement){
    console.log('imageInput.files![0]',imageInput.files![0]); 
  }
}