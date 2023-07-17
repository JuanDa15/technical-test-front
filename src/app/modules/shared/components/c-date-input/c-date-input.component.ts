import { Component, DestroyRef, Input, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormHelperService } from 'src/app/utils/form-helper.service';

type inputsAllowed = 'date' | 'datetime' | 'datetime-local' | 'month' | 'range' | 'time' | 'week';
  
@Component({
  selector: 'c-date-input',
  templateUrl: './c-date-input.component.html',
  styleUrls: ['./c-date-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CDateInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CDateInputComponent),
      multi: true,
    }
  ]
})
export class CDateInputComponent implements ControlValueAccessor, Validator {
  
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
     * @type {string}
     */
    public inputType: string;
    /**
     * [minValue, maxValue, stepValue]
     * @type { string | null}
     */
    public minValue: string | null;
    public maxValue: string | null;
    public stepValue: string | null;
    /**
     * [onChange, onTouch, onValidatorChange]
     */
    public onChange = (value: unknown) => value;
    public onTouch = () => { return };
    public onValidatorChange = () => { return }

    constructor(
      public formHelper: FormHelperService,
      private _fb: FormBuilder,
      private _destroyRef: DestroyRef
    ) {
      this.inputType = 'text';
      this.minValue = null;
      this.maxValue = null;
      this.stepValue = null;
      this._subscriptions = [];
      this.controlInstance = null;
      this.form = this._initializeForm();
      this._subscribeToValueChanges();
      this._destroyRef.onDestroy(() => {
        this._subscriptions.forEach(s => s.unsubscribe());
      })
    }
  
    @Input() label = '';
    @Input() id = ''
    @Input() name?: string;
    @Input() set type(value: inputsAllowed) { this.inputType = value }
    @Input() set maxLength(value: string) { this.maxValue = value }
    @Input() set minLength(value: string) { this.minValue = value }
    @Input() set step(value: string) { this.stepValue = value }

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
