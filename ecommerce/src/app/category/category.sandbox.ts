import { Injectable } from '@angular/core';

import { Select, Store } from '@ngxs/store';

import { Observable } from 'rxjs';

import { CategorySelectors } from './state/category/category.selectors';

import { CategoryModel } from '../shared/models/category.model';

import {
  SelectCategory,
  LoadCategories,
  CreateCategory,
  UpdateCategory,
  DeleteCategory,
} from './state/category/category.actions';
import {
  OpenCategoryModal,
  CloseCategoryModal,
} from './state/category-modal/category-modal.actions';

@Injectable({
  providedIn: 'root',
})
export class CategorySandbox {
  @Select(CategorySelectors.entities) categoriesCollection$: Observable<
    CategoryModel[]
  >;

  @Select(CategorySelectors.parents) parentCategoriesCollection$: Observable<
    CategoryModel[]
  >;

  @Select(CategorySelectors.selected) categorySelected$: Observable<
    CategoryModel
  >;

  @Select(CategorySelectors.isLoading) isLoadingCategory$: Observable<boolean>;

  constructor(private store: Store) {}

  public selectCategory(category: CategoryModel) {
    this.store.dispatch(new SelectCategory(category));
  }

  public loadCategorys() {
    this.store.dispatch(new LoadCategories());
  }

  public createCategory(category: CategoryModel) {
    this.store.dispatch(new CreateCategory(category));
  }

  public updateCategory(category: CategoryModel) {
    this.store.dispatch(new UpdateCategory(category));
  }

  public deleteCategory(category: CategoryModel) {
    this.store.dispatch(new DeleteCategory(category));
  }

  public openModal(editing: boolean = false) {
    this.store.dispatch(new OpenCategoryModal({ editing }));
  }

  public closeModal() {
    this.store.dispatch(new CloseCategoryModal());
  }
}
