import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { CategoryModel } from '../models/category.model';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryResource {
  private url = `${environment.api}/categories`;

  constructor(private http: HttpClient) {}

  find(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.url);
  }

  findOne(payload: number): Observable<CategoryModel> {
    return this.http.get<CategoryModel>(`${this.url}/${payload}`);
  }

  create(payload: CategoryModel): Observable<CategoryModel> {
    return this.http.post<CategoryModel>(this.url, payload);
  }

  update(payload: CategoryModel): Observable<CategoryModel> {
    return this.http.patch<CategoryModel>(`${this.url}/${payload.id}`, payload);
  }

  destroy(payload: CategoryModel) {
    return this.http.delete(`${this.url}/${payload.id}`);
  }
}
