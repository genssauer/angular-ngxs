import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ProductModel } from '../models/product.model';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductResource {
  private url = `${environment.api}/products`;

  constructor(private http: HttpClient) {}

  find(category?: number): Observable<ProductModel[]> {
    if (category && category != 0) {
      return this.http.get<ProductModel[]>(`${this.url}?category_id=${category}`);
    }
    return this.http.get<ProductModel[]>(this.url);
  }

  findOne(payload: number): Observable<ProductModel> {
    return this.http.get<ProductModel>(`${this.url}/${payload}`);
  }

  create(payload: ProductModel): Observable<ProductModel> {
    return this.http.post<ProductModel>(this.url, payload);
  }

  update(payload: ProductModel): Observable<ProductModel> {
    return this.http.patch<ProductModel>(`${this.url}/${payload.id}`, payload);
  }

  destroy(payload: ProductModel) {
    return this.http.delete(`${this.url}/${payload.id}`);
  }
}
