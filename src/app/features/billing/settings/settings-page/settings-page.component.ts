import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Setting} from "../../_models/setting";
import {
  selectBillingSetting,
  selectBillingSettingError, selectBillingSettingList,
  selectBillingSettingLoading
} from "../+state/settings.selectors";
import {loadSettingList} from "../+state/settings.actions";

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit{
  setting$: Observable<Setting>;
  settingList$: Observable<Setting[]>;
  loading$: Observable<boolean>;
  error$: Observable<string>;

  constructor(readonly store: Store) {
    this.setting$ = store.select(selectBillingSetting);
    this.settingList$ = store.select(selectBillingSettingList);
    this.loading$ = store.select(selectBillingSettingLoading);
    this.error$ = store.select(selectBillingSettingError);
  }

  ngOnInit(): void {
    this.store.dispatch(loadSettingList());
  }
}
