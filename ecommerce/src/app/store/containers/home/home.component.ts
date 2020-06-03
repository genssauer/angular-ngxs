import { Component, OnInit } from '@angular/core';

import { ProductSandbox } from '../../../product/product.sandbox';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public productsCollection$ = this.productSandbox.productsCollection$;

  constructor(private productSandbox: ProductSandbox) {}

  ngOnInit() {
    this.productSandbox.loadProducts();
  }
}
