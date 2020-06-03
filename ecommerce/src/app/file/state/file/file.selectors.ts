import { Selector } from '@ngxs/store';

import { FileState, FileStateModel } from './file.state';

import { NgxsEntityStateSelector } from '../../../shared/libs/ngxs-entity-state/src/lib';

export class FileSelectors {
  @Selector([FileState.entities])
  static entities(entities: FileStateModel['entities']) {
    return new NgxsEntityStateSelector().getEntities(entities);
  }

  @Selector([FileState.selected])
  static selected(selected: FileStateModel['selected']) {
    return selected;
  }

  @Selector([FileState.isLoading])
  static isLoading(isLoading: FileStateModel['isLoading']) {
    return isLoading;
  }
}
