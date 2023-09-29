import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SettingsPageComponent} from "./settings/settings-page/settings-page.component";

const routes: Routes = [
  { path:'settings',component:SettingsPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule { }
