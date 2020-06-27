import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'not-found',
    loadChildren: () =>
      import('./pages/not-found-page/not-found-page.module').then(
        m => m.NotFoundPageModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/shell-page/shell-page.module').then(
        m => m.ShellPageModule
      ),
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
