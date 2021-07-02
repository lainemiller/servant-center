import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackerPageMainComponent } from './tracker-page-main/tracker-page-main.component';

const routes: Routes = [
  { path: '', component: TrackerPageMainComponent },
  { path: 'tracker', component: TrackerPageMainComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackerPageRouting { }