import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SettingsPageComponent} from "./settings/settings-page/settings-page.component";
import {BillingContentComponent} from "./layout/billing-content/billing-content.component";
import {CategoriesPageComponent} from "./catalog/categories-page/categories-page.component";

const routes: Routes = [
  {
    path:'' ,component:BillingContentComponent,
    children:[
      {path: 'settings', component: SettingsPageComponent},
      {path: 'categories', component: CategoriesPageComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule {
}
