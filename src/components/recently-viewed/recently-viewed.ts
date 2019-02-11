import { Component } from '@angular/core';

/**
 * Generated class for the RecentlyViewedComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'recently-viewed',
  templateUrl: 'recently-viewed.html'
})
export class RecentlyViewedComponent {

  text: string;

  constructor() {
    console.log('Hello RecentlyViewedComponent Component');
    this.text = 'Hello World';
  }

}
