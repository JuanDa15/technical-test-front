import { Component, DestroyRef, Input, OnDestroy, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormHelperService } from 'src/app/utils/form-helper.service';

@Component({
  selector: 'c-email-input',
  templateUrl: './c-email-input.component.html',
  styleUrls: ['./c-email-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CEmailInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CEmailInputComponent),
      multi: true,
    }
  ]
})
export class CEmailInputComponent implements ControlValueAccessor, Validator {
  /**
   * [_subscriptions]
   * @type {Subscription[]}
   */
  private _subscriptions: Subscription[];
  /**
   * [form]
   * @type {FormControl}
   */
  public form: FormControl;
  /**
   * [controlInstance]
   * @type {AbstractControl | null}
   */
  public controlInstance: AbstractControl | null;
  /**
   * [onChange, onTouch, onValidatorChange]
   */
  public onChange = (value: string) => value;
  public onTouch = () => { return };
  public onValidatorChange = () => { return }

  constructor(
    public formHelper: FormHelperService,
    private _fb: FormBuilder,
    private _destroyRef: DestroyRef
  ) {
    this._subscriptions = [];
    this.controlInstance = null;
    this.form = this._initializeForm();
    this._subscribeToValueChanges();
    this._destroyRef.onDestroy(() => {
      this._subscriptions.forEach(s => s.unsubscribe());
    })
  }

  @Input() label = '';
  @Input() id = '';
  @Input() name?: string;
  /**
   * [writeValue, registerOnChange, registerOnTouched, setDisabledState]
   * @description Functions of ControlValueAccessor interface
   */
  writeValue(value: string | null): void {
    if (value !== null) {
      this.form.setValue(value);
      this.onChange(value);
    }
  }
  registerOnChange(fn: () => string): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => unknown): void {
    this.onTouch = fn;
  }
  setDisabledState(disable: boolean): void {
    (disable)
      ? this.form.disable()
      : this.form.enable()
  }
  /**
   * [validate, registerOnValidatorChange]
   * @description Functions of validator interface
   */
  validate(control: AbstractControl): ValidationErrors | null {
    this.controlInstance = control;
    return null;
  }
  registerOnValidatorChange?(fn: () => unknown): void {
    this.onValidatorChange = fn;
  }
  /**
   * [_initializeForm]
   * @returns { FormControl }
   */
  private _initializeForm(): FormControl {
    return this._fb.control(null, {
      updateOn: 'change'
    });
  }
  /**
   * [_subscribeToValueChanges]
   * @returns { void }
   */
  private _subscribeToValueChanges(): void {
    const sub = this.form.valueChanges.subscribe({
      next: (val) => {
        if (val !== null) {
          this.onChange(val);
          this.onValidatorChange();
          this.onTouch();
        }
      }
    });
    this._subscriptions.push(sub);
  }
  /**
   * [markAsTouch]
   * @returns {void}
   */
  public markAsTouch(): void {
    this.controlInstance?.markAsDirty()
    this.onTouch();
    this.onValidatorChange()
  }
}

