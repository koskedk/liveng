import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Setting, SettingEditDto} from "../_models/setting";
import {environment} from "../../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private http:HttpClient) { }
  getSettings(){
    return this.http.get<Setting[]>(`${environment.API_URL}/settings`);
  }
  updateSetting(id:string, setting:SettingEditDto){
    return this.http.put<Setting>(`${environment.API_URL}/settings/${id}`,setting);
  }
}
