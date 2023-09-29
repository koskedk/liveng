import {createAction, props} from "@ngrx/store";
import {Setting} from "../../_models/setting";

const name = '[Settings Page]'

export const loadSettingList = createAction(
  `${name} loadSettingList`);
export const loadSettingListSuccess = createAction(
  `${name} loadSettingList Success`, props<{ settings: Setting[] }>());
export const loadSettingListFailure = createAction(
  `${name} loadSettingList Failure`, props<{ error: string }>());
