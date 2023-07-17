import { Component, OnInit, inject, signal } from '@angular/core';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  public hotelService = inject(HotelService);
  public loading = signal(false)

  public statusDicc: Record<string, string> = {
    'false': 'Inactivo',
    'true': 'Activo'
  }

  ngOnInit(): void {
    this.loading.set(true);
    this.hotelService.getHotels().subscribe({
      next: () => {
        this.loading.set(false)
      }
    })
  }

  public getStatusTranslated(status: boolean) {
    return this.statusDicc[`${status}`]
  }
}
