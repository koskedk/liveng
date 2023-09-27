import {createFeatureSelector, createSelector} from "@ngrx/store";
import {BillingState, propertiesFeatureKey} from "./billing.reducers";

export const selectBilling=createFeatureSelector<BillingState>(propertiesFeatureKey)

export const selectBillingProperties=createSelector(
  selectBilling,
  (state)=>state.properties
);

export const selectBillingPropertiesError=createSelector(
  selectBilling,
  (state)=>state.error
);
