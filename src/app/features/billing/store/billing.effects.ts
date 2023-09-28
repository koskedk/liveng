import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, concatMap, exhaustMap, map, of} from "rxjs";
import {enterProperties, updateProperty} from "./billing.actions";
import {Property} from "../_models/property";
import {
  loadPropertiesFailure,
  loadPropertiesSuccess,
  updatePropertiesFailure,
  updatePropertiesSuccess
} from "./billing-api.actions";
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
            console.error('iko shida',error)
            return of(loadPropertiesFailure({error:`${error.message}`}));
          })
        )
      )
    )
  );

  updateProperty$ = createEffect(() => this.action$.pipe(
      ofType(updateProperty),
    concatMap((action) => this.configService.updateProperty(action.id,action.property)
        .pipe(
          map((property) => updatePropertiesSuccess({property: property})),
          catchError(error => {
            console.error('iko shida',error)
            return of(updatePropertiesFailure({error:`${error.message}`}));
          })
        )
      )
    )
  );
}
