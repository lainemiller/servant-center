import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentPageMainComponent } from './assessment-page-main/assessment-page-main.component';
import { RouterModule } from '@angular/router';
import { NbButtonModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { AssessmentPageRouting } from './assessment-page-routing';



@NgModule({
  declarations: [AssessmentPageMainComponent],
  imports: [
    CommonModule,
    RouterModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    AssessmentPageRouting
  ]
})
export class AssessmentPageModule { }
