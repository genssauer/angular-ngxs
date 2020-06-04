import { Injectable } from '@angular/core';

import { Store } from '@ngxs/store';

import { OpenStoreProductModal, CloseStoreProductModal } from './state/store-product-modal/store-product-modal.actions';

import { ProductModel } from '../shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class StoreSandbox {

  public filterTerm = '';

  constructor(private store: Store) {}

  public openModal(product: ProductModel) {
    this.store.dispatch(new OpenStoreProductModal(product));
  }

  public closeModal() {
    this.store.dispatch(new CloseStoreProductModal());
  }
}
