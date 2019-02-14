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
  code = `<div class="sb-slider-pills-container sb-medium-pills-container">
        <div class="pill active">English medium</div>
        <div class="pill">English medium</div>
        <div class="pill">English medium</div>
        <div class="pill">English medium</div>
        <div class="pill">English medium</div>
        <div class="pill">English medium</div>
        <div class="pill">English medium</div>
        <div class="pill">English medium</div>
      </div>`;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryFilterPage');
  }

  

}
