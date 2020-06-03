import { Injectable } from '@angular/core';

import { Select, Store } from '@ngxs/store';

import { Observable } from 'rxjs';

import { UserSelectors } from './state/user/user.selectors';

import { UserModel } from '../shared/models/user.model';

import {
  SelectUser,
  LoadUsers,
  CreateUser,
  UpdateUser,
  DeleteUser,
} from './state/user/user.actions';
import {
  OpenUserModal,
  CloseUserModal,
} from './state/user-modal/user-modal.actions';

@Injectable({
  providedIn: 'root',
})
export class UserSandbox {
  @Select(UserSelectors.entities) usersCollection$: Observable<UserModel[]>;

  @Select(UserSelectors.selected) userSelected$: Observable<UserModel>;

  @Select(UserSelectors.isLoading) isLoadingUser$: Observable<boolean>;

  constructor(private store: Store) {}

  public selectUser(user: UserModel) {
    this.store.dispatch(new SelectUser(user));
  }

  public loadUsers() {
    this.store.dispatch(new LoadUsers());
  }

  public createUser(user: UserModel) {
    this.store.dispatch(new CreateUser(user));
  }

  public updateUser(user: UserModel) {
    this.store.dispatch(new UpdateUser(user));
  }

  public deleteUser(user: UserModel) {
    this.store.dispatch(new DeleteUser(user));
  }

  public openModal(editing: boolean = false) {
    this.store.dispatch(new OpenUserModal({ editing }));
  }

  public closeModal() {
    this.store.dispatch(new CloseUserModal());
  }
}
