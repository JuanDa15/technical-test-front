import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerResponse } from 'src/app/types/server-response';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private _URL = `${environment.API}api/rooms`
  constructor(
    private _http: HttpClient
  ) { }

  public create(value: Record<string, unknown>) {
    return this._http.post<ServerResponse<string>>(this._URL, value) 
  }

  public delete(id: string) {
    return this._http.delete<ServerResponse<string>>(`${this._URL}/${id}`) 
  }
}
