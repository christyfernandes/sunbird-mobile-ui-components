import { Component } from '@angular/core';
import {
  PopoverController
} from 'ionic-angular';
import {SbPopupComponent} from '../sb-popup/sb-popup'

/**
 * Generated class for the PopupsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'popups',
  templateUrl: 'popups.html'
})
export class PopupsComponent {

  text: string;

  constructor(private popoverCtrl: PopoverController,) {
    console.log('Hello PopupsComponent Component');
    this.text = 'Hello World';
  }


  openPopupInfo(event) {
    const popover = this.popoverCtrl.create(SbPopupComponent, {}, {
      cssClass: 'sb-popover info',
      
    });
    popover.present({
      ev: event
    });
    popover.onDidDismiss((canDownload: boolean = false) => {
     console.log('dismissed');
    });
  }

  
openPopupDanger(event){
  const popover = this.popoverCtrl.create(SbPopupComponent, {}, {
      cssClass: 'sb-popover danger',
      
    });
    popover.present({
      ev: event
    });
    popover.onDidDismiss((canDownload: boolean = false) => {
     console.log('dismissed');
    });
}
openPopupWarning(event){
  const popover = this.popoverCtrl.create(SbPopupComponent, {}, {
      cssClass: 'sb-popover warning',
      
    });
    popover.present({
      ev: event
    });
    popover.onDidDismiss((canDownload: boolean = false) => {
     console.log('dismissed');
    });
}

}
