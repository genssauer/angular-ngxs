import { SignInDto } from '../../../shared/dtos/signin.dto';

export class Signin {
  static readonly type = '[LOGIN] Signin';

  constructor(public payload: SignInDto) {}
}

export class SigninSuccess {
  static readonly type = '[LOGIN] SignIn Success';

  constructor(public payload: any) {}
}

export class SigninError {
  static readonly type = '[LOGIN] SignIn Error';

  constructor(public payload: any) {}
}

export class Check {
  static readonly type = '[LOGIN] Check';
}

export class CheckSuccess {
  static readonly type = '[LOGIN] Check Success';

  constructor(public payload: any) {}
}

export class CheckError {
  static readonly type = '[LOGIN] Check Error';

  constructor(public payload: any) {}
}

export class Refresh {
  static readonly type = '[LOGIN] Refresh';
}

export class RefreshSuccess {
  static readonly type = '[LOGIN] Refresh Success';

  constructor(public payload: any) {}
}

export class RefreshError {
  static readonly type = '[LOGIN] Refresh Error';

  constructor(public payload: any) {}
}

export class Logout {
  static readonly type = '[LOGIN] Logout';
}
