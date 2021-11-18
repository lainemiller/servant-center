import { Component , NgZone} from '@angular/core';
import { Router } from '@angular/router';

import { Auth } from '@aws-amplify/auth';
import { Hub } from '@aws-amplify/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'servant-center';
  
  ngOnInit(): void {
    // console.log("check auth", Auth.currentAuthenticatedUser())
  }
  
 
}
