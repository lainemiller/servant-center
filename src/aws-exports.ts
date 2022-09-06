import awsConfig from "./aws-configuration";

const winHostNm = window.location.hostname;
let envConfig: any;

if (winHostNm === 'localhost' || winHostNm.includes('dev') || winHostNm.includes('dd1w1wuqwe28t')) {
  envConfig = awsConfig.oauth.dev;
} else {
  envConfig = awsConfig.oauth.prod;
}

console.log('aws exports::envConfig', envConfig, winHostNm);

const awsAmplifyConfig = {
  aws_project_region: 'us-east-1',
  aws_cognito_region: 'us-east-1',
  aws_user_pools_id: 'us-east-1_SpellypxJ',
  aws_user_pools_web_client_id: '3ebsuhsnrt5j4n2hsko4n0m88r',
  oauth: {
    domain: envConfig.domain,
    scope: ['email', 'openid'],
    redirectSignIn: envConfig.redirectSignIn,
    redirectSignOut: envConfig.redirectSignOut,
    responseType: envConfig.responseType,
    redirect_uri: envConfig.redirectSignIn
  },
};

export default awsAmplifyConfig;
