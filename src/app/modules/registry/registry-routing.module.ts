import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientsComponent} from "./components/clients/clients.component";
import {CounterComponent} from "./components/counter/counter.component";

const routes: Routes = [
  {
    path: '',
    component: ClientsComponent
  },
  {
    path: 'counter',
    component: CounterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistryRoutingModule {
}
