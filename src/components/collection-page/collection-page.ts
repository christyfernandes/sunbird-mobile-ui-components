import { Component } from '@angular/core';
// import { mockRes } from '../collection-page/collection-page-mock.data';

/**
 * Generated class for the CollectionPageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'collection-page',
  templateUrl: 'collection-page.html'
})
export class CollectionPageComponent {

  text: string;
  shownGroup : null;

  constructor() {
    console.log('Hello CollectionPageComponent Component');
    this.text = 'Hello World';
  }

  // childrenData = mockRes.getChildContentAPIResponse.result.children;
  // toggle the card
  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  }
  // to check whether the card is toggled or not
  isGroupShown(group) {
    return this.shownGroup === group;
  }
}
