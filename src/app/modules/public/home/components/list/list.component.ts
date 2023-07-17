import { Component, OnInit, inject } from '@angular/core';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  public hotelService = inject(HotelService)

  ngOnInit(): void {
    this.hotelService.getHotels();
  }
}
