import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { HotelPublic } from 'src/app/types/hotel';
import { ListDataResponse, ServerResponse } from 'src/app/types/server-response';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private _URL = `${environment.API}api/hotels`

  private _hotels = signal<HotelPublic[]>([])

  get hotels$() {
    return this._hotels.asReadonly()
  }

  constructor(
    private _http: HttpClient
  ) { }

  public getHotels(): void {
    this._http.get<ServerResponse<ListDataResponse<HotelPublic>>>(this._URL).subscribe({
      next: (data) => {
        this._hotels.set(data.data.data)
      }
    })
  }
}
