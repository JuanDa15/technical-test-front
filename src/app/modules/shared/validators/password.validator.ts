import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const PASSWORD_PATTERN = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d$@$!%*?&_]{7,10}';

export const validatePassword = (): ValidatorFn => {
  return (form: AbstractControl): ValidationErrors | null => {
    const regex = new RegExp(PASSWORD_PATTERN);
    return regex.test(form.value) ? null : { invalidPasswordFormat: true };
  }
}

export const equalPasswords = (
  password: string,
  confirm_password: string
): ValidatorFn => {
  return (form: AbstractControl): ValidationErrors | null => {
    const passwordValue = form.get(password)?.value;
    const confirmPasswordValue = form.get(confirm_password)?.value;
    const equalPasswords = passwordValue === confirmPasswordValue;
    (equalPasswords)
      ? null
      : form.get(confirm_password)?.setErrors({ passwordNotMatch: true });
    return null;
  }
}
