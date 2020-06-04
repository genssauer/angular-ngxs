import { Injectable } from '@angular/core';

import { Action, State, StateContext } from '@ngxs/store';

import { OpenStoreProductModal, CloseStoreProductModal } from './store-product-modal.actions';

import { StoreProductModalService } from '../../service/store-product-modal.service';

export interface StoreProductModalStateModel {}

@State<StoreProductModalStateModel>({
  name: 'storeProductModal',
})
@Injectable()
export class StoreProductModalState {
  constructor(private storeProductModalService: StoreProductModalService) {}

  @Action(OpenStoreProductModal)
  openStoreProductModal(ctx: StateContext<OpenStoreProductModal>, { payload }: OpenStoreProductModal) {
    this.storeProductModalService.open(payload);
  }

  @Action(CloseStoreProductModal)
  closeStoreProductModal(ctx: StateContext<CloseStoreProductModal>) {
    this.storeProductModalService.close();
  }
}
