import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { InputSwitchModule } from 'primeng/inputswitch';
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
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { CheckboxModule } from 'primeng/checkbox';

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
    Ng2SearchPipeModule,
    InputSwitchModule,
    ToggleButtonModule,
    ToolbarModule,
    CheckboxModule,
    RxReactiveFormsModule,
    HttpClientModule,
    RadioButtonModule,
    RxReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  exports: [Ng2SearchPipeModule,InputSwitchModule,ToggleButtonModule,ToolbarModule],
})
export class VeteranModule {}
