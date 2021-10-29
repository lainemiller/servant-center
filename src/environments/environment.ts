// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  cognitoUserPoolId: "us-east-1_8wIG1UbUU",
  cognitoAppClientId: "5igt34gtp2ok5mf02d9e4v30lb",

  sso_api_username: '5igt34gtp2ok5mf02d9e4v30lb',
  sso_api_pwd: '',

  loginURL: 'https://servant-center.auth.us-east-1.amazoncognito.com/login?' +
              'client_id=5igt34gtp2ok5mf02d9e4v30lb&response_type=code&'+
              'redirect_uri=http://localhost:4200/veteran',

  redirectURL: 'http://localhost:4200/veteran',

  cognitoTokenURL: 'https://servant-center.auth.us-east-1.amazoncognito.com/oauth2/token',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
