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
  sbPopoverHeading:any;
  sbPopoverMainTitle:any;
  sbPopoverContent:any;
  actionsButtons:any;
  icon:any;
  metaInfo:any;
  


  constructor(public viewCtrl: ViewController, public navParams:NavParams) {
    this.actionsButtons = this.navParams.get('actionsButtons');
    this.icon = this.navParams.get('icon');
    this.metaInfo = this.navParams.get('metaInfo');
    this.sbPopoverContent = this.navParams.get('sbPopoverContent');
    this.sbPopoverHeading = this.navParams.get('sbPopoverHeading');
    this.sbPopoverMainTitle = this.navParams.get('sbPopoverMainTitle');
    console.log('this.actionsButtons', this.actionsButtons);
    console.log('this.sbPopoverMainTitle',this.sbPopoverMainTitle);
  }

  closePopover(){
    this.viewCtrl.dismiss();
  }

}
