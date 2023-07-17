import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { SessionService } from 'src/app/utils/session.service';
import { NotificationService } from 'src/app/utils/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public fb = inject(FormBuilder)
  public ar = inject(ActivatedRoute)
  public router = inject(Router)
  public notifications = inject(NotificationService)
  public loginService = inject(LoginService)

  public form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  ngOnInit(): void {
    const { email } = this.ar.snapshot.queryParams;
    (email) && this.form.patchValue({ email })
  }

  public logIn(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loginService.logIn(this.form.value).subscribe({
      next: (val) => {
        this.notifications.create({
          severity: 'success',
          summary: `Bienvenido de nuevo ${val.data.name} ${val.data.lastName}`,
          sticky: false,
          life: 3000
        })
        this.router.navigateByUrl('/priv/panel')
      }
    })
  }
}
