import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { CreateComponent } from './pages/create/create.component';
import { HotelRoutingModule } from './hotel-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { TooltipModule } from 'primeng/tooltip';
import { RoomFormComponent } from './components/room-form/room-form.component';


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    RoomFormComponent
  ],
  imports: [
    CommonModule,
    HotelRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    TooltipModule
  ]
})
export class HotelModule { }
