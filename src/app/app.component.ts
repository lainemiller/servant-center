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

  constructor(
    private cacheData: ClipBoardService,
    private service: VeteranDashboardService
  ) {}

  ngOnInit(): void {
    if (this.isDev) {
      this.cacheData.set('veteranId', 4);
      this.cacheData.set('loginId', 4);
    } else {
      this.cacheData.set('veteranId', 4);
      this.cacheData.set('loginId', 4);
      Auth.currentAuthenticatedUser().then((user) => {
        console.log('Authenticated User Details', user);
        this.username = user.signInUserSession.accessToken.payload.username;
        console.log('Authenticated UserName', this.username);
        this.service
          .getVeteranIdByUsername(this.username)
          .subscribe((response) => {
            if (response.responseStatus == 'SUCCESS') {
              this.veteranId = response.data[0].party_id;
              this.nickName = response.data[0].nick_name;
              // this.cacheData.set('veteranId', this.veteranId);
              // this.cacheData.set('loginId', this.veteranId);
              this.cacheData.set('nickName', this.nickName);
              console.log('web_party_id', this.veteranId);
              console.log('Nick name', this.nickName);
            }
          });
      });
    }
  }
}
