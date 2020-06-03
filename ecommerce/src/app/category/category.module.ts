import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxsModule } from '@ngxs/store';

import { CategoryRoutingModule } from './routers/category-routing.module';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { CategoryState } from './state/category/category.state';
import { CategoryModalState } from './state/category-modal/category-modal.state';

import { PageHeaderModule } from '../shared/components/page-header/page-header.module';
import { HeaderButtonModule } from '../shared/components/header-button/header-button.module';

import { CategoryModalService } from './services/category-modal.service';

import { CategoryComponent } from './containers/category/category.component';
import { CategoryModalComponent } from './components/category-modal/category-modal.component';

@NgModule({
  declarations: [CategoryComponent, CategoryModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CategoryRoutingModule,
    NgZorroAntdModule,
    NgxsModule.forFeature([CategoryState, CategoryModalState]),
    PageHeaderModule,
    HeaderButtonModule,
  ],
  providers: [CategoryModalService],
  entryComponents: [CategoryModalComponent],
})
export class CategoryModule {}
