import { Component } from '@angular/core';

/**
 * Generated class for the SubjectCardsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'textbook-card',
  templateUrl: 'textbook-card.html'
})
export class TextbookCardComponent {

  text: string;

  constructor() {
    console.log('Hello SubjectCardsComponent Component');
    this.text = 'Hello World';
  }

}
