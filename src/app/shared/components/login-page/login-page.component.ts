import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '@aws-amplify/auth';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  public title = 'LOGIN TO APPLICATION';
  constructor(private router: Router) {
    //currentAuthenticatedUser: when user comes to login page again
    Auth.currentAuthenticatedUser()
      .then(() => {
        this.router.navigate(['/veteran'], { replaceUrl: true });
      })
      .catch((err) => {
        this.router.navigate(['/login'], { replaceUrl: true });
        console.log(err);
      });
  }

  ngOnInit(): void {}

  navigateToDashboard(): void {
    Auth.federatedSignIn();
  }
}
