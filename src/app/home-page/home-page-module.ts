import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NbButtonModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { HomePageMainComponent } from './home-page-main/home-page-main.component';
import { HomePageRouting } from './home-page-routing';



@NgModule({
  declarations: [HomePageMainComponent],
  imports: [
    CommonModule,
    RouterModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    HomePageRouting
  ]
})
export class HomePageModule { }
