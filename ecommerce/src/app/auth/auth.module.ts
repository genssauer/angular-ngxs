import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxsModule } from '@ngxs/store';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { AuthRoutingModule } from './routers/auth-routing.module';

import { SigninState } from './state/signin/signin.state';

import { LoginComponent } from './containers/login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsModule.forFeature([SigninState]),
    NgZorroAntdModule,
    AuthRoutingModule,
  ],
})
export class AuthModule {}
