import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../../../shared/models/product.model';

@Component({
  selector: "app-store-content",
  templateUrl: "./store-content.component.html",
  styleUrls: ["./store-content.component.scss"],
})
export class StoreContentComponent implements OnInit {
  @Input() products: ProductModel[];

  constructor() {}

  ngOnInit() {}
}
