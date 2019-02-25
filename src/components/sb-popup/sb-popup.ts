import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular/navigation/view-controller';

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

  constructor(public viewCtrl: ViewController) {
    this.text = 'Hello World';
  }

  closePopover(){
    this.viewCtrl.dismiss();
  }

}
