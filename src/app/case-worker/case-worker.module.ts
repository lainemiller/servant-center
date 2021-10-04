import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CaseWorkerRoutingModule } from './case-worker-routing.module';
import { CaseWorkerComponent } from './case-worker.component';
import { CaseWorkerDashboardComponent } from './components/case-worker-dashboard/case-worker-dashboard.component';
import { CaseWorkerProfileComponent } from './components/case-worker-profile/case-worker-profile.component';
import { CwTransportRequestComponent } from './components/cw-transport-request/cw-transport-request.component';
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
import { SecureMessageCenterComponent } from './components/secure-message-center/secure-message-center.component';

@NgModule({
  declarations: [
    CaseWorkerComponent,
    SecureMessageCenterComponent,
    ResidentSearchComponent,
    CaseWorkerDashboardComponent,
    CaseWorkerProfileComponent,
    MessagesComponent,
    CwTransportRequestComponent,
    RsInitialAssessmentComponent,
    RsTreatmentPlanComponent,
    RsWeeklyProgressNotesComponent,
    RsConsentAgreementsComponent,
    RsFinancialComponent,
    RsMedicalComponent,
    RsMiscCorrespondenceComponent,
    IaFormPageOneComponent,
    IaFormPageTwoComponent,
    IaFormPageThreeComponent,
    IaFormPageFourComponent,
    IaFormPageFiveComponent,
  ],
  imports: [CommonModule, CaseWorkerRoutingModule, SharedModule],
})
export class CaseWorkerModule {}
