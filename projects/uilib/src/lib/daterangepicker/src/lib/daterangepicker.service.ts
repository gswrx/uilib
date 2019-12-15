import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { Moment } from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DaterangepickerService {

  private min = new Subject<Moment>();
  private startDate = new BehaviorSubject<Moment>(null);
  private endDate = new BehaviorSubject<Moment>(null);
  private daysBetween = new BehaviorSubject<number>(null);



  setMin(date: any) {
      this.min.next(date);
  }

  setDaysBetween(days: number) {
    this.daysBetween.next(days);
  }

  getDaysBetween() {
    return this.daysBetween.asObservable();
  }

  clearMin() {
      this.min.next();
  }

  getMin(): Observable<any> {
      return this.min.asObservable();
  }

  setStartDate(date: any) {
    this.startDate.next(date);
}

clearStartDate() {
    this.startDate.next(null);
}

getStartDate(): Observable<any> {
    return this.startDate.asObservable();
}

setEndDate(date: any) {
  this.endDate.next(date);
}

clearEndDate() {
  this.endDate.next(null);
}

getEndDate(): Observable<any> {
  return this.endDate.asObservable();
}
}
