export interface ConsentResponse {
  responseStatus: string;
  data: [
    {
      first_name: string;
      last_name: string;
      consent_status: boolean;
    }
  ];
  error: string;
}
