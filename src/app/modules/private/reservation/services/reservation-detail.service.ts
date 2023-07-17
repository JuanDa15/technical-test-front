import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { ReservationDetailed } from 'src/app/types/reservation';
import { ServerResponse } from 'src/app/types/server-response';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ReservationDetailService {

  private _URL = `${environment.API}api/reservations`
  
  private _reservation = signal<ReservationDetailed | null>(null)
 

  get reservation$() {
    return this._reservation.asReadonly();
  }

  constructor(
    private _http: HttpClient
  ) { }

  public getReservation(id: string) {
    return this._http.get<ServerResponse<ReservationDetailed>>(`${this._URL}/${id}`).pipe(
      map(({data}) => {
        this._reservation.set(data);
        return true
      }),
      catchError(() => of(false))
    )
  }
}
