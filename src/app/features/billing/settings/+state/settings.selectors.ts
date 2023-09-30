import {createFeatureSelector, createSelector} from "@ngrx/store";
import {BILLING_SETTINGS_FEATURE_KEY, State} from "./settings.reducers";

export const selectBillingSettingState = createFeatureSelector<State>(BILLING_SETTINGS_FEATURE_KEY)

export const selectActiveBillingSetting = createSelector(
  selectBillingSettingState,
  (state) => state.activeSetting
);

export const selectBillingSettingList = createSelector(
  selectBillingSettingState,
  (state) => state.settingList
);

export const selectBillingSettingLoading = createSelector(
  selectBillingSettingState,
  (state) => state.loading
);

export const selectBillingSettingError = createSelector(
  selectBillingSettingState,
  (state) => state.error
);
