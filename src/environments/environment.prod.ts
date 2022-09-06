import awsConfig from "src/aws-exports";

const winHostNm = window.location.hostname;
let envConfig: any;

if (winHostNm === 'localhost' || winHostNm.includes('dev') || winHostNm.includes('dd1w1wuqwe28t')) {
  envConfig = awsConfig.oauth.dev;
} else {
  envConfig = awsConfig.oauth.prod;
}

console.log('env prod::envConfig', envConfig, winHostNm);

export const environment = {
  production: true,
  oauth: {
    domain: envConfig.domain,
    scope: ['email', 'openid'],
    redirectSignIn: envConfig.redirectSignIn,
    redirectSignOut: envConfig.redirectSignOut,
    responseType: 'code',
    redirect_uri: envConfig.redirectSignIn
  },
  serviceUrl: {
    consentGetUser: 'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/consentForm/getUserDetails/',
    consentUpdateUser: 'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/consentForm/acceptConsent/',
    veteranProfileGetUser:'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/userProfile/getUserDetails/',
    caseWorkerUser:'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/uiLayout/getCaseWorkerDetails/3',
    getVeteranId:'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/getVeteranId/',
    veteranProfileUpdateUser:'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/userProfile/updateUserDetails/',
    getHealthTracker:'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/healthTracker/getHealthTracker/',
    saveHealthTracker:'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/healthTracker/saveHealthTrackerRequest/',
    saveTransportationForm:'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/transportationForm/saveTransportationRequest/',
    getTransportRequestFormData:'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/transportationForm/getTransportationRequests/',
    approveTransportationForm:'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/transportationForm/approveTransportationRequests/'
  },
  localUrl:''
};
