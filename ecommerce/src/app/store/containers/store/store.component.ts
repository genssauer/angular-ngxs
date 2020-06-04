import { Component, OnInit } from '@angular/core';

import { CategorySandbox } from '../../../category/category.sandbox';
import { ProductSandbox } from '../../../product/product.sandbox';

@Component({
  selector: "app-store",
  templateUrl: "./store.component.html",
  styleUrls: ["./store.component.scss"],
})
export class StoreComponent implements OnInit {
  public categoriesCollection$ = this.categorySandbox.categoriesCollection$;

  constructor(private categorySandbox: CategorySandbox, private productSandbox: ProductSandbox) {}

  ngOnInit() {
    this.categorySandbox.loadCategorys();
  }

  changeCategory(category) {
    this.productSandbox.loadProducts(category.id);
  }
}
