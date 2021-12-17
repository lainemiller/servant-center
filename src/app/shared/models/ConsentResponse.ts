export interface ConsentResponse{
  vetID: number,
  result: [
    {
      first_name: string,
      last_name: string,
      consent_status: boolean
    }
  ]
}