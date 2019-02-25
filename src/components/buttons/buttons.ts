import { Component } from '@angular/core';

/**
 * Generated class for the ButtonsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'buttons',
  templateUrl: 'buttons.html'
})
export class ButtonsComponent {

  text: string;

  constructor() {
    console.log('Hello ButtonsComponent Component');
    this.text = 'Hello World';
  }

}
