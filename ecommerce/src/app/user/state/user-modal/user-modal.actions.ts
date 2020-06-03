export class OpenUserModal {
  static readonly type = '[Users] Open User Modal';

  constructor(public payload: { editing: boolean }) {}
}

export class CloseUserModal {
  static readonly type = '[Users] Close User Modal';
}
