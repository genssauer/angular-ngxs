import { Selector } from '@ngxs/store';

import { UserState, UserStateModel } from './user.state';

import { NgxsEntityStateSelector } from '../../../shared/libs/ngxs-entity-state/src/lib';

export class UserSelectors {
  @Selector([UserState.entities])
  static entities(entities: UserStateModel['entities']) {
    return new NgxsEntityStateSelector().getEntities(entities);
  }

  @Selector([UserState.selected])
  static selected(selected: UserStateModel['selected']) {
    return selected;
  }

  @Selector([UserState.isLoading])
  static isLoading(isLoading: UserStateModel['isLoading']) {
    return isLoading;
  }
}
