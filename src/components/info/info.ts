import { Component } from '@angular/core';

/**
 * Generated class for the InfoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'info',
  templateUrl: 'info.html'
})
export class InfoComponent {

  text: string;

  constructor() {
    console.log('Hello InfoComponent Component');
    this.text = 'Hello World';
  }

}
