import { Injectable, WritableSignal, signal } from '@angular/core';
import { getStorage, setStorage } from './storage';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _token = signal<string>('');
  private _sessionData = signal<any>({});

  get token() {
    return this._token()
  }

  get sessionData() {
    return this._sessionData()
  }

  set token(value: string) {
    this._token.set(value);
    setStorage('TOKEN', value);
  }

  set sessionData(value: any) {
    this._sessionData.set(value);
    setStorage('SESSION_DATA', value);
  }

  constructor() { 
    this._token.set(getStorage('TOKEN'));
    this._sessionData.set(getStorage('SESSION_DATA'));
  }
  
}
