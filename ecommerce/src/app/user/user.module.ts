import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxsModule } from '@ngxs/store';

import { UserRoutingModule } from './routers/user-routing.module';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { UserState } from './state/user/user.state';
import { UserModalState } from './state/user-modal/user-modal.state';

import { PageHeaderModule } from '../shared/components/page-header/page-header.module';
import { HeaderButtonModule } from '../shared/components/header-button/header-button.module';

import { UserModalService } from './services/user-modal.service';

import { UserComponent } from './containers/user/user.component';
import { UserModalComponent } from './components/user-modal/user-modal.component';

@NgModule({
  declarations: [UserComponent, UserModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule,
    NgZorroAntdModule,
    NgxsModule.forFeature([UserState, UserModalState]),
    PageHeaderModule,
    HeaderButtonModule,
  ],
  providers: [UserModalService],
  entryComponents: [UserModalComponent],
})
export class UserModule {}
