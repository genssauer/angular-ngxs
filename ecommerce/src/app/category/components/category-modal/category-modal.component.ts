import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';

import { NzMessageService } from 'ng-zorro-antd';

import { CategorySandbox } from '../../category.sandbox';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.scss'],
})
export class CategoryModalComponent implements OnInit, OnDestroy {
  @Input() editing: boolean;

  public isLoading$ = this.categorySandbox.isLoadingCategory$;

  public categoriesCollection$ = this.categorySandbox
    .parentCategoriesCollection$;

  public formGroup: FormGroup;

  private subscription = new Subscription();

  loading = false;

  avatarUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private categorySandbox: CategorySandbox,
    private msg: NzMessageService
  ) {
    this.formGroup = this.formBuilder.group({
      id: [null],
      category_id: [null],
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ],
      ],
      description: ['', [Validators.minLength(2), Validators.maxLength(100)]],
      status: [true],
    });
  }

  ngOnInit() {
    if (this.editing) {
      this.subscription.add(
        this.categorySandbox.categorySelected$.subscribe((data) => {
          this.formGroup.patchValue(data);
        })
      );
    }
  }

  saveCategory() {
    for (const i in this.formGroup.controls) {
      this.formGroup.controls[i].markAsDirty();
      this.formGroup.controls[i].updateValueAndValidity();
    }

    if (this.formGroup.valid) {
      if (this.editing && this.formGroup.get('id') !== null) {
        return this.categorySandbox.updateCategory(this.formGroup.value);
      }
      return this.categorySandbox.createCategory(this.formGroup.value);
    }
  }

  cancel() {
    this.categorySandbox.closeModal();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
