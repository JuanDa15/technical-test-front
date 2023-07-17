import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { FormArray, FormBuilder,  Validators } from '@angular/forms';
import { HotelService } from '../../services/hotel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { RoomService } from '../../services/room.service';
import { NotificationService } from 'src/app/utils/notification.service';
import { SpecificHotelService } from '../../services/specific-hotel.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  public fb = inject(FormBuilder)
  public router = inject(Router);
  public ar = inject(ActivatedRoute)
  public notifications = inject(NotificationService)

  public hotelService = inject(HotelService);
  public specificHotelService = inject(SpecificHotelService);
  public roomService = inject(RoomService);

  public updateView = signal(false);
  public hotelId = signal<string | null>(null)
  public lastUpdated = computed(() => {
    return `${this.specificHotelService.hotel()?.updatedBy.name} ${this.specificHotelService.hotel()?.updatedBy.lastName} < ${this.specificHotelService.hotel()?.updatedBy.email} >`
  })
  public form = this.fb.group({
    name: ['', Validators.required],
    location: ['', Validators.required],
    address: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    rooms: this.fb.array([]),
    enabled: [true, Validators.required],
  })

  get roomsArr() {
    return this.form.get('rooms') as FormArray;
  }

  ngOnInit(): void {
    const updateView = this.router.url.includes('update');
    this.updateView.set(updateView);
    if (updateView) {
      this.fetchHotelData()
    } else {
      this.createRoomForm();
    }
  }

  public fetchHotelData() {
    this.ar.params.pipe(
      switchMap(({ id }) => {
        this.hotelId.set(id)
        return this.specificHotelService.getHotel(id)
      })
    ).subscribe({
      next: () => {
        this.form.reset();
        if (this.specificHotelService.hotel()) {
          this.form.patchValue(this.specificHotelService.hotel()!);
        }
        this.roomsArr.clear()
      }
    })
  }

  public createRoomForm(value?: any) {
    const form = this.fb.group({
      _id: [null],
      location: this.fb.group({
        floor: ['', Validators.required],
        room: ['', Validators.required],
      }),
      baseCost: ['', Validators.required],
      taxes: ['', Validators.required],
      type: ['', Validators.required],
    });
    (value) && form.patchValue(value);
    this.roomsArr.push(form);
  }

  public save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      return;
    }

    (this.updateView()) 
      ? this._updateHotel()
      : this._createHotel();
  }

  private _createHotel(): void {
    this.hotelService.createHotel(this._mapBody({ ...this.form.value })).subscribe({
      next: () => {
        this.notifications.create({
          severity: 'success',
          summary: 'Hotel creado correctamente',
        })
        this.router.navigateByUrl('/priv/hotel/list')
      }
    })
  }

  private _updateHotel(): void {
    if (this.hotelId() === null) return;
    
    this.hotelService.updateHotel(
      this.hotelId()!, 
      this._mapBody({ ...this.form.value })
    ).subscribe({
      next: () => {
        this.notifications.create({
          severity: 'success',
          summary: 'Hotel actualizado correctamente',
        })
        this.router.navigateByUrl('/priv/hotel/list')
      }
    })
  }

  public deleteRoomFromArr(position: number): void {
    this.roomsArr.removeAt(position)
  }

  public createRoom(value: any) {
    const body = structuredClone(value)
    delete body._id;
    body.hotel = this.hotelId()
    this.roomService.create(body).subscribe({
      next: () => {
        this.notifications.create({
          severity: 'success',
          summary: 'Habitación creada correctamente',
        })
        this.fetchHotelData();
      }
    })
  }

  public deleteRoom(id: any) {
    this.roomService.delete(id).subscribe({
      next: () => {
        this.notifications.create({
          severity: 'success',
          summary: 'Habitación eliminada correctamente',
        })
        this.fetchHotelData();
      }
    })
  }

  private _mapBody(body: any) {
    if (this.updateView()) {
      delete body.rooms
    }
    if (!this.updateView()) {
      body.rooms = this.roomsArr.value.map((room: any) => {
        delete room._id
        return room
      })
    }
    return body
  }
}
