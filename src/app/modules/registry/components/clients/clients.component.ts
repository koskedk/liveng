import {Component, OnInit} from '@angular/core';
import {ClientsService} from "../../services/clients.service";
import {Observable} from "rxjs";
import {List} from "immutable";
import {Client} from "../../models/client";
import {Store} from "@ngrx/store";
import {ClientsActions} from "./store";
import {selectAll} from "./store/client.reducer";
import {selectClient} from "./store/client.actions";
import {selectAllClients} from "./store/state";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clients$ :Observable<Client[]>;
  constructor(readonly clientsService: ClientsService,private store:Store) {
    this.clients$ = store.select(selectAllClients);
  }

  ngOnInit(): void {
    this.store.dispatch(ClientsActions.enter())
    // this.clientsService.getClients()
    //   .subscribe(c => {
    //     this.clients = c;
    //   })
  }
}
