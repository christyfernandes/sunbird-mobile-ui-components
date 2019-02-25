import { Component } from '@angular/core';

/**
 * Generated class for the BreadcrumbsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'breadcrumbs',
  templateUrl: 'breadcrumbs.html'
})
export class BreadcrumbsComponent {

  text: string;

  constructor() {
    console.log('Hello BreadcrumbsComponent Component');
    this.text = 'Hello World';
  }

}
