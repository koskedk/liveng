import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Client} from "../models/client";
import {environment} from "../../../../environments/environment.development";
import {List} from 'immutable';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private clients$=new BehaviorSubject<List<Client>>(List([]))

  constructor(private http:HttpClient) { }
  public init(){
    this.http
      .get<List<Client>>(`${environment.API_URL}/clients`)
      .subscribe((clients)=>{
        this.clients$.next(clients);
      })
  }
  public getClients():Observable<List<Client>>{
    return this.clients$;
  }
}
