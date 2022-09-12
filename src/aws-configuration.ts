const awsConfig = {
  aws_project_region: 'us-east-1',
  aws_cognito_region: 'us-east-1',
  aws_user_pools_id: 'us-east-1_SpellypxJ',
  aws_user_pools_web_client_id: '3ebsuhsnrt5j4n2hsko4n0m88r',
  oauth: {
    dev: {
      domain: 'servant-center-dev.auth.us-east-1.amazoncognito.com',
      scope: ['email', 'openid'],
      redirectSignIn: 'https://dd1w1wuqwe28t.cloudfront.net/veteran',
      redirectSignOut: 'https://dd1w1wuqwe28t.cloudfront.net/login',
      responseType: 'token',
    },
    prod: {
      domain: 'servant-center.auth.us-east-1.amazoncognito.com',
      scope: ['email', 'openid'],
      redirectSignIn: 'https://dd1w1wuqwe28t.cloudfront.net/veteran',
      redirectSignOut: 'https://dd1w1wuqwe28t.cloudfront.net/login',
      responseType: 'token',
    },
  },
};

export default awsConfig;
