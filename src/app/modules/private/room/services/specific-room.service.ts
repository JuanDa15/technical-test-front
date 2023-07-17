import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { RoomDetailed } from 'src/app/types/room';
import { ServerResponse } from 'src/app/types/server-response';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SpecificRoomService {
  private _URL = `${environment.API}api/rooms`

  private _room = signal<RoomDetailed | null>(null)

  get room() {
    return this._room.asReadonly()
  }
  constructor(
    private _http: HttpClient
  ) { }

  public getRoomData(id: number) {
    return this._http.get<ServerResponse<RoomDetailed>>(`${this._URL}/${id}`).pipe(
      map(({data}) => {
        this._room.set(data)
        return true
      }),
      catchError(() => of(false))
    )
  }

  public updateRoom(id: string, data: Record<string, string>) {
    return this._http.patch<ServerResponse<RoomDetailed>>(`${this._URL}/${id}`, data).pipe(
      map(({data}) => {
        this._room.set(data)
        return true
      }),
      catchError(() => of(false))
    )

  }
}
