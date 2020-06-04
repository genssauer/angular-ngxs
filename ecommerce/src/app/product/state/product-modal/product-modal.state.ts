import { Injectable } from '@angular/core';

import { Action, State, StateContext } from '@ngxs/store';

import { OpenProductModal, CloseProductModal } from './product-modal.actions';

import { ProductModalService } from '../../services/product-modal.service';

export interface ProductModalStateModel {}

@State<ProductModalStateModel>({
  name: 'productModal',
})
@Injectable()
export class ProductModalState {
  constructor(private productModalService: ProductModalService) {}

  @Action(OpenProductModal)
  openProductModal(ctx: StateContext<ProductModalStateModel>, { payload }: OpenProductModal) {
    this.productModalService.open(payload.editing);
  }

  @Action(CloseProductModal)
  closeProductModal(ctx: StateContext<ProductModalStateModel>) {
    this.productModalService.close();
  }
}
