export interface VeteranProfileResponse {
  vetID: number;
  result: [
    {
      photo: string;
      nick_name: string;
      address_main: string;
      address_line_2: string;
      city: string;
      state: string;
      county: string;
      zip_code: number;
      primary_phone: string;
      marital_status: string;
      contact_person: string;
      contact_person_relationship: string;
      contact_person_address: string;
      contact_person_phone: string;
    }
  ];
}
