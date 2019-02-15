import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { GradeFilterComponent } from './grade-filter/grade-filter';
import { LibraryFilterPage } from './library-filter/library-filter';
import { AppHeaderComponent } from './app-header/app-header';
import { RecentlyViewedComponent } from './recently-viewed/recently-viewed';
import { AppFooterComponent } from './app-footer/app-footer';
import { LibraryComponent } from './library/library';
import { TextbookCardComponent } from '../components/textbook-card/textbook-card'
import { RecentlyViewedViewAllComponent } from './recently-viewed-view-all/recently-viewed-view-all';

@NgModule({
	declarations: [GradeFilterComponent,
		LibraryFilterPage,
		AppHeaderComponent,
		RecentlyViewedComponent,
		AppFooterComponent,
		LibraryComponent,
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
		TextbookCardComponent,
		RecentlyViewedViewAllComponent
	]
})
export class ComponentsModule { }
