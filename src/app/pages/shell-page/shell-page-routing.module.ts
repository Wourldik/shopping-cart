import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellPageComponent } from './shell-page.component';

const routes: Routes = [
  {
    path: '',
    component: ShellPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'products',
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./pages/products-page/products-page.module').then(
            m => m.ProductsPageModule
          ),
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('./pages/cart-page/cart-page.module').then(
            m => m.CartPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShellPageRoutingModule {}

export const routedComponents = [ShellPageComponent];
