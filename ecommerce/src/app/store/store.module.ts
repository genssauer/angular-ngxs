import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgxsModule } from '@ngxs/store';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { MainRoutingModule } from './routers/store-routing.module';

import { NzIconModule } from "ng-zorro-antd/icon";

import { StoreProductModalState } from './state/store-product-modal/store-product-modal.state';

import { CategoryModule } from "../category/category.module";
import { ProductModule } from "../product/product.module";

import { StoreComponent } from './containers/store/store.component';
import { HomeComponent } from "./containers/home/home.component";
import { StoreHeaderComponent } from './components/store-header/store-header.component';
import { StoreContentComponent } from "./components/store-content/store-content.component";
import { StoreFooterComponent } from './components/store-footer/store-footer.component';
import { StoreProductsComponent } from './components/store-products/store-products.component';
import { StoreProductComponent } from './components/store-product/store-product.component';

import { FilterProducts } from './pipes/filter-products';
import { StoreProductModalService } from './service/store-product-modal.service';

@NgModule({
  declarations: [
    StoreComponent,
    HomeComponent,
    StoreHeaderComponent,
    StoreContentComponent,
    StoreFooterComponent,
    StoreProductsComponent,
    StoreProductComponent,
    FilterProducts
  ],
  exports: [StoreHeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    MainRoutingModule,
    NzIconModule,
    NgxsModule.forFeature([StoreProductModalState]),
    CategoryModule,
    ProductModule
  ],
  providers: [
    StoreProductModalService
  ],
  entryComponents: [
    StoreProductComponent
  ]
})
export class StoreModule {}
