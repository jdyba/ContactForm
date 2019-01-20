import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MAT_DATE_LOCALE, MatSelectModule, MatSliderModule, MatSlideToggleModule} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import 'hammerjs/hammer';
import { TimePickerComponent } from './time-picker/time-picker.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatRadioModule } from '@angular/material/radio';
import { FormComponent } from './form/form.component';

import { MatCardModule } from '@angular/material/card';

import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    TimePickerComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    NgbModule,
    MatRadioModule,
    MatCardModule,
    MatListModule
  ],

  providers: [{provide: MAT_DATE_LOCALE, useValue: 'pl'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
