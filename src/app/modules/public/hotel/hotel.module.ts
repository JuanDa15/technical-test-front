import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelRoutingModule } from './hotel-routing.module';
import { ListComponent } from '../home/components/list/list.component';
import { DetailComponent } from './pages/detail/detail.component';



@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    HotelRoutingModule,
  ],
  exports: [
  ]
})
export class HotelModule { }
