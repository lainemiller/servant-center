import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HealthTrackerComponent } from './components/health-tracker/health-tracker.component';
import { TreatmentPlanComponent } from './components/treatment-plan/treatment-plan.component';
import { VeteranProfileComponent } from './components/veteran-profile/veteran-profile.component';
import { VeteranComponent } from './veteran.component';

const routes: Routes = [
  {
    path: '',
    component: VeteranComponent,
    children: [
      { path: '', component: DashboardComponent },
      {
        path: 'assessment',
        component: AssessmentComponent,
      },
      {
        path: 'treatment-plan',
        component: TreatmentPlanComponent,
      },
      {
        path: 'health-tracker',
        component: HealthTrackerComponent,
      },
      {
        path: 'profile',
        component: VeteranProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VeteranRoutingModule {}
