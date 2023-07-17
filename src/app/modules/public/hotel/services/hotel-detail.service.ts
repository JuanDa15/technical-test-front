import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { HotelDetailedAdmin } from 'src/app/types/hotel';
import { ServerResponse } from 'src/app/types/server-response';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HotelDetailService {

  private _URL = `${environment.API}api/hotels`

  private _hotel = signal<HotelDetailedAdmin | null>(null)

  get hotel$() {
    return this._hotel.asReadonly()
  }

  constructor(
    private _http: HttpClient
  ) { }

  getHotel(id: string) {
    this._http.get<ServerResponse<HotelDetailedAdmin>>(`${this._URL}/${id}`).subscribe({
      next: (data) => {
        this._hotel.set(data.data)
      }
    })
  }
}
