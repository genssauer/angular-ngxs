import { ProductModel } from '../../../shared/models/product.model';

export class OpenStoreProductModal {
  static readonly type = '[Store] Open Store Product Modal';

  constructor(public payload: ProductModel) {}
}

export class CloseStoreProductModal {
  static readonly type = '[Store] Close Store Product Modal';
}
