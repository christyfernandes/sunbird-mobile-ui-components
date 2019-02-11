import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LibraryFilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-library-filter',
  templateUrl: 'library-filter.html',
})
export class LibraryFilterPage {
  code = `<div class="horizontal-scroll PTB20 PLR16px bg-white">
            <button ion-button class="medium-pill active">English medium</button>
            <button ion-button class="medium-pill">Kannada Medium</button>
            <button ion-button class="medium-pill">Kannada Medium</button>
            <button ion-button class="medium-pill">Kannada Medium</button>
          </div>`;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryFilterPage');
  }

  

}
