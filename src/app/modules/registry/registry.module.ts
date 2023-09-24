import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistryRoutingModule } from './registry-routing.module';
import { ClientsComponent } from './components/clients/clients.component';
import {StoreModule} from "@ngrx/store";
import {counterReducer} from "./actions/counter.reducers";
import { CounterComponent } from './components/counter/counter.component';
import {EffectsModule} from "@ngrx/effects";
import {ClientApiEffects} from "./components/clients/store/client-api.effects";
import {clientReducer} from "./components/clients/store/client.reducer";
import {SharedStateClientsModule} from "./components/clients/store/state";


@NgModule({
  declarations: [
    ClientsComponent,
    CounterComponent
  ],
  imports: [
    CommonModule,
    RegistryRoutingModule,
    SharedStateClientsModule,
    EffectsModule.forFeature([ClientApiEffects])
  ]
})
export class RegistryModule { }
