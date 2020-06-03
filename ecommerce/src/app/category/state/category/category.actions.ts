import { CategoryModel } from '../../../shared/models/category.model';

export class SelectCategory {
  static readonly type = '[Categorys] Select Category Success';

  constructor(public payload: CategoryModel) {}
}

export class LoadCategories {
  static readonly type = '[Categorys] Load Categorys';
}

export class LoadCategoriesSuccess {
  static readonly type = '[Categorys] Load Categorys Success';

  constructor(public payload: CategoryModel[]) {}
}

export class LoadCategoriesFail {
  static readonly type = '[Categorys] Load Categorys Fail';

  constructor(public payload: string) {}
}

export class CreateCategory {
  static readonly type = '[Categorys] Create Category';

  constructor(public payload: CategoryModel) {}
}

export class CreateCategorySuccess {
  static readonly type = '[Categorys] Create Category Success';

  constructor(public payload: CategoryModel) {}
}

export class CreateCategoryFail {
  static readonly type = '[Categorys] Create Category Fail';

  constructor(public payload: string) {}
}

export class UpdateCategory {
  static readonly type = '[Categorys] Update Category';

  constructor(public payload: CategoryModel) {}
}

export class UpdateCategorySuccess {
  static readonly type = '[Categorys] Update Category Success';

  constructor(public payload: CategoryModel) {}
}

export class UpdateCategoryFail {
  static readonly type = '[Categorys] Update Category Fail';

  constructor(public payload: string) {}
}

export class DeleteCategory {
  static readonly type = '[Categorys] Delete Category';

  constructor(public payload: CategoryModel) {}
}

export class DeleteCategorySuccess {
  static readonly type = '[Categorys] Delete Category Success';

  constructor(public payload: CategoryModel) {}
}

export class DeleteCategoryFail {
  static readonly type = '[Categorys] Delete Category Fail';

  constructor(public payload: string) {}
}
