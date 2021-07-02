import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePageMainComponent } from './profile-page-main/profile-page-main.component';

const routes: Routes = [
  { path: '', component: ProfilePageMainComponent },
  { path: 'profile', component: ProfilePageMainComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilePageRouting { }