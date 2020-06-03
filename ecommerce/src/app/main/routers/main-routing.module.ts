import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from '../containers/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: '../../dashboard/dashboard.module#DashboardModule',
      },
      {
        path: 'category',
        loadChildren: '../../category/category.module#CategoryModule',
      },
      {
        path: 'product',
        loadChildren: '../../product/product.module#ProductModule',
      },
      {
        path: 'user',
        loadChildren: '../../user/user.module#UserModule',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
