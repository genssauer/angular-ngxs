export class OpenCategoryModal {
  static readonly type = '[Categorys] Open Category Modal';

  constructor(public payload: { editing: boolean }) {}
}

export class CloseCategoryModal {
  static readonly type = '[Categorys] Close Category Modal';
}
