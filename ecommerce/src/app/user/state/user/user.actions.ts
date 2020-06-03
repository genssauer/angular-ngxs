import { UserModel } from '../../../shared/models/user.model';

export class SelectUser {
  static readonly type = '[Users] Select User Success';

  constructor(public payload: UserModel) {}
}

export class LoadUsers {
  static readonly type = '[Users] Load Users';
}

export class LoadUsersSuccess {
  static readonly type = '[Users] Load Users Success';

  constructor(public payload: UserModel[]) {}
}

export class LoadUsersFail {
  static readonly type = '[Users] Load Users Fail';

  constructor(public payload: string) {}
}

export class CreateUser {
  static readonly type = '[Users] Create User';

  constructor(public payload: UserModel) {}
}

export class CreateUserSuccess {
  static readonly type = '[Users] Create User Success';

  constructor(public payload: UserModel) {}
}

export class CreateUserFail {
  static readonly type = '[Users] Create User Fail';

  constructor(public payload: string) {}
}

export class UpdateUser {
  static readonly type = '[Users] Update User';

  constructor(public payload: UserModel) {}
}

export class UpdateUserSuccess {
  static readonly type = '[Users] Update User Success';

  constructor(public payload: UserModel) {}
}

export class UpdateUserFail {
  static readonly type = '[Users] Update User Fail';

  constructor(public payload: string) {}
}

export class DeleteUser {
  static readonly type = '[Users] Delete User';

  constructor(public payload: UserModel) {}
}

export class DeleteUserSuccess {
  static readonly type = '[Users] Delete User Success';

  constructor(public payload: UserModel) {}
}

export class DeleteUserFail {
  static readonly type = '[Users] Delete User Fail';

  constructor(public payload: string) {}
}
