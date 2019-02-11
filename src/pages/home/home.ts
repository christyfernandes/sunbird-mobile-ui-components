import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {LibraryFilterPage} from '../../components/library-filter/library-filter';
import {GradeFilterComponent} from '../../components/grade-filter/grade-filter';
import { AppHeaderComponent } from '../../components/app-header/app-header';
import { RecentlyViewedComponent} from '../../components/recently-viewed/recently-viewed';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  components = [
    {
      "name":"Application Header",
      "pageName": AppHeaderComponent
    },
    {
      "name":"Medium Panel",
      "pageName": LibraryFilterPage
    },
    {
      "name":"Grade Panel",
      "pageName": GradeFilterComponent
    },
    {
      "name":"Recently Viewed",
      "pageName": RecentlyViewedComponent
    }
  ];
  constructor(public navCtrl: NavController) {

  }
  onWhenItemClick(i){
    console.log(this.components[i].pageName);
    this.navCtrl.push(this.components[i].pageName);
  }

}
