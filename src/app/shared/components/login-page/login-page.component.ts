import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationDetails, CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  public title = 'LOGIN TO APPLICATION';
  public logInUrl='https://servant-center.auth.us-east-1.amazoncognito.com/login?response_type=token&client_id=5igt34gtp2ok5mf02d9e4v30lb&redirect_uri=http://localhost:4200/veteran'
  public loginForm: any;
  constructor(private fb: FormBuilder ,private router:Router) {
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
  }
  // onSubmit() {
  //   console.log(this.loginForm.value);
  
  //     // this.isLoading = true;
  //     if(this.loginForm.valid){
  //       let authenticationDetails = new AuthenticationDetails({
  //         Username: this.loginForm.value.username,
  //         Password: this.loginForm.value.password,
  //     });
  //     console.log(authenticationDetails);
      
  //     let poolData = {
  //       UserPoolId: environment.cognitoUserPoolId,
  //       ClientId: environment.cognitoAppClientId
  //     };
  //     console.log(poolData);
  //     let userPool = new CognitoUserPool(poolData);
  //     let userData = { Username: this.loginForm.value.username, Pool: userPool };
  //     var cognitoUser = new CognitoUser(userData);
     
  //     cognitoUser.authenticateUser(authenticationDetails, {
  //       onSuccess:(result)=>{
          
  //         var accessToken=result.getAccessToken().getJwtToken();
  //         localStorage.setItem('token',accessToken);
  //         console.log(accessToken);
  //         this.router.navigate(['/veteran'])
  //       },
  //       onFailure:(err)=> {
  //         console.log("errorrrrrr");          
  //         alert(err.message || JSON.stringify(err));
  //         // this.isLoading = false;
  //       },
  //        newPasswordRequired(userAttributes)  {
  //          delete userAttributes.email_verified;
  //          console.log(userAttributes)
  //           cognitoUser.completeNewPasswordChallenge("Pravin@11", {
  //       name:"mt_veteran",
  //       phone_number: "+18024558080",
  //       email: "mahalakshmi.veerabadran@mindtree.com"
  //     }, this);
  //       }
  //     });
    
  //     }
   
  // }

  //  forgotpasswordbutton() {
  //    console.log(this.loginForm.get('username').value);
     
  //   var poolData = {
  //     UserPoolId: environment.cognitoUserPoolId,
  //     ClientId: environment.cognitoAppClientId 
  //     };
    
  //     var userPool = new CognitoUserPool(poolData);
    
  //     var userData = {
  //         Username : this.loginForm.get('username').value,
  //         Pool : userPool,
  //     };
  //   console.log(userData);
    
  //     var cognitoUser = new CognitoUser(userData);
      
  //     cognitoUser.forgotPassword({
  //         onSuccess: function (result) {
  //             console.log('call result: ' + result);
  //         },
  //         onFailure: function(err) {
  //             alert(err);
  //       console.log(err.stack);
  //         },
  //         inputVerificationCode() {
  //             var verificationCode = prompt('Please input verification code ' ,'')!;
  //             var newPassword = prompt('Enter new password ' ,'')!;
  //             cognitoUser.confirmPassword(verificationCode, newPassword, this);
  //         }
  //     });
  //   }
}
