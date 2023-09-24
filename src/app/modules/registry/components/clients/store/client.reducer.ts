import {Client} from "../../../models/client";
import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {createReducer, on} from "@ngrx/store";
import {ClientsApiActions} from "./index";

export interface State extends EntityState<Client>{
  activeClientId:string|null
}

export const adapter = createEntityAdapter<Client>();

export const initialState: State = adapter.getInitialState({
  activeClientId: null,
});

export const clientReducer=createReducer(
  initialState,
  on(ClientsApiActions.clientsLoaded,(state,action)=>{
    return adapter.setAll(action.clients,state)
  })
)

export const { selectAll } = adapter.getSelectors();
