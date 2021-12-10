const awsmobile = {
    "aws_project_region": "us-east-1",
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-1_8wIG1UbUU",
    "aws_user_pools_web_client_id": "5igt34gtp2ok5mf02d9e4v30lb",
    "oauth": {
        "domain": "servant-center.auth.us-east-1.amazoncognito.com",
        "scope": [
           // "phone",
            "email",
            "openid",
           // "profile",
           // "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "https://dd1w1wuqwe28t.cloudfront.net/veteran",
        "redirectSignOut": "https://dd1w1wuqwe28t.cloudfront.net/login",
        "responseType": "token"
    }
};

export default awsmobile;
