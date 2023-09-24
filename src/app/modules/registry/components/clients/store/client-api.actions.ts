import {createAction, props} from "@ngrx/store";
import {Client, ClientRequiredProps} from "../../../models/client";

export const clientsLoaded = createAction(
  '[Clients API] Clients Loaded Success',
  props<{ clients: Client[] }>()
);
export const clientCreated = createAction(
  '[Clients API] Client Created',
  props<{ client: Client }>()
);
export const clientUpdated = createAction(
  '[Clients API] Client Updated',
  props<{ client: Client }>()
);
export const clientDeleted = createAction(
  '[Clients API] Client Deleted',
  props<{ clientId: string }>()
);
