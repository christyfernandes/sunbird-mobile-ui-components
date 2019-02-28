import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LibraryFilterPage} from '../../components/library-filter/library-filter';
import {GradeFilterComponent} from '../../components/grade-filter/grade-filter';
import { AppHeaderComponent } from '../../components/app-header/app-header';
import { RecentlyViewedComponent} from '../../components/recently-viewed/recently-viewed';
import { AppFooterComponent } from '../../components/app-footer/app-footer';
import { CollectionPageComponent } from '../../components/collection-page/collection-page';
import { OfflineToastComponent } from '../../components/offline-toast/offline-toast';
import { ContentInfoComponent } from '../../components/content-info/content-info';
import { DetailCardComponent } from '../../components/detail-card/detail-card';
import { TextbookCardComponent } from '../../components/textbook-card/textbook-card';
import { RecentlyViewedViewAllComponent } from '../../components/recently-viewed-view-all/recently-viewed-view-all';
import { PopupsComponent } from '../../components/popups/popups';
import { ButtonsComponent} from '../../components/buttons/buttons';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs';
import { SearchComponent } from '../../components/search/search';
import { OfflineComponent } from '../../components/offline/offline';
import { SideMenuComponent } from '../../components/side-menu/side-menu';

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
    },
    {
      "name":"Collection Component",
      "pageName": CollectionPageComponent
    },
    {
      "name":"Offline Comp",
      "pageName": OfflineToastComponent
    },
    {
      "name":"Content Info",
      "pageName": ContentInfoComponent
    },
    {
      "name":"Popups",
      "pageName": PopupsComponent
    },
    {
      "name":"Buttons",
      "pageName": ButtonsComponent
    },
    {
      "name":"Search Card",
      "pageName": SearchComponent
    },
    {
      "name":"Offline Component",
      "pageName": OfflineComponent
    },
    {
      "name":"Side Menu Componet",
      "pageName": SideMenuComponent
    }

  ];
  constructor(public navCtrl: NavController) {

  }
  onWhenItemClick(i){
    console.log(this.components[i].pageName);
    this.navCtrl.push(this.components[i].pageName);
  }

}
