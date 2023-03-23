import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ResidentSearchService } from 'src/app/case-worker/services/resident-search.service';
import { ClipBoardService } from 'src/app/shared/services/clip-board.service';

@Component({
  selector: 'app-rs-misc-correspondence',
  templateUrl: './rs-misc-correspondence.component.html',
  styleUrls: ['./rs-misc-correspondence.component.scss'],
  providers: [MessageService],
})
export class RsMiscCorrespondenceComponent implements OnInit {
  private loginId!: number;

  constructor(
    private residentService: ResidentSearchService,
    private cacheData: ClipBoardService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.loginId = this.cacheData.get('selectedResidentVeteranId');
    this.getUploadedFiles();
  }

  uploadFile(event: any) {
    let formData = new FormData();
    formData.append('image', event.files![0]);
    formData.append('imageName', event.files![0].name);
    formData.append('userGroup', 'VETERAN');
    this.residentService.uploadMiscFile(formData, this.loginId).subscribe(
      (response) => {
        if (response.responseStatus === 'SUCCESS') {
          this.successMessage();
          console.log('File upload response', response);
        } else {
          this.errorMessage();
        }
      },
      (error) => {
        this.errorMessage();
        console.error('service file error', error);
      }
    );
  }

  getUploadedFiles() {
    const prefix = 'VETERAN_' + this.loginId;
    this.residentService.getUploadedMiscFiles(prefix).subscribe(
      (response) => {
        console.log('Retreived files : ', response);
      },
      (error) => {
        console.error('service file error', error);
      }
    );
  }

  successMessage() {
    this.messageService.add({
      severity: 'success',
      summary: 'Updated',
      detail: 'File Uploaded successfully!!',
    });
  }

  errorMessage() {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Unable to upload your file. Please try again!',
    });
  }
}
