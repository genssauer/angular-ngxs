import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxsModule } from '@ngxs/store';

import { ProductRoutingModule } from './routers/product-routing.module';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { NgxCurrencyModule } from 'ngx-currency';

import { ProductState } from './state/product/product.state';
import { ProductModalState } from './state/product-modal/product-modal.state';

import { PageHeaderModule } from '../shared/components/page-header/page-header.module';
import { HeaderButtonModule } from '../shared/components/header-button/header-button.module';

import { CategoryModule } from '../category/category.module';
import { FileModule } from '../file/file.module';

import { ProductModalService } from './services/product-modal.service';

import { ProductComponent } from './containers/product/product.component';
import { ProductModalComponent } from './components/product-modal/product-modal.component';

@NgModule({
  declarations: [ProductComponent, ProductModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductRoutingModule,
    AngularEditorModule,
    NgZorroAntdModule,
    NgxCurrencyModule,
    NgxsModule.forFeature([ProductState, ProductModalState]),
    PageHeaderModule,
    HeaderButtonModule,
    CategoryModule,
    FileModule,
  ],
  providers: [ProductModalService],
  entryComponents: [ProductModalComponent],
})
export class ProductModule {}
