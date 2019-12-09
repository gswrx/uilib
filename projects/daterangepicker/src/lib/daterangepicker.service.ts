import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Moment } from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DaterangepickerService {

  private min = new Subject<Moment>();
  private startDate = new Subject<Moment>();
  private endDate = new Subject<Moment>();


  setMin(date: any) {
      this.min.next(date);
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
    this.startDate.next();
}

getStartDate(): Observable<any> {
    return this.startDate.asObservable();
}

setEndDate(date: any) {
  this.endDate.next(date);
}

clearEndDate() {
  this.endDate.next();
}

getEndDate(): Observable<any> {
  return this.endDate.asObservable();
}
}
