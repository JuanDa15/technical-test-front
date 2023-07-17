import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'traveler-form',
  templateUrl: './traveler-form.component.html',
  styleUrls: ['./traveler-form.component.scss']
})
export class TravelerFormComponent {
  @Input() form!: AbstractControl;
  @Input() isFirst: boolean = false;
  @Output() onRemove = new EventEmitter<void>();
  public DOCUMENT_TYPES = {
    cc: 'Cédula de ciudadanía',
    ce: 'Cédula de extranjería',
    passport: 'Pasaporte',
    nit: 'NIT',
  };

  public genreDicc: Record<string, string> = {
    'M': 'Masculino',
    'F': 'Femenino',
    'O': 'Otro'
  }

  public castToFormGroup(form: AbstractControl): FormGroup {
    return form as FormGroup;
  }
}
