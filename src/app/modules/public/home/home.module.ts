import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HotelModule } from '../hotel/hotel.module';
import { ListComponent } from './components/list/list.component';
import { TooltipModule } from 'primeng/tooltip';
import { HotelCardComponent } from './components/hotel-card/hotel-card.component';

@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    HotelCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HotelModule,
    TooltipModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
