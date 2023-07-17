import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { ReservationList } from 'src/app/types/reservation';
import { ListDataResponse, ServerResponse } from 'src/app/types/server-response';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private _URL = `${environment.API}api/reservations`
  
  private _reservations = signal<ReservationList[]>([])
 

  get reservations$() {
    return this._reservations.asReadonly();
  }

  constructor(
    private _http: HttpClient
  ) { }

  public getReservations() {
    return this._http.get<ServerResponse<ListDataResponse<ReservationList>>>(this._URL).pipe(
      map(({data: {data}}) => {
        this._reservations.set(data);
        return true
      }),
      catchError(() => of(false))
    )
  }
}
