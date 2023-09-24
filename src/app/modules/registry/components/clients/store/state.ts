import { NgModule } from '@angular/core';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  StoreModule,
} from '@ngrx/store';
import * as fromClients from './client.reducer';

export const FEATURE_KEY = 'clients';

/**
 * State Shape
 **/
export interface State {
  clients: fromClients.State;
}

export const reducers: ActionReducerMap<State> = {
  clients: fromClients.clientReducer,
};

export const metaReducers: MetaReducer<State>[] = [];

/**
 * Module
 **/
@NgModule({
  imports: [StoreModule.forFeature(FEATURE_KEY, reducers, { metaReducers })],
})
export class SharedStateClientsModule {}

/**
 * Feature Selector
 **/
export const selectSharedClientsState = createFeatureSelector<State>(FEATURE_KEY);

/**
 * Clients Selectors
 */
export const selectClientsState = createSelector(
  selectSharedClientsState,
  (state: State) => state.clients
);
export const selectAllClients = createSelector(
  selectClientsState,
  fromClients.selectAll
);
