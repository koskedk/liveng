import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Client} from "../models/client";
import {environment} from "../../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private clients$=new BehaviorSubject<Client[]>([])

  constructor(private http:HttpClient) { }
  public init(){
    this.http
      .get<Client[]>(`${environment.API_URL}/clients`)
      .subscribe((clients)=>{
        this.clients$.next(clients);
      })
  }
  public getClients():Observable<Client[]>{
    return this.clients$;
  }
}
