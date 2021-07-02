import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageRouting } from './profile-page-routing';
import { NbButtonModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { ProfilePageMainComponent } from './profile-page-main/profile-page-main.component';



@NgModule({
  declarations: [ProfilePageMainComponent],
  imports: [
    CommonModule,
    RouterModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    ProfilePageRouting
  ]
})
export class ProfilePageModule { }
