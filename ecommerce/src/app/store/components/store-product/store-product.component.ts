import { Component, OnInit, Input } from '@angular/core';

import { ProductModel } from '../../../shared/models/product.model';

@Component({
  selector: "app-store-product",
  templateUrl: "./store-product.component.html",
  styleUrls: ["./store-product.component.scss"],
})
export class StoreProductComponent implements OnInit {
  @Input() product: ProductModel;

  constructor() {}

  ngOnInit() {}
}
