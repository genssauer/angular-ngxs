import { Component, OnInit } from '@angular/core';

import { ProductSandbox } from '../../../product/product.sandbox';
import { StoreSandbox } from '../../store.sandbox';

import { ProductModel } from '../../../shared/models/product.model';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public productsCollection$ = this.productSandbox.productsCollection$;

  constructor(private productSandbox: ProductSandbox, public storeSandbox: StoreSandbox) {}

  ngOnInit() {
    this.productSandbox.loadProducts();
  }

  openProduct(product: ProductModel) {
    this.storeSandbox.openModal(product);
  }
}
