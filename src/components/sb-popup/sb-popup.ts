import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import {
  NavParams
} from 'ionic-angular';

/**
 * Generated class for the SbPopupComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sb-popup',
  templateUrl: 'sb-popup.html'
})
export class SbPopupComponent {

  text: string;

  constructor(public viewCtrl: ViewController, public navParams:NavParams) {
    console.log(this.navParams.data);
    console.log(this.navParams.get('sbPopoverContent'));
  }

  closePopover(){
    this.viewCtrl.dismiss();
  }

}
