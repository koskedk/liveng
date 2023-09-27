import {createReducer, on} from "@ngrx/store";
import {Property} from "../_models/property";
import {loadPropertiesFailure, loadPropertiesSuccess} from "./billing-api.actions";
import {createEntityAdapter, EntityState} from "@ngrx/entity";

export const propertiesFeatureKey = 'properties';
export interface State extends EntityState<Property>{
  error:string|undefined
}
export const adapter=createEntityAdapter<Property>()

const initialState:State= adapter.getInitialState( {
  error:null
});

export const propertiesReducer=createReducer(
  initialState,
  on(loadPropertiesSuccess,(state,action)=> {
      return (adapter.setAll(action.properties,state));
    }
  ),
  on(loadPropertiesFailure,(state,action)=> {
      return ({...state, error: action.error});
    }
  )
);
