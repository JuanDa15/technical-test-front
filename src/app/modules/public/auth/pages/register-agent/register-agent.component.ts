import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterAgentService } from '../../services/register-agent.service';
import { Router } from '@angular/router';
import { equalPasswords, validatePassword } from 'src/app/modules/shared/validators/password.validator';
import { NotificationService } from 'src/app/utils/notification.service';

@Component({
  selector: 'app-register-agent',
  templateUrl: './register-agent.component.html',
  styleUrls: ['./register-agent.component.scss']
})
export class RegisterAgentComponent {
  public fb = inject(FormBuilder)
  public router = inject(Router)
  public registerService = inject(RegisterAgentService)
  public notifications = inject(NotificationService)

  public form = this.fb.group({
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, validatePassword()]],
    confirmPassword: ['', [Validators.required]],
  }, {
    validators: [equalPasswords('password', 'confirm_password')]
  })

  public save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const body = structuredClone(this.form.value);
    delete body.confirmPassword
    
    this.registerService.registerAgent(body).subscribe({
      next:() => {
        this.notifications.create({
          severity: 'success',
          summary: 'Usuario registrado correctamente'
        })
        this.router.navigate(['/auth/login'], {
          queryParams: {
            email: body.email
          }
        })
      }
    })
  }
}
