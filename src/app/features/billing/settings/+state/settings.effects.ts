import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, exhaustMap, map, of} from "rxjs";
import {SettingService} from "../../_services/setting.service";
import {loadSettingList, loadSettingListFailure, loadSettingListSuccess} from "./settings.actions";

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
}
