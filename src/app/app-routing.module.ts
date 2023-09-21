import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistryModule} from "./modules/registry/registry.module";

const routes: Routes = [{
  path:'',
  loadChildren:()=> import('./modules/registry/registry.module').then(m=>m.RegistryModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
