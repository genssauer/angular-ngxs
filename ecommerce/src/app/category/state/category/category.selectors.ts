import { Selector } from '@ngxs/store';

import { CategoryState, CategoryStateModel } from './category.state';

import { NgxsEntityStateSelector } from '../../../shared/libs/ngxs-entity-state/src/lib';

import { CategoryModel } from '../../../shared/models/category.model';

export class CategorySelectors {
  @Selector([CategoryState.entities])
  static entities(entities: CategoryStateModel['entities']) {
    return new NgxsEntityStateSelector().getEntities(entities);
  }

  @Selector([CategoryState.entities])
  static parents(entities: CategoryStateModel['entities']) {
    return new NgxsEntityStateSelector()
      .getEntities(entities)
      .filter((category: CategoryModel) => category.category_id === null);
  }

  @Selector([CategoryState.selected])
  static selected(selected: CategoryStateModel['selected']) {
    return selected;
  }

  @Selector([CategoryState.isLoading])
  static isLoading(isLoading: CategoryStateModel['isLoading']) {
    return isLoading;
  }
}
