import { Injectable } from '@angular/core';
import { Message, MessageService } from 'primeng/api';

export enum NotificationSeverity {
  success = 'success',
  info = 'info',
  warn = 'warn',
  error = 'error',
  custom = 'custom'
}

type NotificationSeverityType = 'success' | 'info' | 'warn' | 'error' | 'custom';

interface NotificationParams {
  severity: NotificationSeverityType,
  summary: string,
  detail?: string,
  life?: number,
  sticky?: boolean,
  closable?: boolean,
  icon?: string,
  styleClass?: string,
  contentStyleClass?: string,
  data?: unknown,
  key?: string,
  id?: string
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private _messageService: MessageService,
  ) { }

  public create({
    severity,
    summary,
    detail,
    life = 3000,
    sticky = true,
    closable = true,
    ...others
  }: NotificationParams): void {
    const message: Message = {
      severity,
      summary,
      detail,
      life,
      closable,
      sticky,
      ...others
    }
    this._checkCustomNotificationValidity(message as NotificationParams)
    this._messageService.add(message)
  }

  private _checkCustomNotificationValidity({severity, ...others}: NotificationParams) {
    if (severity === NotificationSeverity.custom) {
      if (!others.contentStyleClass) throw new Error('No contentStyleClass class provide')
    }
  }
}
