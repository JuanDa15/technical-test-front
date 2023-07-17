import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './pages/create/create.component';
import { CheckComponent } from './pages/check/check.component';
import { DetailComponent } from '../../private/reservation/pages/detail/detail.component';

const routes: Routes = [
  {
    path: 'create/:hotelId/:roomId',
    component: CreateComponent
  },
  {
    path: 'check',
    component: CheckComponent
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
