import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { DetailComponent } from './pages/detail/detail.component';
import { hasSessionActivate } from 'src/app/utils/guards/session.guard';

const routes: Routes = [
 {
  path: 'list',
  component: ListComponent,
  canActivate: [hasSessionActivate]
 },
 {
  path: 'detail/:id',
  component: DetailComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
