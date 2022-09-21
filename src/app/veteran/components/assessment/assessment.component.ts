import { Component, OnInit } from '@angular/core';
import { AssessmentResp } from 'src/app/shared/models/assessmentResponse';
import { ClipBoardService } from 'src/app/shared/services/clip-board.service';
import { AssessmentDataService } from '../../services/assessment-data.service';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss'],
})
export class AssessmentComponent implements OnInit {
  public assessDetails: any;
  public assesssmentData:any
  public grayingOut: boolean = true;
  public vetID!: number;
  public showAssessment: boolean = true;
  constructor(private service: AssessmentDataService,
    private cachedata: ClipBoardService) {
      this.vetID = this.cachedata.get("veteranId")
    }

  ngOnInit(): void {
    this.service.getData(this.vetID).subscribe((data:AssessmentResp) => {
      this.assessDetails = data;
      console.log(this.assessDetails.assessment_details);
      this.assesssmentData=this.assessDetails.assessment_details
      if(data){
      this.showAssessment = false;
      this.grayingOut = false;
      }
    });
   
  }
}
