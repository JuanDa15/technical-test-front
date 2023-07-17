import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { map } from 'rxjs';
import { HotelDetailedAdmin } from 'src/app/types/hotel';
import { ServerResponse } from 'src/app/types/server-response';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SpecificHotelService {
  private _URL = `${environment.API}api/hotels`
  private _hotel = signal<HotelDetailedAdmin | null>(null)
  
  get hotel() {
    return this._hotel.asReadonly();
  }
  constructor(
    private _http: HttpClient
  ) { }
  public getHotel(hotelId: any) {
    return this._http.get<ServerResponse<HotelDetailedAdmin>>(`${this._URL}/${hotelId}`).pipe(
      map((data: any) => {
        this._hotel.set(data.data)
        return true
      })
    )
  }
}
