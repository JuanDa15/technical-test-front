import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelDetailService } from '../../services/hotel-detail.service';
import {  Room } from 'src/app/types/hotel';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public ar = inject(ActivatedRoute)
  public hotelDetailService = inject(HotelDetailService)

  ngOnInit(): void {
    const { id } = this.ar.snapshot.params;
    this.hotelDetailService.getHotel(id);
  }

  
}
