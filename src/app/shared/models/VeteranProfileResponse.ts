export interface VeteranProfileResponse {
  responseStatus: string;
  data: [
    {
      first_name: string;
      middle_initial: string;
      last_name: string;
      nick_name: string;
      date_of_birth: Date;
      place_of_birth: string;
      ssn: number;
      hmis_id: number;
      gender: string;
      state: string;
      marital_status: string;
      primary_phone: number;
      address_main: string;
      city: string;
      county: string;
      address_line_2: string;
      zip_code: number;
      hobbies: string;
      primary_language: string;
      religious_preference: string;
      race: string;
      contact_person: string;
      contact_person_relationship: string;
      contact_person_phone: number;
      contact_person_address: string;
    }
  ];
  error: string;
}
