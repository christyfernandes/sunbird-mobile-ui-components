import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { GradeFilterComponent } from './grade-filter/grade-filter';
import { LibraryFilterPage } from './library-filter/library-filter';
import { AppHeaderComponent } from './app-header/app-header';
import { RecentlyViewedComponent } from './recently-viewed/recently-viewed';
import { AppFooterComponent } from './app-footer/app-footer';
import { LibraryComponent } from './library/library';
import { CollectionPageComponent } from './collection-page/collection-page';
import { OfflineToastComponent } from './offline-toast/offline-toast';
import { ContentInfoComponent } from './content-info/content-info';
import { DetailCardComponent } from './detail-card/detail-card';
import { TextbookCardComponent } from '../components/textbook-card/textbook-card'
import { RecentlyViewedViewAllComponent } from './recently-viewed-view-all/recently-viewed-view-all';
import { PopupsComponent } from './popups/popups';
import { SbPopupComponent } from './sb-popup/sb-popup';
import { ButtonsComponent } from './buttons/buttons';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs';
import { InfoComponent } from './info/info';
import { ContentPlayerComponent } from './content-player/content-player';
import { SearchComponent } from './search/search';
import { OfflineComponent } from './offline/offline';
import { SideMenuComponent } from './side-menu/side-menu';

@NgModule({
	declarations: [GradeFilterComponent,
		LibraryFilterPage,
		AppHeaderComponent,
		RecentlyViewedComponent,
		AppFooterComponent,
		LibraryComponent,
		RecentlyViewedComponent,
		CollectionPageComponent,
		OfflineToastComponent,
		ContentInfoComponent,
		DetailCardComponent,
		TextbookCardComponent,
		RecentlyViewedViewAllComponent,
		PopupsComponent,
		SbPopupComponent,
		ButtonsComponent,
		BreadcrumbsComponent,
		InfoComponent,
		ContentPlayerComponent,
		SearchComponent,
		OfflineComponent,
    SideMenuComponent
	],
	imports: [
		IonicPageModule,
		IonicModule
	],
	exports: [GradeFilterComponent,
		LibraryFilterPage,
		AppHeaderComponent,
		RecentlyViewedComponent,
		AppFooterComponent,
		LibraryComponent,
		RecentlyViewedComponent,
		CollectionPageComponent,
		OfflineToastComponent,
		ContentInfoComponent,
		DetailCardComponent,
		TextbookCardComponent,
		RecentlyViewedViewAllComponent,
		PopupsComponent,
		SbPopupComponent,
		ButtonsComponent,
		BreadcrumbsComponent,
		InfoComponent,
		ContentPlayerComponent,
		SearchComponent,
		OfflineComponent,
    SideMenuComponent
	],
	entryComponents: [
		GradeFilterComponent,
		LibraryFilterPage,
		AppHeaderComponent,
		RecentlyViewedComponent,
		AppFooterComponent,
		LibraryComponent,
		CollectionPageComponent,
		OfflineToastComponent,
		ContentInfoComponent,
		DetailCardComponent,
		TextbookCardComponent,
		RecentlyViewedViewAllComponent,
		PopupsComponent,
		SbPopupComponent,
		ButtonsComponent,
		BreadcrumbsComponent,
		SearchComponent,
		OfflineComponent,
		SideMenuComponent

	]
})
export class ComponentsModule { }
