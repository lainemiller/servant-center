import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScDashboardComponent } from './sc-dashboard/sc-dashboard.component';
import { ScMainBodyComponent } from './sc-main-body/sc-main-body.component';

const routes: Routes = [
  // { path: '', component: ScDashboardComponent },
  // { path: 'assessment', component: ScAssessmentComponent },
  // { path: 'treatment-plan', component: ScTreatmentPlanComponent },
  // { path: 'health-tracker', component: ScHealthTracker },
  // { path: 'profile', component: ScProfile }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
