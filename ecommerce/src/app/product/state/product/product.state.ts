import { Injectable } from '@angular/core';

import { Action, Selector, State, StateContext } from '@ngxs/store';

import { NzMessageService } from 'ng-zorro-antd';

import { catchError, map } from 'rxjs/operators';

import {
  NgxsEntityStateAdapter,
  NgxsEntityStateStateModel,
} from '../../../shared/libs/ngxs-entity-state/src/lib';

import {
  SelectProduct,
  LoadProducts,
  LoadProductsSuccess,
  LoadProductsFail,
  CreateProduct,
  CreateProductSuccess,
  CreateProductFail,
  UpdateProduct,
  UpdateProductSuccess,
  UpdateProductFail,
  DeleteProduct,
  DeleteProductSuccess,
  DeleteProductFail,
} from './product.actions';
import { CloseProductModal } from '../product-modal/product-modal.actions';

import { ProductModel } from './../../../shared/models/product.model';

import { ProductResource } from '../../../shared/resources/product.resource';

export class ProductStateModel extends NgxsEntityStateStateModel<ProductModel> {
  isLoading: boolean;
}

@State<ProductStateModel>({
  name: 'product',
  defaults: {
    ids: [],
    entities: {},
    selected: null,
    isLoading: false,
  },
})
@Injectable()
export class ProductState {
  @Selector()
  static selected(state: ProductStateModel) {
    return state.entities[state.selected.id];
  }

  @Selector()
  static isLoading(state: ProductStateModel) {
    return state.isLoading;
  }

  @Selector()
  static entities(state: ProductStateModel) {
    return state.entities;
  }

  constructor(
    private ProductResource: ProductResource,
    private message: NzMessageService
  ) {}

  @Action(SelectProduct)
  selectProduct(ctx: StateContext<ProductStateModel>, { payload }: SelectProduct) {
    NgxsEntityStateAdapter.select(payload, ctx);
  }

  @Action(LoadProducts)
  loadProducts(ctx: StateContext<ProductStateModel>, { payload }: LoadProducts) {
    NgxsEntityStateAdapter.startLoading(ctx);
    return this.ProductResource.find(payload).pipe(
      map((product: ProductModel[]) =>
        ctx.dispatch(new LoadProductsSuccess(product))
      ),
      catchError((error) => ctx.dispatch(new LoadProductsFail(error)))
    );
  }

  @Action(LoadProductsSuccess)
  loadProductsSuccess(ctx: StateContext<ProductStateModel>, { payload }) {
    NgxsEntityStateAdapter.addAll(payload.data, ctx);
    NgxsEntityStateAdapter.stopLoading(ctx);
  }

  @Action(LoadProductsFail)
  loadProductsFail(ctx: StateContext<ProductStateModel>, { payload }: LoadProductsFail) {
    console.warn(`Occorreu um erro ao carregar ${payload}`);
    NgxsEntityStateAdapter.stopLoading(ctx);
  }

  @Action(CreateProduct)
  createProduct(ctx: StateContext<ProductStateModel>, action: CreateProduct) {
    NgxsEntityStateAdapter.startLoading(ctx);
    return this.ProductResource.create(action.payload).pipe(
      map((Product: ProductModel) =>
        ctx.dispatch(new CreateProductSuccess(Product))
      ),
      catchError((error) => ctx.dispatch(new CreateProductFail(error)))
    );
  }

  @Action(CreateProductSuccess)
  createProductSuccess(ctx: StateContext<ProductStateModel>, { payload }: CreateProductSuccess) {
    NgxsEntityStateAdapter.addOne(payload, ctx);
    NgxsEntityStateAdapter.stopLoading(ctx);
    this.message.success('Produto cadastrado com sucesso!', {
      nzDuration: 5000,
    });
    ctx.dispatch(new CloseProductModal());
  }

  @Action(CreateProductFail)
  createProductFail(ctx: StateContext<ProductStateModel>, { payload }: CreateProductFail) {
    console.warn(`Occorreu um erro ao criar ${payload}`);
    NgxsEntityStateAdapter.stopLoading(ctx);
  }

  @Action(UpdateProduct)
  updateProduct(ctx: StateContext<ProductStateModel>, action: UpdateProduct) {
    ctx.patchState({ isLoading: true });
    return this.ProductResource.update(action.payload).pipe(
      map((Product: ProductModel) =>
        ctx.dispatch(new UpdateProductSuccess(Product))
      ),
      catchError((error) => ctx.dispatch(new UpdateProductFail(error)))
    );
  }

  @Action(UpdateProductSuccess)
  updateProductSuccess(ctx: StateContext<ProductStateModel>, { payload }: UpdateProductSuccess) {
    NgxsEntityStateAdapter.updateOne(payload, ctx);
    NgxsEntityStateAdapter.stopLoading(ctx);
    this.message.success('Produto atualizado com sucesso!', {
      nzDuration: 5000,
    });
    ctx.dispatch(new CloseProductModal());
  }

  @Action(UpdateProductFail)
  updateProductFail(ctx: StateContext<ProductStateModel>, { payload }: UpdateProductFail) {
    console.warn(`Occorreu um erro ao atualizar ${payload}`);
    NgxsEntityStateAdapter.stopLoading(ctx);
  }

  @Action(DeleteProduct)
  deleteProduct(ctx: StateContext<ProductStateModel>, action: DeleteProduct) {
    NgxsEntityStateAdapter.startLoading(ctx);
    return this.ProductResource.destroy(action.payload).pipe(
      map((Product: ProductModel) =>
        ctx.dispatch(new DeleteProductSuccess(Product))
      ),
      catchError((error) => ctx.dispatch(new DeleteProductFail(error)))
    );
  }

  @Action(DeleteProductSuccess)
  deleteProductSuccess(ctx: StateContext<ProductStateModel>, { payload }: DeleteProductSuccess) {
    NgxsEntityStateAdapter.removeOne(payload, ctx);
    NgxsEntityStateAdapter.stopLoading(ctx);
    this.message.success('Produto excluído com sucesso!', { nzDuration: 5000 });
  }

  @Action(DeleteProductFail)
  deleteProductFail(ctx: StateContext<ProductStateModel>, { payload }: DeleteProductFail) {
    console.warn(`Occorreu um erro ao deletar ${payload}`);
    NgxsEntityStateAdapter.stopLoading(ctx);
  }
}
