import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxsModule } from '@ngxs/store';

import { FileState } from './state/file/file.state';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([FileState])],
})
export class FileModule {}
