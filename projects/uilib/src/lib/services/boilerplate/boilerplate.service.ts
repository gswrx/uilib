import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoilerplateService {

  constructor() { 
  
  }

  public stub(): void {
    console.log("Service stub called!");
  }
}
