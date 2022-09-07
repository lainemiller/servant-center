import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Auth } from '@aws-amplify/auth';
import awsConfig from 'src/aws-exports';
import { environment } from 'src/environments/environment.prod';

import { ClipBoardService } from '../../services/clip-board.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  private awsEnvConfig = environment;

  public title = 'LOGIN TO APPLICATION';
  public clientId = awsConfig.aws_user_pools_web_client_id;
  public redirectUri = this.awsEnvConfig.oauth.redirect_uri
  public domain = this.awsEnvConfig.oauth.domain;

  constructor(
    private router: Router,
    private clipBoardService: ClipBoardService
  ) {
    // Auth.currentAuthenticatedUser()
    //   .then(() => {
    //     this.clipBoardService.set('userData', { userName: 'something' });
    //     this.router.navigate(['/veteran'], { replaceUrl: true });
    //   })
    //   .catch((err) => {
    //     this.router.navigate(['/login'], { replaceUrl: true });
    //     console.log(err);
    //   });
  }
}
