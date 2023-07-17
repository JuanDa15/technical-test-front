import { Component, DestroyRef, Input, OnDestroy, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormHelperService } from 'src/app/utils/form-helper.service';

type inputsAllowed = 'text' | 'color' | 'number' | 'search' | 'tel' | 'url';
@Component({
  selector: 'c-input',
  templateUrl: './c-input.component.html',
  styleUrls: ['./c-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CInputComponent),
      multi: true,
    }
  ]
})
export class CInputComponent implements ControlValueAccessor, Validator {
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
   * [inputType]
   * @type {inputsAllowed}
   */
  public inputType: inputsAllowed;
  /**
   * [onChange, onTouch, onValidatorChange]
   */
  public onChange = (value: unknown) => {
    return value
  };
  public onTouch = () => { return };
  public onValidatorChange = () => { return }

  constructor(
    public formHelper: FormHelperService,
    private _fb: FormBuilder,
    private _destroyRef: DestroyRef
  ) {
    this.inputType = 'text';
    this._subscriptions = [];
    this.controlInstance = null;
    this._destroyRef.onDestroy(() => {
      this._subscriptions.forEach(s => s.unsubscribe());
    })
    this.form = this._initializeForm();
    this._subscribeToValueChanges();
  }

  @Input() label = '';
  @Input() id = ''
  @Input() name?: string;
  @Input() set type(value: inputsAllowed) {
    this.inputType = value;
  }
  /**
   * [writeValue, registerOnChange, registerOnTouched, setDisabledState]
   * @description Functions of ControlValueAccessor interface
   */
  writeValue(value: unknown | null): void {
    if (value !== null) {
      this.form.setValue(value);
      this.onChange(value);
    }
  }
  registerOnChange(fn: () => unknown): void {
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
      next: (val: string) => {
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

