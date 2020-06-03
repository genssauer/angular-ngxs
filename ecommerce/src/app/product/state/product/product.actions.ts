import { ProductModel } from '../../../shared/models/product.model';

export class SelectProduct {
  static readonly type = '[Products] Select Product Success';

  constructor(public payload: ProductModel) {}
}

export class LoadProducts {
  static readonly type = '[Products] Load Products';
}

export class LoadProductsSuccess {
  static readonly type = '[Products] Load Products Success';

  constructor(public payload: ProductModel[]) {}
}

export class LoadProductsFail {
  static readonly type = '[Products] Load Products Fail';

  constructor(public payload: string) {}
}

export class CreateProduct {
  static readonly type = '[Products] Create Product';

  constructor(public payload: ProductModel) {}
}

export class CreateProductSuccess {
  static readonly type = '[Products] Create Product Success';

  constructor(public payload: ProductModel) {}
}

export class CreateProductFail {
  static readonly type = '[Products] Create Product Fail';

  constructor(public payload: string) {}
}

export class UpdateProduct {
  static readonly type = '[Products] Update Product';

  constructor(public payload: ProductModel) {}
}

export class UpdateProductSuccess {
  static readonly type = '[Products] Update Product Success';

  constructor(public payload: ProductModel) {}
}

export class UpdateProductFail {
  static readonly type = '[Products] Update Product Fail';

  constructor(public payload: string) {}
}

export class DeleteProduct {
  static readonly type = '[Products] Delete Product';

  constructor(public payload: ProductModel) {}
}

export class DeleteProductSuccess {
  static readonly type = '[Products] Delete Product Success';

  constructor(public payload: ProductModel) {}
}

export class DeleteProductFail {
  static readonly type = '[Products] Delete Product Fail';

  constructor(public payload: string) {}
}
