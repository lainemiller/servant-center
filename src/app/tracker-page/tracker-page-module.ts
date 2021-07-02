import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackerPageRouting } from './tracker-page-routing';
import { RouterModule } from '@angular/router';
import { NbButtonModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { TrackerPageMainComponent } from './tracker-page-main/tracker-page-main.component';



@NgModule({
  declarations: [TrackerPageMainComponent],
  imports: [
    CommonModule,
    RouterModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    TrackerPageRouting
  ]
})
export class TrackerPageModule { }
