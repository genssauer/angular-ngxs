import { Injectable } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';

import { UserModalComponent } from '../components/user-modal/user-modal.component';

@Injectable()
export class UserModalService {
  private modal: NzModalRef<any>;

  constructor(private modalService: NzModalService) {}

  open(editing: boolean = false) {
    this.modal = this.modalService.create({
      nzTitle: 'Usuário',
      nzContent: UserModalComponent,
      nzComponentParams: { editing },
    });
  }

  close() {
    this.modal.close();
  }
}
