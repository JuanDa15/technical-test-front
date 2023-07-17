import { Component, DestroyRef, Input, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormHelperService } from 'src/app/utils/form-helper.service';

@Component({
  selector: 'c-checkbox-input',
  templateUrl: './c-checkbox-input.component.html',
  styleUrls: ['./c-checkbox-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CCheckboxInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CCheckboxInputComponent),
      multi: true,
    }
  ]
})
export class CCheckboxInputComponent implements ControlValueAccessor, Validator {
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
  public onChange = (value: unknown) => value;
  public onTouch = () => { return };
  public onValidatorChange = () => { return }
  /**
   * [id]
   * @type { string | null}
   */
  public id: string | null;
  constructor(
    public formHelper: FormHelperService,
    private _fb: FormBuilder,
    private _destroyRef: DestroyRef
  ) {
    this.id = null;
    this._subscriptions = [];
    this.controlInstance = null;
    this.form = this._initializeForm();
    this._subscribeToValueChanges();
    this._destroyRef.onDestroy(() => {
      this._subscriptions.forEach(s => s.unsubscribe());
    })
  }

  @Input() label = '';
  @Input() set inputId(value: string) {
    if (!value) throw new Error('Input id is required')
    this.id = value;
  }
  @Input() accentColor?: string;
  @Input() name?: string;
  @Input() autofocus = false;
  /**
   * [writeValue, registerOnChange, registerOnTouched, setDisabledState]
   * @description Functions of ControlValueAccessor interface
   */
  writeValue(value: boolean | null): void {
    if (value !== null && value) {
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
      next: async (val) => {
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
