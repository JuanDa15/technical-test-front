import { Component, DestroyRef, Input, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormHelperService } from 'src/app/utils/form-helper.service';

@Component({
  selector: 'c-number-input',
  templateUrl: './c-number-input.component.html',
  styleUrls: ['./c-number-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CNumberInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CNumberInputComponent),
      multi: true,
    }
  ]
})
export class CNumberInputComponent implements ControlValueAccessor, Validator {
 
   
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
    public onChange = (value: string) => {
      return value
    };
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
  
    @Input() id = ''
    @Input() label = '';
    @Input() name?: string;
    @Input() allowDecimals = false;

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
        next: (val: number) => {
          if (val !== null) {
            this.onValidatorChange();
            this.onTouch();
            this.onChange(val.toString());
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
    /**
     * [avoidLetters]
     * @param {ClipboardEvent} event
     * @returns { void }
     */
    public avoidLetters( event: ClipboardEvent): void {
      const pastedValue = event.clipboardData?.getData('text') || '';
  
      if(!pastedValue) {
        return;
      }
  
      if(pastedValue.match(/[a-zA-Z]+/)) {
        (<HTMLInputElement>event.target).value = ''
        this.form.reset();
        event.preventDefault();
        event.stopPropagation();
        return;
      }
    }
  
  
}
