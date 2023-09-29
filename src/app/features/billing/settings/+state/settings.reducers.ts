import {Setting} from "../../_models/setting";
import {createReducer, on} from "@ngrx/store";
import {
  clearActiveSetting,
  loadSettingList,
  loadSettingListFailure,
  loadSettingListSuccess,
  setActiveSetting, updateSetting, updateSettingFailure, updateSettingSuccess
} from "./settings.actions";

export const BILLING_SETTINGS_FEATURE_KEY = 'BILLING_SETTINGS'

export interface State {
  activeSetting: Setting
  settingList: Setting[];
  loading: boolean;
  error: string;
}

export const initialState: State = {
  activeSetting: null,
  settingList: [],
  loading: false,
  error: null
}

export const reducer = createReducer(
  initialState,
  on(clearActiveSetting, loadSettingList, (state, action) => {
    return ({...state, activeSetting: null});
  }),
  on(setActiveSetting, (state, action) => {
    return ({...state, activeSetting: action.activeSetting});
  }),

  on(loadSettingListSuccess, (state, action) => {
    return ({...state, loading: false, settingList: action.settings});
  }),
  on(loadSettingListFailure, (state, action) => {
    return ({...state, loading: false, error: action.error});
  }),

  on(updateSetting, (state, action) => {
    return ({...state, loading: true});
  }),
  on(updateSettingSuccess, (state, action) => {
    return ({
      ...state,
      activeSetting: null,
      settingList: state.settingList.map((setting) => {
        return setting.id === action.setting.id ? Object.assign({}, setting, action.setting) : setting;
      }),
      loading: false
    });
  }),
  on(updateSettingFailure, (state, action) => {
    return ({...state, loading: false, error: action.error});
  })
)
