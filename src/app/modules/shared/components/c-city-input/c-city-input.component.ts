import { Component, DestroyRef, Input, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Regions } from 'src/app/types/regions';
import { FormHelperService } from 'src/app/utils/form-helper.service';
import { regions } from 'src/assets/json/colombia-country.js';

export interface CityInputItem {
  city: string;
  state: string;
}

@Component({
  selector: 'c-city-input',
  templateUrl: './c-city-input.component.html',
  styleUrls: ['./c-city-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CCityInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CCityInputComponent),
      multi: true,
    }
  ]
})
export class CCityInputComponent implements ControlValueAccessor, Validator {

  /**
   * [subscriptions]
   * @type {Subscription[]}
   */
  public subscriptions: Subscription[];
  /**
   * [data]
   * @type { CityInputItem[] }
   */
  public data: CityInputItem[];
  /**
   * [search]
   * @type { FormControl }
   */
  public search: FormControl;
  /**
   * [controlInstance]
   * @type {AbstractControl | null}
   */
  public controlInstance: AbstractControl | null;
  /**
   * [disabled]
   * @type { boolean }
   */
  public disabled: boolean;
  /**
   * [isValid]
   * @type { boolean }
   */
  public isValid: boolean;
  /**
   * [onChange, onTouch, onValidatorChange]
   */
  public onChange = (value: string) => value;
  public onTouch = () => { return };
  public onValidatorChange = () => { return }
  @Input() label = '';
  @Input() set setDisabled(val: boolean) {
    (val)
      ? this.search.disable()
      : this.search.enable();
  }

  constructor(
    private _fb: FormBuilder,
    public formHelper: FormHelperService,
    private _destroyRef: DestroyRef
  ) {
    this.controlInstance = null;
    this.data = this._mapRegionToFlatArr(regions);
    this.subscriptions = [];
    this.disabled = false;
    this.search = this._fb.control('');
    this.isValid = false;
    this._subsToValueChanges();
    this._destroyRef.onDestroy(() => {
      this.subscriptions.forEach(s => s.unsubscribe());
    })
  }
  /**
   * [writeValue, registerOnChange, registerOnTouched, setDisabledState]
   * @description Functions of ControlValueAccessor interface
   */
  writeValue(value: string | null): void {
    if (value !== null) {
      this.search.setValue(value);
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
      ? this.search.disable()
      : this.search.enable()
  }
  /**
   * [_subsToValueChanges]
   * @returns {void}
   */
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
  private _subsToValueChanges(): void {
    let previusLength = this.search.value.length;
    const sub = this.search.valueChanges.subscribe({
      next: (val) => {
        if (previusLength > val.length) {
          this.isValid = false;
        }
        if (val.length === 0) {
          this.isValid = false;
        }
        previusLength = val.length;
      }
    })
    this.subscriptions.push(sub);
  }
  /**
   * [_mapRegionToFlatArr]
   * @return {CityInputItem[]}
   */
  private _mapRegionToFlatArr(regions: Regions[]): CityInputItem[] {
    return regions.map(region => {
      const cities = region.ciudades.map((city) => ({ city: city, state: region.departamento }));
      return [...cities];
    }).flat()
  }
  /**
   * [markAsTouched]
   * @return { void }
   */
  public markAsTouched(): void {
    this.controlInstance?.markAsDirty()
    this.onTouch();
    this.onValidatorChange()
  }
  /**
   * [select]
   * @param { CityInputItem } item
   * @return { void }
   */
  public select(item: CityInputItem): void {
    this.search.setValue(`${item.state}, ${item.city}`);
    this.onChange(`${item.state}, ${item.city}`)
    this.isValid = true;
  }
}

