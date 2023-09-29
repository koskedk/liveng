import {Setting} from "../../_models/setting";
import {createReducer, on} from "@ngrx/store";
import {loadSettingList, loadSettingListFailure, loadSettingListSuccess} from "./settings.actions";

export const BILLING_SETTINGS_FEATURE_KEY = 'BILLING_SETTINGS'

export interface State {
  setting: Setting
  settingList: Setting[];
  loading: boolean;
  error: string;
}

export const initialState: State = {
  setting: null,
  settingList: [],
  loading: false,
  error: null
}

export const reducer = createReducer(
  initialState,
  on(loadSettingList, (state, action) => {
    return ({...state, loading: true});
  }),
  on(loadSettingListSuccess, (state, action) => {
    return ({...state, loading: false, settingList: action.settings});
  }),
  on(loadSettingListFailure, (state, action) => {
    return ({...state, loading: false, error: action.error});
  })
)
