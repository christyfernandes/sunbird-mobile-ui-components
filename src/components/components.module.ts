import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { GradeFilterComponent } from './grade-filter/grade-filter';
import { LibraryFilterPage } from './library-filter/library-filter';
import { AppHeaderComponent } from './app-header/app-header';
import { RecentlyViewedComponent } from './recently-viewed/recently-viewed';
import { AppFooterComponent } from './app-footer/app-footer';
import { LibraryComponent } from './library/library';
import { SubjectCardsComponent } from './subject-cards/subject-cards';
import { CollectionPageComponent } from './collection-page/collection-page';
import { OfflineToastComponent } from './offline-toast/offline-toast';
import { ContentInfoComponent } from './content-info/content-info';
import { DetailCardComponent } from './detail-card/detail-card';

@NgModule({
	declarations: [GradeFilterComponent,
		LibraryFilterPage,
		AppHeaderComponent,
		RecentlyViewedComponent,
		AppFooterComponent,
		LibraryComponent,
    SubjectCardsComponent,
    RecentlyViewedComponent,
    CollectionPageComponent,
    OfflineToastComponent,
    ContentInfoComponent,
    DetailCardComponent
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
    SubjectCardsComponent,
    RecentlyViewedComponent,
    CollectionPageComponent,
    OfflineToastComponent,
    ContentInfoComponent,
    DetailCardComponent
	],
	entryComponents: [
		GradeFilterComponent,
		LibraryFilterPage,
		AppHeaderComponent,
		RecentlyViewedComponent,
		AppFooterComponent,
		LibraryComponent,
		SubjectCardsComponent,
		CollectionPageComponent,
		OfflineToastComponent,
		ContentInfoComponent,
		DetailCardComponent
	]
})
export class ComponentsModule { }
