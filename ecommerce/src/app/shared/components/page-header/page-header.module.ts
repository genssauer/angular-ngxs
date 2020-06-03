import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { PageHeaderComponent } from './containers/page-header.component';

@NgModule({
  declarations: [PageHeaderComponent],
  exports: [PageHeaderComponent],
  imports: [CommonModule, NgZorroAntdModule, RouterModule],
})
export class PageHeaderModule {}
