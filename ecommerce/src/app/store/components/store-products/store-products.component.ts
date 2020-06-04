import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ProductModel } from '../../../shared/models/product.model';

@Component({
  selector: "app-store-products",
  templateUrl: "./store-products.component.html",
  styleUrls: ["./store-products.component.scss"],
})
export class StoreProductsComponent implements OnInit {
  @Input() products: ProductModel[];

  @Output() clickProduct = new EventEmitter<ProductModel>();

  constructor() {}

  ngOnInit() {}
}
