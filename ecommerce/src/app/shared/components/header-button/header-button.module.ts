import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { HeaderButtonComponent } from './containers/header-button.component';

@NgModule({
  declarations: [HeaderButtonComponent],
  exports: [HeaderButtonComponent],
  imports: [CommonModule, NgZorroAntdModule],
})
export class HeaderButtonModule {}
