import { Component, OnInit } from '@angular/core';

import { NzModalRef, NzModalService } from 'ng-zorro-antd';

import { UserSandbox } from '../../user.sandbox';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  public usersCollection$ = this.userSandbox.usersCollection$;

  private confirmModal: NzModalRef;

  constructor(
    private userSandbox: UserSandbox,
    private modalService: NzModalService
  ) {}

  ngOnInit() {
    this.userSandbox.loadUsers();
  }

  public selectUser(user) {
    this.userSandbox.selectUser(user);
    this.userSandbox.openModal(true);
  }

  public confirmUser(user) {
    this.confirmModal = this.modalService.confirm({
      nzTitle: 'Confirma a exclusão?',
      nzContent: `Ter certeza que deseja excluir o usuário: <b>${user.username}</b>?`,
      nzOkText: 'Sim',
      nzCancelText: 'Cancelar',
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          this.userSandbox.deleteUser(user);
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!')),
    });
  }

  public openModal() {
    this.userSandbox.openModal();
  }
}
