import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Property, PropertyEditDto} from "../_models/property";
import {environment} from "../../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private http: HttpClient) {
  }

  getAllProperties() {
    return this.http.get<Property[]>(`${environment.API_URL}/configs`);
  }

  updateProperty(id: string, property: PropertyEditDto) {
    return this.http.put<Property>(`${environment.API_URL}/configs/${id}`, property);
  }
}
