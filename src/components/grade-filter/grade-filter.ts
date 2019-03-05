import { Component } from '@angular/core';

/**
 * Generated class for the GradeFilterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sb-grade-filter',
  templateUrl: 'grade-filter.html'
})
export class GradeFilterComponent {

  text: string;

  constructor() {
    console.log('Hello GradeFilterComponent Component');
    this.text = 'Hello World';
  }

}
