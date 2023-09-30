import {createFeatureSelector, createSelector} from "@ngrx/store";
import {BILLING_CATEGORY_FEATURE_KEY, State} from "./categories.reducers";

export const selectBillingCategoryState = createFeatureSelector<State>(BILLING_CATEGORY_FEATURE_KEY)

export const selectActiveBillingCategory = createSelector(
  selectBillingCategoryState,
  (state) => state.activeCategory
);

export const selectBillingCategoryList = createSelector(
  selectBillingCategoryState,
  (state) => state.categoryList
);

export const selectBillingCategoryLoading = createSelector(
  selectBillingCategoryState,
  (state) => state.loading
);

export const selectBillingCategoryError = createSelector(
  selectBillingCategoryState,
  (state) => state.error
);
