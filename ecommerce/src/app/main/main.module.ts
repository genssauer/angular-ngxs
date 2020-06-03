import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { MainRoutingModule } from './routers/main-routing.module';

import { MainComponent } from './containers/main/main.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';

@NgModule({
  declarations: [
    MainComponent,
    SidebarComponent,
    HeaderComponent,
    ContentComponent,
  ],
  exports: [HeaderComponent],
  imports: [CommonModule, NgZorroAntdModule, MainRoutingModule],
})
export class MainModule {}
