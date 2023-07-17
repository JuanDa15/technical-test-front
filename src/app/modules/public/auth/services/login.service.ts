import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Agent } from 'src/app/types/agent';
import { LoginBody } from 'src/app/types/auth';
import { ServerResponse } from 'src/app/types/server-response';
import { SessionService } from 'src/app/utils/session.service';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _URL = `${environment.API}api/auth`

  constructor(
    private _http: HttpClient,
    private _session: SessionService
  ) { }

  public logIn(body: LoginBody) {
    return this._http.post<ServerResponse<Agent>>(this._URL, body).pipe(
      tap(({data, token = ''}) => {
        this._session.sessionData = data;
        this._session.token = token;
      })
    )
  }
}
