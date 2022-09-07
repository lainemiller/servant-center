export const environment = {
  production: true,
  serviceUrl: {
    consentGetUser: 'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/consentForm/getUserDetails/',
    consentUpdateUser: 'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/consentForm/acceptConsent/',
    veteranProfileGetUser:'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/userProfile/getUserDetails/',
    caseWorkerUser:'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/uiLayout/getCaseWorkerDetails/', 
    saveTransportationForm:'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/transportationForm/saveTransportationRequest/',
    getTransportRequestFormData:'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/transportationForm/getTransportationRequests/',
    approveTransportationForm:'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/transportationForm/approveTransportationRequests/'
  },
  localUrl:''
};
