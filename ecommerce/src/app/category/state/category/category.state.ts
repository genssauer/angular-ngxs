import { Injectable } from '@angular/core';

import { Action, Selector, State, StateContext } from '@ngxs/store';

import { NzMessageService } from 'ng-zorro-antd';

import { catchError, map } from 'rxjs/operators';

import {
  NgxsEntityStateAdapter,
  NgxsEntityStateStateModel,
} from '../../../shared/libs/ngxs-entity-state/src/lib';

import {
  SelectCategory,
  LoadCategories,
  LoadCategoriesSuccess,
  LoadCategoriesFail,
  CreateCategory,
  CreateCategorySuccess,
  CreateCategoryFail,
  UpdateCategory,
  UpdateCategorySuccess,
  UpdateCategoryFail,
  DeleteCategory,
  DeleteCategorySuccess,
  DeleteCategoryFail,
} from './category.actions';
import { CloseCategoryModal } from '../category-modal/category-modal.actions';

import { CategoryModel } from './../../../shared/models/category.model';

import { CategoryResource } from '../../../shared/resources/category.resource';

export class CategoryStateModel extends NgxsEntityStateStateModel<
  CategoryModel
> {
  isLoading: boolean;
}

@State<CategoryStateModel>({
  name: 'category',
  defaults: {
    ids: [],
    entities: {},
    selected: null,
    isLoading: false,
  },
})
@Injectable()
export class CategoryState {
  @Selector()
  static selected(state: CategoryStateModel) {
    return state.entities[state.selected.id];
  }

  @Selector()
  static isLoading(state: CategoryStateModel) {
    return state.isLoading;
  }

  @Selector()
  static entities(state: CategoryStateModel) {
    return state.entities;
  }

  constructor(
    private CategoryResource: CategoryResource,
    private message: NzMessageService
  ) {}

  @Action(SelectCategory)
  selectCategory(
    ctx: StateContext<CategoryStateModel>,
    { payload }: SelectCategory
  ) {
    NgxsEntityStateAdapter.select(payload, ctx);
  }

  @Action(LoadCategories)
  loadCategorys(ctx: StateContext<CategoryStateModel>) {
    NgxsEntityStateAdapter.startLoading(ctx);
    return this.CategoryResource.find().pipe(
      map((category: CategoryModel[]) =>
        ctx.dispatch(new LoadCategoriesSuccess(category))
      ),
      catchError((error) => ctx.dispatch(new LoadCategoriesFail(error)))
    );
  }

  @Action(LoadCategoriesSuccess)
  loadCategorysSuccess(ctx: StateContext<CategoryStateModel>, { payload }) {
    NgxsEntityStateAdapter.addAll(payload.data, ctx);
    NgxsEntityStateAdapter.stopLoading(ctx);
  }

  @Action(LoadCategoriesFail)
  loadCategorysFail(
    ctx: StateContext<CategoryStateModel>,
    { payload }: LoadCategoriesFail
  ) {
    console.warn(`Occorreu um erro ao carregar ${payload}`);
    NgxsEntityStateAdapter.stopLoading(ctx);
  }

  @Action(CreateCategory)
  createCategory(
    ctx: StateContext<CategoryStateModel>,
    action: CreateCategory
  ) {
    NgxsEntityStateAdapter.startLoading(ctx);
    return this.CategoryResource.create(action.payload).pipe(
      map((Category: CategoryModel) =>
        ctx.dispatch(new CreateCategorySuccess(Category))
      ),
      catchError((error) => ctx.dispatch(new CreateCategoryFail(error)))
    );
  }

  @Action(CreateCategorySuccess)
  createCategorySuccess(
    ctx: StateContext<CategoryStateModel>,
    { payload }: CreateCategorySuccess
  ) {
    NgxsEntityStateAdapter.addOne(payload, ctx);
    NgxsEntityStateAdapter.stopLoading(ctx);
    this.message.success('Categoria cadastrada com sucesso!', {
      nzDuration: 5000,
    });
    ctx.dispatch(new CloseCategoryModal());
  }

  @Action(CreateCategoryFail)
  createCategoryFail(
    ctx: StateContext<CategoryStateModel>,
    { payload }: CreateCategoryFail
  ) {
    console.warn(`Occorreu um erro ao criar ${payload}`);
    NgxsEntityStateAdapter.stopLoading(ctx);
  }

  @Action(UpdateCategory)
  updateCategory(
    ctx: StateContext<CategoryStateModel>,
    action: UpdateCategory
  ) {
    ctx.patchState({ isLoading: true });
    return this.CategoryResource.update(action.payload).pipe(
      map((Category: CategoryModel) =>
        ctx.dispatch(new UpdateCategorySuccess(Category))
      ),
      catchError((error) => ctx.dispatch(new UpdateCategoryFail(error)))
    );
  }

  @Action(UpdateCategorySuccess)
  updateCategorySuccess(
    ctx: StateContext<CategoryStateModel>,
    { payload }: UpdateCategorySuccess
  ) {
    NgxsEntityStateAdapter.updateOne(payload, ctx);
    NgxsEntityStateAdapter.stopLoading(ctx);
    this.message.success('Categoria atualizada com sucesso!', {
      nzDuration: 5000,
    });
    ctx.dispatch(new CloseCategoryModal());
  }

  @Action(UpdateCategoryFail)
  updateCategoryFail(
    ctx: StateContext<CategoryStateModel>,
    { payload }: UpdateCategoryFail
  ) {
    console.warn(`Occorreu um erro ao atualizar ${payload}`);
    NgxsEntityStateAdapter.stopLoading(ctx);
  }

  @Action(DeleteCategory)
  deleteCategory(
    ctx: StateContext<CategoryStateModel>,
    action: DeleteCategory
  ) {
    NgxsEntityStateAdapter.startLoading(ctx);
    return this.CategoryResource.destroy(action.payload).pipe(
      map((Category: CategoryModel) =>
        ctx.dispatch(new DeleteCategorySuccess(Category))
      ),
      catchError((error) => ctx.dispatch(new DeleteCategoryFail(error)))
    );
  }

  @Action(DeleteCategorySuccess)
  deleteCategorySuccess(
    ctx: StateContext<CategoryStateModel>,
    { payload }: DeleteCategorySuccess
  ) {
    NgxsEntityStateAdapter.removeOne(payload, ctx);
    NgxsEntityStateAdapter.stopLoading(ctx);
    this.message.success('Categoria excluída com sucesso!', {
      nzDuration: 5000,
    });
  }

  @Action(DeleteCategoryFail)
  deleteCategoryFail(
    ctx: StateContext<CategoryStateModel>,
    { payload }: DeleteCategoryFail
  ) {
    console.warn(`Occorreu um erro ao deletar ${payload}`);
    NgxsEntityStateAdapter.stopLoading(ctx);
  }
}
