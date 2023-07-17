import { Component, OnInit, inject, signal } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  public reservationService = inject(ReservationService)
  public loading = signal(false);
  ngOnInit(): void {
    this.loading.set(true);
    this.reservationService.getReservations().subscribe({
      next: () => {
        this.loading.set(false);
      }
    })
  }
}
