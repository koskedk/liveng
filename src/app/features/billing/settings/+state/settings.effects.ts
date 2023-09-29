import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, concatMap, exhaustMap, map, of} from "rxjs";
import {SettingService} from "../../_services/setting.service";
import {
  loadSettingList,
  loadSettingListFailure,
  loadSettingListSuccess,
  updateSetting, updateSettingFailure,
  updateSettingSuccess
} from "./settings.actions";

@Injectable()
export class SettingsEffects {
  constructor(
    private settingService: SettingService,
    private action$: Actions) {
  }

  loadSettingList$ = createEffect(() => this.action$.pipe(
      ofType(loadSettingList),
      exhaustMap(() => this.settingService.getSettings()
        .pipe(
          map((settings) => loadSettingListSuccess({settings})),
          catchError(error => {
            return of(loadSettingListFailure({error:`${error.message}`}));
          })
        )
      )
    )
  );

  updateSetting$ = createEffect(() => this.action$.pipe(
      ofType(updateSetting),
      concatMap((a) => this.settingService.updateSetting(a.id,a.setting)
        .pipe(
          map((setting) => updateSettingSuccess({setting})),
          catchError(error => {
            return of(updateSettingFailure({error:`${error.message}`}));
          })
        )
      )
    )
  );
}
