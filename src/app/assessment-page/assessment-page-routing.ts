import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssessmentPageMainComponent } from './assessment-page-main/assessment-page-main.component';

const routes: Routes = [
  { path: '', component: AssessmentPageMainComponent },
  { path: 'assessment', component: AssessmentPageMainComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssessmentPageRouting { }