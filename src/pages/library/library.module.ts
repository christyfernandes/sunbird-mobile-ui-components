import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { LibraryPage } from './library';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    LibraryPage,
  ],
  imports: [
    IonicPageModule.forChild(LibraryPage),
		IonicModule,
		BrowserModule,
  ],
})
export class LibraryPageModule {}
