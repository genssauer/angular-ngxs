export class OpenProductModal {
  static readonly type = '[Products] Open Product Modal';

  constructor(public payload: { editing: boolean }) {}
}

export class CloseProductModal {
  static readonly type = '[Products] Close Product Modal';
}
