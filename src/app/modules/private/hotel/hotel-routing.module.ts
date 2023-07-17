import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { CreateComponent } from './pages/create/create.component';
import { hasSessionActivate } from 'src/app/utils/guards/session.guard';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
    canActivate: [hasSessionActivate]
  },
  {
    path: 'create',
    component: CreateComponent,
    canActivate: [hasSessionActivate]
  },
  {
    path: 'update/:id',
    component: CreateComponent,
    canActivate: [hasSessionActivate]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoutingModule { }
