import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { map } from 'rxjs';
import { ServerResponse } from 'src/app/types/server-response';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  private _URL = `${environment.API}api/reservations/byEmail`

  private _reservations = signal<any[]>([])

  get reservations() {
    return this._reservations.asReadonly()
  }
  constructor(
    private _http: HttpClient
  ) { }

  checkReservation(params: Record<string, string>) {
    return this._http.get<ServerResponse<any[]>>(this._URL, {
      params: params
    }).pipe(
      map(resp => {
        this._reservations.set(resp.data)
        return true
      })
    )
  }
}
