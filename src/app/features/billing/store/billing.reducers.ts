import {createReducer, on} from "@ngrx/store";
import {Property} from "../_models/property";
import {loadPropertiesFailure, loadPropertiesSuccess} from "./billing-api.actions";

export const propertiesFeatureKey = 'properties';
export interface BillingState {
  properties: Property[];
  error: string | null;
}
const initialState:BillingState= {
  properties: [],
  error: null
}
export const propertiesReducer=createReducer(
  initialState,
  on(loadPropertiesSuccess,(state,action)=> {
      return ({...state, properties: action.properties});
    }
  ),
  on(loadPropertiesFailure,(state,action)=> {
      return ({...state, error: action.error});
    }
  )
);
