import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from '../../services/reservation.service';
import { NotificationService } from 'src/app/utils/notification.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit{
  public ar = inject(ActivatedRoute)
  public fb = inject(FormBuilder)
  public router = inject(Router)

  public reservationService = inject(ReservationService)
  public notifications = inject(NotificationService)

  public form = this.fb.group({
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
    travelers: this.fb.array([]),
    hotel: ['', Validators.required],
    room: ['', Validators.required],
    emergencyContact: this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
    })
  })

  get travelersArr() {
    return this.form.get('travelers') as FormArray
  }

  ngOnInit(): void {
    const { hotelId, roomId } = this.ar.snapshot.params;
    this.form.patchValue({
      hotel: hotelId,
      room: roomId
    })
    this.createTravelerForm();
  }

  createTravelerForm() {
    this.travelersArr.push(this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      genre: ['', Validators.required],
      documentType: ['', Validators.required],
      document: ['', Validators.required],
      phone: ['', Validators.required],
    }))
  }

  public save(){
    this.reservationService.createReservation(this.form.value).subscribe({
      next: () => {
        this.notifications.create({
          severity: 'success',
          summary: 'Reserva creada',
          detail: 'En unos minutos te llegara un correo con la informacion de tu reserva'
        });
        this.router.navigate(['/'])
      }
    })
  }
}
