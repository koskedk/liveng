import {Injectable} from "@angular/core";
import {ClientsService} from "../../../services/clients.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ClientsActions, ClientsApiActions} from "./index";
import {exhaustMap, map} from "rxjs";

@Injectable()
export class ClientApiEffects {
  constructor(private clientsService:ClientsService,private actions$: Actions) {
  }
  loadClients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClientsActions.enter),
      exhaustMap(() =>
        this.clientsService
          .getClients()
          .pipe(map((clients) => ClientsApiActions.clientsLoaded({ clients })))
      )
    )
  );

}
