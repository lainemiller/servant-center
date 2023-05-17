const awsConfig = {
  aws_project_region: 'us-east-1',
  aws_cognito_region: 'us-east-1',
  oauth: {
    dev: {
      domain: 'servant-center-dev.auth.us-east-1.amazoncognito.com',
      scope: ['email', 'openid'],
      redirectSignIn: 'https://dd1w1wuqwe28t.cloudfront.net/veteran',
      redirectSignOut: 'https://dd1w1wuqwe28t.cloudfront.net/login',
      responseType: 'token',
      aws_user_pools_id: 'us-east-1_SpellypxJ',
      aws_user_pools_web_client_id: '3ebsuhsnrt5j4n2hsko4n0m88r',
    },
    prod: {
      domain: 'servant-center.auth.us-east-1.amazoncognito.com',
      scope: ['email', 'openid'],
      redirectSignIn: 'https://theservantcenter.com/veteran',
      redirectSignOut: 'https://theservantcenter.com/login',
      responseType: 'token',
      aws_user_pools_id: 'us-east-1_8wIG1UbUU',
      aws_user_pools_web_client_id: '5igt34gtp2ok5mf02d9e4v30lb',
    },
  },
};

export default awsConfig;
