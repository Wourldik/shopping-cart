import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartPageComponent } from './cart-page.component';

const routes: Routes = [
  {
    path: '',
    component: CartPageComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartPageRoutingModule {}

export const routedComponents = [CartPageComponent];
