import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { hasSessionLoad } from 'src/app/utils/guards/session.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'panel',
        loadChildren: () => import('./panel/panel.module').then(m => m.PanelModule),
        canMatch: [hasSessionLoad]
      },
      {
        path: 'hotel',
        loadChildren: () => import('./hotel/hotel.module').then(m => m.HotelModule),
        canMatch: [hasSessionLoad]
      },
      {
        path: 'room', 
        loadChildren: () => import('./room/room.module').then(m => m.RoomModule),
        canMatch: [hasSessionLoad]
      },
      {
        path: 'reservation',
        loadChildren: () => import('./reservation/reservation.module').then(m => m.ReservationModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
