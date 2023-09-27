import {createAction, props} from "@ngrx/store";
import {Property} from "../_models/property";

export const loadPropertiesSuccess = createAction(
  '[Properties API] Properties Loaded Success',
  props<{ properties: Property[] }>()
);
export const loadPropertiesFailure = createAction(
  '[Properties API] Properties Loaded Failure',
  props<{ error: string }>()
);
