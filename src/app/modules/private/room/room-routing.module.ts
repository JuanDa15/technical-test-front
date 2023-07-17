import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './pages/update/update.component';
import { hasSessionActivate } from 'src/app/utils/guards/session.guard';

const routes: Routes = [
  {
    path: 'update/:id',
    component: UpdateComponent,
    canActivate: [hasSessionActivate]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule { }
