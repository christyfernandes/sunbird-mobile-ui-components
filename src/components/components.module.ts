import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { GradeFilterComponent } from './grade-filter/grade-filter';
import { LibraryFilterPage} from './library-filter/library-filter';
import { AppHeaderComponent} from './app-header/app-header';
import { RecentlyViewedComponent } from './recently-viewed/recently-viewed';

@NgModule({
	declarations: [GradeFilterComponent,
		LibraryFilterPage,
		AppHeaderComponent,
    RecentlyViewedComponent
	],
	imports: [
		IonicPageModule,
		IonicModule
	],
	exports: [GradeFilterComponent,
		LibraryFilterPage,
		AppHeaderComponent,
    RecentlyViewedComponent
	],
	entryComponents: [
		GradeFilterComponent,
		LibraryFilterPage,
		AppHeaderComponent,
		RecentlyViewedComponent
	]
})
export class ComponentsModule {}
