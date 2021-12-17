import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Auth } from '@aws-amplify/auth';

import { ClipBoardService } from '../../services/clip-board.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  public title = 'LOGIN TO APPLICATION';
  constructor(
    private router: Router,
    private clipBoardService: ClipBoardService
  ) {
    Auth.currentAuthenticatedUser()
      .then(() => {
        this.clipBoardService.set('userData', { userName: 'something' });
        this.router.navigate(['/veteran'], { replaceUrl: true });
      })
      .catch((err) => {
        this.router.navigate(['/login'], { replaceUrl: true });
        console.log(err);
      });
  }

  // navigateToDashboard(): void {
  //   Auth.federatedSignIn();
  // }
}
