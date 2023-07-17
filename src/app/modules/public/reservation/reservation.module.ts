import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { CreateComponent } from './pages/create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { TravelerFormComponent } from './components/traveler-form/traveler-form.component';


@NgModule({
  declarations: [
    CreateComponent,
    TravelerFormComponent
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ReservationModule { }
