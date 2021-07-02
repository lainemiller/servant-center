import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanPageMainComponent } from './plan-page-main/plan-page-main.component';

const routes: Routes = [
  { path: '', component: PlanPageMainComponent },
  { path: 'plan', component: PlanPageMainComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanPageRouting { }