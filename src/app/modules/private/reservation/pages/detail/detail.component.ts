import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationDetailService } from '../../services/reservation-detail.service';
import { switchMap } from 'rxjs';
import { Room } from 'src/app/types/hotel';
import { differenceInDays } from 'date-fns';
import { RoomReservation } from 'src/app/types/reservation';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public ar = inject(ActivatedRoute)
  public detailService = inject(ReservationDetailService)
  public reservationId: string | null = null;
  public loading = false;

  public roomTypes: Record<string, string> = {
    Suite: 'Suite',
    JuniorSuite: 'Junior suite',
    GranSuite: 'Gran suite',
    Individual: 'Individual',
    Double: 'Doble',
    Quadruple: 'Cuadruple',
  }
  

  ngOnInit(): void {
    this.loading = true;
    this.ar.params.pipe(
      switchMap(({ id }) => {
        this.reservationId = id;
        return this.detailService.getReservation(id)
      })
    ).subscribe({
      next: () => {
        this.loading = false;
      }
    })
  }

    
  public calculateTaxes(item: RoomReservation) {
    const baseCost = Number(item.baseCost);
    const taxes = Number(item.taxes);
    return baseCost + (baseCost * taxes) / 100;
  }

  public calculateTotalDays(item: any) {
    const startDate = new Date(item.startDate);
    const endDate = new Date(item.endDate);
    
    const daysDifference = differenceInDays(endDate, startDate);
    return daysDifference
  }

  public getTotal(item: any) {
    const costPerDay = this.calculateTaxes(item.room);
    const totalDays = this.calculateTotalDays(item);
    return costPerDay * totalDays;
  }
}
