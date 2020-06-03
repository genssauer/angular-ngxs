import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { UserModel } from '../models/user.model';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserResource {
  private url = `${environment.api}/users`;

  constructor(private http: HttpClient) {}

  find(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.url);
  }

  findOne(payload: number): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.url}/${payload}`);
  }

  create(payload: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(this.url, payload);
  }

  update(payload: UserModel): Observable<UserModel> {
    return this.http.patch<UserModel>(`${this.url}/${payload.id}`, payload);
  }

  destroy(payload: UserModel) {
    return this.http.delete(`${this.url}/${payload.id}`);
  }
}
