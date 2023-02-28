import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ResidentSearchService } from 'src/app/case-worker/services/resident-search.service';

@Component({
  selector: 'app-rs-misc-correspondence',
  templateUrl: './rs-misc-correspondence.component.html',
  styleUrls: ['./rs-misc-correspondence.component.scss'],
  providers: [MessageService],
})
export class RsMiscCorrespondenceComponent implements OnInit {
  ngOnInit(): void {}

  constructor(private residentService: ResidentSearchService) {}

  uploadFile(event: any) {
    let formData = new FormData();
    formData.append('image', event.files![0]);
    formData.append('imageName', event.files![0].name);
    this.residentService.uploadMiscFile(formData).subscribe(
      (response) => {
        console.log('File upload response', response);
      },
      (error) => {
        console.error('service file error', error);
      }
    );
  }
}
