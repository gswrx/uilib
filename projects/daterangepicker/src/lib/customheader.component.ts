import { Component, ChangeDetectionStrategy, OnDestroy, Inject, ChangeDetectorRef, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports

const moment = _moment; import { MatCalendar, DateAdapter, MAT_DATE_FORMATS, MatDateFormats } from '@angular/material';
import {takeUntil} from 'rxjs/operators';
import { DaterangepickerService } from './daterangepicker.service';

/** Custom header component for datepicker. */
@Component({
    selector: 'custom-header',
    templateUrl: './customheader.component.html',
    styleUrls: ['./customheader.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
  })

  export class CustomHeader<D> implements OnDestroy, OnInit {
    private _destroyed = new Subject<void>();
    start: any = null;
    end: any = null;
    startFormatted;
    endFormatted;
    daysBetween: number = null;
    public test;
    constructor(
        private _calendar: MatCalendar<D>, private _dateAdapter: DateAdapter<D>,
        private daterangeService: DaterangepickerService,
        @Inject(MAT_DATE_FORMATS) private _dateFormats: MatDateFormats, cdr: ChangeDetectorRef) {
          _calendar.stateChanges
          .pipe(takeUntil(this._destroyed))
          .subscribe(() => cdr.markForCheck());
          _calendar.selectedChange.subscribe( res => {
        if (this.start == null) {
            this.daterangeService.setStartDate(res);
            daterangeService.setMin(res);
            this.daysBetween = moment(this.end).diff(res, 'days');
        } else if (this.start != null && this.end == null) {
            this.daterangeService.setEndDate(res);
            this.daterangeService.clearMin();
            this.daysBetween = res.diff(this.start, 'days');
        } else {
          this.daterangeService.setStartDate(moment(res));
          daterangeService.setMin(res);
          this.daterangeService.clearEndDate();
          this.daysBetween = moment(res).diff(this.start, 'days');
        }
    });
          _calendar._userSelected = () => {
          
        };
    }

    ngOnInit() {
      this.daterangeService.getStartDate().subscribe (startDate => {
        this.start = startDate;
        if (this.start) {
          this.startFormatted = this.start.format('MMM DD, YYYY');
        }
      });

      this.daterangeService.getEndDate().subscribe (endDate => {
        this.end = endDate;
        if (this.end) {
          this.endFormatted = this.end.format('MMM DD, YYYY');

        }

      });
    }
    ngOnDestroy() {
      this._destroyed.next();
      this._destroyed.complete();
      
    }

    get periodLabel() {
      return this._dateAdapter
          .format(this._calendar.activeDate, this._dateFormats.display.monthYearLabel)
          .toLocaleUpperCase();
    }

    getDaysInBetween() {
        return this.start.diff(this.end, 'days') + 1;
    }

    previousClicked(mode: 'month' | 'year') {
      this._calendar.activeDate = mode === 'month' ?
          this._dateAdapter.addCalendarMonths(this._calendar.activeDate, -1) :
          this._dateAdapter.addCalendarYears(this._calendar.activeDate, -1);
    }

    nextClicked(mode: 'month' | 'year') {
      this._calendar.activeDate = mode === 'month' ?
          this._dateAdapter.addCalendarMonths(this._calendar.activeDate, 1) :
          this._dateAdapter.addCalendarYears(this._calendar.activeDate, 1);
    }
  }
