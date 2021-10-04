import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
  },
  { path: '**', redirectTo: 'veteran' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
