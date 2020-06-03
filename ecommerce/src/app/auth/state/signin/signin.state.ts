import { Navigate } from '@ngxs/router-plugin';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { catchError, map } from 'rxjs/operators';

import { NzMessageService } from 'ng-zorro-antd';

import {
  Signin,
  SigninError,
  SigninSuccess,
  Check,
  CheckSuccess,
  CheckError,
  Refresh,
  RefreshSuccess,
  RefreshError,
  Logout,
} from './signin.actions';
import { UpdateSessionToken } from '../../../session/state/session.actions';

import { AuthService } from '../../services/auth.service';

export interface SigninStateModel {
  loading: boolean;
}

@State<SigninStateModel>({
  name: 'signin',
  defaults: {
    loading: false,
  },
})
export class SigninState {
  @Selector()
  static loading(state: SigninStateModel) {
    return state.loading;
  }

  constructor(
    private authService: AuthService,
    private message: NzMessageService
  ) {}

  @Action(Signin)
  signin(ctx: StateContext<SigninStateModel>, { payload }: Signin) {
    ctx.patchState({ loading: true });
    return this.authService.signin(payload).pipe(
      map((data) => ctx.dispatch(new SigninSuccess(data))),
      catchError((error) => ctx.dispatch(new SigninError(error.message)))
    );
  }

  @Action(SigninSuccess)
  signinSuccess(
    ctx: StateContext<SigninStateModel>,
    { payload }: SigninSuccess
  ) {
    ctx.dispatch(new Navigate(['/main']));
    ctx.dispatch(new UpdateSessionToken(payload));
    ctx.patchState({ loading: false });
  }

  @Action(SigninError)
  async signinError(
    ctx: StateContext<SigninStateModel>,
    { payload }: SigninError
  ) {
    ctx.patchState({ loading: false });
    this.message.info('Usuário ou Senha Incorreto!', { nzDuration: 5000 });
  }

  @Action(Check)
  check(ctx: StateContext<SigninStateModel>) {
    ctx.patchState({ loading: true });
    return this.authService.check().pipe(
      map((data) => ctx.dispatch(new CheckSuccess(data))),
      catchError((error) => ctx.dispatch(new CheckError(error.message)))
    );
  }

  @Action(CheckSuccess)
  checkSuccess(ctx: StateContext<SigninStateModel>, { payload }: CheckSuccess) {
    ctx.dispatch(new UpdateSessionToken(payload));
    ctx.patchState({ loading: false });
  }

  @Action(CheckError)
  async checkError(
    ctx: StateContext<SigninStateModel>,
    { payload }: CheckError
  ) {
    ctx.patchState({ loading: false });
    this.message.info(payload, { nzDuration: 5000 });
  }

  @Action(Refresh)
  refresh(ctx: StateContext<SigninStateModel>) {
    ctx.patchState({ loading: true });
    return this.authService.refreshToken().pipe(
      map((data) => ctx.dispatch(new RefreshSuccess(data))),
      catchError((error) => ctx.dispatch(new RefreshError(error.message)))
    );
  }

  @Action(RefreshSuccess)
  refreshSuccess(
    ctx: StateContext<SigninStateModel>,
    { payload }: RefreshSuccess
  ) {
    ctx.dispatch(new UpdateSessionToken(payload));
    ctx.patchState({ loading: false });
  }

  @Action(RefreshError)
  async refreshError(
    ctx: StateContext<SigninStateModel>,
    { payload }: RefreshError
  ) {
    ctx.patchState({ loading: false });
    this.message.info(payload, { nzDuration: 5000 });
  }

  @Action(Logout)
  logout(ctx: StateContext<Logout>) {
    return this.authService.logout();
  }
}
