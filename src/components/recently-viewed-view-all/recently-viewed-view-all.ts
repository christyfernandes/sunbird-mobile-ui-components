import { Component } from '@angular/core';

/**
 * Generated class for the RecentlyViewedViewAllComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'recently-viewed-view-all',
  templateUrl: 'recently-viewed-view-all.html'
})
export class RecentlyViewedViewAllComponent {

  text: string;

  constructor() {
    console.log('Hello RecentlyViewedViewAllComponent Component');
    this.text = 'Hello World';
  }

}
