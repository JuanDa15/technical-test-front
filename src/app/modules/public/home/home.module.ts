import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HotelModule } from '../hotel/hotel.module';
import { ListComponent } from './components/list/list.component';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [
    HomeComponent,
    ListComponent
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
