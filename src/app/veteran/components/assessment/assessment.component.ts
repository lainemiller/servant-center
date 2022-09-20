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
  public vetID!: number;
  public showAssessment!: boolean;
  constructor(private service: AssessmentDataService,
    private cachedata: ClipBoardService) {
      this.vetID = this.cachedata.get("veteranId")
    }

  ngOnInit(): void {
    document.getElementById("overlay")!.style.display="block"
    this.service.getData(this.vetID).subscribe((data:AssessmentResp) => {
      this.assessDetails = data;
      console.log(this.assessDetails.assessment_details);
      this.assesssmentData=this.assessDetails.assessment_details
      if(data){
      this.showAssessment = true;
      document.getElementById("overlay")!.style.display="none"
      }
    });
   
  }
}
