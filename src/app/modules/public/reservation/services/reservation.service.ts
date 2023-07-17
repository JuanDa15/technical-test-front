import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerResponse } from 'src/app/types/server-response';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private _URL = `${environment.API}api/reservations`

  constructor(
    private _http: HttpClient
  ) { }

  createReservation(data: Record<string, unknown>) {
    return this._http.post<ServerResponse<string>>(this._URL, data)
  }
}
