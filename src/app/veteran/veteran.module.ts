import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProgressNotesComponent } from './components/dashboard/progress-notes/progress-notes.component';
import { TransportationRequestFormComponent } from './components/dashboard/transportation-request-form/transportation-request-form.component';
import { HttpClientModule } from '@angular/common/http';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { HealthTrackerComponent } from './components/health-tracker/health-tracker.component';
import { TreatmentPlanComponent } from './components/treatment-plan/treatment-plan.component';
import { VeteranProfileComponent } from './components/veteran-profile/veteran-profile.component';
import { VeteranRoutingModule } from './veteran-routing.module';
import { VeteranComponent } from './veteran.component';

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
  imports: [ CommonModule,
    VeteranRoutingModule,
    SharedModule,
    HttpClientModule,
    RadioButtonModule,
    RxReactiveFormsModule,
  ],
})
export class VeteranModule {}
