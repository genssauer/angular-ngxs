import { Injectable } from '@angular/core';

import { Action, Selector, State, StateContext } from '@ngxs/store';

import { NzMessageService } from 'ng-zorro-antd';

import { catchError, map } from 'rxjs/operators';

import {
  NgxsEntityStateAdapter,
  NgxsEntityStateStateModel,
} from '../../../shared/libs/ngxs-entity-state/src/lib';

import {
  SelectUser,
  LoadUsers,
  LoadUsersSuccess,
  LoadUsersFail,
  CreateUser,
  CreateUserSuccess,
  CreateUserFail,
  UpdateUser,
  UpdateUserSuccess,
  UpdateUserFail,
  DeleteUser,
  DeleteUserSuccess,
  DeleteUserFail,
} from './user.actions';
import { CloseUserModal } from '../user-modal/user-modal.actions';

import { UserModel } from './../../../shared/models/user.model';

import { UserResource } from '../../../shared/resources/user.resource';

export class UserStateModel extends NgxsEntityStateStateModel<UserModel> {
  isLoading: boolean;
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    ids: [],
    entities: {},
    selected: null,
    isLoading: false,
  },
})
@Injectable()
export class UserState {
  @Selector()
  static selected(state: UserStateModel) {
    return state.entities[state.selected.id];
  }

  @Selector()
  static isLoading(state: UserStateModel) {
    return state.isLoading;
  }

  @Selector()
  static entities(state: UserStateModel) {
    return state.entities;
  }

  constructor(
    private UserResource: UserResource,
    private message: NzMessageService
  ) {}

  @Action(SelectUser)
  selectUser(ctx: StateContext<UserStateModel>, { payload }: SelectUser) {
    NgxsEntityStateAdapter.select(payload, ctx);
  }

  @Action(LoadUsers)
  loadUsers(ctx: StateContext<UserStateModel>) {
    NgxsEntityStateAdapter.startLoading(ctx);
    return this.UserResource.find().pipe(
      map((user: UserModel[]) => ctx.dispatch(new LoadUsersSuccess(user))),
      catchError((error) => ctx.dispatch(new LoadUsersFail(error)))
    );
  }

  @Action(LoadUsersSuccess)
  loadUsersSuccess(ctx: StateContext<UserStateModel>, { payload }) {
    NgxsEntityStateAdapter.addAll(payload.data, ctx);
    NgxsEntityStateAdapter.stopLoading(ctx);
  }

  @Action(LoadUsersFail)
  loadUsersFail(ctx: StateContext<UserStateModel>, { payload }: LoadUsersFail) {
    console.warn(`Occorreu um erro ao carregar ${payload}`);
    NgxsEntityStateAdapter.stopLoading(ctx);
  }

  @Action(CreateUser)
  createUser(ctx: StateContext<UserStateModel>, action: CreateUser) {
    NgxsEntityStateAdapter.startLoading(ctx);
    return this.UserResource.create(action.payload).pipe(
      map((User: UserModel) => ctx.dispatch(new CreateUserSuccess(User))),
      catchError((error) => ctx.dispatch(new CreateUserFail(error)))
    );
  }

  @Action(CreateUserSuccess)
  createUserSuccess(
    ctx: StateContext<UserStateModel>,
    { payload }: CreateUserSuccess
  ) {
    NgxsEntityStateAdapter.addOne(payload, ctx);
    NgxsEntityStateAdapter.stopLoading(ctx);
    this.message.success('Usuário cadastrado com sucesso!', {
      nzDuration: 5000,
    });
    ctx.dispatch(new CloseUserModal());
  }

  @Action(CreateUserFail)
  createUserFail(
    ctx: StateContext<UserStateModel>,
    { payload }: CreateUserFail
  ) {
    console.warn(`Occorreu um erro ao criar ${payload}`);
    NgxsEntityStateAdapter.stopLoading(ctx);
  }

  @Action(UpdateUser)
  updateUser(ctx: StateContext<UserStateModel>, action: UpdateUser) {
    ctx.patchState({ isLoading: true });
    return this.UserResource.update(action.payload).pipe(
      map((User: UserModel) => ctx.dispatch(new UpdateUserSuccess(User))),
      catchError((error) => ctx.dispatch(new UpdateUserFail(error)))
    );
  }

  @Action(UpdateUserSuccess)
  updateUserSuccess(
    ctx: StateContext<UserStateModel>,
    { payload }: UpdateUserSuccess
  ) {
    NgxsEntityStateAdapter.updateOne(payload, ctx);
    NgxsEntityStateAdapter.stopLoading(ctx);
    this.message.success('Usuário atualizado com sucesso!', {
      nzDuration: 5000,
    });
    ctx.dispatch(new CloseUserModal());
  }

  @Action(UpdateUserFail)
  updateUserFail(
    ctx: StateContext<UserStateModel>,
    { payload }: UpdateUserFail
  ) {
    console.warn(`Occorreu um erro ao atualizar ${payload}`);
    NgxsEntityStateAdapter.stopLoading(ctx);
  }

  @Action(DeleteUser)
  deleteUser(ctx: StateContext<UserStateModel>, action: DeleteUser) {
    NgxsEntityStateAdapter.startLoading(ctx);
    return this.UserResource.destroy(action.payload).pipe(
      map((User: UserModel) => ctx.dispatch(new DeleteUserSuccess(User))),
      catchError((error) => ctx.dispatch(new DeleteUserFail(error)))
    );
  }

  @Action(DeleteUserSuccess)
  deleteUserSuccess(
    ctx: StateContext<UserStateModel>,
    { payload }: DeleteUserSuccess
  ) {
    NgxsEntityStateAdapter.removeOne(payload, ctx);
    NgxsEntityStateAdapter.stopLoading(ctx);
    this.message.success('Categoria excluída com sucesso!', {
      nzDuration: 5000,
    });
  }

  @Action(DeleteUserFail)
  deleteUserFail(
    ctx: StateContext<UserStateModel>,
    { payload }: DeleteUserFail
  ) {
    console.warn(`Occorreu um erro ao deletar ${payload}`);
    NgxsEntityStateAdapter.stopLoading(ctx);
  }
}
