import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistryRoutingModule } from './registry-routing.module';
import { ClientsComponent } from './components/clients/clients.component';
import {StoreModule} from "@ngrx/store";
import {counterReducer} from "./actions/counter.reducers";
import { CounterComponent } from './components/counter/counter.component';


@NgModule({
  declarations: [
    ClientsComponent,
    CounterComponent
  ],
  imports: [
    CommonModule,
    RegistryRoutingModule,
    StoreModule.forRoot({counter: counterReducer})
  ]
})
export class RegistryModule { }
