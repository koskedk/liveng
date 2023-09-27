import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, exhaustMap, map, of} from "rxjs";
import {enterProperties} from "./billing.actions";
import {Property} from "../_models/property";
import {loadPropertiesFailure, loadPropertiesSuccess} from "./billing-api.actions";
import {ConfigService} from "../_services/config.service";


@Injectable()
export class BillingEffects {
  constructor(
    private configService: ConfigService,
    private action$: Actions) {
  }

  loadProperties$ = createEffect(() => this.action$.pipe(
      ofType(enterProperties),
      exhaustMap(() => this.configService.getAllProperties()
        .pipe(
          map((properties) => loadPropertiesSuccess({properties})),
          catchError(error => {
            console.log('iko shida',error)
            return of(loadPropertiesFailure({error:`${error.message}`}));
          })
        )
      )
    )
  );
}
