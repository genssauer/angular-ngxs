import { Component, OnInit } from '@angular/core';

import { NzModalRef, NzModalService } from 'ng-zorro-antd';

import { ProductSandbox } from '../../product.sandbox';
import { FileSandbox } from '../../../file/file.sandbox';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public productsCollection$ = this.productSandbox.productsCollection$;

  private confirmModal: NzModalRef;

  constructor(
    private productSandbox: ProductSandbox,
    private fileSandbox: FileSandbox,
    private modalService: NzModalService
  ) {}

  ngOnInit() {
    this.productSandbox.loadProducts();
  }

  public selectProduct(product) {
    this.productSandbox.selectProduct(product);
    this.productSandbox.openModal(true);
    this.fileSandbox.resetFile();
  }

  public confirmProduct(product) {
    this.confirmModal = this.modalService.confirm({
      nzTitle: 'Confirma a exclusão?',
      nzContent: `Ter certeza que deseja excluir o produto: <b>${product.title}</b>?`,
      nzOkText: 'Sim',
      nzCancelText: 'Cancelar',
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          this.productSandbox.deleteProduct(product);
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!')),
    });
  }

  public openModal() {
    this.productSandbox.openModal();
  }
}
