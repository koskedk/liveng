import {createAction, props} from "@ngrx/store";
import {Property} from "../_models/property";

const name='[Properties API]'
export const loadPropertiesSuccess = createAction(
  `${name} Properties Loaded Success`,
  props<{ properties: Property[] }>()
);
export const loadPropertiesFailure = createAction(
  `${name} Properties Loaded Failure`,
  props<{ error: string }>()
);
export const updatePropertiesSuccess = createAction(
  `${name} Properties Updated Success`,
  props<{ property: Property }>()
);
export const updatePropertiesFailure = createAction(
  `${name} Properties Updated Failure`,
  props<{ error: string }>()
);
