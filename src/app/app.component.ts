import { Component, isDevMode, OnInit } from '@angular/core';
import { ClipBoardService } from './shared/services/clip-board.service';
import { Auth } from '@aws-amplify/auth';
import { VeteranDashboardService } from './veteran/services/veteran-dashboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'servant-center';
  username!: string;
  veteranId!: number;
  private isDev = isDevMode();
  nickName!: string;
  isShowComponent: boolean = true;
  userGroup!: string;
  email!: string;

  constructor(
    private cacheData: ClipBoardService,
    private service: VeteranDashboardService
  ) {}

  ngOnInit() {
    // this.username = 'mt_veteran';
    // let encStr = btoa('Veteran_' + this.username);
    // console.log('Encoded String', encStr);
    // console.log('Decoded String', atob(encStr));
    if (this.isDev) {
      this.cacheData.set('veteranId', 4);
      this.cacheData.set('caseWorkerId', 3); 
      this.cacheData.set('loginId', 4);
    } else {
      Auth.currentAuthenticatedUser().then((user) => {
        Auth.userAttributes(user).then((currentAttribute) => {
          console.log(' Auth.userAttributes() response', currentAttribute);
        });
        console.log('Authenticated User Details', user);
        const userPayloadObject = user?.signInUserSession;
        this.userGroup =
          userPayloadObject.accessToken?.payload['cognito:groups']?.[0];
        this.username = userPayloadObject?.accessToken?.payload?.username;
        this.email = userPayloadObject?.idToken?.payload?.email;
        console.log('Authenticated UserName', this.username);
        this.service
          .getVeteranIdByUsername(this.username)
          .subscribe((response) => {
            if (response.responseStatus == 'SUCCESS') {
              if (response.data.length === 1) {
                this.veteranId = response.data[0].party_id;
                this.nickName = response.data[0].nick_name;
                this.cacheData.set('veteranId', this.veteranId);
                this.cacheData.set('loginId', this.veteranId);
                this.cacheData.set('nickName', this.nickName);
                console.log('web_party_id', this.veteranId);
                console.log('Nick name', this.nickName);
                if (this.veteranId) {
                  this.isShowComponent = true;
                }
              } else if (response.data.length === 0) {
                 console.log('username is not present')
                // const userDetails=[{'username':this.username,'userGroup':this.userGroup}]
                // this.service.addUser(userDetails).subscribe((response)=>{
                //   if (response.responseStatus == 'SUCCESS') {
                //       console.log(response);
                //       if(this.userGroup.toUpperCase()==='VETERAN'){
                //         const veteranDetails=[{'firstName':this.username,'email':this.email}];
                //         this.service.addVeteran(veteranDetails).subscribe((response)=>{
                //           if (response.responseStatus == 'SUCCESS') {
                //             console.log(response);
                //           }
                //         })
                //       }else if(this.userGroup.toUpperCase()==='CASEWORKER'){
                //         const caseWorkerDetails=[{'nickName':this.username,'email':this.email}];
                //         this.service.addCaseWorker(caseWorkerDetails).subscribe((response)=>{
                //           if (response.responseStatus == 'SUCCESS') {
                //             console.log(response);
                //           }
                //         })
                //       }
                //       this.getUserId();
                //   }
                // })
              }
            }
          });
      });
    }
  }

  getUserId() {
    this.service.getVeteranIdByUsername(this.username).subscribe((response) => {
      if (response.responseStatus == 'SUCCESS') {
        this.veteranId = response.data[0].party_id;
        this.cacheData.set('veteranId', this.veteranId);
        this.cacheData.set('loginId', this.veteranId);
        console.log('web_party_id', this.veteranId);
        if (this.veteranId) {
          this.isShowComponent = true;
        }
      }
    });
  }
}


