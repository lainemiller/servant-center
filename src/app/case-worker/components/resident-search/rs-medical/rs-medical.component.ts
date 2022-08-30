import { Component, OnInit } from '@angular/core';
import { ClipBoardService } from 'src/app/shared/services/clip-board.service';
import { HealthTrackerService } from 'src/app/veteran/services/health-tracker.service';

@Component({
  selector: 'app-rs-medical',
  templateUrl: './rs-medical.component.html',
  styleUrls: ['./rs-medical.component.scss']
})
export class RsMedicalComponent implements OnInit {
  healthTrackerDetails: any;
  cols!: any[];
  tableValues!:any[];
  veteranId!:number;

  constructor(private service: HealthTrackerService,
    private cacheData: ClipBoardService) { }

  ngOnInit(): void {
    this.veteranId=this.cacheData.get("veteranId");
    this.showSelectedTable();
    this.getHealthTrackerByVeteranId();
  }

  showSelectedTable(){
    this.cols = [
      { field: 'note_date', header: 'Date' ,date: true,format: 'dd/MM/yyyy'},
      { field: 'measurement', header: 'Measurement' },
      { field: 'tracking_comments', header: 'Comment' },
  ];
  }

  getHealthTrackerByVeteranId() {
    let resp = this.service.getHealthTrackerByVeteranId(this.veteranId);
    resp.subscribe((data) => {
      console.log('Health Tracker API--->', data);
      this.healthTrackerDetails = data;
      this.tableValues=this.healthTrackerDetails['result'];
    });
  }

}
