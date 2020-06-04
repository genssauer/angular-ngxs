import { Injectable } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';

import { StoreProductComponent } from '../components/store-product/store-product.component';

import { ProductModel } from '../../shared/models/product.model';

@Injectable()
export class StoreProductModalService {
  private modal: NzModalRef<any>;

  constructor(private modalService: NzModalService) {}

  open(product: ProductModel) {
    this.modal = this.modalService.create({
      nzTitle: 'Produto',
      nzContent: StoreProductComponent,
      nzComponentParams: { product },
      nzWidth: '600px',
      nzStyle: { top: '60px' },
      nzFooter: null
    });
  }

  close() {
    this.modal.close();
  }
}
