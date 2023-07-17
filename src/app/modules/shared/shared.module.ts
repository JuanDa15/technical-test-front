import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CInputComponent } from './components/c-input/c-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NoWhiteSpacesDirective } from './directives/no-white-spaces.directive';
import { CEmailInputComponent } from './components/c-email-input/c-email-input.component';
import { CPasswordInputComponent } from './components/c-password-input/c-password-input.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CCityInputComponent } from './components/c-city-input/c-city-input.component';
import { SearchPipe } from './pipes/search.pipe';
import { CCheckboxInputComponent } from './components/c-checkbox-input/c-checkbox-input.component';
import { CNumberInputComponent } from './components/c-number-input/c-number-input.component';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';
import { CSelectInputComponent } from './components/c-select-input/c-select-input.component';
import { CDateInputComponent } from './components/c-date-input/c-date-input.component';



@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    CInputComponent,
    NoWhiteSpacesDirective,
    CEmailInputComponent,
    CPasswordInputComponent,
    LoaderComponent,
    CCityInputComponent,
    SearchPipe,
    CCheckboxInputComponent,
    CNumberInputComponent,
    OnlyNumbersDirective,
    CSelectInputComponent,
    CDateInputComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    NavComponent,
    FooterComponent,
    CInputComponent,
    NoWhiteSpacesDirective,
    CEmailInputComponent,
    CPasswordInputComponent,
    LoaderComponent,
    CCityInputComponent,
    CCheckboxInputComponent,
    CNumberInputComponent,
    CSelectInputComponent,
    CDateInputComponent
  ]
})
export class SharedModule { }
