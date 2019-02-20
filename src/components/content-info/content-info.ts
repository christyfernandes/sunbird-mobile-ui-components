import { Component } from '@angular/core';

/**
 * Generated class for the ContentInfoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'content-info',
  templateUrl: 'content-info.html'
})
export class ContentInfoComponent {

  text: string;

  constructor() {
    console.log('Hello ContentInfoComponent Component');
    this.text = 'Hello World';
  }

}
