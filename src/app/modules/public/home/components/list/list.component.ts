import { Component, OnInit, inject } from '@angular/core';
import { HotelService } from '../../services/hotel.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  public hotelService = inject(HotelService)
  public fb = inject(FormBuilder);
  public router = inject(Router)
  public ar = inject(ActivatedRoute)

  public form = this.fb.group({
    location: [''],
    checkIn: [''],
    checkOut: [''],
    travelers: [''],
  })
  ngOnInit(): void {
    this.ar.queryParams.subscribe((params) => {
      this.form.patchValue(params)
      this.hotelService.getHotels();
    })
  }

  public search() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    
    console.log(this.form.value)
    this.router.navigate(['/'], {
      queryParams: {
        ...this._getParams({...this.form.value})
      }
    })
  }

  private _getParams(value: Record<string, unknown>) {
    const params: any = {}
    const formValues = structuredClone(value);
    Object.keys(formValues).forEach((key: string) => {
      if (formValues[key]) {
        params[key] = formValues[key]
      }
    })
    return params
  }
}
