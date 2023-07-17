import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { hasSessionLoad } from './utils/guards/session.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/modules/public/public.module').then(m => m.PublicModule),
  },
  {
    path: 'priv',
    loadChildren: () => import('src/app/modules/private/private.module').then(m => m.PrivateModule),
    canMatch: [hasSessionLoad]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
