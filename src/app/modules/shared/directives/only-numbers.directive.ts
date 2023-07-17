import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[OnlyNumbers]'
})
export class OnlyNumbersDirective {

  constructor(
    private _el: ElementRef,
    private _control: NgControl
  ) {
  }

  @Input() allowDecimals = false;

  @HostListener('input', ['$event']) onInputChange(event: InputEvent) {
    const charCode = this._getCharCode(event);

    if ( charCode) {
      if (charCode === 32) {
        this._control?.control?.setValue(this._el.nativeElement.value.trim());
        return;
      }
      if (charCode >= 48 && charCode <= 57) {
        return;
      } 
      
      if (this.allowDecimals) {
        if (charCode === 46) return
      }

      let initialValue: string = this._el.nativeElement.value;
      initialValue = initialValue.slice(0,initialValue.length - 1);
      this._control?.control?.setValue(initialValue);
    }

  }

  private _getCharCode(event: InputEvent): number | undefined {
    return event.data?.charCodeAt(event.data.length - 1);
  }

}
