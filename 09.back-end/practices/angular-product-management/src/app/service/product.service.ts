import {Injectable} from '@angular/core';
import {Product} from "../model/product";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];

  constructor(private httpClient: HttpClient) {
  }

  getSearchAfter(name: string, price: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(API_URL + '/productList?' + 'name_like=' + name + '&price_like=' + price)
  }

  saveProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(API_URL + '/productList', product);
  }

  findById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${API_URL}/productList/${id}`)
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.httpClient.put<Product>(`${API_URL}/productList/${id}`, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(`${API_URL}/productList/${id}`);
  }
}
