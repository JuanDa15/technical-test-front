import { Component, EventEmitter, Input, Output, WritableSignal } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.scss']
})
export class RoomFormComponent {
  @Input() form!: AbstractControl;
  @Input() updateView!: WritableSignal<boolean>;
  @Output() deleteFromArr = new EventEmitter();
  @Output() saveToServer = new EventEmitter();

  public roomTypes: Record<string, string> = {
    Suite: 'Suite',
    JuniorSuite: 'Junior suite',
    GranSuite: 'Gran suite',
    Individual: 'Individual',
    Double: 'Doble',
    Quadruple: 'Cuadruple',
  }
  public castToFormGroup(form: AbstractControl) {
    return form as FormGroup;
  }
}
