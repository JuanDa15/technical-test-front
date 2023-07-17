import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CheckService } from '../../services/check.service';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss']
})
export class CheckComponent {
  public fb = inject(FormBuilder);
  public checkService = inject(CheckService)

  public form = this.fb.group({
    email: ['', [Validators.email, Validators.required]]
  })


  check() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const body = this.form.value as Record<string, string>
    this.checkService.checkReservation(body).subscribe({
      next: (data) => {
      }
    })
  }
}
