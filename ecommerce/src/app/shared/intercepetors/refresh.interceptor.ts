import { Injectable, Injector } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, flatMap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RefreshInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((errorResponse: HttpErrorResponse) => {
        const error =
          typeof errorResponse.error !== 'object'
            ? JSON.parse(errorResponse.error)
            : errorResponse;
        if (errorResponse.status === 401 && error.error === 'token_expired') {
          const http = this.injector.get(HttpClient);
          return http.post<any>(`${environment.api}/auth/refresh`, {}).pipe(
            flatMap((data) => {
              localStorage.setItem('token', data.token);
              const cloneRequest = request.clone({
                setHeaders: { Authorization: `Bearer ${data.token}` },
              });
              return next.handle(cloneRequest);
            })
          );
        }
        return throwError(errorResponse);
      })
    );
  }
}
