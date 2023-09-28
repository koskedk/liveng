import {createAction, props} from "@ngrx/store";
import {PropertyEditDto} from "../_models/property";

const name = '[Properties Page]'
export const enterProperties = createAction(
  `${name} Enter`
);
export const updateProperty = createAction(
  `${name} Update Config`,
  props<{ id: string, property: PropertyEditDto }>()
)
