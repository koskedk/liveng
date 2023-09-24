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
  constructor(private http:HttpClient) { }
  public getClients():Observable<Client[]> {
    return this.http.get<Client[]>(`${environment.API_URL}/clients`)
  }
}
