import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageMainComponent } from './home-page-main/home-page-main.component';

const routes: Routes = [
  { path: '', component: HomePageMainComponent },
  { path: 'home', component: HomePageMainComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRouting { }