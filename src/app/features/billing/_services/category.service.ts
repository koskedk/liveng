import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category, CategoryAddEditDto} from "../_models/category";
import {environment} from "../../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  getCategories() {
    return this.http.get<Category[]>(`${environment.API_URL}/categories`);
  }

  createCategory(category: CategoryAddEditDto) {
    return this.http.post<Category>(`${environment.API_URL}/categories`, category);
  }

  updateCategory(id: number, category: CategoryAddEditDto) {
    return this.http.put<Category>(`${environment.API_URL}/categories/${id}`, category);
  }

  deleteCategory(id: number) {
    return this.http.delete(`${environment.API_URL}/categories/${id}`);
  }
}
