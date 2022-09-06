import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
  isTableEmpty:boolean=false;

  constructor(private service: HealthTrackerService,
    private cacheData: ClipBoardService) { }

  ngOnInit(): void {
    this.veteranId=this.cacheData.get("selectedResidentVeteranId");
    console.log("selected-veteran-Id-health-tracker",this.veteranId)
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
      if(data.result.length===0){
        this.isTableEmpty=true;
      }
      this.changeTableNameLabel();
    });
  }

  changeTableNameLabel() {
    this.tableValues = this.healthTrackerDetails['result'];
    for (let i = 0; i < this.tableValues.length; i++) {
      let tracking_subject = this.tableValues[i].tracking_subject;
      if (tracking_subject === 'weight') {
        this.tableValues[i].tracking_subject = 'Weight';
      }
      if (tracking_subject === 'temperature') {
        this.tableValues[i].tracking_subject = 'Temperature';
      }
      if (tracking_subject === 'blood pressure') {
        this.tableValues[i].tracking_subject = 'Blood pressure';
      }
      if (tracking_subject === 'drug screen') {
        this.tableValues[i].tracking_subject = 'Drug Screen';
      }
      if (tracking_subject === 'breathalyzer') {
        this.tableValues[i].tracking_subject = 'Breathalyzer';
      }
      if (tracking_subject === 'blood sugar') {
        this.tableValues[i].tracking_subject = 'Blood Sugar';
      }
      if (tracking_subject === 'other') {
        this.tableValues[i].tracking_subject = 'Other';
      }
    }
  }

}
