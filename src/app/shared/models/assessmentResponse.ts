export interface AssessmentResp {
  assessment_details: [
    {
      header: string;
      data: [
        {
          key: string;
          value: string;
        }
      ];
    }
  ];
}
