import { Component } from '@angular/core';

/**
 * Generated class for the SubjectCardsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'subject-cards',
  templateUrl: 'subject-cards.html'
})
export class SubjectCardsComponent {

  text: string;

  constructor() {
    console.log('Hello SubjectCardsComponent Component');
    this.text = 'Hello World';
  }

}
