import { Injectable } from '@angular/core';

import { Select, Store } from '@ngxs/store';

import { Observable } from 'rxjs';

import { SignInDto } from '../shared/dtos/signin.dto';

import { SigninState } from './state/signin/signin.state';

import { Signin, Check, Refresh, Logout } from './state/signin/signin.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthSandbox {
  @Select(SigninState.loading) loadingSignin$: Observable<boolean>;

  constructor(private store: Store) {}

  signin(credentials: SignInDto) {
    this.store.dispatch(new Signin(credentials));
  }

  check() {
    this.store.dispatch(new Check());
  }

  refresh() {
    this.store.dispatch(new Refresh());
  }

  logout() {
    this.store.dispatch(new Logout());
  }
}
