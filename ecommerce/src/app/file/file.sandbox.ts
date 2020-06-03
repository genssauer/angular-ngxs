import { Injectable } from '@angular/core';

import { Select, Store } from '@ngxs/store';

import { Observable } from 'rxjs';

import { FileSelectors } from './state/file/file.selectors';

import { FileModel } from '../shared/models/file.model';

import { UploadFile, ResetFile } from './state/file/file.actions';

@Injectable({
  providedIn: 'root',
})
export class FileSandbox {
  @Select(FileSelectors.entities) filesCollection$: Observable<FileModel[]>;

  @Select(FileSelectors.selected) fileSelected$: Observable<FileModel>;

  @Select(FileSelectors.isLoading) isLoadingFile$: Observable<boolean>;

  constructor(private store: Store) {}

  public uploadFile(file: FormData) {
    this.store.dispatch(new UploadFile(file));
  }

  public resetFile() {
    this.store.dispatch(new ResetFile());
  }
}
