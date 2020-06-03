import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { MainRoutingModule } from './routers/store-routing.module';

import { NzIconModule } from "ng-zorro-antd/icon";

import { CategoryModule } from "../category/category.module";
import { ProductModule } from "../product/product.module";

import { StoreComponent } from './containers/store/store.component';
import { HomeComponent } from "./containers/home/home.component";
import { StoreHeaderComponent } from './components/store-header/store-header.component';
import { StoreContentComponent } from "./components/store-content/store-content.component";
import { StoreFooterComponent } from './components/store-footer/store-footer.component';

@NgModule({
  declarations: [
    StoreComponent,
    HomeComponent,
    StoreHeaderComponent,
    StoreContentComponent,
    StoreFooterComponent,
  ],
  exports: [StoreHeaderComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    MainRoutingModule,
    NzIconModule,
    CategoryModule,
    ProductModule
  ],
})
export class StoreModule {}
