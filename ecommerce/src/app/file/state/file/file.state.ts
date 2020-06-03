import { Injectable } from '@angular/core';

import { Action, Selector, State, StateContext } from '@ngxs/store';

import { NzMessageService } from 'ng-zorro-antd';

import { catchError, map } from 'rxjs/operators';

import {
  NgxsEntityStateAdapter,
  NgxsEntityStateStateModel,
} from '../../../shared/libs/ngxs-entity-state/src/lib';

import {
  UploadFile,
  UploadFileSuccess,
  UploadFileFail,
  ResetFile,
} from './file.actions';

import { FileModel } from '../../../shared/models/file.model';

import { FileResource } from '../../../shared/resources/file.resource';

export class FileStateModel extends NgxsEntityStateStateModel<FileModel> {
  isLoading: boolean;
}

@State<FileStateModel>({
  name: 'file',
  defaults: {
    ids: [],
    entities: {},
    selected: null,
    isLoading: false,
  },
})
@Injectable()
export class FileState {
  @Selector()
  static selected(state: FileStateModel) {
    return state.selected;
  }

  @Selector()
  static isLoading(state: FileStateModel) {
    return state.isLoading;
  }

  @Selector()
  static entities(state: FileStateModel) {
    return state.entities;
  }

  constructor(
    private FileResource: FileResource,
    private message: NzMessageService
  ) {}

  @Action(UploadFile)
  uploadFile(ctx: StateContext<FileStateModel>, action: UploadFile) {
    NgxsEntityStateAdapter.startLoading(ctx);
    return this.FileResource.uploadFile(action.payload).pipe(
      map((image: any) => ctx.dispatch(new UploadFileSuccess(image))),
      catchError((error) => ctx.dispatch(new UploadFileFail(error)))
    );
  }

  @Action(UploadFileSuccess)
  uploadFileSuccess(
    ctx: StateContext<FileStateModel>,
    { payload }: UploadFileSuccess
  ) {
    NgxsEntityStateAdapter.select(payload, ctx);
    NgxsEntityStateAdapter.stopLoading(ctx);
    this.message.success('Arquivo enviado com sucesso!', { nzDuration: 5000 });
  }

  @Action(UploadFileFail)
  uploadFileFail(
    ctx: StateContext<FileStateModel>,
    { payload }: UploadFileFail
  ) {
    console.warn(`Occorreu um erro no upload ${payload}`);
    NgxsEntityStateAdapter.stopLoading(ctx);
  }

  @Action(ResetFile)
  resetFile(ctx: StateContext<FileStateModel>) {
    NgxsEntityStateAdapter.select(null, ctx);
  }
}
