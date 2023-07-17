import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContextToken,
  HttpContext,
  HttpErrorResponse,
  HttpStatusCode
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { SessionService } from './session.service';
import { NotificationService } from './notification.service';
import { Router } from '@angular/router';
import { ServerResponse } from '../types/server-response';

const SKIP_INTERCEPTOR = new HttpContextToken<boolean>(() => false);

export function skipInterceptor() {
  return new HttpContext().set(SKIP_INTERCEPTOR, true);
}

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    public session: SessionService,
    public notifications: NotificationService,
    public router: Router
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.context.get(SKIP_INTERCEPTOR)) {
      return next.handle(request);
    }

    const ACCESS_TOKEN = this.session.token;

    if (ACCESS_TOKEN === null) {
      return next.handle(request).pipe(
        catchError((err: HttpErrorResponse) => {
          this.notificationsSwitcher(err, err.error);
          return throwError(() => new Error(JSON.stringify(err)));
        })
      );
    }
    
    let newRequest: HttpRequest<unknown> = request;
    if(ACCESS_TOKEN !== null) {
      newRequest = request.clone({
        headers: request.headers.set('Authorization', ACCESS_TOKEN)
      });
    }

    return next.handle(newRequest).pipe(
      catchError((err: HttpErrorResponse) => {
        this.notificationsSwitcher(err, err.error);
        return throwError(() => new Error(JSON.stringify(err)));
      })
    );
  }

  public notificationsSwitcher(
    err: HttpErrorResponse,
    error: ServerResponse<string>
  ) {
    switch(err.status) {
      case 0: {
        this.notifications.create({
          severity: 'error',
          summary: 'Error',
          detail: 'La respuesta tardó más de lo esperado'
        });
        break;
      }
      case HttpStatusCode.Unauthorized: {
        localStorage.removeItem('TOKEN');
        localStorage.removeItem('SESSION_DATA')
        this.notifications.create({
          severity: 'info',
          summary: 'Sesión',
          detail: 'Tu sesión ha expirado. Iníciala nuevamente para continuar'
        })
        this.router.navigateByUrl('/');
        break;
      }
      default: {
        this.notifications.create({
          severity: 'error',
          summary: `Error ${err.status}`,
          detail: `${error.data}`
        });
        break;
      }
    }
  }
}
