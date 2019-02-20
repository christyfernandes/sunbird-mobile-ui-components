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
		RecentlyViewedViewAllComponent
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
		RecentlyViewedViewAllComponent
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
		RecentlyViewedViewAllComponent
	]
})
export class ComponentsModule { }
