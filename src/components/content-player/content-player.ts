import { Component } from '@angular/core';

/**
 * Generated class for the ContentPlayerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'content-player',
  templateUrl: 'content-player.html'
})
export class ContentPlayerComponent {

  text: string;

  constructor() {
    console.log('Hello ContentPlayerComponent Component');
    this.text = 'Hello World';
  }

}
