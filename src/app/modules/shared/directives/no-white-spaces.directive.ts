import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: 'input[NoWhiteSpaces]'
})
export class NoWhiteSpacesDirective {

  constructor(
    private _el: ElementRef,
    private _control: NgControl
  ) {}

  @HostListener('keydown.space', ['$event'])
    onSpacePressed(event: KeyboardEvent) {
    event.preventDefault();
  }

  @HostListener('input', ['$event'])
  onInputChange(event: InputEvent) {
    const charCode =
      event.data?.charCodeAt(event.data.length - 1);
    if ( charCode) {
      if(charCode === 32) {
        if (this._control) {
          this._control?.control?.setValue(this._el.nativeElement.value.trim());
          return;
        }
      }
    }
  }

}
