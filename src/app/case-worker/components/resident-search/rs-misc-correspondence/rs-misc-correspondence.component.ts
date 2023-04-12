import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
  public tableValues!: any;
  public isFileUploaded!: string;
  public showSpinner:boolean = true;
  public grayOut:boolean = true;
  public imageURL = "";

  constructor(
    private residentService: ResidentSearchService,
    private cacheData: ClipBoardService,
    private messageService: MessageService,
    private datepipe: DatePipe,
    private sanitization: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.loginId = this.cacheData.get('selectedResidentVeteranId');
    this.getUploadedFiles();
  }

  columns = [
    { header: 'File Name', field: 'file_name' },
    { header: 'Last Modified', field: 'last_modified' },
  ];

  uploadFile(event: any) {
    this.showSpinner=true;
    this.grayOut=true;
    console.log("EVENT",event);
    let formData = new FormData();
    formData.append('image', event.files![0]);
    formData.append('imageName', event.files![0].name);
    formData.append('userGroup', 'VETERAN');
    this.residentService.uploadMiscFile(formData, this.loginId).subscribe(
      (response) => {
        if (response.responseStatus === 'SUCCESS') {
          this.successMessage();
          this.getUploadedFiles();
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
        if (response.responseStatus === 'SUCCESS') {
          if (response.data.KeyCount > 0) {
            this.isFileUploaded = 'YEs';
            const tableData = this.formatTableData(response.data.Contents);
            this.tableValues = tableData;
            this.showSpinner=false;
            this.grayOut=false;
          } else {
            this.isFileUploaded = 'NO';
          }
        }
      },
      (error) => {
        console.error('service file error', error);
        this.isFileUploaded = 'NO';
      }
    );
  }

  formatTableData(Content: any[]): any {
    let tableData: any[] = [];
    const prefix = 'VETERAN_' + this.loginId;
    for (let i = 0; i < Content.length; i++) {
      const data = {
        key: Content[i].Key,
        file_name: Content[i].Key.replace(prefix + '/', ''),
        last_modified: this.datepipe.transform(
          Content[i].LastModified,
          'yyyy/MM/dd'
        ),
      };
      tableData.push(data);
    }
    return tableData;
  }

  selectFile(event: any) {
    this.residentService.downloadMiscFile(event.data.key).subscribe(
      (response) => {
        console.log('Response==>', response);
        if (response.responseStatus === 'SUCCESS') {
          this.imageURL="data:image/png;base64,"+response.baseObj;
          const dataBuffer = response?.data?.Body?.data;
          const dataConType = response?.data?.ContentType;
          const dataBlob = new Blob([new Uint8Array(dataBuffer)], {type: dataConType});
          const dataBlobUrl = window.URL.createObjectURL(dataBlob);
          // window.open(dataBlobUrl, '_blank');
          // const windowOpenObj = window.open();
          // const bs64DB = this.arrayBufferToBase64(dataBuffer);
          // const dataFileFormat = 'data:' + dataConType + ';base64,' + bs64DB;
          // const sanitizedURL = this.sanitization.bypassSecurityTrustUrl(dataFileFormat);
          // windowOpenObj?.document.write("<iframe src='"+ dataFileFormat +"'></iframe>");
          const dLink = document.createElement('a');
          dLink.href = dataBlobUrl;
          dLink.target = '_blank';
          document.body.appendChild(dLink);
          dLink.click();
          document.body.removeChild(dLink);
          console.log('download misc file::body:', {dataBlob}, {dataBlobUrl});
        }
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

  arrayBufferToBase64(buffr: any): string {
    const bufToBin = new Uint8Array(buffr);
    let bas64Str = '';
    let bina = '';
    for (let buf=0; buf < bufToBin?.length; buf++) {
      bina += String.fromCharCode(bufToBin[buf]);
    }
    bas64Str = window.btoa(bina);
    return bas64Str;
  }
}
