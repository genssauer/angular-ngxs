import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { DashboardRoutingModule } from './routers/dashboard-routing.module';

import { PageHeaderModule } from '../shared/components/page-header/page-header.module';

import { DashboardComponent } from './containers/dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    DashboardRoutingModule,
    PageHeaderModule,
  ],
})
export class DashboardModule {}
