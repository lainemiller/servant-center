import { Component, OnInit } from '@angular/core';
import { AssessmentDataService } from '../../services/assessment-data.service';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss'],
})
export class AssessmentComponent implements OnInit {
  public assessDetails:any;
  constructor(private service:AssessmentDataService) {
  
  }

  ngOnInit(): void {
    this.service.getData().subscribe(data=>{
      this.assessDetails=data
      console.log(this.assessDetails);
      
    })
    console.log(this.assessDetails);
    
  }


  
}
