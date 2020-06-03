import { Injectable } from '@angular/core';

import { Select, Store } from '@ngxs/store';

import { Observable } from 'rxjs';

import { ProductSelectors } from './state/product/product.selectors';

import { ProductModel } from '../shared/models/product.model';

import {
  SelectProduct,
  LoadProducts,
  CreateProduct,
  UpdateProduct,
  DeleteProduct,
} from './state/product/product.actions';
import {
  OpenProductModal,
  CloseProductModal,
} from './state/product-modal/product-modal.actions';

@Injectable({
  providedIn: 'root',
})
export class ProductSandbox {
  @Select(ProductSelectors.entities) productsCollection$: Observable<
    ProductModel[]
  >;

  @Select(ProductSelectors.selected) productSelected$: Observable<ProductModel>;

  @Select(ProductSelectors.isLoading) isLoadingProduct$: Observable<boolean>;

  constructor(private store: Store) {}

  public selectProduct(product: ProductModel) {
    this.store.dispatch(new SelectProduct(product));
  }

  public loadProducts() {
    this.store.dispatch(new LoadProducts());
  }

  public createProduct(product: ProductModel) {
    this.store.dispatch(new CreateProduct(product));
  }

  public updateProduct(product: ProductModel) {
    this.store.dispatch(new UpdateProduct(product));
  }

  public deleteProduct(product: ProductModel) {
    this.store.dispatch(new DeleteProduct(product));
  }

  public openModal(editing: boolean = false) {
    this.store.dispatch(new OpenProductModal({ editing }));
  }

  public closeModal() {
    this.store.dispatch(new CloseProductModal());
  }
}
