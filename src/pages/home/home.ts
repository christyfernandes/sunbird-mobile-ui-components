import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {LibraryFilterPage} from '../../components/library-filter/library-filter';
import {GradeFilterComponent} from '../../components/grade-filter/grade-filter';
import { AppHeaderComponent } from '../../components/app-header/app-header';
import { RecentlyViewedComponent} from '../../components/recently-viewed/recently-viewed';
import { AppFooterComponent } from '../../components/app-footer/app-footer';
import { TextbookCardComponent } from '../../components/textbook-card/textbook-card';
import { RecentlyViewedViewAllComponent } from '../../components/recently-viewed-view-all/recently-viewed-view-all';

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
    },
    {
      "name":"Application Footer",
      "pageName": AppFooterComponent
    },
    {
      "name":"Subject Cards",
      "pageName": TextbookCardComponent
    },
    {
      "name":"Recently Viewed - View all",
      "pageName": RecentlyViewedViewAllComponent
    }
    
  ];
  constructor(public navCtrl: NavController) {

  }
  onWhenItemClick(i){
    console.log(this.components[i].pageName);
    this.navCtrl.push(this.components[i].pageName);
  }

}
