import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LibraryPage } from '../pages/library/library';
import {ViewAllPage} from '../pages/view-all/view-all';
import {SearchResultsPage} from '../pages/search-results/search-results';
import {TocPage} from '../pages/toc/toc';
import {PlayerPage} from '../pages/player/player';
import {FooterPage} from '../pages/footer/footer';
import {ComponentsModule} from '../components/components.module';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LibraryPage,
    ViewAllPage,
    SearchResultsPage,
    TocPage,
    PlayerPage,
    FooterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LibraryPage,
    ViewAllPage,
    SearchResultsPage,
    TocPage,
    PlayerPage,
    FooterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
