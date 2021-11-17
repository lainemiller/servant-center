import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginPageComponent } from './shared/components/login-page/login-page.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginPageComponent
  },
  {
    path: 'case-worker',
    loadChildren: () =>
      import('./case-worker/case-worker.module').then(
        (m) => m.CaseWorkerModule
      ),
  },
  {
    path: 'veteran',
    loadChildren: () =>
      import('./veteran/veteran.module').then((m) => m.VeteranModule),
      canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: 'veteran' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
