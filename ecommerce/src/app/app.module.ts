import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localePt from '@angular/common/locales/pt';

import { NgxsModule } from '@ngxs/store';
import { NgxsSelectSnapshotModule } from '@ngxs-labs/select-snapshot';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import {
  NgxsConfiguration,
  NgxsLoggerPluginConfiguration,
} from './shared/core/configurations/ngxs.configuration';

import { NgZorroAntdModule, NZ_I18N, pt_BR } from 'ng-zorro-antd';

import { NgxMaskModule } from 'ngx-mask';

import { IconsProviderModule } from './icons-provider.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { RequestInterceptor } from './shared/intercepetors/request.interceptor';
import { RefreshInterceptor } from './shared/intercepetors/refresh.interceptor';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [AppComponent],
  imports: [
    NgxsModule.forRoot([], NgxsConfiguration),
    NgxsSelectSnapshotModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(NgxsLoggerPluginConfiguration),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot({
      key: ['session.token', 'session.refreshToken'],
    }),

    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [
    { provide: NZ_I18N, useValue: pt_BR },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RefreshInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
