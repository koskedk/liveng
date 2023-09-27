import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';
import { PropertiesComponent } from './properties/properties.component';
import {StoreModule} from "@ngrx/store";
import {propertiesFeatureKey, propertiesReducer} from "./store/billing.reducers";
import {EffectsModule} from "@ngrx/effects";
import {BillingEffects} from "./store/billing.effects";

@NgModule({
  declarations: [
    PropertiesComponent
  ],
  imports: [
    CommonModule,
    BillingRoutingModule,
    StoreModule.forFeature(propertiesFeatureKey,propertiesReducer),
    EffectsModule.forFeature([BillingEffects])
  ]
})
export class BillingModule { }
