import { Component, OnInit } from '@angular/core';

import { CategorySandbox } from '../../../category/category.sandbox';

import { CategoryModel } from '../../../shared/models/category.model';

@Component({
  selector: "app-store",
  templateUrl: "./store.component.html",
  styleUrls: ["./store.component.scss"],
})
export class StoreComponent implements OnInit {
  public categoriesCollection$ = this.categorySandbox.categoriesCollection$;

  constructor(private categorySandbox: CategorySandbox) {}

  ngOnInit() {
    this.categorySandbox.loadCategorys();
  }

  changeCategory(category: CategoryModel) {
    console.log("category", category);
  }
}
