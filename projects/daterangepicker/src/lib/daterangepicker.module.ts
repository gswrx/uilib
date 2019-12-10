import { NgModule } from '@angular/core';
import { DaterangepickerComponent } from './daterangepicker.component';
import { MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule, MatIconModule, MatButtonModule, MatSelectModule } from '@angular/material';
import { CustomHeader } from './customheader.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [DaterangepickerComponent, CustomHeader],
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    CommonModule
  ],
  exports: [DaterangepickerComponent],
  entryComponents: [CustomHeader]
})
export class DaterangepickerModule { }
