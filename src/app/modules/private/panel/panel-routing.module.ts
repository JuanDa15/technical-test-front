import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { hasSessionActivate } from 'src/app/utils/guards/session.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [hasSessionActivate]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
