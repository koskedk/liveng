import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import { SettingsPageComponent } from './settings/settings-page/settings-page.component';
import { SettingsListComponent } from './settings/settings-list/settings-list.component';
import { SettingDetailComponent } from './settings/setting-detail/setting-detail.component';
import {SettingsEffects} from "./settings/+state/settings.effects";
import * as fromSettings from "./settings/+state/settings.reducers";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    SettingsPageComponent,
    SettingsListComponent,
    SettingDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BillingRoutingModule,
    StoreModule.forFeature(fromSettings.BILLING_SETTINGS_FEATURE_KEY,fromSettings.reducer),
    EffectsModule.forFeature([SettingsEffects])
  ]
})
export class BillingModule { }
