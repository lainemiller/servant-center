import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseWorkerComponent } from './case-worker.component';
import { CaseWorkerDashboardComponent } from './components/case-worker-dashboard/case-worker-dashboard.component';
import { CaseWorkerProfileComponent } from './components/case-worker-profile/case-worker-profile.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ResidentSearchComponent } from './components/resident-search/resident-search.component';
import { RsConsentAgreementsComponent } from './components/resident-search/rs-consent-agreements/rs-consent-agreements.component';
import { RsFinancialComponent } from './components/resident-search/rs-financial/rs-financial.component';
import { IaFormPageFiveComponent } from './components/resident-search/rs-initial-assessment/ia-form-page-five/ia-form-page-five.component';
import { IaFormPageFourComponent } from './components/resident-search/rs-initial-assessment/ia-form-page-four/ia-form-page-four.component';
import { IaFormPageOneComponent } from './components/resident-search/rs-initial-assessment/ia-form-page-one/ia-form-page-one.component';
import { IaFormPageThreeComponent } from './components/resident-search/rs-initial-assessment/ia-form-page-three/ia-form-page-three.component';
import { IaFormPageTwoComponent } from './components/resident-search/rs-initial-assessment/ia-form-page-two/ia-form-page-two.component';
import { RsInitialAssessmentComponent } from './components/resident-search/rs-initial-assessment/rs-initial-assessment.component';
import { RsMedicalComponent } from './components/resident-search/rs-medical/rs-medical.component';
import { RsMiscCorrespondenceComponent } from './components/resident-search/rs-misc-correspondence/rs-misc-correspondence.component';
import { RsTreatmentPlanComponent } from './components/resident-search/rs-treatment-plan/rs-treatment-plan.component';
import { RsWeeklyProgressNotesComponent } from './components/resident-search/rs-weekly-progress-notes/rs-weekly-progress-notes.component';

const routes: Routes = [
  {
    path: '',
    component: CaseWorkerComponent,
    children: [
      {
        path: '',
        component: CaseWorkerDashboardComponent,
      },
      {
        path: 'messages',
        component: MessagesComponent,
      },
      {
        path: 'resident-search',
        component: ResidentSearchComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'initial-assessment',
          },
          {
            path: 'initial-assessment',
            component: RsInitialAssessmentComponent,
            children: [
              {
                path: '',
                pathMatch: 'full',
                redirectTo: 'page-1',
              },
              {
                path: 'page-1',
                component: IaFormPageOneComponent,
              },
              {
                path: 'page-2',
                component: IaFormPageTwoComponent,
              },
              {
                path: 'page-3',
                component: IaFormPageThreeComponent,
              },
              {
                path: 'page-4',
                component: IaFormPageFourComponent,
              },
              {
                path: 'page-5',
                component: IaFormPageFiveComponent,
              },
            ],
          },
          {
            path: 'treatment-plan',
            component: RsTreatmentPlanComponent,
          },
          {
            path: 'weekly-progress',
            component: RsWeeklyProgressNotesComponent,
          },
          {
            path: 'consent-agreements',
            component: RsConsentAgreementsComponent,
          },
          {
            path: 'financial',
            component: RsFinancialComponent,
          },
          {
            path: 'medical',
            component: RsMedicalComponent,
          },
          {
            path: 'misc',
            component: RsMiscCorrespondenceComponent,
          },
        ],
      },
      {
        path: 'profile',
        component: CaseWorkerProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaseWorkerRoutingModule {}
