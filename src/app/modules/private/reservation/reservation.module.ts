import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { ReservationRoutingModule } from './reservation-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { TooltipModule } from 'primeng/tooltip';
import { DetailComponent } from './pages/detail/detail.component';



@NgModule({
  declarations: [
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    SharedModule,
    TooltipModule
  ]
})
export class ReservationModule { }
