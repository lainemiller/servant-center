import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageMainComponent } from './home-page/home-page-main/home-page-main.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  //{ path: 'home', loadChildren: '..app/home-page/home-page-module#HomePageModule' }
  { path: 'home', loadChildren: () => import('../app/home-page/home-page-module').then(m => m.HomePageModule) },
  { path: 'assessment', loadChildren: () => import('../app/assessment-page/assessment-page-module').then(m => m.AssessmentPageModule) },
  { path: 'plan', loadChildren: () => import('../app/plan-page/plan-page-module').then(m => m.PlanPageModule) },
  { path: 'tracker', loadChildren: () => import('../app/tracker-page/tracker-page-module').then(m => m.TrackerPageModule) },
  { path: 'profile', loadChildren: () => import('../app/profile-page/profile-page-module').then(m => m.ProfilePageModule) },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
