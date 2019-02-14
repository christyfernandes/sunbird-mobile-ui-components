import { Component } from '@angular/core';
import { LibraryComponent } from '../library/library';

/**
 * Generated class for the AppFooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-footer',
  templateUrl: 'app-footer.html'
})
export class AppFooterComponent {

  text: string;
  tab1: any;
  tab2: any;

  constructor() {
    this.tab1 = LibraryComponent;
    this.tab2 = '';
  }

}
