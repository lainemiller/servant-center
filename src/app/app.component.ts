import { Component } from '@angular/core';
import { ClipBoardService } from './shared/services/clip-board.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'servant-center';

  constructor(private cacheData: ClipBoardService){
    
  }
  ngOnInit():void{
    this.cacheData.set("veteranId",4);
  }
}


