import { Component, OnInit } from '@angular/core';

import { NzModalRef, NzModalService } from 'ng-zorro-antd';

import { CategorySandbox } from '../../category.sandbox';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  public categoriesCollection$ = this.categorySandbox.categoriesCollection$;

  private confirmModal: NzModalRef;

  constructor(
    private categorySandbox: CategorySandbox,
    private modalService: NzModalService
  ) {}

  ngOnInit() {
    this.categorySandbox.loadCategorys();
  }

  public selectCategory(category) {
    this.categorySandbox.selectCategory(category);
    this.categorySandbox.openModal(true);
  }

  public confirmCategory(category) {
    this.confirmModal = this.modalService.confirm({
      nzTitle: 'Confirma a exclusão?',
      nzContent: `Ter certeza que deseja excluir o categoria: <b>${category.title}</b>?`,
      nzOkText: 'Sim',
      nzCancelText: 'Cancelar',
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          this.categorySandbox.deleteCategory(category);
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!')),
    });
  }

  public openModal() {
    this.categorySandbox.openModal();
  }
}
