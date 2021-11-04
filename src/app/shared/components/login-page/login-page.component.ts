import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Auth } from '@aws-amplify/auth';
import { Hub } from '@aws-amplify/core';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  public title = 'LOGIN TO APPLICATION';
  public logInUrl =
    'https://servant-center.auth.us-east-1.amazoncognito.com/login?response_type=token&client_id=5igt34gtp2ok5mf02d9e4v30lb&redirect_uri=http://localhost:4200/veteran';
  public loginForm: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private amplifyService: AmplifyService,
    private zone: NgZone
  ) {
    console.log(Hub.listen('auth', ({ payload: { event, data } }) => {
      console.log(event);
      console.log(data);
      
      
      if (event === 'cognitoHostedUI' || event === 'signedIn') {
        console.log(event,"login success");
        this.zone.run(() => this.router.navigate(['/veteran']));
      } else {
        console.log('hgjh');
      }
    }));
    
    Hub.listen('auth', ({ payload: { event, data } }) => {
      console.log(event);
      console.log(data);
      
      
      if (event === 'cognitoHostedUI' || event === 'signedIn') {
        console.log(event,"login success");
        this.zone.run(() => this.router.navigate(['/veteran']));
      } else {
        console.log('hgjh');
      }
    });

    //currentAuthenticatedUser: when user comes to login page again
    console.log(Auth.currentAuthenticatedUser());
    
    Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log("login again ");
        
        this.router.navigate(['/veteran'], { replaceUrl: true });
      })
      .catch((err) => {
        console.log("eroororoo");
        
        console.log(err,"hhghg");
      });
  }

  ngOnInit(): void {
    this.buildForm();
    console.log(window.location.href);
  }

  buildForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }

  navigateToDashboard(): void {
   window.location.assign(environment.loginURL);
    // Auth.federatedSignIn();
    
  }
}
