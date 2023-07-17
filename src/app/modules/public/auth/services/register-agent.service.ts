import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agent } from 'src/app/types/agent';
import { ServerResponse } from 'src/app/types/server-response';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RegisterAgentService {

  private _url = `${environment.API}api/agents`

  constructor(
    private _http: HttpClient
  ) { }

  public registerAgent(data: Record<string, unknown>) {
    return this._http.post<ServerResponse<string>>(this._url, data)
  }
}
