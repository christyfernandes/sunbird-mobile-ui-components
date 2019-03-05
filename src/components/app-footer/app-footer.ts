import { Component } from '@angular/core';
import { LibraryComponent } from '../library/library';
import { LibraryPage } from '../../pages/library/library';
import {ViewAllPage} from '../../pages/view-all/view-all';
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the AppFooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sb-app-footer',
  templateUrl: 'app-footer.html'
})
export class AppFooterComponent {

  text: string;
  tab1: any;
  tab2: any;

  constructor() {
    this.tab1 = LibraryPage;
    this.tab2 = '';
  }

}
