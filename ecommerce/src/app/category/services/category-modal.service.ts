import { Injectable } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';

import { CategoryModalComponent } from '../components/category-modal/category-modal.component';

@Injectable()
export class CategoryModalService {
  private modal: NzModalRef<any>;

  constructor(private modalService: NzModalService) {}

  open(editing: boolean = false) {
    this.modal = this.modalService.create({
      nzTitle: 'Categoria',
      nzContent: CategoryModalComponent,
      nzComponentParams: { editing },
    });
  }

  close() {
    this.modal.close();
  }
}
