import { Component, OnInit, computed, inject, effect, DestroyRef, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpecificRoomService } from '../../services/specific-room.service';
import { FormBuilder, Validators } from '@angular/forms';
import { RoomService } from '../../../hotel/services/room.service';
import { NotificationService } from 'src/app/utils/notification.service';
import { Subject, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  public ar = inject(ActivatedRoute)
  public router = inject(Router)
  public fb = inject(FormBuilder);
  public destroyRef = inject(DestroyRef)

  public specificRoomService = inject(SpecificRoomService)
  public roomService = inject(RoomService)
  public notifications = inject(NotificationService)
  
  private _stop$ = new Subject()
  public roomId: string | null = null;
  public loading = false;
  
  public roomTypes: Record<string, string> = {
    Suite: 'Suite',
    JuniorSuite: 'Junior suite',
    GranSuite: 'Gran suite',
    Individual: 'Individual',
    Double: 'Doble',
    Quadruple: 'Cuadruple',
  }
  
  public form = this.fb.group({
    type: ['', Validators.required],
    taxes: ['', Validators.required],
    baseCost: ['', Validators.required],
    active: [false, Validators.required],
    _id: ['', Validators.required],
  })

  public lastUpdated = computed(() => {
    const updatedBy = this.specificRoomService.room()?.updatedBy;
    return `${updatedBy?.name} ${updatedBy?.lastName} < ${updatedBy?.email} >`
  })
  public hotelData = computed(() => {
    const hotel = this.specificRoomService.room()?.hotel;
    return `${hotel?.name} < ${hotel?.email} >`
  })
  public roomLocation = computed(() => {
    const location = this.specificRoomService.room()?.location;
    return `Piso: ${location?.floor}, Habitación: ${location?.room}`
  });

  public patchFormEffect = effect(() => {
    if (this.specificRoomService.room()) {
      this.form.patchValue(this.specificRoomService.room()!);
    }
  })

  constructor() {
    this.destroyRef.onDestroy(() => {
      this.patchFormEffect.destroy();
      this._stop$.complete();
    })
  }

  ngOnInit(): void {
    this.loading = true;
    this.ar.params.pipe(
      takeUntil(this._stop$),
      switchMap(({ id }) => {
        this.roomId = id;
        return this.specificRoomService.getRoomData(id);
      })
    ).subscribe({
      next: () => {
        this.loading = false;
      }
    })
  }

  public deleteRoom() {
    if (!this.roomId) return;
    this.roomService.delete(this.roomId).subscribe({
      next: () => {
        this.notifications.create({
          severity: 'success',
          summary: 'Habitación eliminada',
        });
        this.router.navigateByUrl('/priv/hotel/update/' + this.specificRoomService.room()?.hotel._id)
      }
    })
  }

  public update(): void {
    const { _id, ...others } = structuredClone(this.form.value);
    if (!_id) {
      return
    }
    this.specificRoomService.updateRoom(_id, others as Record<string,string>).subscribe({
      next: () => {
        this.notifications.create({
          severity: 'success',
          summary: 'Habitación actualizada',
        });
      }
    })
  }
}
