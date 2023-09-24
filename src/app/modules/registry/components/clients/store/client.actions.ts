import {createAction, props} from "@ngrx/store";
import {Client, ClientRequiredProps} from "../../../models/client";

export const enter = createAction(
  '[Clients Page] Enter'
);
export const selectClient = createAction(
  '[Clients Page] Select Client',
  props<{ clientId: string }>()
);
export const clearSelectedClient = createAction(
  '[Clients Page] Clear Selected Client'
);
export const createClient = createAction(
  '[Clients Page] Create Client',
  props<{ client: Client }>()
);
export const updateClient = createAction(
  '[Clients Page] Update Client',
  props<{ clientId: string,  changes: ClientRequiredProps }>()
);
export const deleteClient = createAction(
  '[Clients Page] Delete Client',
  props<{ clientId: string }>()
);
