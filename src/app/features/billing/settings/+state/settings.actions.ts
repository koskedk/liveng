import {createAction, props} from "@ngrx/store";
import {Setting, SettingEditDto} from "../../_models/setting";

const name = '[Settings Page]'


//  set Setting
export const setActiveSetting = createAction(
  `${name} setActiveSetting`,props<{activeSetting:Setting}>());
export const clearActiveSetting = createAction(
  `${name} clearActiveSetting`);

//  load Setting
export const loadSettingList = createAction(
  `${name} loadSettingList`);
export const loadSettingListSuccess = createAction(
  `${name} loadSettingList Success`, props<{ settings: Setting[] }>());
export const loadSettingListFailure = createAction(
  `${name} loadSettingList Failure`, props<{ error: string }>());

//  updateSetting
export const updateSetting = createAction(
  `${name} updateSetting`,props<{ id:string, setting: SettingEditDto }>());
export const updateSettingSuccess = createAction(
  `${name} updateSetting Success`, props<{ setting: Setting }>());
export const updateSettingFailure = createAction(
  `${name} updateSetting Failure`, props<{ error: string }>());
