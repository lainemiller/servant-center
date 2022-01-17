import { Component, OnInit } from '@angular/core';
import { AssessmentResp } from 'src/app/shared/models/assessmentResponse';
import { AssessmentDataService } from '../../services/assessment-data.service';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss'],
})
export class AssessmentComponent implements OnInit {
  public assessDetails: any;
  public assesssmentData:any
  constructor(private service: AssessmentDataService) {}

  ngOnInit(): void {
    this.service.getData().subscribe((data:AssessmentResp) => {
      this.assessDetails = data;
      console.log(this.assessDetails.assessment_details);
      this.assesssmentData=this.assessDetails.assessment_details
    });
   
  }
}
