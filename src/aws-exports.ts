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
        "redirectSignIn": "http://localhost:4200/veteran",
        "redirectSignOut": "http://localhost:4200/login",
        "responseType": "token"
    }
};

export default awsmobile;
