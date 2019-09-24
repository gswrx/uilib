import { Component, OnInit } from '@angular/core';
import { BoilerplateService } from '../../services/boilerplate/boilerplate.service';

/**
 * test
 */
@Component({
  selector: 'gswrx-boilerplate',
  templateUrl: './boilerplate.component.html',
  styleUrls: ['./boilerplate.component.css']
})
export class BoilerplateComponent implements OnInit {
  data: number = 0;

  constructor(boilerplateService: BoilerplateService) { 
    boilerplateService.stub();
  }

  ngOnInit() { 
    console.log("ngOnInit() BoilerplateComponent:");
    
    for (let index = 0; index < 10; index++) {
      this.clickity();
    }
    
    
  }

  clickity(): void {
    this.data += 1;
    console.log("New value: " + this.data);
    
  }

}
