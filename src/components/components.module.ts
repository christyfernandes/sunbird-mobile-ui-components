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

@NgModule({
	declarations: [GradeFilterComponent,
		LibraryFilterPage,
		AppHeaderComponent,
		RecentlyViewedComponent,
		AppFooterComponent,
		LibraryComponent,
    SubjectCardsComponent
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
    SubjectCardsComponent
	],
	entryComponents: [
		GradeFilterComponent,
		LibraryFilterPage,
		AppHeaderComponent,
		RecentlyViewedComponent,
		AppFooterComponent,
		LibraryComponent,
		SubjectCardsComponent
	]
})
export class ComponentsModule { }
