import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NbButtonModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { PlanPageRouting } from './plan-page-routing';
import { PlanPageMainComponent } from './plan-page-main/plan-page-main.component';



@NgModule({
  declarations: [PlanPageMainComponent],
  imports: [
    CommonModule,
    RouterModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    PlanPageRouting
  ]
})
export class PlanPageModule { }
