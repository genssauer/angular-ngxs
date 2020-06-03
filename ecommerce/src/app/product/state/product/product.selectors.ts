import { Selector } from '@ngxs/store';

import { ProductState, ProductStateModel } from './product.state';

import { NgxsEntityStateSelector } from '../../../shared/libs/ngxs-entity-state/src/lib';

export class ProductSelectors {
  @Selector([ProductState.entities])
  static entities(entities: ProductStateModel['entities']) {
    return new NgxsEntityStateSelector().getEntities(entities);
  }

  @Selector([ProductState.selected])
  static selected(selected: ProductStateModel['selected']) {
    return selected;
  }

  @Selector([ProductState.isLoading])
  static isLoading(isLoading: ProductStateModel['isLoading']) {
    return isLoading;
  }
}
