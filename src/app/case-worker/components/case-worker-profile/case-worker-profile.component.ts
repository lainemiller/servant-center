import { Component, Input, OnInit } from '@angular/core';
import { ClipBoardService } from 'src/app/shared/services/clip-board.service';
import { DataService } from '../../services/data.service';
import { Auth } from '@aws-amplify/auth';

@Component({
  selector: 'app-case-worker-profile',
  templateUrl: './case-worker-profile.component.html',
  styleUrls: ['./case-worker-profile.component.scss'],
})
export class CaseWorkerProfileComponent {
  public caseWorker: any;
  public userInfo: any;
  @Input() public profilePic!: string;
  caseWorkerId: any;
  @Input() public nickName!: string;
  @Input() public firstName!:string;
  @Input() public lastName!:string;
  userGroup!: string;

  constructor(
    private service: DataService,
    private cacheData: ClipBoardService
  ) {
   this.caseWorkerId = this.cacheData.get('caseWorkerId');
   console.log("case Id is:", this.caseWorkerId);
      // this.caseWorkerId=3;
      this.service.getUserData(this.caseWorkerId).subscribe((data) => {
      this.userInfo = data;
      console.log("Case Profile Info:",this.userInfo);
      this.profilePic = this.userInfo[0]?.photo;
      this.nickName = this.userInfo[0]?.nick_name;

    }); 
    
    Auth.currentAuthenticatedUser().then((user) => {
      console.log('Authenticated User Details', user);
      const userPayloadObject = user?.signInUserSession;
      this.userGroup =
        userPayloadObject.accessToken?.payload['cognito:groups']?.[0];
      this.firstName = userPayloadObject?.idToken?.payload?.given_name;
      this.lastName = userPayloadObject?.idToken?.payload?.family_name;
    //  this.nickName = userPayloadObject?.idToken?.payload?.nickname;
      console.log('CaseWorker firstName', this.firstName);
      console.log('CaseWorker lastName', this.lastName);
      console.log('CaseWorker nickName', this.nickName);      
    });
  }
}
