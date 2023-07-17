import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { HotelAdminList } from 'src/app/types/hotel';
import { ListDataResponse, ServerResponse } from 'src/app/types/server-response';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private _URL = `${environment.API}api/hotels`

  private _hotels = signal<HotelAdminList[]>([])

  get hotels() {
    return this._hotels.asReadonly();
  }
  
  constructor(
    private _http: HttpClient
  ) { }

  public createHotel(hotel: Record<string, string>) {
    return this._http.post<ServerResponse<string>>(this._URL, hotel)
  }

  public updateHotel(id: string, hotel: Record<string, string>) {
    return this._http.patch<ServerResponse<string>>(`${this._URL}/${id}`, hotel)
  }

  public getHotels() {
    return this._http.get<ServerResponse<ListDataResponse<HotelAdminList>>>(
      this._URL+'/priv'
    ).pipe(
      map(({data}) => {
        const { data: hotels } = data;
        this._hotels.set(hotels)
        return true
      }),
      catchError(() => of(false))
    )
  }
}
