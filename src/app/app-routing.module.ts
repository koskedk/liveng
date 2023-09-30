import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'registry',
    loadChildren: () => import('./features/registry/registry.module').then(m => m.RegistryModule)
  },
  {
    path: 'billing',
    loadChildren: () => import('./features/billing/billing.module').then(m => m.BillingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
