import { Injectable, inject } from '@angular/core';
import { Router} from '@angular/router';
import { Observable, of } from 'rxjs';
import { NotificationService } from 'src/app/utils/notification.service';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard {
  public token;
  public user;

  constructor (
    private _router: Router,
    private _notifications: NotificationService
  ) {
    this.token = localStorage.getItem('TOKEN')
    this.user = localStorage.getItem('SESSION_DATA')
  }

  canActivate(): Observable<boolean>  {
    if(this.token == null || this.user == null) {
      this._notifications.create({
        severity: 'warn',
        summary: 'Inicia sesión para poder continuar'
      })
      this._router.navigateByUrl('/auth/login')
      return of(false);
    }
    return of(true);
  }

  canLoad(): Observable<boolean> {
    if(this.token == null || this.user == null) {
      this._notifications.create({
        severity: 'warn',
        summary: 'Inicia sesión para poder continuar'
      })
      this._router.navigateByUrl('/auth/login')
      return of(false);
    }
    return of(true);
  }
}

export const hasSessionActivate = () => {
  return inject(SessionGuard).canActivate()
}

export const hasSessionLoad = () => {
  return inject(SessionGuard).canActivate()
}
