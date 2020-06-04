import { Injectable } from '@angular/core';

import { Action, State, StateContext } from '@ngxs/store';

import {
  OpenCategoryModal,
  CloseCategoryModal,
} from './category-modal.actions';

import { CategoryModalService } from '../../services/category-modal.service';

export interface CategoryModalStateModel {}

@State<CategoryModalStateModel>({
  name: 'categoryModal',
})
@Injectable()
export class CategoryModalState {
  constructor(private categoryModalService: CategoryModalService) {}

  @Action(OpenCategoryModal)
  openCategoryModal(ctx: StateContext<CategoryModalStateModel>, { payload }: OpenCategoryModal) {
    this.categoryModalService.open(payload.editing);
  }

  @Action(CloseCategoryModal)
  closeCategoryModal(ctx: StateContext<CategoryModalStateModel>) {
    this.categoryModalService.close();
  }
}
