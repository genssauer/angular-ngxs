import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';

import { NzMessageService } from 'ng-zorro-antd';

import { UserSandbox } from '../../user.sandbox';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss'],
})
export class UserModalComponent implements OnInit, OnDestroy {
  @Input() editing: boolean;

  public isLoading$ = this.userSandbox.isLoadingUser$;

  public usersCollection$ = this.userSandbox.usersCollection$;

  public formGroup: FormGroup;

  public passwordVisible = false;

  public confirmVisible = false;

  private subscription = new Subscription();

  loading = false;

  avatarUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private userSandbox: UserSandbox,
    private msg: NzMessageService
  ) {
    this.formGroup = this.formBuilder.group({
      id: [null],
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      password_confirmation: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    if (this.editing) {
      this.subscription.add(
        this.userSandbox.userSelected$.subscribe((data) => {
          this.formGroup.patchValue(data);
          this.formGroup.get('password').setValue('');
          this.formGroup.get('password_confirmation').setValue('');
        })
      );
    }
  }

  saveUser() {
    for (const i in this.formGroup.controls) {
      this.formGroup.controls[i].markAsDirty();
      this.formGroup.controls[i].updateValueAndValidity();
    }

    if (this.formGroup.valid) {
      if (this.editing && this.formGroup.get('id') !== null) {
        return this.userSandbox.updateUser(this.formGroup.value);
      }
      return this.userSandbox.createUser(this.formGroup.value);
    }
  }

  cancel() {
    this.userSandbox.closeModal();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
