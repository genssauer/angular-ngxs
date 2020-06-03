import { Injectable } from '@angular/core';

import { Action, State, StateContext } from '@ngxs/store';

import { OpenUserModal, CloseUserModal } from './user-modal.actions';

import { UserModalService } from '../../services/user-modal.service';

export interface UserModalStateModel {}

@State<UserModalStateModel>({
  name: 'userModal',
})
@Injectable()
export class UserModalState {
  constructor(private userModalService: UserModalService) {}

  @Action(OpenUserModal)
  openModalProfile(
    ctx: StateContext<UserModalStateModel>,
    { payload }: OpenUserModal
  ) {
    this.userModalService.open(payload.editing);
  }

  @Action(CloseUserModal)
  closeModalProfile(ctx: StateContext<UserModalStateModel>) {
    this.userModalService.close();
  }
}
