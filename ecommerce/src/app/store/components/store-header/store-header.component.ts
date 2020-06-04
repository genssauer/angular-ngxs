import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { CategoryModel } from '../../../shared/models/category.model';

import { StoreSandbox } from '../../store.sandbox';

@Component({
  selector: "app-store-header",
  templateUrl: "./store-header.component.html",
  styleUrls: ["./store-header.component.scss"],
})
export class StoreHeaderComponent implements OnInit {
  @Input() categories: CategoryModel[];

  @Output() clickCategory = new EventEmitter<CategoryModel>();

  public menu = false;

  constructor(public storeSandbox: StoreSandbox) {}

  ngOnInit() {
  }

  filterProduct(term) {
    this.storeSandbox.filterTerm = term;
  }
}
