import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, exhaustMap, map, of} from "rxjs";
import {enterProperties} from "./billing.actions";
import {Property} from "../_models/property";
import {loadPropertiesFailure, loadPropertiesSuccess} from "./billing-api.actions";


@Injectable()
export class BillingEffects {
  constructor(private action$: Actions) {
  }

  loadProperties$ = createEffect(() => this.action$.pipe(
      ofType(enterProperties),
      exhaustMap(() => getAllProperties()
        .pipe(
          map((properties) => loadPropertiesSuccess({properties})),
          catchError(error=>of(loadPropertiesFailure(error)))
        )
      )
    )
  );
}


const getAllProperties = () => {
  throw new Error('wewew');
  return of<Property[]>([
    {id: "currency", value: "KES", description: "default currency"},
    {id: "country", value: "Kenya", description: "default country"}
  ]);
}
