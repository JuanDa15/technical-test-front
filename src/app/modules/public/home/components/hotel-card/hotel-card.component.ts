import { Component, Input } from '@angular/core';
import { HotelPublic } from 'src/app/types/hotel';

@Component({
  selector: 'hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent {
  @Input() hotel!: HotelPublic;

  public roomMapping = {
    '=0': '# habitaciones disponibles.', 
    '=1': '# habitación disponible.', 
    'other': '# habitaciones disponibles.',
  }
}
