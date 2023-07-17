import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormHelperService {

  public checkFormErrors(
    form: FormGroup,
    controlName: string
  ): boolean | undefined {
    const control = form.get(controlName);
    return control?.touched && control.invalid;
  }

  public getFormErrors(
    form: FormGroup,
    controlName: string
  ): string {
    const errors: ValidationErrors | null | undefined = form.get(controlName)?.errors;
    return this._errorsDicc(errors);
  }

  public checkControlErrors(
    control: AbstractControl
  ): boolean {
    return control.invalid && control.touched;
  }

  public getControlErrors(
    control: AbstractControl
  ): string {
    const errors: ValidationErrors | null | undefined = control.errors;
    return this._errorsDicc(errors);
  }

  private _errorsDicc(errors: ValidationErrors | null | undefined): string {
    if(errors?.['required']) {
      return 'Este campo es requerido'
    }

    if(errors?.['email']) {
      return 'No cumple con un formato de correo válido'
    }

    if(errors?.['maxlength']) {
      const {requiredLength, actualLength} = errors['maxlength'];
      return `Longitud máxima permitida ${requiredLength}, longitud actual ${actualLength}`;
    }

    if(errors?.['minlength']) {
      const {requiredLength, actualLength} = errors['minlength'];
      return `Longitud mínima permitida ${requiredLength}, longitud actual ${actualLength}`;
    }

    if(errors?.['invalidPasswordFormat']) {
      return 'No cumple con el formato requerido: al menos una letra mayúscula, al menos una letra minúscula, al menos un dígito, sin espacios en blanco, mínimo 7 caracteres y máximo 10.';
    }

    if(errors?.['passwordNotMatch']) {
      return 'Las contraseñas no coinciden';
    }

    if (errors?.['pattern']) {
      // Para comparar con otros patrones en caso de ser necesario
      // const {requiredPattern, actualValue} = errors['pattern'];

      return 'No cumple con el formato requerido';
    }

    if(errors?.['max']) {
      const { actual, max } = errors['max']
      return `El valor máximo permitido es ${max}, valor actual ${actual}`
    }

    if(errors?.['min']) {
      const { actual, min } = errors['min']
      return `El valor mínimo permitido es ${min}, valor actual ${actual}`
    }

    return '';
  }
}
