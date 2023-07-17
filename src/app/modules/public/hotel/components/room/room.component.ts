import { Component, Input } from '@angular/core';
import { Room } from 'src/app/types/hotel';

@Component({
  selector: 'room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent {
  @Input() room!: Room;
  @Input() hotelId!: string;
  
  public roomTypes: Record<string, string> = {
    Suite: 'Suite',
    JuniorSuite: 'Junior suite',
    GranSuite: 'Gran suite',
    Individual: 'Individual',
    Double: 'Doble',
    Quadruple: 'Cuadruple',
  }
  
  public calculateTaxes(item: Room) {
    const baseCost = Number(item.baseCost);
    const taxes = Number(item.taxes);
    return baseCost + (baseCost * taxes) / 100;
  }
}
