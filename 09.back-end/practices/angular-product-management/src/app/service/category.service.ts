import {Injectable} from '@angular/core';
import {Category} from "../model/category";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[] = [];

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(API_URL + '/categories')
  }

  saveCategory(category: Category): Observable<Category> {
    return this.httpClient.post<Category>(API_URL + '/categories', category);
  }

  findById(id: number): Observable<Category> {
    return this.httpClient.get<Category>(`${API_URL}/categories/${id}`)
  }

  updateCategory(id: number, category: Category): Observable<Category> {
    return this.httpClient.put<Category>(`${API_URL}/categories/${id}`, category)
  }

  deleteCategory(id: number): Observable<Category> {
    return this.httpClient.delete<Category>(`${API_URL}/categories/${id}`);
  }

}
