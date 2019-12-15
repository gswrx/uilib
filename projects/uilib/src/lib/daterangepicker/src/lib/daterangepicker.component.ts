import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomHeader } from './customheader.component';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';


import * as _moment from 'moment';
import { DaterangepickerService } from './daterangepicker.service';
// tslint:disable-next-line:no-duplicate-imports

const moment = _moment;
@Component({
  selector: 'gswrx-daterangepicker',
  templateUrl: './daterangepicker.component.html',
  styleUrls: ['./daterangepicker.component.scss'],
  providers: [
    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class DaterangepickerComponent implements OnInit {
  customHeader = CustomHeader;
  now = moment();
  selected = 'today';

  min = null;
  start: _moment.Moment;
  @Output() dateSelected = new EventEmitter<any>();
  end: _moment.Moment;
  constructor(public daterangeService: DaterangepickerService) { }
  formattedEnd;
  formattedStart;

  ngOnInit() {
    this.daterangeService.getMin().subscribe( min => {
      this.min = min;
    });
    this.daterangeService.getStartDate().subscribe(startDate => {
      this.start = startDate;
      const dateSelected = {
        start: this.start,
        end: this.end
      };
      this.dateSelected.emit(dateSelected);
      if (this.start) {
        this.formattedStart = this.start.format('DD MMM, YYYY');
      }

      this.now = moment();

    });
    this.daterangeService.getEndDate().subscribe(endDate => {

      this.end = endDate;
      const dateSelected = {
        start: this.start,
        end: this.end
      };
      this.dateSelected.emit(dateSelected);
      if (this.end) {
        this.formattedEnd = this.end.format('DD MMM, YYYY');
      }
      this.now = moment();

    });
  }

  dateClass = (d: _moment.Moment) => {
    const date = d;
    const isBetween = date.isBetween(this.start, this.end);
    const isStart = date.isSame(this.start);
    const isEnd = date.isSame(this.end);
    if (isStart && this.end) {
      return 'selected-days-start mat-calendar-body-selected';
    } else if (isBetween && this.end) {

      return 'selected-days-between';
    } else if (isEnd && this.end) {

      return 'selected-days-end';
    }
    return undefined;
  }

}
