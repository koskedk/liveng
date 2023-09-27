import {createFeatureSelector, createSelector} from "@ngrx/store";
import {State, propertiesFeatureKey, adapter} from "./billing.reducers";
 export const {
   selectAll,
   selectEntities
 }=adapter.getSelectors();

export const selectBilling=createFeatureSelector<State>(propertiesFeatureKey)

export const selectBillingProperties=createSelector(
  selectBilling,
  selectAll
);

export const selectBillingPropertiesError=createSelector(
  selectBilling,
  (state)=>state.error
);
