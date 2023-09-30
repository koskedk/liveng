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
import * as fromCatalog from "./catalog/+state/categories.reducers";
import {ReactiveFormsModule} from "@angular/forms";
import { CategoriesListComponent } from './catalog/categories-list/categories-list.component';
import { CategoriesPageComponent } from './catalog/categories-page/categories-page.component';
import { CategoryDetailComponent } from './catalog/category-detail/category-detail.component';
import {CategoriesEffects} from "./catalog/+state/categories.effects";
import { BillingHeaderComponent } from './layout/billing-header/billing-header.component';
import { BillingContentComponent } from './layout/billing-content/billing-content.component';

@NgModule({
  declarations: [
    SettingsPageComponent,
    SettingsListComponent,
    SettingDetailComponent,
    CategoriesListComponent,
    CategoriesPageComponent,
    CategoryDetailComponent,
    BillingHeaderComponent,
    BillingContentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BillingRoutingModule,
    StoreModule.forFeature(fromSettings.BILLING_SETTINGS_FEATURE_KEY,fromSettings.reducer),
    StoreModule.forFeature(fromCatalog.BILLING_CATEGORY_FEATURE_KEY,fromCatalog.reducer),
    EffectsModule.forFeature([SettingsEffects,CategoriesEffects])
  ]
})
export class BillingModule { }
