import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '@aws-amplify/auth';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  public title = 'LOGIN TO APPLICATION';
  public logInUrl =
    'https://servant-center.auth.us-east-1.amazoncognito.com/login?response_type=token&client_id=5igt34gtp2ok5mf02d9e4v30lb&redirect_uri=http://localhost:4200/veteran';

  constructor(private router: Router, private zone: NgZone) {
    Auth.currentAuthenticatedUser()
      .then(() => {
        this.router.navigate(['/veteran'], { replaceUrl: true });
      })
      .catch((err) => {
        console.log(err, 'Not logined');
      });
  }

  ngOnInit(): void {}

  navigateToDashboard(): void {
    Auth.federatedSignIn();
  }
}
