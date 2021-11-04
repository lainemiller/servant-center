import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import awsconfig from './aws-exports'
import { Amplify } from '@aws-amplify/core' 
import {Auth} from '@aws-amplify/auth';
Amplify.configure(awsconfig);


const oauth={
  domain: "servant-center.auth.us-east-1.amazoncognito.com",
    scope: [
        "phone",
        "email",
        // "profile",
        // "aws.cognito.signin.user.admin"
    ],
    redirectSignIn: "http://localhost:4200/veteran",
    redirectSignOut: "http://localhost:4200/login",
    responseType: "code"
}

Auth.configure({
  oauth:oauth
})
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
