import { Injectable } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';

import { ProductModalComponent } from '../components/product-modal/product-modal.component';

@Injectable()
export class ProductModalService {
  private modal: NzModalRef<any>;

  constructor(private modalService: NzModalService) {}

  open(editing: boolean = false) {
    this.modal = this.modalService.create({
      nzTitle: 'Produto',
      nzContent: ProductModalComponent,
      nzComponentParams: { editing },
      nzWidth: '800px',
      nzStyle: { top: '60px' },
    });
  }

  close() {
    this.modal.close();
  }
}
