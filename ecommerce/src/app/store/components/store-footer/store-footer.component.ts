import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CategoryModel } from '../../../shared/models/category.model';

@Component({
  selector: "app-store-footer",
  templateUrl: "./store-footer.component.html",
  styleUrls: ["./store-footer.component.scss"],
})
export class StoreFooterComponent implements OnInit {
  @Input() categories: CategoryModel[];

  @Output() clickCategory = new EventEmitter<CategoryModel>();

  constructor() {}

  ngOnInit() {}
}
