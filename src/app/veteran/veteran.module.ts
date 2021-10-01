import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeteranComponent } from './veteran.component';
import { VeteranRoutingModule } from './veteran-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { TreatmentPlanComponent } from './components/treatment-plan/treatment-plan.component';
import { HealthTrackerComponent } from './components/health-tracker/health-tracker.component';
import { VeteranProfileComponent } from './components/veteran-profile/veteran-profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProgressNotesComponent } from './components/dashboard/progress-notes/progress-notes.component';
import { TransportationRequestFormComponent } from './components/dashboard/transportation-request-form/transportation-request-form.component';




@NgModule({
  declarations: [
    VeteranComponent,
    TransportationRequestFormComponent,
    ProgressNotesComponent,
    AssessmentComponent,
    TreatmentPlanComponent,
    HealthTrackerComponent,
    VeteranProfileComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    VeteranRoutingModule,
    SharedModule,
    
  ]
})
export class VeteranModule { }
