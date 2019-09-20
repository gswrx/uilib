import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoilerplateComponent } from '../../components/boilerplate/boilerplate.component';



@NgModule({
  declarations: [BoilerplateComponent],
  imports: [
    CommonModule
  ],
  exports: [BoilerplateComponent]
})
export class BoilerplateModule { }
